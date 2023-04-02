import { Form, Input } from "antd";

import styles from "./FormItem.module.scss";

interface IProps {
  name?: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "number";
  message?: string;
  isPassword?: boolean;
  isTextArea?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function FormItem(props: IProps) {
  const { name, label, placeholder, required, type, message, isPassword, isTextArea, onChange } =
    props;

  return (
    <div className={styles.formItem}>
      {!isPassword && !isTextArea && (
        <Form.Item
          name={[name]}
          label={label ? label : undefined}
          validateTrigger="onSubmit"
          rules={[
            {
              required,
              type,
              message
            }
          ]}>
          <Input placeholder={placeholder} className={styles.input} onChange={onChange} />
        </Form.Item>
      )}

      {isPassword && (
        <Form.Item
          name={[name]}
          label={label ? label : undefined}
          validateTrigger="onSubmit"
          rules={[
            {
              required,
              type,
              message
            }
          ]}>
          <Input.Password placeholder={placeholder} className={styles.input} />
        </Form.Item>
      )}

      {isTextArea && (
        <Form.Item
          name={[name]}
          label={label ? label : undefined}
          validateTrigger="onSubmit"
          rules={[
            {
              required,
              type,
              message
            }
          ]}>
          <Input.TextArea
            autoSize={{ minRows: 1, maxRows: 3 }}
            maxLength={350}
            placeholder={placeholder}
            className={styles.input}
            onChange={onChange}
          />
        </Form.Item>
      )}
    </div>
  );
}
