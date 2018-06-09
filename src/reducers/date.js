const date = (state = {
  fullDate: new Date(),
  day: false,
  month: false,
  year: false
}, action) => {
  switch (action.type) {
    case 'TOGGLE_DATE_VISIBILITY': {
      return {
        ...state,
        [action.datePart]: !state[action.datePart]
      }
  }
    case 'CLEAR_DATE_VISIBILITY': {
      return {
        ...state,
        day: false,
        month: false,
        year: false
      }
    }
    default: return state
  }
}
export default date
