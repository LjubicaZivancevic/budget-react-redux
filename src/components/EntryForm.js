import { Fragment, React } from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setisExpense,
}) {
  return (
    <Fragment>
      <Form.Group widths={3}>
        <Form.Input
          placeholder="New trans"
          icon="tags"
          width={12}
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></Form.Input>
        <Form.Input
          width={4}
          label="Value"
          placeholder="100,00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          label="is expense"
          toggle
          checked={isExpense}
          onChange={() => setisExpense((oldState) => !oldState)}
        ></Checkbox>
      </Segment>
    </Fragment>
  );
}

export default EntryForm;
