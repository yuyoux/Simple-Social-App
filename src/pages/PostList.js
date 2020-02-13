import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { withRouter } from "react-router";
import { Spinner } from "reactstrap";
import "./PostList.sass";
import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "../actions";

const PostList = props => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Redux
  const dispatch = useDispatch();
  const postlist = useSelector(state => state.post.postlist);

  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  return (
    <React.Fragment>
      {postlist ? (
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
