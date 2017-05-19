import {expect} from 'chai';
// import {Math0 as math} from '../../src/utils/math';
// import {Math1 as math} from '../../src/utils/math';
// import {Math2 as math} from '../../src/utils/math';
// import {Math3 as math} from '../../src/utils/math';
import {Math4 as math} from '../../src/utils/math';

describe("test addition", () => {

  it('simple addition', () => {
    //Arrange/Act
    const rtnValue = math.parseEquation('1 + 1');

    //Assert
    expect(rtnValue).to.equal(2);
  });

  // it('invalid input', () => {
  //   //Arrange/Act
  //   const rtnValue = math.parseEquation('1 + one');
  //
  //   //Assert
  //   expect(rtnValue).to.equal(NaN);
  // });

  it('invalid input', () => {
    //Arrange/Act
    const rtnValue = math.parseEquation('1 + one');

    //Assert
    expect(rtnValue).to.be.NaN;
  });
  //
  it('invalid input between numbers', () => {
    //Arrange/Act
    const rtnValue = math.parseEquation('1 + 123asdf453');

    //Assert
    expect(rtnValue).to.be.NaN;
  });
});
