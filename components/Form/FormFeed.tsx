import { useCallback } from "react";
import { Form, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import { MdSend } from "react-icons/md";

import FormItem from "components/Form/FormItem";

import styles from "./FormFeed.module.scss";

interface IProps {
  name: string;
  placeholder: string;
  message: string;
}

export default function FormFeed({ name, placeholder, message }: IProps): JSX.Element {
  const [form] = useForm(); //Initialize Form instance

  const onFinish = useCallback(
    async (values: any) => {
      console.log("newPost", values);
    },
    [form]
  );

  return (
    <Form className={styles.form} form={form} onFinish={onFinish}>
      <FormItem name={name} placeholder={placeholder} message={message} isTextArea required />

      {/* <Form.Item> */}
      <Button className={styles.btn} htmlType="submit">
        <MdSend />
      </Button>
      {/* </Form.Item> */}
    </Form>
  );
}
