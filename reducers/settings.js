import * as CONST from '../utils/constants'

const initialState = {
    bgColor: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONST.CHANGE_COLOR:
            return {
                ...state,
                bgColor: action.payload,
            }
        default:
            return state
    }
}
