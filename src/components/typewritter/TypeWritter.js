import React, { useEffect, useState } from "react";

export default function TypeWritter({ msgs }) {
  const [display, setDisplay] = useState("");
  const loopEachWord = () => {
    msgs.map((msg) => setTimeout(updateEachAlpha(msg), 1000));
  };
  const updateEachAlpha = (msg) => {
    [...msg].forEach((alpha) => {
      setTimeout(() => {
        setDisplay((d) => d + alpha);
        console.log("Here ");
      }, 1000);
    });
  };
  useEffect(() => loopEachWord(), []);

  return <div>{display}</div>;
}
