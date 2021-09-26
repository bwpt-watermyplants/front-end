import {
  ADD_PLANT,
  FETCH_PLANTS_START,
  FETCH_PLANTS_SUCCESS,
  FETCH_PLANTS_FAILURE,
  SET_ERROR,
  DELETE_PLANT,
  EDIT_PLANT,
  LOGGED_IN_USER,
  LOGGED_OUT_USER,
} from '../actions';

export const initialState = {
  plants: [],
  isLoading: false,
  errorMsg: '',
  user: {
    username: '',
    phoneNumber: '',
    plants: [
      {
        nickname: 'i am plant',
        id: '213',
        species: 'plant',
        h2oFrequency: '1.5 day(s)',
        currentFreq: '75 day(s)',
      },
    ],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return { ...state, user: { ...state.user, ...action.payload } };
    case LOGGED_OUT_USER:
      return {
        ...state,
        user: {
          username: '',
          phoneNumber: '',
          plants: [],
        },
      };
    case DELETE_PLANT:
      console.log(state.user.plants);
      return {
        ...state,
        user: {
          ...state.user,
          plants: state.user.plants.filter(
            (plant) => plant.id !== action.payload
          ),
        },
      };
    // case ADD_PLANT:
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       plants: [...state.user.plants, action.payload],
    //     },
    //   };
    // case SET_ERROR:
    //   return { ...state, errorMsg: action.payload };
    // case FETCH_PLANTS_START:
    //   return { ...state, isLoading: true };
    // case FETCH_PLANTS_SUCCESS:
    //   return { ...state, isLoading: false, plants: action.payload };
    // case FETCH_PLANTS_FAILURE:
    //   return { ...state, isLoading: false, error: action.payload };
    // case EDIT_PLANT:
    //   return { ...state, isLoading: true, errorMsg: action.payload };
    // case DELETE_PLANT:
    //   const filteredPlant = state.user.plants.filter(
    //     (plant) => plant.id !== action.payload
    //   );
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       filteredPlant,
    //     },
    //   };
    default:
      return state;
  }
};

export default reducer;
