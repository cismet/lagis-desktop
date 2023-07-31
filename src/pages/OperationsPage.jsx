import React from "react";
import { Col, Row } from "antd";
import MockCard from "../components/mock/MockCard";
import Contracts from "../components/operations/Contracts";
import ContractData from "../components/operations/ContractData";
import CrossReferences from "../components/operations/CrossReferences";

const OperationsPage = ({
  width = "100%",
  height = "100%",
  inStory = false,
}) => {
  let storyStyle = {};
  if (inStory) {
    storyStyle = {
      // borderStyle: "dotted",
      borderWidth: "1px solid",
      background: "gray",
      padding: "4px",
    };
  }
  const firstRowStyle = { width: "100%", height: height * 0.5 - 16 };
  const secondRowStyle = { width: "100%", height: height * 0.5 - 16 };
  // const gutterStyle = [16, 16];
  const marginBottomStyle = { marginBottom: "25px" };
  return (
    <div
      style={{
        ...storyStyle,
        width,
        height,
        backgroundColor: "#F1F1F1",
      }}
    >
      <Row
        gutter={[16, 16]}
        style={{
          height: "50%",
          border: "4px solid blue",
          ...marginBottomStyle,
        }}
      >
        <Col span={24}>
          <Contracts height={firstRowStyle.height} />
        </Col>
      </Row>
      <Row gutter={[16, 48]} style={{ height: "50%", ...marginBottomStyle }}>
        <Col span={12}>
          <ContractData />
        </Col>
        <Col span={12}>
          <CrossReferences height={secondRowStyle.height} />
        </Col>
      </Row>
    </div>
  );
};

export default OperationsPage;
