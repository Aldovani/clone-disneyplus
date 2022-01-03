import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { MdMovie, MdSearch } from "react-icons/md";
import { IoMdAdd } from "react-icons/io"; 
import { BsTvFill } from "react-icons/bs";

import { Container } from "./styles";

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isVisible = window.scrollY > 0;
      if (isVisible) {
        setIsVisible(isVisible);
      }
      else {
        setIsVisible(false);
        
      }
    });

    return () => document.removeEventListener("scroll", () => {});
  }, []);
  return (
    <Container className={isVisible ? "visible" : ""}>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
                alt="Logo Disney+"
              />
            </Link>
          </li>

          <li>
            <Link to="/">
              <AiFillHome size={"1.3rem"} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdSearch size={"1.3rem"} />
              <span>Pesquisa</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <IoMdAdd color="#fff" size={"1.3rem"}/>
              <span>Lista</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiFillStar  size={"1.3rem"}/>
              <span>Originals</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdMovie size={"1.3rem"}/>
              <span>Movies</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsTvFill size={"1.3rem"}/>
              <span>Series</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
