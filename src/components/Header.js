// import React from "react";

// function Header({ number, data }) {
//   console.log("Header Component Re-rendered!");
//   return (
//     <div>
//       Header - {number}
//       <br />
//       <br />
//       <code>{JSON.stringify(data)}</code>
//     </div>
//   );
// }

// export default React.memo(Header);

import React from "react";

function Header({ number, increment }) {
  console.log("Header Component Re-rendered!");
  return (
    <div>
      Header - {number}
      <br />
      <br />
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default React.memo(Header);
