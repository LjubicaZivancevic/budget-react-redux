import React from "react";
import { Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm({ addEntry, description, value, isExpense, setDescription, setValue, setisExpense }) {
 
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
     
      ></ButtonSaveOrCancel>
    </Form>
  );
}

export default NewEntryForm;
