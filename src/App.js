import { useState } from "react";
import { Container, Header } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import "./App.css";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id) {
    const result = entries.filter((item) => item.id !== id);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result =
    entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    });
    console.log('res', result)
    console.log('entries', entries)
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader></MainHeader>
      <DisplayBalances></DisplayBalances>

      <Header as="h3">Add new transaction</Header>
      <NewEntryForm addEntry={addEntry}></NewEntryForm>
      <EntryLines entries={entries} deleteEntry={deleteEntry}></EntryLines>
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$1000,00",
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: "$10,00",
    isExpense: true,
  },
  {
    id: 3,
    description: "Power bill",
    value: "$20,00",
    isExpense: true,
  },
  {
    id: 4,
    description: "upWork job",
    value: "$100,00",
    isExpense: false,
  },
  {
    id: 5,
    description: "upWork job 2",
    value: "$120,00",
    isExpense: false,
  },
];
