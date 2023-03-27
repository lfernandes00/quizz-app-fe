import Image from "next/image";
import { Card } from "antd";
import { FiMoreVertical } from "react-icons/fi";

import { IContentCards } from "common.types";

import styles from "./CardPost.module.scss";

export default function CardPost({
  name,
  username,
  description,
  image
}: IContentCards): JSX.Element {
  return (
    <Card className={styles.cardWrapper}>
      <div className={styles.cardBody}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <h6 className={styles.username}>@{username}</h6>
            <h4 className={styles.name}>{name}</h4>
          </div>
          <div className={styles.settings}>
            <button>
              <FiMoreVertical />
            </button>
          </div>
        </div>
        <div className={styles.description}>
          <h5>{description}</h5>
          {/* {image && } */}
        </div>
        <div className={styles.interactions}></div>
      </div>
    </Card>
  );
}
