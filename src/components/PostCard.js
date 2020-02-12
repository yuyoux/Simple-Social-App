import React from "react";
import { Card, Row, Col, CardBody } from "reactstrap";
import "./PostCard.scss";
import moment from "moment";

const formatDate = date => {
  return moment(date)
    .format("DD-MMM-YYYY")
    .toUpperCase();
};

const PostCard = ({ post, selectedPost }) => {
  return (
    <Card className="card__wrapper">
      <CardBody
      // className={selectedPolicyList.includes(id) ? "card__active" : ""}
      >
        <Row>
          <Col xs="12" xl="8" className="text-left">
            <Row>
              <Col xs="1" className="card__icon">
                {/* <img
                  src={selectedPolicyList.includes(id) ? IconActive32 : Icon32}
                  alt="active icon"
                  data-testid="svg"
                /> */}
              </Col>
              <Col xs="11" md="9" xl="11" className="text-left">
                <Row>
                  <Col xs="12" className="text-left card__policytitle">
                    {/* {title} */}
                  </Col>
                  <Col xs="12" className="text-left card__policysubtitle">
                    {/* {id + " | " + description} */}
                  </Col>
                </Row>
              </Col>
              <Col
                md="2"
                className="text-right logo__tablet align-self-cente pl-0"
              >
                {/* <img width={109} height={57} src={partner.logo} alt="logo" /> */}
              </Col>
            </Row>
            <hr className="card__divider" />
            <Row>
              <Col xs="12" className="text-left">
                <Row>
                  <Col
                    xs="3"
                    md="2"
                    className="border-right pr-0 card__metacol"
                  >
                    <Row>
                      <Col xs="12" className="card__metatitle ">
                        {/* {formatDate(payment_date)} */}
                      </Col>
                      <Col xs="12" className="card__metasubtitle">
                        Payment date
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="8" md="4" className="pr-0 card__metalongcol">
                    <Row>
                      <Col xs="12" className="card__metatitle text-justify">
                        {/* {status === "active"
                          ? formatDate(coverage_start_date) +
                            " to " +
                            formatDate(coverage_end_date)
                          : formatDate(coverage_start_date)} */}
                      </Col>
                      <Col xs="6" className="card__metasubtitle">
                        {/* {status === "active"
                          ? "Coverage dates"
                          : "Date shipped"} */}
                      </Col>
                      {/* <Col
                        xs="5"
                        className={
                          status === "active"
                            ? "card__metaactive text-right"
                            : "card__metaexpired text-right"
                        }
                      >
                        {status}
                        <span className="card__metapoint"> ●</span>
                      </Col> */}
                    </Row>
                  </Col>
                  {/* <Col xs="3" md="2" className="pr-0 card__metacol">
                    <Row>
                      <Col className="card__metatitle">{premium_formatted}</Col>
                      <Col className="card__metasubtitle">Price/Premium</Col>
                    </Row>
                  </Col> */}
                  {/* {renewal !== null ? (
                    <Col xs="3" md="2" className="border-left card__metacol">
                      <Row>
                        <Col xs="12" className="card__metatitle">
                          {renewal.charAt(0).toUpperCase() + renewal.slice(1)}
                        </Col>
                        <Col xs="12" className="card__metasubtitle">
                          Renewal
                        </Col>
                      </Row>
                    </Col>
                  ) : null} */}
                  <Col
                    xs="2"
                    className="text-right logo__phone align-self-cente"
                  >
                    {/* <img width={84} height={44} src={partner.logo} alt="logo" /> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            lg="4"
            xl="4"
            className="text-right logo__desktop align-self-center"
          >
            {/* <img src={partner.logo} width={197} height={104} alt="logo" /> */}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PostCard;
