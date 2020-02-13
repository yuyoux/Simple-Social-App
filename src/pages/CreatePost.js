import React, { useState } from "react";
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
  Spinner,
  Card
} from "reactstrap";

const CreatePost = props => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const submuitPost = async () => {
    await axios({
      url: API_Address + "/posts",
      method: "post",
      data: {
        body: content,
        title: title,
        userId: 1
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        alert("Successfully created your new post.");
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

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
          {loading ? (
            <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
          ) : (
            <Button
              className="home__button"
              size="sm"
              onClick={() => {
                setLoading(true);
                submuitPost();
              }}
            >
              Create
            </Button>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CreatePost;
