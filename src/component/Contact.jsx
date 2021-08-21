import React, { useState } from "react";

const Contact = () => {
  const [val, setval] = useState("hamza");
  const test = (e) => {
    console.warn("hello test", e.target.value);
    setval(e.target.value);
  };
  return (
    <div>
      <h1>contact us</h1>
      <input type="text" value={val} onChange={test}></input>
      <button onClick={test}>Click me</button>
    </div>
  );
};

export default Contact;
