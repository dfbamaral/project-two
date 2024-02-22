import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  DonutChart,
  List,
  ListItem,
} from "@tremor/react";

const API_URL = "https://project2-json-server-backend.onrender.com";

const Charts = () => {
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingEntry, setEditingEntry] = useState({
    notes: "",
    category: "",
    data_input: "",
    value: "",
  });

  const divStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
  };

  const buttonStyle = {
    marginRight: "5px",
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/finance`)
      .then((response) => setEntries(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Group entries by category and sum values
  const entriesByCategory = entries.reduce((acc, entry) => {
    if (!acc[entry.category]) {
      acc[entry.category] = { name: entry.category, value: 0 };
    }
    acc[entry.category].value += parseFloat(entry.value);
    return acc;
  }, {});

  const data = Object.values(entriesByCategory);

  // Format data for DonutChart and List
  const formattedData = data.map((item) => ({
    name: item.name,
    amount: parseFloat(item.value),
    share: `${((parseFloat(item.value) / data.reduce((acc, curr) => acc + curr.value, 0)) * 100).toFixed(1)}%`,
    color: 'bg-cyan-500',
  }));

  const currencyFormatter = (number) => {
    return '€' + Intl.NumberFormat('eur').format(number).toString();
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Graphic</h1>
      </div>
      <div>
        <Card className="sm:mx-auto sm:max-w-lg">
          <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Total expenses by category
          </h3>
          <DonutChart
            className="mt-8"
            data={formattedData}
            category="amount"
            index="name"
            valueFormatter={currencyFormatter}
            showTooltip={false}
            colors={['cyan', 'blue', 'indigo', 'violet', 'fuchsia']}
          />
          <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
            <span>Category</span>
            <span>Amount / Share</span>
          </p>
          <List className="mt-2">
            {formattedData.map((item) => (
              <ListItem key={item.name} className="space-x-6">
                <div className="flex items-center space-x-2.5 truncate">
                  <span
                    className={classNames(
                      item.color,
                      'h-2.5 w-2.5 shrink-0 rounded-sm',
                    )}
                    aria-hidden={true}
                  />
                  <span className="truncate dark:text-dark-tremor-content-emphasis">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {currencyFormatter(item.amount)}
                  </span>
                  <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                    {item.share}
                  </span>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
};

export default Charts;