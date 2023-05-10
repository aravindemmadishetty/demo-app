import { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  const handleInc = () => setCount(count + 1);
  const handleDec = () => setCount(count - 1);
  return (
    <div>
      Count: {count}
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       name: "Aravind",
//     },
//   };
// }
