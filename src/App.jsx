import "./styles/app.css";

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

          <div className="calc-card p-4">

            <h2 className="text-center mb-4">
              ⚡ JavaScript
            </h2>

            <div style={{ height: "250px" }}>
              Calculator
            </div>

          </div>

        </div>

        <div className="col-lg-6 mb-4">

          <div className="calc-card p-4">

            <h2 className="text-center mb-4">
              🐍 Python
            </h2>

            <div style={{ height: "250px" }}>
              Calculator
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;