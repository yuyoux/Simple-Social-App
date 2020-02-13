import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_Address } from "../common/config";
import {
  FormGroup,
  Label,
  Input,
  Form,
  Card,
  Row,
  Col,
  CardBody,
  Button
} from "reactstrap";
import CommentCard from "../components/CommentCard";

const PostComment = props => {
  const [commentList, setCommentList] = useState([]);
  const [newComent, setNewComment] = useState("");
  const [id, setId] = useState(props.match.params.id);

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

  useEffect(() => {
    getCommentList(id);
  }, [id]);

  return (
    <React.Fragment>
      <Form>
        <FormGroup>
          <Label for="exampleText">Leave your comment:</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Form>
      <Row className="align-self-end ">
        <Col xs="12" className="text-right">
          <Button
            className="home__button"
            size="sm"
            // onClick={() => {
            //   props.history.push({
            //     pathname: `/posts/comment/${id}`,
            //     state: {
            //       selected_id: id
            //     }
            //   });
            // }}
          >
            COMMENT
          </Button>
        </Col>
      </Row>
      <p>comments:</p>
      {commentList.map((comment, index) => (
        <div key={comment.id}>
          <CommentCard comment={comment}></CommentCard>
        </div>
      ))}
    </React.Fragment>
  );
};

export default PostComment;
