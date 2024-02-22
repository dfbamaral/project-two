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
      <input
        type="number"
        placeholder="Valor do dinheiro"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />
      <input
        type="number"
        placeholder="Taxa de juro (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <button onClick={calculateInterest}>Calcular</button>
      {result && <p>Rendimento: {result}</p>}
    </div>
  );
};

export default Investments;