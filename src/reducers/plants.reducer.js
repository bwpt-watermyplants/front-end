const initialState = [
  {
    id: 0,
    nickname: 'the snack',
    species: 'handsome',
    h2oFrequency: '2 days',
    image: 'optional',
  },
  {
    id: 1,
    nickname: 'the snack',
    species: 'handsome',
    h2oFrequency: '2 days',
    image: 'optional',
  },
];

export const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
