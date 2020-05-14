import *  as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, text, author) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text,
    }
});