
/**================================================================ *
   * Email Validation testing  with regular expression 
  =================================================================== */

it('it should return true  Valid email  ', function () {
  function emailValidator(control) {
    /*run real test */
    if (control || control.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }
  expect(emailValidator("firstname+lastname@domain.com")).toBe(null);  //2.Plus sign is considered valid character
  expect(emailValidator("email@domain.com")).toBe(null); //3.Dash in domain name is valid Dash in address field is valid
  expect(emailValidator("email@domain-one.com")).toBe(null);//4.Dash in domain name is valid 
  expect(emailValidator("irstname-lastname@domain.com")).toBe(null);
  expect(emailValidator("1234567890@domain.com")).toBe(null);//Digits in address are valid

});

//---- Email Not Valid Test Cases 

/**================================================================ *
//All cases for not valid / correct 
=================================================================== */
it('it should return false Missing @ sign and domain', function () {
  function emailValidator(control) {
    if (control.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }
  expect(emailValidator("").invalidEmailAddress).toBe(true); //2. @domain.com	Missing username
  expect(emailValidator("@domain.com").invalidEmailAddress).toBe(true); // 3.email.domain.com	Missing 
  expect(emailValidator("email.domain.com").invalidEmailAddress).toBe(true);  //4. email..email@domain.com	Multiple dots
  expect(emailValidator("email@domain..com").invalidEmailAddress).toBe(true);  //5. email@domain..com	Multiple dot in the domain portion is invalid
});

/**================================================================ *
  --------------PASSWORD VALIDATION TESTING----------------------
=================================================================== */
it('it should return true Valid Password  ', function () {
  function passwordValidator(control) {
    if (control.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }
  expect(passwordValidator("abcdABCD1")).toBe(null);
  expect(passwordValidator("123abcd")).toBe(null);
  expect(passwordValidator("ABCD1234abcd")).toBe(null);
});
/**================================================================ *
  ---Not Valid Cases 
=================================================================== */
it('it should return false Valid Password  ', function () {
  function passwordValidator(control) {
    if (control.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }
  expect(passwordValidator("abcd").invalidPassword).toBe(true);
  expect(passwordValidator("12345").invalidPassword).toBe(true);
  expect(passwordValidator("ABCD").invalidPassword).toBe(true);
});