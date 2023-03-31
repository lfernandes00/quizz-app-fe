import { Button, Card } from "antd";
import { useCallback } from "react";
import { useForm } from "antd/lib/form/Form";
import Image from "next/image";
import { Form } from "antd";

import { posts } from "constants/home";
import FormItem from "components/Form/FormItem";
import CardPost from "components/Card/CardPost";

import styles from "styles/Home.module.scss";

export default function Home() {
  function PersonalInfo() {
    return <div className={styles.personalWrapper}>Personal Data</div>;
  }

  function Feed() {
    const [form] = useForm(); //Initialize Form instance

    const onFinish = useCallback(
      async (values: any) => {
        console.log("newPost", values);
      },
      [form]
    );

    return (
      <div className={styles.feedWrapper}>
        <div className={styles.newComment}>
          <div className={styles.cardWrapper}>
            <div className={styles.avatarWrapper}>
              <Image fill src={"/avatar.png"} alt={`avatar`} />
            </div>
            <Form className={styles.form} form={form} onFinish={onFinish}>
              <FormItem
                name="post"
                placeholder="What's going through your mind..."
                message="Post is required!"
                required
              />

              <Form.Item>
                <Button className={styles.btn} htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        {posts && posts.map(({ id, ...rest }) => <CardPost key={id} {...rest} />)}
      </div>
    );
  }

  function Activities() {
    return <div className={styles.activitiesWrapper}>Activities</div>;
  }

  return (
    <div className={styles.wrapper}>
      <PersonalInfo />
      <Feed />
      <Activities />
    </div>
  );
}
