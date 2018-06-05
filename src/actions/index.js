import { SAUCE_SELECTED } from '../constants';

export const sauceSelected = (text) => {
    return {
        type: SAUCE_SELECTED,
        text: text
    }
}