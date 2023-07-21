import PropTypes from "prop-types";
import InfoBlock from "../ui/Blocks/InfoBlock"
import {COLOR_LILA, COLOR_AQUA} from "../ui/generalConstant"
const columns = [
    {
      title: 'Agency name',
      dataIndex: 'agency',
      render: (title, record, rowIndex) => (
        <div 
        className="flex justify-between items-center"
        >
        <span 
          style={{
            width: "9px", 
            height: "11px",
            marginRight: "6px",
            backgroundColor: rowIndex % 2 === 1 ? COLOR_AQUA : COLOR_LILA,
          }}>
        </span>
        <span>
          {title}
        </span>
      </div>
      ),
    },
    {
      title: 'Area in m²',
      dataIndex: 'area',
    },
  ];
const mockExtractor = (input) => {
    return [
        {
          key: '1',
          agency: '12345678910',
          area: 12345678910,
        },
        {
          key: '2',
          agency: '12345678910',
          area: 12345678910,
        },
        {
          key: '3',
          agency: '12345678910',
          area: 12345678910,
        },
        {
          key: '4',
          agency: '12345678910',
          area: 12345678910,
        },
      ];
  };
const Agencies = ({
    dataIn,
    extractor = mockExtractor,
    width = 231,
    height = 188,
    style,
}) => {
    const data = extractor(dataIn);

    return <div>
        <InfoBlock columns={columns} data={data}/>
    </div>;
}

Agencies.propTypes = {
/**
   * The current main data object that is being used
   */
dataIn: PropTypes.array,
/**
 * The extractor function that is used to transform the dataIn object into the data object
 */
extractor: PropTypes.func,
/**
 * The width of the component
 * @default 300
 * @type number
 * @required false
 * @control input
 * @group size
 *
 **/
width: PropTypes.number,

/**
 * The height of the component
 *
 * @default 300
 * @type number
 * @required false
 * @control input
 *
 **/

height: PropTypes.number,
};


export default Agencies;