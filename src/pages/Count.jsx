import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello this is value of count rn {count}</h1>
      <button
        // onClick={() => {
        //   setCount(() => {
        //     return count + 1;
        //     // here if we dont return value the set count puts count to undefined as it does nothing as no return
        //   });
        //   // this is my version

        // }}

        // seniot v1

        onClick={() => {
          // setCount(count + 1); // this is the v1 version of the seniot
          setCount((prev) => prev + 1); // this allows us to have prev value and update it
        }}
      >
        click me
      </button>
      <p>
        try refresh this page as vercel has some issue with using react router
      </p>
    </div>
  );
}

export default Count;
