import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, setSushis}) {
  return (
    <div className="belt">
      {sushis.map(sushi => {
        return <Sushi key={sushi.id} sushi={sushi} />
      })}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
