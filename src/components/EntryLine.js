import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import {useDispatch} from "react-redux"
import { addEntryRedux, removeEntryRedux } from "../actions/entries.actions";
import {openEditModal, closeEditModal} from "../actions/modals.actions"


function EntryLine({ id, description, value, isExpense = false}) {

  const dispatch = useDispatch();
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => dispatch(openEditModal(id))}></Icon>
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
