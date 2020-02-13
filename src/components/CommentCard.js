import React from "react";
import { Card, Row, Col, CardBody } from "reactstrap";
import "./CommentCard.sass";
import moment from "moment";

const formatDate = date => {
  return moment(date)
    .format("DD-MMM-YYYY")
    .toUpperCase();
};

const PostCard = ({ comment }) => {
  const { name, email, body } = comment;
  return (
    <Card className="commentcard__wrapper">
      <CardBody>
        <Row>
          <Col xs="12" className="text-left">
            <Row>
              <Col xs="12" className="text-left commnetcard__posttitle">
                {name}
              </Col>
            </Row>
            <hr className="card__divider" />
            <Row>
              <Col xs="12" className="text-left">
                <Row className="justify-content-between">
                  <Col xs="5" className="commentcard__metatitle">
                    {email}
                  </Col>
                  <Col xs="5" className="commentcard__metatitle text-right">
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
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PostCard;
