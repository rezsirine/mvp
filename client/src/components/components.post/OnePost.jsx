import React, { useState } from "react";

// import CommentList from "../../component.user/componnent.comment/CommentList.jsx";
const OnePost = (props) => {
  console.log("props",props)
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="post">
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>{props.post.text}</h3>
          </div>
          <div className="post__headerDescription"></div>
        </div>

        <img src={props.post.image} alt="cruella" />

        <div className="post__footer">
          <i className="fa-regular fa-comment"></i>
          <i className="fa-solid fa-retweet"></i>
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>
      <div>
        {/* <CommentList
          createComment={props.createComment}
          deleteComment={props.deleteComment}
          comments={props.comments}
        /> */}
      </div>
      <div className="group_btn">
        <button id="btn" onClick={() => props.deletePost(props.post.id)}>
          Delete
        </button>

        <div>
          <div className="tweetbox">
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Do You Want to Update Your Post
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <input
                      className="form-control me-2"
                      onChange={(e) => setText(e.target.value)}
                      defaultValue={props.post.text}
                      placeholder="What's happening"
                      type="search"
                      aria-label="Search"
                    />
                    <label htmlFor="file">
                      <div className="image-crete">
                        <input
                          className="form-control me-2"
                          onChange={(e) => setImage(e.target.value)}
                          defaultValue={props.post.image}
                          placeholder="Link Your Image"
                          type="search"
                          aria-label="Search"
                        />
                        <span className="material-symbols-outlined">photo</span>
                      </div>
                    </label>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() =>
                        props.updatePost({ text, image })
                      }
                      style={{ backgroundColor: "#7885d3" }}
                    >
                      Update your post 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          id="btn"
          onClick={()=>{
            props.setPostId(props.post.id)
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{ cursor: "pointer" }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default OnePost;
