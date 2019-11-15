export const authReducer = (state = {
  loggedIn: false
}, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
    case 'TOKEN_RETRIVED_SUCCESS':
    case 'LOGIN_FAILED':
    case 'REGISTER_FAILED':
    case 'REGISTER_SUCCESS':
      return { ...state, ...payload }
  }
  return state
}

export const appReducer = (state = {}, { type, payload }) => {
  return state
}