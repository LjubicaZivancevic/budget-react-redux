import logo from './logo.svg';
import {
  Container, 
  Header, 
  Statistic, 
  Segment, 
  Grid, 
  Icon, 
  Form, 
  Button
} from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"
import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label style={{textAlign:"center"}}>
          Your Balance:
        </Statistic.Label>
        <Statistic.Value style={{textAlign:"center"}}>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{textAlign:"center"}}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>2.000,00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>   
               <Statistic size="tiny" color="red">
                <Statistic.Label style={{textAlign:"center"}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>2.000,00</Statistic.Value>
              </Statistic></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered></Icon>
              <Icon name="trash alternate outline" bordered></Icon>git branch -M main
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$20,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered></Icon>
              <Icon name="trash alternate outline" bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input placeholder="New trans" icon="tags" width={12} label="Description"></Form.Input>
          <Form.Input
            width={4}
            label="Value"
            placeholder="100,00"
            icon="dollar"
            iconPosition="left"
            >

          </Form.Input>
        </Form.Group>
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or></Button.Or>
          <Button primary>OK</Button>
        </Button.Group>
      </Form>


    </Container>
  );
}

export default App;
