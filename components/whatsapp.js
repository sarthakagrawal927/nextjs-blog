import { useState } from "react";
import styles from "./whatsapp.module.scss";
export default function GSearch() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendText, setSendText] = useState("");

  return (
    <>
      <input
        type='text'
        value={phoneNumber}
        placeholder='Enter Phone Number'
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        onFocus={(e) => event.target.select()}
      />
      <input
        type='text'
        placeholder='Enter Text'
        onChange={(e) => setSendText(e.target.value)}
        onFocus={(e) => event.target.select()}
      />
      <a
        target='_blank'
        href={
          "https://web.whatsapp.com/send?phone=+91" +
          phoneNumber +
          "&text=" +
          sendText +
          "&app_absent=1"
        }>
        <button>Send</button>
      </a>
    </>
  );
}
