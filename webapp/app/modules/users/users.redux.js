import { fromJS, Map, Record } from 'immutable';
import { createActions, createReducer } from 'reduxsauce';
import { UserAuthTypes } from '../userAuth/userAuth.redux';

export const {
  Types: UsersTypes,
  Creators: UsersActions,
} = createActions({
  createUser: ['user'],
}, { prefix: 'USERS_' });

const UserAuthRecord = new Record({
  items: Map(),
}, 'users');

const INITIAL_STATE = new UserAuthRecord();

const signOut = (state) => state.merge(INITIAL_STATE);

export const reducer = createReducer(INITIAL_STATE, {
  [UserAuthTypes.SIGN_OUT]: signOut,
}, { types: UsersTypes });
