import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style';
import QuestionCounter from './QuestionCounter';

describe('QuestionCoutner', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <QuestionCounter currentQuestion={2} amount={10} score />
      </ThemeProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render 0 if amount is lower than 10', () => {
    render(
      <ThemeProvider theme={theme}>
        <QuestionCounter currentQuestion={2} amount={9} score />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('question-counter-span')).toHaveTextContent('02');
  });

  it('should not render 0 if amout is higher/equal than 10', () => {
    render(
      <ThemeProvider theme={theme}>
        <QuestionCounter currentQuestion={10} amount={11} score />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('question-counter-span')).toHaveTextContent('10');
  });
});
