import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Update from './../../../screens/Update/Update';
import ReactRouter from 'react-router';

describe('saveUser', () => {
  beforeEach(() => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({});
  });

  afterEach(cleanup);

  it('to have 1 header', () => {
    const { container } = render(
      <Update setNewFriendScreen={() => {}} newFriendScreen={false} />,
    );
    expect(container.getElementsByClassName('header').length).toBe(1);
  });

  it('to have 1 user-form', () => {
    const { container } = render(
      <Update setNewFriendScreen={() => {}} newFriendScreen={false} />,
    );
    expect(container.getElementsByClassName('user-form').length).toBe(1);
  });

  it('to have 1 friends-list', () => {
    const { container } = render(
      <Update setNewFriendScreen={() => {}} newFriendScreen={false} />,
    );
    expect(container.getElementsByClassName('friends-list').length).toBe(1);
  });
});
