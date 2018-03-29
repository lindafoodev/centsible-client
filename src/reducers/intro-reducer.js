import {
  SHOW_INTRO_START,
  SHOW_NEXT_INTRO,
} from "../actions/intro-page";

const initialState = {
  introCard: [
    {number: 0, title: 'So You Want to Be An Investor...', details: 'There are a couple of things you should know about to get started.'},
    {number: 1, title: 'Stocks', details: 'Stocks Lorem Ipsum Concise'},
    {number: 2, title: 'Bonds', details: 'Bonds Lorem Ipsum Concise'},
    {number: 3, title: 'Managed Fund', details: 'Managed Fund Lorem Ipsum Concise'}],
  numCard: 0
};

export function introReducer(state = initialState, action) {
  if (action.type === SHOW_INTRO_START) {
    return Object.assign({}, state, {
      introCard: action.introCard
  });
  } else if (action.type === SHOW_NEXT_INTRO) {
    return Object.assign({}, state, {
      introCard: action.introCard,
      numCard: action.numCard + 1
    });
  } /*else if (action.type === ) {
    return Object.assign({}, state, {
      
    });
  }*/ else {
    return state;
  }
}

export default introReducer;
