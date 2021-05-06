import { useSelector } from 'react-redux';

import UserListItem from '../UserListItem/UserListItem.jsx';

const UserTable = () => {
  const { users, loading } = useSelector((store) => store);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Login</th>
          <th scope='col'>Email</th>
        </tr>
      </thead>
      <tbody>
        {loading
          ? 'Загрузка....'
          : users.map((el, idx) => (
              <UserListItem key={el.id} {...el} idx={idx} />
            ))}
      </tbody>
    </table>
  );
};

export default UserTable;
