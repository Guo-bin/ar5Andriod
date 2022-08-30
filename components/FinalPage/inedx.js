import React from "react";
import Ar from "components/Ar";
import ArPageComponent from "components/ArPage";
const FinalPage = ({ targetUrl, model }) => {
  return (
    <div>
      <Ar model={model} targetUrl={targetUrl} />
      <ArPageComponent />
    </div>
  );
};

export default FinalPage;
