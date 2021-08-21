import React, { useState } from "react";
function CreateUser() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  function makeUser() {
    let data = { name, age, address };
    console.warn("called", data);
  }

  return (
    <>
      <h1>Make A new User</h1>
      <input
        type="text"
        name="username"
        onChange={(e) => setname(e.target.value)}
        value={name}
      ></input>
      <br></br> <br></br>
      <input
        type="text"
        name="age"
        onChange={(e) => setage(e.target.value)}
        value={age}
      ></input>
      <br></br> <br></br>
      <input
        type="text"
        name="address"
        onChange={(e) => setaddress(e.target.value)}
        value={address}
      ></input>
      <br></br> <br></br>
      <button onClick={makeUser}>Create User</button>
    </>
  );
}

export default CreateUser;
