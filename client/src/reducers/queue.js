import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  SESSION_SUCCESS,
  SESSION_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
} from '../actions/types';

// Initial state
const initialState = {
  messages: [],
};

// Update state
export default function watsonReducer(state = initialState, action) {
  const { type, payload } = action;
  let { messages } = state;

  switch (type) {
    case INPUT_SUCCESS:
      messages = [...messages, { message: payload, type: 'user' }];
      return {
        ...state,
        messages,
      };
    case INPUT_FAIL:
      return {
        ...state,
      };
    case SESSION_SUCCESS:
      localStorage.setItem('session', payload.session_id);
      window.location.reload();
      return {
        ...state,
      };
    case SESSION_FAIL:
      return {
        ...state,
      };
    case MESSAGE_SUCCESS:
      messages = [
        ...messages,
        {
          // message:
          //   payload.generic[0].response_type === 'text'
          //     ? payload.generic[0].text
          //     : [...payload.generic[0].suggestions],
          message:
          payload.generic.length >=2 
          ? payload.generic
          : payload.generic[0].response_type === 'text'
              ? payload.generic[0].text
              : [...payload.generic[0].suggestions],
          type: 'bot',
          // msgType: payload.generic[0].response_type,
          msgType: payload.generic.length >=2 ? "MULTIPLE" : payload.generic[0].response_type,
        },
      ];
      console.log('payload', payload);
      return {
        ...state,
        messages,
      };
    case MESSAGE_FAIL:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
