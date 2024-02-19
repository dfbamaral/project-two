{
  /** 
1 - Write the code read the existing entries(Emitir relatorios)

2 - Write the function to calculate the interest rate gained
*/
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "";

const BudgetPage = () => {
  const [budgetTable, setBudgetTable] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/budget/${id}`)
      .then((response) => setBudgetTable(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
 
    </div>
  );
};

export default BudgetPage;
