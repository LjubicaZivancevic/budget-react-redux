import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modals.actions";

function EntryLine({ id, description, value, date, isExpense = false }) {
  const dispatch = useDispatch();
  let date2 = new Date(date).toLocaleDateString('en-GB')
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={4} textAlign="right" stackable>
          <Grid.Row>
          <Grid.Column width={3} textAlign="left">
              {
              date2
              }
            </Grid.Column>
            <Grid.Column width={7} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModal(id))}
              ></Icon>
              <Icon
                name="trash alternate outline"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              ></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default EntryLine;
