import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Home from '../pages/Home';

afterEach(cleanup);

const setup = () => {
    const utils = render(<Home />)
    //const {rerender} = render(<Home/>)
    
    const inputUsername = utils.getByLabelText('username')
    const inputPassword = utils.getByLabelText('password')
    return {
      inputUsername,
      inputPassword,
      ...utils,
      //rerender
    }
}


test('Error username appear', () => {
    const {inputUsername,inputPassword} = setup()
    fireEvent.change(inputUsername, {target: {value: 'azer'}})
    expect(inputUsername.value).toBe('azer')
    fireEvent.change(inputPassword, {target: {value: 'azer'}})
    expect(inputPassword.value).toBe('azer')
    fireEvent.click(screen.getByText('Login'))

    //const error = screen.getByText("Username is required" )

    
  });

it('Button Login is clickable', () => {
  
    render(<Home />)

    const inputNode = screen.getByRole('button', { name: "Login" })

    expect(inputNode).not.toBeDisabled()
  });