import {provide, Directive, forwardRef} from "@angular/core";
import {Control, NG_VALIDATORS} from "@angular/common";

function validateUrlFactory() {
    return (c: Control) => {
        let URL_REGEXP = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

        return URL_REGEXP.test(c.value) ? null : {
            validateUrl: {
                valid: false
            }
        };
    };
}

@Directive({
    selector: '[validateUrl][ngControl],[validateUrl][ngModel],[validateUrl][ngFormControl]',
    providers: [
        provide(NG_VALIDATORS, {
            useExisting: forwardRef(() => UrlValidator),
            multi: true
        })
    ]
})
export class UrlValidator {

    validator: Function;

    constructor() {
        this.validator = validateUrlFactory();
    }

    validate(c: Control) {
        return this.validator(c);
    }
}