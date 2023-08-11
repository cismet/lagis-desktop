import PropTypes from "prop-types";
import InfoBlock from "../ui/Blocks/InfoBlock";
import ToggleModal from "../ui/control-board/ToggleModal";
import TableMock from "../ui/tables/TableMock";
import ModalForm from "../ui/forms/ModalForm";
import mockFoto from "../../assets/docksMock.png";
import { useState } from "react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Dateiname",
    dataIndex: "file",
    key: "file",
  },
  {
    title: "Beschreibung",
    dataIndex: "beschreibung",
    key: "beschreibung",
  },
  {
    title: "Vorschau",
    dataIndex: "vorschau",
    key: "vorschau",
    render: (image) => (
      <img src={image} alt="User" style={{ width: 80, height: 70 }} />
    ),
  },
];
const mockExtractor = (input) => {
  return [
    {
      key: "1",
      name: "1237563255",
      file: "Interdum.avi",
      beschreibung: "Lorem ipsum dolor sit amet",
      vorschau: mockFoto,
    },
    {
      key: "2",
      name: "1237563255",
      file: "Interdum.avi",
      beschreibung: "Lorem ipsum dolor sit amet",
      vorschau: mockFoto,
    },
    {
      key: "3",
      name: "1237563255",
      file: "Interdum.avi",
      beschreibung: "Lorem ipsum dolor sit amet",
      vorschau: mockFoto,
    },
    {
      key: "4",
      name: "1237563255",
      file: "Interdum.avi",
      beschreibung: "Lorem ipsum dolor sit amet",
      vorschau: mockFoto,
    },
  ];
};
const DmsBlock = ({
  dataIn,
  extractor = mockExtractor,
  width = 231,
  height = 188,
  style,
}) => {
  const [activeRow, setActiveRow] = useState({});

  const data = extractor(dataIn);
  const isStory = false;
  const storyStyle = { width, height, ...style };
  return (
    <div
      className="shadow-md"
      style={
        isStory
          ? storyStyle
          : { height: "100%", borderRadius: "6px", backgroundColor: "#FFFFFF" }
      }
    >
      <InfoBlock
        title="Dokumenten Management System"
        controlBar={
          <ToggleModal
            section="Kassenzeichen"
            content={
              <ModalForm
                fields={[
                  {
                    title: "Name",
                    value: activeRow.name,
                    rules: [{ required: true }],
                  },
                  {
                    title: "Dateiname",
                    value: activeRow.file,
                    rules: [{ required: true }],
                  },
                  {
                    title: "Beschreibung",
                    value: activeRow.beschreibung,
                    rules: [{ required: true }],
                  },
                ]}
                showFileUpload={true}
              />
            }
          />
        }
      >
        <TableMock columns={columns} data={data} activerow={setActiveRow} />
      </InfoBlock>
    </div>
  );
};

export default DmsBlock;
DmsBlock.propTypes = {
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
