import React from "react";
import { Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDatails from "../hooks/useEntryDetails";


function NewEntryForm() {
 const {
  description,
  setDescription,
  value,
  date,
  setDate,
  setValue,
  isExpense,
  setisExpense,
  addEntry,
  sortByValue,
 } = useEntryDatails();
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        date={date}
        setDate={setDate}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setisExpense={setisExpense}
      ></EntryForm>
      <br></br>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        sortByValue={sortByValue}
      ></ButtonSaveOrCancel>
    </Form>
  );
}

export default NewEntryForm;
