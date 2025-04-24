import React, { useContext } from "react";
import { FirstContext } from "../contexts/first";
import { SecondContext } from "../contexts/seco";

const childcomponent = () => {
  const first = useContext(FirstContext);
  const second = useContext(SecondContext);

  return (
    <div>
      <p>{first}</p>
      <p>{second}</p>
    </div>
  );
};

export default childcomponent;