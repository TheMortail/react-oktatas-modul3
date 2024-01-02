import { Action } from 'redux';

export type Animal = {
  id: number;
  text: string;
};
export enum ZooActionTypes {
  ADD = 'ADD',
  DELETE = 'DELETE',
}

type AddAnimalAction = Action<ZooActionTypes.ADD> & {
  payload: { text: string };
};

type DeleteAnimalAction = Action<ZooActionTypes.DELETE> & {
  payload: { id: number };
};

export type ZooAction = AddAnimalAction | DeleteAnimalAction;

export type ZooState = {
  animals: Animal[];
};
