const initialState = [];

const favoriteCitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE_CITY':
            return [...state, action.payload];
        case 'REMOVE_FAVORITE_CITY':
            return state.filter(city => city !== action.payload);
        default:
            return state;
    }
}

export default favoriteCitiesReducer;
