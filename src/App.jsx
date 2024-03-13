import "./App.css";
import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState("MAS"); // Estado para almacenar la opción seleccionada

  // Datos
  var N = 0,
    k = 0,
    e = 0,
    P = 0,
    n = 0,
    i = 0;

  // Función para manejar el cambio de opción
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function handleValueChange() {
    if (selectedOption == "MAS") {
      N = document.getElementById("NInput").value;
      k = document.getElementById("kInput").value;
      e = document.getElementById("eInput").value;
      P = document.getElementById("PInput").value;
    }
    if (selectedOption == "ASimp") {
      n = document.getElementById("nInput").value;
      i = document.getElementById("iInput").value;
    }
    if (selectedOption == "AProp") {
      //
    }
    if (selectedOption == "Error") {
      N = document.getElementById("NInput").value;
      k = document.getElementById("kInput").value;
      P = document.getElementById("PInput").value;
      n = document.getElementById("nInput").value;
    }
  }

  function Calculate() {
    if (selectedOption == "MAS") {
      if (N > 100000) {
        document.getElementById("result").innerText = "n = " + Math.ceil(
          (k * k * P * (1 - P)) / (e * e)
        );
      } else {
        document.getElementById("result").innerText = "n = " + Math.ceil(
          (k * k * P * (1 - P) * N) / (e * e * (N - 1) + k * k * P * (1 - P))
        );
      }
    }
    if (selectedOption == "ASimp") {
      document.getElementById("result").innerText = "n = " + Math.ceil(n / i);
    }
    if (selectedOption == "Error") {
      if (N > 100000) {
        document.getElementById("result").innerText = "e = " + 
          k * Math.sqrt((P * (1 - P)) / n) * 100;
      } else {
        document.getElementById("result").innerText = "e = " + 
          k * Math.sqrt(((N - n) * (P * (1 - P))) / (n * (N - 1))) * 100;
      }
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>LA CALCULADORA</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="container" action="">
          <div className="datosContainer">
            <div className="datosControls">
              <p className="subtitle">Datos</p>
              <button className="btn roundBtn">Rnd</button>
            </div>
            {/* Datos Muestreo Aleatorio Simple */}
            {selectedOption == "MAS" && (
              <div className="datosMASDiv">
                <div className="datoDiv">
                  <p className="datoTitle">N</p>
                  <input
                    type="number"
                    id="NInput"
                    onChange={handleValueChange}
                    required
                    step="1"
                    min="0"
                    placeholder="0"
                    className="datoInput"
                  />
                </div>
                <div className="datoDiv">
                  <p className="datoTitle">k</p>
                  <input
                    type="number"
                    id="kInput"
                    onChange={handleValueChange}
                    required
                    step="1"
                    min="1"
                    max="3"
                    placeholder="2"
                    className="datoInput"
                  />
                </div>
                <div className="datoDiv">
                  <p className="datoTitle">e</p>
                  <input
                    type="number"
                    id="eInput"
                    onChange={handleValueChange}
                    required
                    step=".001"
                    min="0"
                    placeholder="0"
                    className="datoInput"
                  />
                </div>
                <div className="datoDiv">
                  <p className="datoTitle">P</p>
                  <input
                    type="number"
                    id="PInput"
                    onChange={handleValueChange}
                    required
                    step=".01"
                    max=""
                    min="0"
                    placeholder="0.5"
                    className="datoInput"
                  />
                </div>
              </div>
            )}
            {/* Datos Afijación simple */}
            {selectedOption == "ASimp" && (
              <div className="datosASimpDiv">
                <div className="datoDiv">
                  <p className="datoTitle">n</p>
                  <input
                    type="number"
                    id="nInput"
                    onChange={handleValueChange}
                    required
                    step="1"
                    placeholder="0"
                    className="datoInput"
                  />
                </div>
                <div className="datoDiv">
                  <p className="datoTitle">i</p>
                  <input
                    type="number"
                    id="iInput"
                    onChange={handleValueChange}
                    required
                    step="1"
                    min="1"
                    placeholder="2"
                    className="datoInput"
                  />
                </div>
              </div>
            )}
            {/* Datos Proporcional */}

            {/* Datos Error */}
            {selectedOption == "Error" && (
              <div className="datosErrorDiv">
                <div className="datoDiv">
                  <p className="datoTitle">N</p>
                  <input
                    type="number"
                    id="NInput"
                    onChange={handleValueChange}
                    required
                    step="1"
                    min="0"
                    placeholder="0"
                    className="datoInput"
                  />
                </div>
                <div className="datoDiv">
                  <p className="datoTitle">k</p>
                  <input
                    type="number"
                    id="kInput"
                    onChange={handleValueChange}
                    required
                    step="1"
                    min="1"
                    max="3"
                    placeholder="2"
                    className="datoInput"
                  />
                </div>
                <div className="datoDiv">
                  <p className="datoTitle">n</p>
                  <input
                    type="number"
                    id="nInput"
                    onChange={handleValueChange}
                    required
                    step="1"
                    min="0"
                    placeholder="0"
                    className="datoInput"
                  />
                </div>
                <div className="datoDiv">
                  <p className="datoTitle">P</p>
                  <input
                    type="number"
                    id="PInput"
                    onChange={handleValueChange}
                    required
                    step=".001"
                    min="0"
                    placeholder="0"
                    className="datoInput"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="modosContainer">
            <p className="subtitle">Modo</p>
            <div className="modeOpts">
              <div>
                <input
                  type="radio"
                  name="mode"
                  value="MAS"
                  id="MAS"
                  checked={selectedOption === "MAS"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="MAS">Muestreo aleatorio simple</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="mode"
                  value="ASimp"
                  id="ASimp"
                  checked={selectedOption === "ASimp"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="ASimp">Afijación Simple</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="mode"
                  value="AProp"
                  id="AProp"
                  checked={selectedOption === "AProp"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="AProp">Afijación Proporcional</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="mode"
                  value="Error"
                  id="Error"
                  checked={selectedOption === "Error"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="Error">Calcular error</label>
              </div>
            </div>
          </div>
        </div>
        <div className="calcDiv">
          <input
            type="submit"
            className="btn calcBtn"
            onClick={Calculate}
            value={"Calcular"}
          />
        </div>
      </form>

      <div className="resultDiv">
        <h2 className="Title">Resultado:</h2>
        <p className="auxText" id="result">{n== 0 ? "esperando datos...":""}</p>
      </div>
    </>
  );
}

export default App;
