import React from "react";
import { useEffect, useState } from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "../components/MainHeader";
import NewEntryForm from "../components/NewEntryForm";
import DisplayBalances from "../components/DisplayBalances";
import EntryLines from "../components/EntryLines";
import ModalEdit from "../components/ModalEdit";
import Searchbar from "../components/Searchbar";
import Chart from "../components/Chart";
import { doSearch, getAllEntries } from "../actions/entries.actions";
import Filters from "../components/Filters";
function Home() {
  const [total, setTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector((state) => state.entries.entries);

  const all = useSelector((state) => {
    const entries2 = [...state.entries.entries];
/*     debugger */
    if (state.entries.filters.isExpense !== null) {
      return entries2.filter((entry) => entry.isExpense === state.entries.filters.isExpense);
    } 
    else if(state.entries.filterSort.direction === 'asc'){
      console.log('Usesel asc', entries2.sort((a, b) => (a.value < b.value ? 1 : -1)))
      return entries2.sort((a, b) => (a.value < b.value ? 1 : -1));
      
    }
    else if(state.entries.filterSort.direction === 'desc'){
      console.log('Usesel desc')
      return entries2.sort((a, b) => (a.value > b.value ? 1 : -1));      
    }
    else{
      return entries2;
    }
   
  });

  const { isOpen, id } = useSelector((state) => state.modals);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);

    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [id, entries]);

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
    console.log(entries);
    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncome);
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [entries]);

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);
  useEffect(() => {
    dispatch(doSearch(searchTerm, entries));
  }, [searchTerm]);
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Filters entries={all}></Filters>
          </Grid.Column>
          <Grid.Column width={6}>
            <Searchbar
              entries={entries}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            ></Searchbar>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <MainHeader total={total}></MainHeader>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <DisplayBalances
              exp={expenseTotal}
              inc={incomeTotal}
            ></DisplayBalances>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h3">Add new transaction</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <NewEntryForm></NewEntryForm>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <EntryLines entries={all}></EntryLines>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <ModalEdit isOpen={isOpen} {...entry}></ModalEdit>
    </Container>
  );
}

export default Home;
