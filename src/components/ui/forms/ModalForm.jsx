import { useState, useEffect } from "react";
import { Button, Row, Col, Form, Input } from "antd";
import Labelform from "./Labelform";

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const ModalForm = ({
  fields,
  size = 24,
  buttonPosition = { justifyContent: "center" },
}) => {
  const [form] = Form.useForm();
  const inputStyle = {
    border: "1px solid #D9D9D9",
    borderRadius: "2px",
    padding: "5px 8px",
    textTransform: "lowercase",
    fontWeight: "normal",
  };

  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Row gutter={12}>
        {fields.map((i) => (
          <Col span={size} key={i.title}>
            <Form.Item
              name={i.title}
              label={<Labelform name={i.title} />}
              rules={i.rules}
            >
              <Input style={inputStyle} placeholder={`Type ${i.title}...`} />
            </Form.Item>
          </Col>
        ))}
      </Row>
      <Form.Item style={{ margin: "10px" }}>
        <div className="flex items-center" style={buttonPosition}>
          <Button type="primary" ghost htmlType="reset" className="mr-4">
            Cancel
          </Button>
          <SubmitButton form={form} />
        </div>
      </Form.Item>
    </Form>
  );
};

export default ModalForm;
