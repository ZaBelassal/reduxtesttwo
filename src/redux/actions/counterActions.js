import { INCREMENT,DECREMENT,INCREMENTBY } from "./types";

export const incrementAction = () => {

    return {

        type :INCREMENT
    }

}

export const decrementAction = () => {

    return {
        type : DECREMENT
    }

}

export const incrementbyAction = () => {

    return {
        type : INCREMENTBY
    }

}