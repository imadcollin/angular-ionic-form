/**================================================================ *
 * This is an initial test for Home page logic 
=================================================================== */
describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});


/**================================================================ *
  * Inject the HTML fixture for the tests
 =================================================================== */
describe('HTML Injection', function () {
  beforeEach(function () {
    var fixture = '<div id="fixture"><input id="x" type="text">' +
      '<input id="y" type="text">' +
      '<input id="add" type="button" value="Add Numbers">' +
      'Result: <span id="result" /></div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });
  // remove the html fixture from the DOM
  afterEach(function () {
    document.body.removeChild(document.getElementById('fixture'));
  });

  /**================================================================ *
    * Email Validation testing 
   =================================================================== */
  let config = {
    'required': 'Required',
    'invalidEmailAddress': 'Invalid email address',
    'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
  };
  // Check the mail function with null return value 
  it('it should return true for email null ', function () {
    function emailValidator(control) {
      let config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address',
        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
      };
      /*run stupid test */
      if (control > 4) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }
    var x = document.getElementById('x').value = 5;

    expect(emailValidator(x)).toBe(null);/* Not true x is 5 so return null */
  });

  /**================================================================ *
     * Email Validation testing  with regular expression 
    =================================================================== */

  /**
   * TypeError: Cannot read property 'match' of undefined
   * Match should be defined somehow here in order to use.
   * Resualt : test failed 
   */
  it('it should return true for email null ', function () {
    function emailValidator(control) {
      /*run real test */
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }
    var x = document.getElementById('x').value = 5;

    expect(emailValidator(x)).toBe(null);/* Not true x is 5 so return null */
  });
  /**================================================================ *
     * Email Validation test cases
    =================================================================== */
  //1. email@domain.com	 is  Valid email
  //2. firstname+lastname@domain.com	Plus sign is considered valid character
  //3. email@domain-one.com	Dash in domain name is valid
  //4. irstname-lastname@domain.com	Dash in address field is valid
  //5. 1234567890@domain.com	Digits in address are valid

  /**================================================================ *
     * Email Not valid  test cases
    =================================================================== */
  //1. plainaddress	Missing @ sign and domain
  //2. @domain.com	Missing username
  //3. email.domain.com	Missing @
  //4. email..email@domain.com	Multiple dots
  //5. email@domain..com	Multiple dot in the domain portion is invalid



/**
 * Component testing not working properly 
 * The problem was detected :
 * "uncaught referenceerror: exports is not defined"
 * This error is related to typescript or ionic version 
 * This bug was for many other people 
 * for checking the document and reading about this please check this link 
 * https://github.com/monounity/karma-typescript/issues/111
 */

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By }              from '@angular/platform-browser';
// import { DebugElement }    from '@angular/core';

// import { HomePage } from '../src/pages/home/home';

// describe('BannerComponent (inline template)', () => {

//   let _homePage:    HomePage;
//   let fixture: ComponentFixture<HomePage>;
//   let de:      DebugElement;
//   let el:      HTMLElement;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomePage ], // declare the test component
//     });

//     fixture = TestBed.createComponent(HomePage);

//     _homePage = fixture.componentInstance; //  test instance

//     // query for the title <h1> by CSS element selector
//     de = fixture.debugElement.query(By.css('h1'));
//     el = de.nativeElement;
//   });

//   it('Email funtion test', () => {
//     //_formValidation. 
//     expect(_homePage.myForm).toBeNull;
//   });

// });
