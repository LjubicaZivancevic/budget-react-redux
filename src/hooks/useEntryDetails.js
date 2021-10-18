import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import { closeEditModal } from "../actions/modals.actions";

function useEntryDatails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setisExpense] = useState(isExp);

  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setisExpense(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(
        id,
       {
          id,
          description,
          value,
          isExpense,
        },
      )
    );
    dispatch(closeEditModal());
    resetValues();
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
      resetValues();
  }



  function resetValues(){
    setDescription("");
    setValue("");
    setisExpense(true);
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setisExpense,
    addEntry,
    updateEntry,

  };
}
export default useEntryDatails;
