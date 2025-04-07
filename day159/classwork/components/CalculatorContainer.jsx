import { useState } from "react";
import CalculatorPresenter from "./CalculatorPresenter";

export default function CalculatorContainer() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <CalculatorPresenter
      num1={num1}
      num2={num2}
      setNum1={setNum1}
      setNum2={setNum2}
      result={result}
      onCalculate={handleCalculate}
    />
  );
}
