import {INCREMENT, DECREMENT, INCREMENTBY} from '../actions/types'

const initialState = {

    count :0

}

export const counterReducer = (state=initialState,action) => {
    switch(action.type){

    case INCREMENT :
        return {
            count : state.count+1
        }

    case DECREMENT :
        return {
            count:state.count-1
        }

    case INCREMENTBY :
        return {
            count:state.count+5
        }
    
    default :
    return state

    }
}