const Users = require("../models/Users");
const Yup = require("yup");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createUserToken = async (user, code, req, res) => {
  const token = signToken(user._id);

  let cookieDateExpires = new Date();
  cookieDateExpires.setDate(cookieDateExpires.getDate() + 30);

  user.password = undefined;
  res.status(code).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

module.exports = {
  async registerUser(req, res) {
    const { email, password, userName } = req.body;

    const userExists = await Users.findOne({ email: email.toLowerCase() });

    if (userExists) {
      return res.json(
        { errors: { email: "Email already exists" } });
    }

    const data = {
      email,
      password,
      userName,
    };
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string()
        .required()
        .min(6, "Password is too short - should be 6 chars minimum."),
      userName: Yup.string().required().min(4),
    });

    await schema.validate(data, { abortEarly: false });
    const user = await Users.create(data);
    createUserToken(user, 201, req, res);
  },

  async loginUser(req, res) {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });

    if (!user || user.password !== password) {
      return res.json({ message: "email or password incorrect" });
    }
    user.password = undefined;

    createUserToken(user, 200, req, res);
  },

  async checkUser(req, res, next) {
    let currentUser;
    if (req.body.token) {
      const token = req.body.token;
      const decoded = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET
      );
      currentUser = await Users.findById(decoded.id);
    } else {
      currentUser = null;
    }

    currentUser.password = undefined;

    res.status(200).send({ currentUser });
  },
};
