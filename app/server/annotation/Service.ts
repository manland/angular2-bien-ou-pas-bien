import {Injector, provide, Type, ReflectiveInjector} from "@angular/core";

let clazz: Array<any> = [];
let injector: Injector;

export interface staticApplication {
    new(...args: any[]): Application;
}

export interface Application {
    start(): any;
}

export function start(application: staticApplication) {
    clazz.push(application);
    injector = ReflectiveInjector.resolveAndCreate(clazz);
    injector.get(application).start();
}

export interface ServiceParams {
    token: Type;
}

export function Service(serviceParams?: ServiceParams) {
    return (target: any) => {
        if(serviceParams) {
            clazz.push(provide(serviceParams.token, {useClass: target, multi: true}));
        } else {
            clazz.push(target);
        }
        return target;
    }
}