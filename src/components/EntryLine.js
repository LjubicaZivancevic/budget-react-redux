import React, { useState } from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

function EntryLine({ id, description, value, isExpense = false, deleteEntry }) {

  const [isOpen, setIsOpen] = useState(false);

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
              <Icon name="edit" bordered onClick={() => setIsOpen(true)}></Icon>
              <Icon
                name="trash alternate outline"
                bordered
                onClick={() => deleteEntry(id)}
              ></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}></ModalEdit>
    </>
  );
}

export default EntryLine;
