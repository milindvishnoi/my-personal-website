import "./TypeWritter.css";
import React, { useEffect, useState } from "react";

export default function TypeWritter({ word }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    console.log("Here");
    const timeout = setTimeout(() => {
      setDisplay(word.slice(0, display.length + 1));
    }, 200);
    return () => clearTimeout(timeout);
  }, [display]);

  return (
    <div className="d-flex">
      {display}
      <div className="cursor" />
    </div>
  );
}
