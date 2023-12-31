import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import TopicMapComponent from "react-cismap/topicmaps/TopicMapComponent.js";
import "react-cismap/topicMaps.css";
import "leaflet/dist/leaflet.css";
import { Card } from "antd";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const mockExtractor = (input) => {
  return {
    homeCenter: [51.27225612927373, 7.199918031692506],
    homeZoom: 16,
  };
};

const Map = ({
  dataIn,
  extractor = mockExtractor,
  width = 400,
  height = 500,
}) => {
  const data = extractor(dataIn);
  const padding = 5;
  const headHeight = 37;
  return (
    <Card
      size="small"
      hoverable={false}
      title={
        <span>
          <FontAwesomeIcon icon={faBars} /> Map
        </span>
      }
      style={{
        width: width,
        height: height,
      }}
      bodyStyle={{ padding }}
      headStyle={{ backgroundColor: "white" }}
      type="inner"
    >
      <TopicMapContextProvider appKey="lagis-online.map">
        <TopicMapComponent
          mapStyle={{
            width: width - 2 * padding,
            height: height - 2 * padding - headHeight,
          }}
          homeZoom={data.homeZoom}
          homeCenter={data.homeCenter}
          gazData={[]}
          gazetteerSearchControl={false}
          hamburgerMenu={false}
          fullScreenControl={false}
        ></TopicMapComponent>
      </TopicMapContextProvider>
    </Card>
  );
};
export default Map;

Map.propTypes = {
  /**
   * The width of the map
   */
  width: PropTypes.number,

  /**
   * The height of the map
   */
  height: PropTypes.number,

  /**
   * The current main data object that is being used
   */
  dataIn: PropTypes.object,
  /**
   * The extractor function that is used to transform the dataIn object into the data object
   */
  extractor: PropTypes.func,

  /**
   * The style of the map
   */
  mapStyle: PropTypes.object,
};
