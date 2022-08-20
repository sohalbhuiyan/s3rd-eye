
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  return (

    <div class="test">
    <section class="post container"> 
  <div class="post-box mobile">
  {post.photo && (
      <img className="post-img" src={PF + post.photo} alt="" />
      )}
 
    {/* <div class="profile">
      <img src={PF+user.profilePic} alt="" class="profile-img" />
      <span class="profile-name">{post.username}</span>
    </div> */}
 
    <div className="postCats"><h2 className="category">{
          post.categories.map(c=>(
            <span className="postCat">{c.name}</span>
          ))
        }
          </h2>
        </div>

<Link className="post-tittle" to={`/post/${post._id}`}>
        <span className="post-tittle">
            {post.title}
        </span>
        </Link>
     
        <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
    
        <p className="post-description">
        {post.desc}
      </p> 
    
  </div>
</section>
</div>
);
  }