import React from "react";
import { Button, Modal, Container, Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import NewEntryForm from "./NewEntryForm";

function ModalEdit({ isOpen, setIsOpen }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Modal.Content>
          <Form unstackable>
            <EntryForm></EntryForm>
          </Form>
        </Modal.Content>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}
export default ModalEdit;
