import { Card } from "antd";
import Image from "next/image";

import { posts } from "constants/home";
import CardPost from "components/Card/CardPost";

import styles from "styles/Home.module.scss";

export default function Home() {
  function PersonalInfo() {
    return <div className={styles.personalWrapper}>Personal Data</div>;
  }

  function Feed() {
    return (
      <div className={styles.feedWrapper}>
        <div className={styles.newComment}>
          <Card className={styles.cardWrapper}>
            <div className={styles.avatarWrapper}>
              <Image fill src={"/avatar.png"} alt={`avatar`} />
            </div>
          </Card>
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
