import { useState } from "react";
import styles from "./gsearch.module.scss";

export default function GSearch() {
  const [searchQ, setSearchQuery] = useState("");

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <>
      <input
        type='text'
        placeholder='Enter keywords to search'
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={(e) => event.target.select()}
      />
      <a
        target='_blank'
        href={"https://www.youtube.com/results?search_query=" + searchQ}>
        <button>Search</button>
      </a>
    </>
  );
}
