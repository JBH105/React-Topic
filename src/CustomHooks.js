import React, {useState} from "react";

function useTitle() {
  const [count, setcount] = useState(0);

  return (
    <div>
    <h5>Hello {count}</h5>
      <button onClick={() => setcount(count + 1)}>Count</button>
    </div>
  );
}
export default useTitle;
