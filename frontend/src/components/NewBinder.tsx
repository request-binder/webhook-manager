import { useNavigate } from 'react-router-dom';
import { createBinder } from '../services/binderService';

const NewBinder = () => {
  const navigate = useNavigate();

  const submitHandler = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const endpoint = await createBinder();
    if (endpoint) {
      navigate(`/${endpoint}`);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <button type='submit'>Create New Binder</button>
      </form>
    </>
  );
};

export default NewBinder;