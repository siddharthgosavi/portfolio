import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <>
      {count ? (
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString("Full Stack Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("JavaScript Enthusiast")
              .deleteAll()
              .callFunction(() => {
                setCount(0);
              })
              .start();
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
