// Define the todoReducer
import { Animal, ZooAction, ZooActionTypes, ZooState } from './types';

export const initialState: ZooState = {
  animals: [{ id: 1, text: 'kiskutya' }],
};
const todoReducer = (
  state: ZooState = initialState,
  action: ZooAction,
): ZooState => {
  switch (action.type) {
    case ZooActionTypes.ADD:
      // eslint-disable-next-line no-case-declarations
      const newAnimal: Animal = {
        id: state.animals.length + 1,
        text: action.payload.text,
      };
      return {
        ...state,
        animals: [...state.animals, newAnimal],
      };

    case ZooActionTypes.DELETE:
      return {
        ...state,
        animals: state.animals.filter(
          (deleted) => deleted.id !== action.payload.id,
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
