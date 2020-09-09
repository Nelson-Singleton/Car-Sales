//action creator: Function that creates actions
//a function that returns an action object

//add feature on click
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (addedFeature) => {
    return {type: ADD_FEATURE, payload: addedFeature}
}