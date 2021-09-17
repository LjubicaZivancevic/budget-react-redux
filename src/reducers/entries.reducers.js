const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;
      break;
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
      break;
    default:
      return state;
  }
};

export default reducer;
var initialEntries = [
    {
      id: 1,
      description: "Redux test",
      value: "1000,00",
      isExpense: false,
    },
    {
      id: 2,
      description: "Water bill",
      value: "10,00",
      isExpense: true,
    },
    {
      id: 3,
      description: "Power bill",
      value: "20,00",
      isExpense: true,
    },
    {
      id: 4,
      description: "upWork job",
      value: "100,00",
      isExpense: false,
    },
    {
      id: 5,
      description: "upWork job 2",
      value: "120,00",
      isExpense: false,
    },
  ];
  