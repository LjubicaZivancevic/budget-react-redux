import { useEffect, useState } from "react";
import { Container, Header } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import {useSelector} from "react-redux"


import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setisExpense] = useState(true);

  const [entryId, setEntryId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);

  const entries = useSelector((state) => state.entries)
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;

    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += parseInt(entry.value));
      } else {
        return (totalIncome += parseInt(entry.value));
      }
    });
    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncome);
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, entries);

  function deleteEntry(id) {
    const result = entries.filter((item) => item.id !== id);
    // setEntries(result);
  }

  function editEntry(id) {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setisExpense(entry.isExpense);
      setIsOpen(true);
    }
  }
  function resetEntry() {
    setDescription("");
    setValue("");
    setisExpense(true);
  }
  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log("res", result);
    console.log("entries", entries);
    // setEntries(result);
    resetEntry();
  }

  return (
    <Container>
      <MainHeader total={total}></MainHeader>

      <DisplayBalances exp={expenseTotal} inc={incomeTotal}></DisplayBalances>

      <Header as="h3">Add new transaction</Header>
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setisExpense={setisExpense}
      ></NewEntryForm>
      <EntryLines
        entries={entries}
     
        editEntry={editEntry}
      ></EntryLines>
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setisExpense={setisExpense}
      ></ModalEdit>
    </Container>
  );
}

export default App;

