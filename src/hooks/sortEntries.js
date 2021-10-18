
import { useDispatch } from "react-redux";
import { sortByAsc, sortByDesc, getIncomes, getExpenses, getAllEntries } from "../actions/entries.actions";

function SortEntries() {
  const dispatch = useDispatch();
  function sortByAscending(entries) {
    dispatch(sortByAsc(entries));
    console.log("Sort button has been clicked - sort entries hook : ", entries);

  }
  function sortByDescending(entries) {
    dispatch(sortByDesc(entries));
    console.log("Sort button has been clicked - sort entries hook : ", entries);

  }
  function getOnlyIncomes(entries){
    dispatch(getIncomes(entries));
  }
  function getOnlyExpenses(entries){
    dispatch(getExpenses(entries));
  }
  function getAll(){
    dispatch(getAllEntries());
  }
  return {
    sortByAscending,
    sortByDescending,
    getOnlyIncomes,
    getOnlyExpenses,
    getAll
  };
}

export default SortEntries;
