import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const getData = () => {
    
  return dispatch => {
      dispatch({ type: FETCH_START });

      axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res=>{
          console.log(res)
          dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch(err =>{
          console.log(err)
      })
  }
}
   
     

