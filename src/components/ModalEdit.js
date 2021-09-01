import React from "react";
import { Button, Modal,  Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";


function ModalEdit({ isOpen, setIsOpen, addEntry, description, value, isExpense, setDescription, setValue, setisExpense }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Modal.Content>
          <Form unstackable>
            <EntryForm  description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setisExpense={setisExpense}></EntryForm>
          </Form>
        </Modal.Content>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>Save</Button>
      </Modal.Actions>
    </Modal>
  );
}
export default ModalEdit;
