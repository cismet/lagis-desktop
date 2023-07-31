import PropTypes from "prop-types";
import InfoBlock from "../ui/Blocks/InfoBlock";
import ToggleModal from "../ui/control-board/ToggleModal";
import TableMock from "../ui/tables/TableMock";
import ModalForm from "../ui/forms/ModalForm";
import { EuroCircleOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
const columns = [
  {
    title: "Anlageklasse",
    dataIndex: "anlageklasse",
  },
  {
    title: "Summe",
    dataIndex: "summe",
  },
];
const mockExtractor = (input) => {
  return [
    {
      key: "1",
      anlageklasse: "12345678910",
      summe: "2609.10 €",
    },
    {
      key: "2",
      anlageklasse: "12345678910",
      summe: "2609.10 €",
    },
    {
      key: "3",
      anlageklasse: "12345678910",
      summe: "2609.10 €",
    },
    {
      key: "4",
      anlageklasse: "12345678910",
      summe: "2609.10 €",
    },
  ];
};
const NFKOverwie = ({
  dataIn,
  extractor = mockExtractor,
  width = 231,
  height = 188,
  style,
}) => {
  const data = extractor(dataIn);
  const isStory = false;
  const storyStyle = { width, height, ...style };
  return (
    <div
      style={
        isStory
          ? storyStyle
          : {
              height: `${height}px`,
              borderRadius: "6px",
              backgroundColor: "white",
            }
      }
    >
      <InfoBlock
        title="Nutzung"
        titleAction={
          <Tag
            bordered={false}
            color="blue"
            style={{ padding: "0.3rem 0.8rem" }}
          >
            Stille Reserve: 40.000 €
          </Tag>
        }
        controlBar={
          <ToggleModal
            section="Nutzung"
            name="NKF Overview"
            content={
              <ModalForm
                fields={[
                  { title: "Anlageklasse", rules: [{ required: true }] },
                  { title: "Summe", rules: [{ required: true }] },
                ]}
                size={24}
                buttonPosition={{ justifyContent: "center" }}
              />
            }
          >
            <div className="mr-8 Button">
              <Button type="primary" icon={<EuroCircleOutlined />}>
                Buchen
              </Button>
            </div>
          </ToggleModal>
        }
      >
        <TableMock columns={columns} data={data} pagination={false} />
      </InfoBlock>
    </div>
  );
};

export default NFKOverwie;
NFKOverwie.propTypes = {
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