import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAnimals } from '../../store/zoo/zooSelector';
import { addAnimal, deleteAnimal } from '../../store/zoo/zooActions';

const ZooComponent: FC = () => {
  const dispatch = useDispatch();
  const animals = useSelector(selectAnimals);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddAnimal = () => {
    if (inputRef.current?.value) {
      dispatch(addAnimal(inputRef?.current?.value.trim() || ''));
      inputRef.current!.value = '';
    }
  };

  const handleDeleteAnimal = (id: number) => {
    dispatch(deleteAnimal(id));
  };

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <div>
        <h1>Zoo</h1>
        <ul>
          {animals.map((animal) => (
            <li key={animal.id}>
              {animal.text}
              <button
                onClick={() => handleDeleteAnimal(animal.id)}
                style={{ float: 'right' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div>
          <input ref={inputRef} type="text" />
          <button onClick={handleAddAnimal}>Add Animal</button>
        </div>
      </div>
    </div>
  );
};

export default ZooComponent;
