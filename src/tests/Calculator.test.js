import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers together', ()=>{
    const button1= container.getByTestId('number1');
    const buttonPlus= container.getByTestId('operator-add');
    const button4= container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract two numbers from eachother', ()=>{
    const button7= container.getByTestId('number7');
    const buttonSubtract= container.getByTestId('operator-subtract');
    const button4= container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply two numbers together', ()=>{
    const button3= container.getByTestId('number3');
    const buttonMultiply= container.getByTestId('operator-multiply');
    const button5= container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide two numbers together', ()=>{
    const button3= container.getByTestId('number3');
    const button7= container.getByTestId('number7');
    const buttonMultiply= container.getByTestId('operator-multiply');
    const buttonDivide= container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number clicks', ()=>{
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(button4);
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('444');
  })
  
  it('should use previous operator if another is clicked', ()=>{
    const button4 = container.getByTestId('number4');
    const buttonMultiply= container.getByTestId('operator-multiply');
    const buttonPlus= container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonMultiply);
    expect(runningTotal.textContent).toEqual('8');
  })
  
  it('should clear running total without affecting calculation', ()=>{
    const button4 = container.getByTestId('number4');
    const buttonPlus= container.getByTestId('operator-add');
    const buttonClear= container.getByTestId('clear');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('12');
  })
})

