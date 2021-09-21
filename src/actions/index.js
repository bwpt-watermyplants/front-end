import axios from 'axios';
import React, { useParams } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
//THUNKY FUN
export const ADD_PLANT = 'ADD_PLANT';
export const SET_ERROR = 'SET_ERROR';
export const FETCH_PLANTS_START = 'FETCH_PLANTS_START';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANTS_FAILURE';
export const DELETE_PLANT = 'DELETE_PLANT';
export const ADD_USER = 'ADD_USER';
export const EDIT_PLANT = 'EDIT_PLANT';
//...add a new plant into our object
export const addPlant = (plant) => (dispatch) => {
  dispatch({ type: ADD_PLANT, payload: plant });
};
export const createPlant = (nickname, species_name, water, description) => {
  const newPlant = {
    nickname: nickname,
    species: species_name,
    water: water,
    description: description,
  };
  return { type: ADD_PLANT, payload: newPlant };
};
// Error Message
export const setErrorMsg = (errorMsg) => {
  return { type: SET_ERROR, payload: errorMsg };
};
//API fetch function
export const fetchPlants = () => (dispatch) => {
  dispatch({ type: FETCH_PLANTS_START });
  //fetch the api here
  axios
    .get(``)
    .then((res) => {
      dispatch({ type: FETCH_PLANTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log('error: ', err);
      dispatch({ type: FETCH_PLANTS_FAILURE, payload: err });
    });
};
// export const deletePlant = (plantId) => (dispatch) => {
//     axios.delete(`https://water-my-plants-build.herokuapp.com/plants/${plantId}`)
//         .then( res => {
//             dispatch({type: DELETE_PLANT})
//         })
//         .catch(err => console.log(err))
// }
export const editPlant = () => (dispatch) => {
  dispatch({ type: EDIT_PLANT });
  const { id } = useParams();
  axios
    .put(``)
    .then((res) => {
      dispatch({ type: EDIT_PLANT });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PLANTS_FAILURE, payload: err });
      console.log('error: ', err);
    });
};
export const deletePlant = (plantId) => (dispatch) => {
  dispatch({ type: DELETE_PLANT, payload: plantId });
};
