import { ADD_MESSAGE } from '../constants/messages';

const defaultState = [
  {
    id: -1,
    text: 'hello toto'
  }
];

const messages = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          user: action.userName,
          date: action.date
        }
      ];
    default:
      return state;
  }
};

export default messages;
