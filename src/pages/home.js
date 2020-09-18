import React from "react"
import { navigate } from "gatsby"

export default function Home() {
  return (
    <>
      <div>Home page</div>
      <button onClick={() => navigate("/")}>
        Back to app
      </button>
    </>
  );
}
