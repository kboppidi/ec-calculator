export default (state, action) => {
  switch (action.type) {
    case 'ResetValues':
      return {
        ...state
      }
    
    default:
      return state;
  }
}