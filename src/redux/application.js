const initialState = {
  loading: false,

  items: [],
  error:false
};

function application(state = initialState, action) {
  switch (action.type) {
    case "cards/load/start":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "cards/load/succeed":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "cards/load/error":
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}

export default application;
