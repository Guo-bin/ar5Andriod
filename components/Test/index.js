import React, { useEffect, useState } from "react";

const Test = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((e) => {
          document.querySelector();
          alert("success");
        })
        .catch((e) => {
          alert("fail");
        });
    }
  }, []);
  return <video width={1200} height={1200} />;
};

export default Test;
