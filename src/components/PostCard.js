import React from "react";
import { Card, Row, Col, CardBody, Button } from "reactstrap";
import "./PostCard.sass";
import moment from "moment";

const formatDate = date => {
  return moment(date)
    .format("DD-MMM-YYYY")
    .toUpperCase();
};

const PostCard = ({ post, selectedPost, props }) => {
  const { title, id, body, userId } = post;
  return (
    <Card className="card__wrapper">
      <CardBody className={id === selectedPost ? "card__active" : ""}>
        <Row>
          <Col xs="12" className="text-left">
            <Row>
              <Col xs="12" className="text-left card__posttitle">
                {title}
              </Col>
            </Row>
            <hr className="card__divider" />
            <Row>
              <Col xs="12" className="text-left">
                <Row className="justify-content-between">
                  <Col xs="2" className="card__metatitle">
                    {userId}
                  </Col>
                  <Col xs="5" className="card__metatitle text-right">
                    {formatDate()}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="text-left mt-3 ">
                {body}
              </Col>
            </Row>
            <Row className="align-self-end">
              <Col xs="12" className="mt-3 text-right">
                <Button
                  className="home__button"
                  size="sm"
                  onClick={() => {
                    props.history.push({
                      pathname: `/posts/comment/${id}`,
                      state: {
                        selected_id: id
                      }
                    });
                  }}
                >
                  COMMENT
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PostCard;
