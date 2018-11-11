import map from 'lodash-es/map';

import { ROLE } from '../../@types';

export interface IIdentityState {
  email?: string;
  avatar?: string;
  isAuth: boolean;
  isLoading: boolean;
  role?: ROLE;
  bearerKey?: string;
  defaultProjectId?: number;
}

export class Identity implements IIdentityState {
  public readonly email: string;
  public readonly avatar?: string;
  public readonly isAuth: boolean = false;
  public readonly isLoading: boolean = false;
  public readonly role: ROLE = ROLE.GUEST;
  public readonly bearerKey: string;
  public readonly defaultProjectId?: number;

  constructor(initial?: Partial<IIdentityState>) {
    map(initial, (val: any, key: string) => {
      this[key] = val;
    });
  }
}
