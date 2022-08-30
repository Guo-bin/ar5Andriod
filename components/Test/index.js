import React, { useEffect, useState } from "react";

const Test = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((e) => {
          alert("success");
        })
        .catch((e) => {
          alert("fail");
        });
    }
  }, []);
  return <div>index</div>;
};

export default Test;
