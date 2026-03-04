import React from "react";
import { toast } from "react-toastify";

export default function Home() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <button onClick={notify} class="btn btn-error">
        Home
      </button>
    </div>
  );
}
