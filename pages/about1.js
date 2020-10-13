import Work from "../components/Work";
import styles from "../styles/Home.module.scss";

const about = ({ work }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Task for today</h1>{" "}
      <Work
        className={styles.description}
        activity={work.activity}
        type={work.type}
        participants={work.participants}
      />
    </main>
  );
};
//Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
export async function getServerSideProps() {
  const res = await fetch("https://www.boredapi.com/api/activity");
  const work = await res.json();

  return {
    props: {
      work,
    },
  };
}

export default about;
