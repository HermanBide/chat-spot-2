import React from "react";
import "./Single.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <a href="https://medium.com/@makesh-kumar/typescript-type-declaration-aka-d-ts-file-6c5c02dbc05f">
          <img
            className="singlePostImg"
            src="https://iili.io/6MzZt2.md.jpg"
            alt="6MzZt2.md.jpg"
            border="0"
          />
        </a>
        <h1 className="singlePostTitle">
          <div className="singlePostEdit">
            <FaEdit className="singlePostIcon" />
            <RiDeleteBin6Fill className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Makesh Kumar</b>
          </span>
          <span className="singlePostDate">1 day ago</span>
        </div>
        <p>
          If you have used typescript means, then you might have seen the beauty
          and the magic it does. The core part of typescript is to provide type
          support to javascript features, But how does typescript know these
          types, how does it knows the methods that are available on a
          particular class, object Let’s consider the below code snippet.
          <br />
          Type definitions for external libraries What if we are installing some
          third-party libraries (npm packages), how will typescript know the
          types of the methods/modules or whatever in that library? There are
          certain ways that help typescript in this case.
          <br />
          Custom declaration file What if both of the above ways are not
          feasible, neither the type declaration is bundled with the library nor
          the same is not available in the DefinitelyTyped repository? In this
          case, typescript will complain about missing type declaration file
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
