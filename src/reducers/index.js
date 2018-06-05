import { SAUCE_SELECTED } from '../constants';

const sauce = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const initialState = {
    sauces: 'All',
    selectedType: 'null',
    text: 'text',
};

const sauces = (state = initialState, action) => {
    let sauces = null;
    switch(action.type) {
        case SAUCE_SELECTED:
            return Object.assign(
                {},
                state,
                {
                    selectedType: action.text,
                }
            );
        default:
        return state;
    }
}

export default sauces;