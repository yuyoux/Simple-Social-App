import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_Address } from "../common/config";
import PostCard from "../components/PostCard";
import { withRouter } from "react-router";
import { Spinner } from "reactstrap";
import "./PostList.sass";

const PostList = props => {
  const [postlist, setPostlist] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const getPostList = async () => {
    await axios({
      url: API_Address + "/posts",
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        setPostlist(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <React.Fragment>
      {postlist.length !== 0 ? (
        postlist.map((post, index) => (
          <div
            key={post.id}
            onClick={() => {
              setSelectedPost(post.id);
            }}
          >
            <PostCard
              post={post}
              selectedPost={selectedPost}
              props={props}
            ></PostCard>
          </div>
        ))
      ) : (
        <div className="centered-spinner">
          <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(PostList);
