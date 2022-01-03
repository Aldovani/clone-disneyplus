const Users = require("../models/Users");
const Yup = require("yup");

module.exports = {
  async singUp(req, res) {
    const { email, password } = req.body;

    const userExists = await Users.findOne({ email: email });

    if (userExists) {
      return res.json({ error: "Email already exists" });
    }

    const data = {
      email,
      password,
    };
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string()
        .required()
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          "Password can only contain Latin letters."
        ),
    });

    await schema.validate(data, { abortEarly: false });
    const user = await Users.create(data);

    return res.status(200).json({message:"User created successfully", user});
  },

  async login(req, res) {
    const { email, password } = req.body;

    const user = await Users.findOne({ email: email });

    if (!user) {
      return res.json({ message: "user not found" });
    }

    if (user.password !== password) {
      return res.json({
        message: "password is wrong",
      });
    }
    return res.status(200).json({ user, message: "user found" });
  },
};
