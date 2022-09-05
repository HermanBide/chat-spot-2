import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <a href="https://medium.com/@makesh-kumar/typescript-type-declaration-aka-d-ts-file-6c5c02dbc05f">
        <img
          className="postImg"
          src="https://iili.io/6MzZt2.md.jpg"
          alt="6MzZt2.md.jpg"
          border="0"
        />
      </a>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Tech</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          {" "}
          Typescript — Type declaration aka d.ts file
        </span>
        <hr />
        <span className="postDate">Sep 4</span>
      </div>
      <p className="postDesc">
        What are type declaration files? Type declaration files are the files
        with d.ts extension, where types were declared via interface or type.
        These declaration files have no implementations. They only contain type
        information and have a .d.ts file extension.
      </p>
    </div>
  );
};

export default Post;
