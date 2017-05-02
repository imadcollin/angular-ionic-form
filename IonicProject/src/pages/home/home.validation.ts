//import mail check from mailcheck library 
let mailcheck = require('mailcheck');

export class FormValidation {

    static emailValidator(control) {
      
        var domains = ['gmail.com', 'aol.com'];
        var secondLevelDomains = ['hotmail']
        var topLevelDomains = ["com", "net", "org"];

        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
            
            return { 'invalidEmailAddress': true };
        }
          if(mailcheck.run({
                email: control.value,
                domains: domains,                       // optional
                topLevelDomains: topLevelDomains,       // optional
                secondLevelDomains: secondLevelDomains, // optional

            })) 
            return{  'typeoError': true}

            else
                return null; 
            
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidEmailAddress': 'Invalid email address',
            'typeoError': 'Invaalid typeo please provide correct typo',

            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }
}