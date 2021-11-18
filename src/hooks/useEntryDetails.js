import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import { closeEditModal } from "../actions/modals.actions";

function useEntryDatails(desc = "", val = "", dt = new Date(), isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setisExpense] = useState(isExp);
  const [date, setDate] = useState(dt);

  const dispatch = useDispatch();

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        date,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  }

  function addEntry() {
    if (formValidation()) {
      alert("Please fill in all fields", description, value);
      
    } else {
      dispatch(
        addEntryRedux({
          id: uuidv4(),
          description,
          value,
          date,
          isExpense,
        })
      );
      resetValues();
    }
  }

  function resetValues() {
    setDescription("");
    setValue("");
    setisExpense(true);
  }

  function formValidation() {
    if (description === "" || value === "") return true;
    else { return false}
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    date,
    setDate,
    isExpense,
    setisExpense,
    addEntry,
    updateEntry,
  };
}
export default useEntryDatails;
