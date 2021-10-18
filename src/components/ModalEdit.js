import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.actions";
import useEntryDatails from "../hooks/useEntryDetails";

function ModalEdit({ isOpen, description, value, isExpense, id }) {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDatails(description, value, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Modal.Content>
          <Form unstackable>
            <EntryForm
              description={entryUpdate.description}
              value={entryUpdate.value}
              isExpense={entryUpdate.isExpense}
              setValue={entryUpdate.setValue}
              setDescription={entryUpdate.setDescription}
              setisExpense={entryUpdate.setisExpense}
            ></EntryForm>
          </Form>
        </Modal.Content>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
export default ModalEdit;
