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
        placeholder='Search on Google'
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={(e) => event.target.select()}
      />
      <a target='_blank' href={"https://www.google.com/search?&q=" + searchQ}>
        <button>Search</button>
      </a>
    </>
  );
}
