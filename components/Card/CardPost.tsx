import Image from "next/image";
import { useForm } from "antd/lib/form/Form";
import { useCallback } from "react";
import { Card } from "antd";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

import { IContentCards } from "common.types";
import FormFeed from "components/Form/FormFeed";

import styles from "./CardPost.module.scss";

export default function CardPost({
  id,
  avatar,
  name,
  username,
  description,
  image
}: IContentCards): JSX.Element {
  const [form] = useForm(); //Initialize Form instance

  const onFinish = useCallback(
    async (values: any) => {
      console.log("newPost", values);
    },
    [form]
  );

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
          {image && (
            <div className={styles.imgWrapper}>
              <Image fill src={image} alt={`card_image_${id}`} />
            </div>
          )}
        </div>
        <div className={styles.interactions}>
          <MdOutlineFavoriteBorder />
          <FaRegComment />
          <div className={styles.comment}>
            <div className={styles.avatarWrapper}>
              <Image fill src={avatar ? avatar : "/avatar.png"} alt={`${username}_avatar`} />
            </div>
            <FormFeed
              name="comment"
              placeholder="What's going through your mind..."
              message="Comment is required!"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
