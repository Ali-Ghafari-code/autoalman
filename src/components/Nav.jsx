import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Nav = () => {
  const [menu, setmenu] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <>
      <header className="d-none d-sm-block">
        <div className="container">
          <div className="row">
            <section className="col-md-4 sec1">
              <MdOutlineShoppingBag />
              <Link to="/contact">
                <IoMdChatboxes />
              </Link>
              <FaInstagram />
            </section>
            <section className="col-md-8 sec2">
              <input type="text" placeholder="جستجو" />
              {username ? (
                <span className="username-display mx-auto"> {username}</span>
              ) : (
                <Link to="/login">
                  <FaUser />
                </Link>
              )}
            </section>
          </div>
        </div>
      </header>
      <nav>
        <div className="icon d-block d-sm-none">
          <MdOutlineShoppingBag />
          <input type="text" placeholder="...جستجو" />
        </div>
        <div
          className="menu"
          onClick={() => {
            setmenu(!menu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menu ? "open" : ""}>
          <li>
            <NavLink to="/about">درباره ما</NavLink>
          </li>
          <li>
            <NavLink to="/contact">تماس با ما</NavLink>
          </li>
          <li>
            <NavLink to="/carParts">محصولات</NavLink>
          </li>
          <li>
            <NavLink to="/home">خانه</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
