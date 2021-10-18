import IUser from '../types/IUser';

const getUserForId = (users: IUser[], id: string) : IUser => {
  const user = users.find((u) => u.id === id);
  if (user === undefined) {
    throw new Error(`Could not find user ${id}`);
  }
  return user;
};

export default getUserForId;
