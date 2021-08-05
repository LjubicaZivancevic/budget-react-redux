import React, { useState } from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setisExpense] = useState(true);
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setisExpense={setisExpense}
      ></EntryForm>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      ></ButtonSaveOrCancel>
    </Form>
  );
}

export default NewEntryForm;
