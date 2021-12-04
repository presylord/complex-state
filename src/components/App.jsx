import React, { useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  function firstName(event) {
    setFirst(event.target.value);
  }

  const [last, setLast] = useState("");
  function lastName(event) {
    setLast(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {first} {last}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={firstName} />
        <input name="lName" placeholder="Last Name" onChange={lastName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
