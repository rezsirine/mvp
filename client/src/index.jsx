import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import ListPost from "./components/components.post/ListPost.jsx";
import Creatpost from "./components/components.post/Creatpost.jsx";
import Sign from "./component.user/Sign.jsx";


const App = () => {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState("authenticate");
  const [postId, setPostId] = useState(0);

  
  const signUp = async (obj, e) => {
    try {
      const response = await axios.post("/api/user/signUp", obj);
      // console.log(response.data);
      fetch();
      setView("allPosts");
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (email) => {
    // console.log(email);
    try {
      const response = await axios.get(`/api/user/signIn${email}`);

      // console.log(response.data);

      fetch();
      setView("allPosts");
    } catch (error) {
      console.log(error);
    }
  };

  const fetch = async () => {
    try {
      const response = await axios.get("/api/post/getAll");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // const fetchComment = async () => {
  //   try {
  //     const response = await axios.get("/api/comment/getAll");
  //     // console.log(response.data);
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    fetch();
    // fetchComment()
  }, []);

  const createPost = async (obj) => {
    console.log(obj);
    try {
      const response = await axios.post("/api/post/createPost", obj);
      setComments(response.data);
      
      setView("allPosts");
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`/api/post/${id}`);
      console.log(response.data);

      fetch();
    } catch (err) {
      console.log(err);
    }
  };

  const updatePost = async (obj) => {
    console.log("obj: ", obj, "id: ", postId);
    try {
      const response = await axios.put(`/api/post/${postId}`, obj);
      console.log(response.data);
      fetch();
    } catch (err) {
      console.log(err);
    }
  };
  const search = async (text) => {
    console.log(obj);
    try {
      const response = await axios.get(`/api/post/${text}`);
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };


  const changeView = (newView) => {
    setView(newView);
  };
  

  const renderView = () => {
    
    if (view === "allPosts") {
      
      
      return(<div>
        <Creatpost createPost={createPost} />
         <ListPost
          posts={posts}
          deletePost={deletePost}
          updatePost={updatePost}
          setPostId={setPostId}
          
          search={search}
          setView={setView}
         
        />
       
        </div>
        )
       
    
    }
    if (view === "authenticate") {
      console.log("Rendering authenticate view"); 
      return <Sign signUp={signUp} signIn={signIn} />;
    }
   
  };
  return (
    <div>
      <div>{renderView()}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
