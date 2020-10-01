const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      //   console.log(action.payload);
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const usersIds = data.map((user) => user.id);
    dispatch(fetchUsersSuccess(usersIds));
  } catch (err) {
    dispatch(fetchUsersFailure(err.message));
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
// unsubscribe();
