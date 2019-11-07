import {SHOW_TRACK} from '../action/action';

let intialState = []
const showTrack = (state = intialState, action) => {
  switch(action.type){
    case SHOW_TRACK:
      return [...state, ...action.payload]
    default :
      return state;
    }
};

export default showTrack;
