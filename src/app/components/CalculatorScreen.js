import React, { useContext } from "react";
import { CalcContext } from "../provider/CalculatorContext";
import AutoScaleDiv from "./AutoScaleDiv";

const CalculatorScreen = () => {
  const { calc } = useContext(CalcContext);

  const inputFieldStyle = {
    color: `black`,
    background: `white`,
    lineHeight: `90px`,
    fontSize: `4em`,
    padding: `12px 4px 12px 0`,
    flex: `1`,
    marginBottom: `1.5rem`,
  }

  return (
    <div style={inputFieldStyle}>
      <AutoScaleDiv> {calc.num ? calc.num : calc.res}</AutoScaleDiv>
    </div>
  );
};

export default CalculatorScreen;
