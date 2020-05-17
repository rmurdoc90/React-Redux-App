import { FETCH_START, FETCH_SUCCESS } from '../actions/index'
const initialState = {
        isFetching: false,
        data:''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return{
                ...state, 
                isFetching:true
            }
        case FETCH_SUCCESS:
            return{
                ...state, 
                data: action.payload,
                isFetching:false
            }
        default:
            return state;    
    }
}