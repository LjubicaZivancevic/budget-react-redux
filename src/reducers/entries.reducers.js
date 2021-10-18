import entriesTypes from "../actions/entries.actions";
const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;
    case entriesTypes.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload });
      return newEntries;
      break;
    case entriesTypes.REMOVE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
      break;
    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...action.payload.entry };
      return newEntries;
      break;
    case entriesTypes.SORT_ENTRIES_ASC:
      newEntries = [...state];
      newEntries.sort((a, b) => (a.value > b.value ? 1 : -1));
      console.log("From red asc", newEntries);

      return newEntries;
      break;
    case entriesTypes.SORT_ENTRIES_DESC:
      newEntries = [...state];
      newEntries.sort((a, b) => (a.value < b.value ? 1 : -1));
      console.log("From red desc", newEntries);

      return newEntries;
      break;
    case entriesTypes.GET_INCOMES:
      newEntries = state.filter((entry) => (
        entry.isExpense === false
      ));
      return newEntries;
      break;
      case entriesTypes.GET_EXPENSES:
        newEntries = state.filter((entry) => (
          entry.isExpense === true
        ));
        return newEntries;
        break;
    default:
      return state;
  }
};

export default reducer;
var initialEntries = [];
