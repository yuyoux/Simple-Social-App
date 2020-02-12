import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_Address } from "../common/config";
import PostCard from "../components/PostCard";

const PostList = () => {
  const [postlist, setPostlist] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const getPolicyList = async () => {
    await axios({
      url: API_Address,
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        setPostlist(res.data.policies);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPolicyList();
  }, []);

  return (
    <React.Fragment>
      {postlist.map((post, index) => (
        <div key={post.id} onClick={() => {}}>
          <PostCard policy={post} selectedPost={selectedPost}></PostCard>
        </div>
      ))}
    </React.Fragment>
  );
};

export default PostList;
