"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou A.");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou B.");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou C.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução.");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
