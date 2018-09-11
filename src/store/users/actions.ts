import { requestActions } from 'src/store/@common/requestActions';
import { IUser } from './User';

export const fetchUsers = requestActions('USERS/FETCH_ALL', () => ({
  request: {
    url: '/users',
  },
}));

export const patchUser = requestActions('USERS/PATCH', ({ user, role }: { user: IUser; role: string }) => ({
  request: {
    data: { role },
    method: 'patch',
    url: `/users/${user.id}`,
  },
  role,
  success: {
    message: `Роль пользователя ${user.email} успешна изменена на "${role}"`,
    title: 'Успех!',
  },
  user,
}));

export const deleteUser = requestActions('USERS/DELETE', (userId: number) => ({
  request: {
    method: 'delete',
    url: `/users/${userId}`,
  },
  userId,
}));
