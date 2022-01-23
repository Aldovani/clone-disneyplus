import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { MdMovie, MdSearch } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { BsTvFill } from "react-icons/bs";

import { Container, ContainerLinks, ContainerMenuUser, MenuUser } from "./styles";
import { AuthContext } from "../../../../context/AuthContext";

export const Header: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isVisible = window.scrollY > 0;
      if (isVisible) {
        setIsVisible(isVisible);
      } else {
        setIsVisible(false);
      }
    });

    return () => document.removeEventListener("scroll", () => {});
  }, []);
  return (
    <Container className={isVisible ? "visible" : ""}>
      <nav>
        <ContainerLinks>
          <Link to="/">
            <img
              src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
              alt="Logo Disney+"
            />
          </Link>

          <ul>
            <li>
              <Link to="/home">
                <AiFillHome size={"1.3rem"} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <MdSearch size={"1.3rem"} />
                <span>Pesquisa</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <IoMdAdd color="#fff" size={"1.3rem"} />
                <span>Lista</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <AiFillStar size={"1.3rem"} />
                <span>Originals</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <MdMovie size={"1.3rem"} />
                <span>Movies</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <BsTvFill size={"1.3rem"} />
                <span>Series</span>
              </Link>
            </li>
          </ul>
        </ContainerLinks>

        <ContainerMenuUser
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <MenuUser>
            <h1>{user?.userName.charAt(0).toUpperCase()}</h1>
          </MenuUser>

          <div className={`options ${showMenu ? "show" : ""}`}>
            <button onClick={signOut}>Sing out</button>
          </div>
        </ContainerMenuUser>
      </nav>
    </Container>
  );
};
