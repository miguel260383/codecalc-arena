import "./styles/app.css";
import CalculatorCard from "./components/CalculatorCard";

function App() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">

        <h1 className="main-title">
          CodeCalc Arena
        </h1>

        <p className="subtitle fs-4">
          Learn JavaScript and Python side by side
        </p>

      </div>

      <div className="row">

        <div className="col-lg-6 mb-4">
          <CalculatorCard
            language="JavaScript"
            icon="⚡"
          />
        </div>

        <div className="col-lg-6 mb-4">
          <CalculatorCard
            language="Python"
            icon="🐍"
          />
        </div>

      </div>

    </div>
  );
}

export default App;