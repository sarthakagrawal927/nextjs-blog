import { useState } from "react";
export default function GSearch({ dateString }) {
  const [searchQ, setSearchQuery] = useState("");

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <div>
      <input
        type='text'
        placeholder='Enter keywords to search'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <a target='_blank' href={"https://www.google.com/search?&q=" + searchQ}>
        <button>Search</button>
      </a>
    </div>
  );
}
