import React, { useState } from "react";

const Investments = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState("");

  const calculateInterest = () => {
    if (principal === "" || rate === "") {
      setResult("Por favor, preencha todos os campos.");
      return;
    }

    const interest = parseFloat(principal) * parseFloat(rate) / 100;
    setResult(interest.toFixed(2));
  };

  return (
    <div
      style={{
        margin: 50,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <h1>Calculater of Interest</h1>
      <input
        type="number"
        placeholder="€ to invest"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      /> 
      +
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <br></br>
      <button onClick={calculateInterest}>Calcular</button>
      {result && <p>Rendimento: {result}</p>}

      <br></br>
      <div style={{
        margin: 50,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      <iframe
            src="https://pt.widgets.investing.com/top-cryptocurrencies?theme=darkTheme&cols=symbol,priceUsd,priceBtc,chg24,chg7"
            width="317"
            height="467"
            frameborder="0"
            allowtransparency="true"
            marginwidth="0"
            marginheight="0"
          ></iframe>
      <iframe
        src="https://ssltsw.investing.com?lang=50&forex=1,9,2,6,10,2103,37&commodities=8833,8849,8862,8830,8836,8832,8918&indices=172,175,174,166,179,178,27&stocks=474,345,346,347,348,349,350&tabs=1,2,3,4"
        width="317"
        height="467"
      ></iframe>
    </div>
    </div>
  );
};

export default Investments;