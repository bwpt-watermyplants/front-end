import {
  ADD_PLANT,
  FETCH_PLANTS_START,
  FETCH_PLANTS_SUCCESS,
  FETCH_PLANTS_FAILURE,
  SET_ERROR,
  DELETE_PLANT,
  EDIT_PLANT,
} from '../actions';

export const initialState = {
  plants: [{ nickname: 'i am plant' }],
  isLoading: false,
  errorMsg: '',
  user: {
    username: '',
    phoneNumber: '',
    plants: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANT:
      return {
        ...state,
        user: {
          ...state.user,
          plants: [...state.user.plants, action.payload],
        },
      };
    case SET_ERROR:
      return { ...state, errorMsg: action.payload };
    case FETCH_PLANTS_START:
      return { ...state, isLoading: true };
    case FETCH_PLANTS_SUCCESS:
      return { ...state, isLoading: false, plants: action.payload };
    case FETCH_PLANTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case EDIT_PLANT:
      return { ...state, isLoading: true, errorMsg: action.payload };
    case DELETE_PLANT:
      const filteredPlant = state.user.plants.filter(
        (plant) => plant.id !== action.payload
      );
      return {
        ...state,
        user: {
          ...state.user,
          filteredPlant,
        },
      };
    default:
      return state;
  }
};

export default reducer;
