import { useCallback } from "react";
import { useForm } from "antd/lib/form/Form";
import Image from "next/image";

import { posts } from "constants/home";
import CardPost from "components/Card/CardPost";
import FormFeed from "components/Form/FormFeed";

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
            <FormFeed
              name="post"
              placeholder="What's going through your mind..."
              message="Post is required!"
            />
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
