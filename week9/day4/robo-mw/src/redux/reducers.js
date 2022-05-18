const initialStateSearch = {
  searchField: '',
  users: []
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case 'CHANGE_SEARCHFIELD':
      return { ...state, users: searchField: action.payload }
    default:
      return { ...state }
  }
}
