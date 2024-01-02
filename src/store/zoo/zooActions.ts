import { ZooAction, ZooActionTypes } from './types';

export const addAnimal = (text: string): ZooAction => {
  return {
    type: ZooActionTypes.ADD,
    payload: { text },
  };
};

export const deleteAnimal = (id: number): ZooAction => {
  return {
    type: ZooActionTypes.DELETE,
    payload: { id },
  };
};
