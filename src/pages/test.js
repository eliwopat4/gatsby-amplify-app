import React from "react"
import { navigate } from "gatsby"

export default function Test() {
  return (
    <>
      <div>Test page</div>
      <button onClick={() => navigate("/")}>
        Back to app
      </button>
    </>
  );
}