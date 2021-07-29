import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { saveUser, editUser, deleteUser } from './../../../domains/user/index';

const mockUser = { id: 1234, name: 'pasquale', friends: [] };

describe('saveUser', () => {
  beforeEach(() => {
    window.localStorage.__proto__.setItem = jest.fn();
    window.localStorage.__proto__.getItem = jest.fn().mockReturnValue([]);
  });

  afterEach(cleanup);

  it('calls localstorage setitem', () => {
    const setItem = jest.spyOn(window.localStorage.__proto__, 'setItem');
    const user = { id: '1234', name: 'pippo', friends: [] };
    saveUser(user);
    expect(setItem).toHaveBeenCalledWith('users', JSON.stringify([user]));
  });

  it('return true', () => {
    const setItem = jest.spyOn(window.localStorage.__proto__, 'setItem');
    const user = { id: '1234', name: 'pippo', friends: [] };
    expect(saveUser(user)).toEqual(true);
  });

  it('return user already existing if user.name is duplicated', () => {
    const setItem = jest.spyOn(window.localStorage.__proto__, 'setItem');
    saveUser(mockUser);
    expect(saveUser(mockUser)).toEqual('user already existing');
  });
});

describe('editUser', () => {
  beforeEach(() => {
    window.localStorage.__proto__.setItem = jest.fn();
    window.localStorage.__proto__.getItem = jest
      .fn()
      .mockReturnValue([mockUser]);
  });

  afterEach(cleanup);

  it('calls localstorage setitem', () => {
    const setItem = jest.spyOn(window.localStorage.__proto__, 'setItem');
    const user = { id: 1234, name: 'pippo', friends: [] };
    editUser(user);
    expect(setItem).toHaveBeenCalledWith('users', JSON.stringify([user]));
  });

  it('returns true', () => {
    const user = { id: 1234, name: 'pippo', friends: [] };
    expect(editUser(user)).toEqual(true);
  });

  it('returns user not found if user is not foud', () => {
    const user = { id: 213123, name: 'pippo', friends: [] };
    expect(editUser(user)).toEqual('user not found');
  });
});

describe('deleteUser', () => {
  beforeEach(() => {
    window.localStorage.__proto__.setItem = jest.fn();
    window.localStorage.__proto__.getItem = jest
      .fn()
      .mockReturnValue([mockUser]);
  });

  afterEach(cleanup);

  it('calls localstorage setitem', () => {
    const setItem = jest.spyOn(window.localStorage.__proto__, 'setItem');
    deleteUser(mockUser);
    expect(setItem).toHaveBeenCalledWith('users', JSON.stringify([]));
  });

  it('returns true', () => {
    expect(deleteUser(mockUser)).toEqual(true);
  });

  it('returns user not found if user is not foud', () => {
    const user = { id: 213123, name: 'pippo', friends: [] };
    expect(deleteUser(user)).toEqual('user not found');
  });
});
