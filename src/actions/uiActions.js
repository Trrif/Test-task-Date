const TOGGLE_DATE_VISIBILITY = 'TOGGLE_DATE_VISIBILITY'
const CLEAR_DATE_VISIBILITY = 'CLEAR_DATE_VISIBILITY'

export function clearDateVisibility () {
  return {
    type: CLEAR_DATE_VISIBILITY
  }
}
export function toggleDateVisibility (datePart) {
  return {
    type: TOGGLE_DATE_VISIBILITY,
    datePart
  }
}