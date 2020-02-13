import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input, Form, Row, Col, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { submuitPost } from "../actions";

const CreatePost = props => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  // Redux
  const dispatch = useDispatch();
  const flag = useSelector(state => state.post.flag);

  useEffect(() => {
    if (flag === "success") {
      alert("Successfully add your post.");
    }
  }, [flag]);

  return (
    <React.Fragment>
      <Row>
        <Col xs="12" className="text-left">
          <FormGroup>
            <Label for="exampleText">Your new post:</Label>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col xs="12" className="text-left">
          <Form>
            <FormGroup>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Thoughts..."
                onChange={e => {
                  setContent(e.target.value);
                }}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col xs="12" className="text-right">
          <Button
            className="home__button"
            size="sm"
            onClick={() => {
              dispatch(
                submuitPost({
                  data: {
                    content,
                    userId: 1,
                    title
                  }
                })
              );
            }}
          >
            Create
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CreatePost;
