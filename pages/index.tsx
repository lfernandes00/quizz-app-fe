import styles from "styles/Home.module.scss";

export default function Home() {
  function PersonalInfo() {
    return <div className={styles.personalWrapper}>Personal Data</div>;
  }

  function Feed() {
    return <div className={styles.feedWrapper}>Feed</div>;
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
