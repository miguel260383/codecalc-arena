import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function CalculatorCard({ language, icon }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  const [history, setHistory] = useState([]);

  const calculate = (operation) => {
    setOperation(operation);

    const a = Number(num1);
    const b = Number(num2);

    let newResult = 0;

    switch (operation) {
      case "+":
        newResult = a + b;
        break;

      case "-":
        newResult = a - b;
        break;

      case "*":
        newResult = a * b;
        break;

      case "/":
        newResult = b !== 0 ? a / b : "Error";
        break;

      case "%":
        newResult = (a * b) / 100;
        break;

      default:
        break;
    }

    setResult(newResult);

    const operationText = `${a} ${operation} ${b} = ${newResult}`;

    setHistory((prev) => [
      operationText,
      ...prev.slice(0, 4),
    ]);
  };

  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setResult(0);
    setOperation("");
    setHistory([]);
  };

  const generatedCode =
    language === "JavaScript"
      ? `const result = ${num1 || 0} ${operation} ${num2 || 0};
console.log(result); // ${result}`
      : `result = ${num1 || 0} ${operation} ${num2 || 0}
print(result)  # ${result}`;

  return (
    <div className="calc-card p-4">
      <h2 className="text-center mb-4">
        {icon} {language}
      </h2>

      <div className="bg-dark rounded p-3 mb-3 text-center">
        <h1 className="text-white">{result}</h1>
      </div>

      <p className="text-center">
        Operación: {operation || "Ninguna"}
      </p>

      <input
        className="form-control mb-3"
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        className="form-control mb-3"
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="d-flex justify-content-center gap-2 flex-wrap">
        <button
          className="btn btn-primary"
          onClick={() => calculate("+")}
        >
          +
        </button>

        <button
          className="btn btn-primary"
          onClick={() => calculate("-")}
        >
          -
        </button>

        <button
          className="btn btn-primary"
          onClick={() => calculate("*")}
        >
          ×
        </button>

        <button
          className="btn btn-primary"
          onClick={() => calculate("/")}
        >
          ÷
        </button>

        <button
          className="btn btn-primary"
          onClick={() => calculate("%")}
        >
          %
        </button>

        <button
          className="btn btn-danger"
          onClick={clearCalculator}
        >
          Limpiar
        </button>
      </div>

      <div className="mt-4">
        <h5>{language} Code</h5>

        <SyntaxHighlighter
          language={
            language === "JavaScript"
              ? "javascript"
              : "python"
          }
          style={vscDarkPlus}
          customStyle={{
            borderRadius: "12px",
            fontSize: "0.9rem",
          }}
        >
          {generatedCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4">
        <h5>History</h5>

        <ul className="list-group">
          {history.map((item, index) => (
            <li
              key={index}
              className="list-group-item"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalculatorCard;