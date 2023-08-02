import React, { useState } from "react";

function HooksCounter2() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      Forms
      <br />
      {/* useState doesn;t automatically merge the object in the code because both firstname and the lastname is the empty */}
      {/* here we have use the spread operator */}
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={e => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={e => setName({ ...name, lastname: e.target.value })}
        />
        <h2>Your First name is : {name.firstname}</h2>
        <h2>Your Last name is : {name.lastname}</h2>
        <h3>{JSON.stringify(name)} </h3>
        {/* here we are seeing the how the inputs are taking in the form */}
      </form>
    </div>
  );
}

export default HooksCounter2;
