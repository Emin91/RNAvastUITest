import * as CONST from '../utils/constants'

export const changeColor = (value) => ({
    type: CONST.CHANGE_COLOR,
    payload: value,
})