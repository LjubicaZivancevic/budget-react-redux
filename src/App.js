import logo from './logo.svg';
import {
  Container, 
  Header, 


} from 'semantic-ui-react';

import "semantic-ui-css/semantic.min.css"
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import './App.css';

function App() {
  return (
    <Container>
      <MainHeader></MainHeader>
      <DisplayBalances></DisplayBalances>
      <EntryLine description="income" value="300"></EntryLine>
      <EntryLine description="expense" value="200" isExpense></EntryLine>


      <Header as="h3">Add new transaction</Header>
      <NewEntryForm></NewEntryForm>


    </Container>
  );
}

export default App;
