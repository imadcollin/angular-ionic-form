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
