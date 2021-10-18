import { React } from "react";
import { Form, Checkbox, Grid } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setisExpense,
}) {
  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8}>  
          <Form.Group>
            <Form.Input
              placeholder="New trans"
              icon="tags"
              width={16}
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></Form.Input>
          </Form.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Form.Input
            label="Value"
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
