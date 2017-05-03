//import mail check from mailcheck library 
// let mailcheck = require('mailcheck');
import  mailcheck  from 'mailcheck';
export class FormValidation {
    public warning_message: Boolean;
    private _sg: string; //suggestion property
    //getter and setter 
    get sg(): string {
        return this._sg;
    }
    set sg(sug: string) { // set suggestion method
        this._sg = sug;
    }
    static f = new FormValidation();


    static emailValidator(control) {

        var domains = ['gmail.com', 'aol.com'];
        var secondLevelDomains = ['hotmail']
        var topLevelDomains = ["com", "net", "org"];

        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {

            return { 'invalidEmailAddress': true };
        }
        if (!mailcheck.run({
            email: control.value,
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            secondLevelDomains: secondLevelDomains, // optional
            suggested: function (element, suggestion) {
                FormValidation.f.sg = element.full;
                FormValidation.f.warning_message = false;

            },
            empty: function (element) {
                FormValidation.f.warning_message = true;
            }

        }) && FormValidation.f.sg != undefined && FormValidation.f.warning_message != true
        ) {
            return { 'suggestions': true };
        }
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
            'suggestions': 'Oh!! Please check the typo it should be:' + FormValidation.f.sg,
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }
}