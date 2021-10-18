import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({ title, value, color }) {
  return (
    <Statistic size="tiny" color={color}>
      <Statistic.Label style={{ textAlign: "center" }}>{title}</Statistic.Label>
      <Statistic.Value style={{ textAlign: "center", margin: "auto" }}>
        {value}
      </Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
