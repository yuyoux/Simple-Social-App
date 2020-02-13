import React from "react";
import { Jumbotron, Button, Row, Col } from "reactstrap";
import "./Home.sass";
import { withRouter } from "react-router";

const Home = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello! Welcome to BTC Social.</h1>
        <Row className="justify-content-center mt-4">
          <Col xs="2" className="text-left">
            <Button
              className="home__button"
              size="lg"
              onClick={() => {
                props.history.push({
                  pathname: "/posts"
                });
              }}
            >
              SHOW
            </Button>
          </Col>
          <Col xs="2" className="text-left">
            <Button
              className="home__button"
              size="lg"
              onClick={() => {
                props.history.push({
                  pathname: "/createpost"
                });
              }}
            >
              CREATE
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default withRouter(Home);
