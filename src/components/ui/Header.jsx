import React from "react";

function Header() {
  return (
    <div>
      <div
        style={{
          boxSizing: "border-box",
          border: "1px gray solid",

          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          padding: "0 12px",
          margin: "0 0 20px 0",

          width: "1200px",
          height: "50px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
          }}
        >
          My Todo List
        </div>
        <div
          style={{
            fontSize: "24px",
          }}
        >
          react
        </div>
      </div>
    </div>
  );
}

export default Header;
