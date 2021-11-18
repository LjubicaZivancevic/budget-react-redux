const types = {
  GET_ENTRIES: "GET_ENTRIES",
  GET_INCOMES: "GET_INCOMES",
  GET_EXPENSES: "GET_EXPENSES",
  POPULATE_ENTRIES: "POPULATE_ENTRIES",
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
  SORT_ENTRIES_ASC: "SORT_ENTRIES_ASC",
  SORT_ENTRIES_DESC: "SORT_ENTRIES_DESC",
  DO_SEARCH: "DO_SEARCH",
};
export default types;

export const addEntryRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};
export const removeEntryRedux = (id) => {
  return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id, entry) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const getAllEntries = () => {
  return { type: types.GET_ENTRIES };
};

export const populateEntries = (entries) => {
  return { type: types.POPULATE_ENTRIES, payload: entries };
};
export const sortByAsc = () => {
  return { type: types.SORT_ENTRIES_ASC};
};
export const sortByDesc = () => {
  return { type: types.SORT_ENTRIES_DESC };
};
export const getIncomes = () => {
  return { type: types.GET_INCOMES };
};
export const getExpenses = () => {
  return { type: types.GET_EXPENSES};
};

export const doSearch = (searchTerm, entries ) => {
  return {type: types.DO_SEARCH, payload: { searchTerm, entries}}
}