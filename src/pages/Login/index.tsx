import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function LoginForm() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log(`loading`, values);
    try {
      setLoading(true);
      // 调用登录接口
      // await loginService(values);
      message.success("登录成功");
      navigate("/sub-vue-app", {});
    } catch (error) {
      message.error("登录失败");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  };

  return (
    <div className="login-wrap">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: "请输入用户名" },
            // {
            //   pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            //   message: "4-16位字母/数字/下划线",
            // },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="admin/user" />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            { min: 6, message: "密码长度至少6位" },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="******" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            icon={!loading && <LockOutlined />}
          >
            {loading ? "登录中..." : "立即登录"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
