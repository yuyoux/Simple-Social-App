import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_Address } from "../common/config";
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

const PostComment = props => {
  const [commentList, setCommentList] = useState([]);
  const [newComent, setNewComment] = useState("");
  const [id, setId] = useState(props.match.params.id);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const getCommentList = async id => {
    await axios({
      url: API_Address + `/posts/${id}/comments`,
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        setCommentList(res.data);
      })
      .catch(err => console.log(err));
  };

  const submuitComment = async () => {
    await axios({
      url: API_Address + `/posts/${id}/comments`,
      method: "post",
      data: {
        name: name,
        email: email,
        body: newComent
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        alert("Successfully added your comment.");
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCommentList(id);
  }, [id]);

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
          {loading ? (
            <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
          ) : (
            <Button
              className="home__button"
              size="sm"
              onClick={() => {
                setLoading(true);
                submuitComment();
              }}
            >
              COMMENT
            </Button>
          )}
        </Col>
      </Row>
      <p>comments:</p>
      {commentList.length !== 0 ? (
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
