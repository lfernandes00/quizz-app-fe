import Image from "next/image";
import { Card } from "antd";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

import { IContentCards } from "common.types";

import styles from "./CardPost.module.scss";

export default function CardPost({
  avatar,
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
            <div className={styles.avatarWrapper}>
              <Image fill src={avatar ? avatar : "/avatar.png"} alt={`${username}_avatar`} />
            </div>
            <div>
              <h6 className={styles.username}>@{username}</h6>
              <h5 className={styles.name}>{name}</h5>
            </div>
          </div>
          <div className={styles.settings}>
            <button>
              <FiMoreVertical />
            </button>
          </div>
        </div>
        <div className={styles.description}>
          <h6>{description}</h6>
          {/* {image && } */}
        </div>
        <div className={styles.interactions}>
          <MdOutlineFavoriteBorder />
          <FaRegComment />
          <div className={styles.comment}>
            <div className={styles.avatarWrapper}>
              <Image fill src={avatar ? avatar : "/avatar.png"} alt={`${username}_avatar`} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
