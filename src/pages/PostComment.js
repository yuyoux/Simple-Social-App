import React, { useState, useEffect } from "react";
import {
  FormGroup,
  Label,
  Input,
  Form,
  Row,
  Col,
  Button,
  Spinner
} from "reactstrap";
import CommentCard from "../components/CommentCard";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList, submuitComment } from "../actions";

const PostComment = props => {
  const [newComent, setNewComment] = useState("");
  const [id, setId] = useState(props.match.params.id);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Redux
  const dispatch = useDispatch();
  const commentList = useSelector(state => state.post.commentlist);
  const flag = useSelector(state => state.post.flag);

  useEffect(() => {
    if (flag === "success") {
      alert("Successfully add your comment.");
    }
  }, [flag]);

  useEffect(() => {
    dispatch(
      getCommentList({
        data: {
          id
        }
      })
    );
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <Row>
        <Col xs="12" className="text-left">
          <Form>
            <FormGroup>
              <Label for="exampleText">Leave your comment:</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                onChange={e => {
                  setNewComment(e.target.value);
                }}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col xs="6" className="text-left">
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col xs="6" className="text-left">
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col xs="12" className="text-right">
          <Button
            className="home__button"
            size="sm"
            onClick={() => {
              dispatch(
                submuitComment({
                  data: {
                    id,
                    name,
                    email,
                    newComent
                  }
                })
              );
            }}
          >
            COMMENT
          </Button>
        </Col>
      </Row>
      <p>comments:</p>
      {commentList ? (
        commentList.map((comment, index) => (
          <div key={comment.id}>
            <CommentCard comment={comment}></CommentCard>
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

export default PostComment;
