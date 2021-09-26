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
  WATER_PLANT,
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
        h2oFrequency: 1.5,
        currentFreq: '0.75 day(s)',
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
    case ADD_PLANT:
      return {
        ...state,
        user: {
          ...state.user,
          plants: [...state.user.plants, action.payload],
        },
      };
    case DELETE_PLANT:
      return {
        ...state,
        user: {
          ...state.user,
          plants: state.user.plants.filter(
            (plant) => plant.id !== action.payload
          ),
        },
      };
    case WATER_PLANT:
      return {
        ...state,
        user: {
          ...state.user,
          plants: [
            ...state.user.plants.map((plant) => {
              if (plant.id === action.payload) {
                console.log(plant.h2oFrequency);
                return {
                  ...plant,
                  currentFreq: `${plant.h2oFrequency} day(s)`,
                };
              }
              return plant;
            }),
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;
