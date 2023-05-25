import { createBinder } from '../services/binderService';

const NewBinder = () => {
  return (
    <>
      <button onClick={createBinder} >Create New Binder</button>
    </>
  );
};

export default NewBinder;