import { React, useState } from "react";
import { Form, Checkbox, Grid } from "semantic-ui-react";
import 'react-day-picker/lib/style.css';
import TableDatePicker from './TableDatePicker'

function EntryForm({
  description,
  value,
  date,
  setDate,
  isExpense,
  setDescription,
  setValue,
  setisExpense,
}) {

  return (
    <Grid stackable>
      <Grid.Row columns={4}>
        <Grid.Column width={3} >
        <TableDatePicker date={date} setDate={setDate}/>
        </Grid.Column>
        <Grid.Column width={7}>  
          <Form.Group>
            <Form.Input
              placeholder="New trans"
              icon="tags"
              width={16}
             
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></Form.Input>
          </Form.Group>
        </Grid.Column>
        <Grid.Column width={2}>
          <Form.Input
     
            placeholder="100,00"
            icon="dollar"
            iconPosition="left"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></Form.Input>
        </Grid.Column>
        <Grid.Column width={4} verticalAlign="middle">
          <Checkbox
            label="is expense"
            toggle
            checked={isExpense}
            onChange={() => setisExpense((oldState) => !oldState)}
          ></Checkbox>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EntryForm;
