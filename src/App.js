import { useEffect, useState } from "react";
import { Container, Header } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

import "./App.css";
import useEntryDatails from "./hooks/useEntryDetails";

function App() {
  const [total, setTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [entry, setEntry] = useState(); 
  const entries = useSelector((state) => state.entries);
  const {isOpen, id} = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [isOpen, id]);

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



  return (
    <Container>
      <MainHeader total={total}></MainHeader>

      <DisplayBalances exp={expenseTotal} inc={incomeTotal}></DisplayBalances>

      <Header as="h3">Add new transaction</Header>
      <NewEntryForm></NewEntryForm>
      <EntryLines entries={entries}></EntryLines>
      <ModalEdit isOpen={isOpen} {...entry}></ModalEdit>
    </Container>
  );
}

export default App;
