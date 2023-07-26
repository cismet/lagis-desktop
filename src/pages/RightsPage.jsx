import React from "react";
import Map from "../components/commons/Map";
import { Col, Row } from "antd";
import MockCard from "../components/mock/MockCard";
import Agencies from "../components/offices/Agencies";
import AdditionalRole from "../components/offices/AdditionalRole";
import Streetfronts from "../components/offices/Streetfronts";
import Notes from "../components/offices/Notes";
import RightsAndEncumbrances from "../components/rights/RightsAndEncumbrances";

const RightsPage = ({ width = "100%", height = "100%", inStory = false }) => {
  let storyStyle = {};
  if (inStory) {
    storyStyle = {
      borderStyle: "dotted",
      borderWidth: "1px solid",
      padding: "10px",
    };
  }
  const firstRowStyle = { width: "100%", height: height * 0.5 - 12 };
  const secondRowStyle = { width: "100%", height: height * 0.5 - 12 };
  const gutterStyle = [12, 12];
  const marginBottomStyle = { marginBottom: "12px" };
  return (
    <div style={{ ...storyStyle, width, height }}>
      <Row gutter={gutterStyle} style={{ height: "50%", ...marginBottomStyle }}>
        <Col span={24}>
          <Map width={"100%"} height={firstRowStyle.height} />
        </Col>
      </Row>

      <Row gutter={gutterStyle} style={{ height: "50%" }}>
        <Col span={24}>
          {/* <MockCard style={secondRowStyle} title="Additional Role" /> */}
          <RightsAndEncumbrances />
        </Col>
      </Row>
    </div>
  );
};

export default RightsPage;
