import '@testing-library/jest-dom';
import App from './App';
import React from 'react';
import { render } from '@testing-library/react'

test('App Renders without Errors' , () => {
    render(<App/>)
}) 