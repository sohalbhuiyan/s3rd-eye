import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import myImage from "../../images/sohal.jpg";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
       <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={myImage} alt="" />
          <p>আমাদের প্রত্যেকেরই তৃতীয় একটি চোখ আছে। সেটা হচ্ছে মনের চোখ! বেশীরভাগ সময়েই আমরা সেটার ব্যবহার করি না। যার ফলে...</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <Link className="link" to={`/?cat=${c.name}`}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>

    </div>
  );
}

// https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg
