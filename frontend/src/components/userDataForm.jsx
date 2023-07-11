import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Select, Space } from "antd";

import { useMapContextCustom } from "../utils/Context";
import SearchWidget from "./SearchWidget";
import { getAddress, setUserAddress } from "../redux/sliceBasket";
import TotalCost from "./TotalCost";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 80,
      }}
    >
      <Option value="380">+380</Option>
    </Select>
  </Form.Item>
);

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const UserDataForm = ({ setUserData, streetRequired }) => {
  const address = useSelector(getAddress);

  const { setLatLon } = useMapContextCustom();

  const dispatch = useDispatch();

  const onFinish = (values) => {
    setUserData(values);
    dispatch(setUserAddress(address));
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 324,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          rules={[{ required: true }]}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item label="Address">
        <Space.Compact>
          <Form.Item
            name={["address", "countries"]}
            noStyle
            rules={[
              {
                required: true,
                message: "countries is required",
              },
            ]}
          >
            <Select placeholder="Select countries">
              <Option value="Ukraine">Ukraine</Option>
              <Option value="Native Ukraine">Native Ukraine</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={["address", "street"]}
            noStyle
            rules={[
              {
                required: streetRequired,
                message: "Street is address",
              },
            ]}
          >
            <SearchWidget setLatLon={setLatLon} />
          </Form.Item>
        </Space.Compact>
      </Form.Item>
      <TotalCost />
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserDataForm;
