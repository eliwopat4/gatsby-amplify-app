import React from "react"
import { navigate } from "gatsby"

export default function App() {
  return (
    <>
      <div>Hello world!</div>
      <button onClick={() => navigate("/home")}>
        Home
      </button>
      <button onClick={() => navigate("/test")}>
        Test
      </button>
    </>
  );
}
