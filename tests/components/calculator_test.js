import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Calculator from '../../src/components/calculator';
// import {Math2 as math} from '../../src/utils/math';
import {Math4 as math} from '../../src/utils/math';
import sinon from 'sinon';

describe('test addition component', () => {
  let subject;
  let mockParseEquation;
  beforeEach(() => {
    //Arrange
    subject = shallow(<Calculator/>);
    mockParseEquation = sinon.stub(math, "parseEquation");
  });

  afterEach(() => {
    mockParseEquation.restore();
  });

  it('calls math function on click with correct values', () => {

    //Arrange
    subject.setState({equation:'1 + 1'})

    //Act
    subject.find('button').simulate('click');

    //Assert
    expect(mockParseEquation.calledOnce).to.be.true;
    expect(mockParseEquation.getCall(0).args[0]).to.equal('1 + 1');
  });

  it('displays result of math utility', () => {
    //Arrange
    mockParseEquation.returns(2);

    //Act
    subject.find('button').simulate('click');

    //Assert
    const resultText = subject.find('.result').text();
    expect(resultText).to.equal('2');
  });
  //
  it('displays error message when given invalid equation', () => {
    //Arrange
    mockParseEquation.returns(NaN);

    //Act
    subject.find('button').simulate('click');

    //Assert
    const errorMessage = subject.find('.error-message').text();
    expect(errorMessage).to.equal('Invalid input. Please input only numbers.');
  });
});
