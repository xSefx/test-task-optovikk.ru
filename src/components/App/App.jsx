import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUsers } from '../../redux/actions/usersActions.js';

import UserTable from '../UserTable/UserTable.jsx';

const App = () => {
  const dispatch = useDispatch();
  const {  error } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div>{error ? 'Ошибка' : <UserTable />}</div>;
};

export default App;
