import { useState } from 'react';

const UserListItem = ({ idx, name, username, email }) => {
  const [active, setActive] = useState(false);

  const userAtive = () => {
    setActive((prev) => !prev);
  };

  const style = active ? 'active' : '';

  return (
    <tr onClick={userAtive} className={style}>
      <th scope='row'>{idx + 1}</th>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserListItem;
