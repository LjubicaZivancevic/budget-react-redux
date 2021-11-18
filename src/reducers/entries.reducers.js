import entriesTypes from "../actions/entries.actions";
const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return {...state, entries: action.payload};
    case entriesTypes.ADD_ENTRY:
      // newEntries = state.concat({ ...action.payload });
      return {...state, entries: [...state.entries, action.payload] }
      break;
    case entriesTypes.REMOVE_ENTRY:
      // newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return {...state, entries: state.entries.filter((entry) => entry.id !== action.payload.id)}
      break;
    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state.entries];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...action.payload.entry };
       return {...state, entries: newEntries};
      break;
    case entriesTypes.SORT_ENTRIES_ASC:
      // newEntries = [...state.entries];
      // newEntries.sort((a, b) => (a.value > b.value ? 1 : -1));
       console.log("From red asc",state.entries);

      return {...state, filterSort: { sortTerm : 'value', direction: 'asc'} };
      break;
    case entriesTypes.SORT_ENTRIES_DESC:
      // newEntries = [...state];
      // newEntries.sort((a, b) => (a.value < b.value ? 1 : -1));
      console.log("From red desc", state.entries);

      return {...state, filterSort: { sortTerm : 'value', direction: 'desc'} };
      break;
    case entriesTypes.GET_INCOMES:
      // newEntries = state.filter((entry) => entry.isExpense === false);
    
     
      return {...state,filters: { ...state.filters, isExpense : false } };
      break;
    case entriesTypes.GET_EXPENSES:
      // newEntries = state.filter((entry) => entry.isExpense === true);
   
      return {...state ,filters: { ...state.filters, isExpense : true } };
  
      break;
    case entriesTypes.DO_SEARCH:
      // newEntries = state.filter((entry) =>
      //   entry.description.toLowerCase().includes(action.payload.searchTerm)
      // ); 
      // console.log("Search:", action.payload.searchTerm);
      return {...state, filters: { ...state.filters, searchTerm: action.payload.searchTerm } };
    default:
      return state;
  }
};

export default reducer;
var initialEntries = {
  entries: [],
  filters: {
    isExpense: null,
    searchTerm: null,
  },
  filterSort: {
    sortTerm: null,
    direction: null
  }
};
