import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('Filling the SignIn form and pressing submit', () => {
  it('calls onSubmit handler with correct arguments', async () => {
    const mockSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SignInContainer onSubmit={mockSubmit} />);

    fireEvent.changeText(getByPlaceholderText('Username'), 'alpo');
    fireEvent.changeText(getByPlaceholderText('Password'), 'salasana');
    fireEvent.press(getByText('Sign in'));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
      expect(mockSubmit.mock.calls[0][0]).toEqual({
        username: 'alpo',
        password: 'salasana'
      });
    });

    expect(1).toBe(1);
  }); 
});