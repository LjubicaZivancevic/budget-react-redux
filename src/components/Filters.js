import React, { useState } from "react";
import sortEntries from "../hooks/sortEntries";

import Select from "react-select";


function Filters({ entries }) {
  const { sortByAscending, sortByDescending, getOnlyIncomes, getOnlyExpenses, getAll } = sortEntries();

  const data = [
    {
        value: 0,
        label: "Show all",
      },
    {
      value: 1,
      label: "Sort by ascending order",
    },
    {
      value: 2,
      label: "Sort by descending order",
    },
    {
      value: 3,
      label: "Newest first",
    },
    {
      value: 4,
      label: "Show only incomes",
    },
    {
      value: 5,
      label: "Show only expenses",
    },
  ];
  const [selectedValue, setSelecedValue] = useState(null);

  const handleChange = (obj) => {
    setSelecedValue(obj.value);

    switch (obj.value) {
        case 0:
            getAll(entries);
            break;
      case 1:
        sortByAscending(entries);
        break;
      case 2:
        sortByDescending(entries);
        break;

      case 4:
        getOnlyIncomes(entries);
        break;
        case 5:
            getOnlyExpenses(entries);
            break;
      default:
        return entries;
        break;
    }
  };
  return (
    <>
      <Select
        value={data.find((option) => option.value === selectedValue)}
        options={data}
        onChange={handleChange}
      />
    </>
  );
}

export default Filters;
