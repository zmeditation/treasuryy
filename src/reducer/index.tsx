const initialState = {
  userDisconnected: false,
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case 'SET_USERDISCONNECTED':
      return {
        ...state,
        userDisconnected: action.payload,
      }
    default:
      return state
  }
}
