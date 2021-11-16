(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_network-error-request-code_network-error-request-code_module_ts"],{

/***/ 91162:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/network-error-request-code/network-error-request-code-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorRequestCodePageRoutingModule": () => (/* binding */ NetworkErrorRequestCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _network_error_request_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-error-request-code.page */ 74106);




const routes = [
    {
        path: '',
        component: _network_error_request_code_page__WEBPACK_IMPORTED_MODULE_0__.NetworkErrorRequestCodePage,
    },
];
let NetworkErrorRequestCodePageRoutingModule = class NetworkErrorRequestCodePageRoutingModule {
};
NetworkErrorRequestCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NetworkErrorRequestCodePageRoutingModule);



/***/ }),

/***/ 56667:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/network-error-request-code/network-error-request-code.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorRequestCodePageModule": () => (/* binding */ NetworkErrorRequestCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _network_error_request_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-error-request-code-routing.module */ 91162);
/* harmony import */ var _network_error_request_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-error-request-code.page */ 74106);







let NetworkErrorRequestCodePageModule = class NetworkErrorRequestCodePageModule {
};
NetworkErrorRequestCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _network_error_request_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkErrorRequestCodePageRoutingModule,
        ],
        declarations: [_network_error_request_code_page__WEBPACK_IMPORTED_MODULE_1__.NetworkErrorRequestCodePage],
    })
], NetworkErrorRequestCodePageModule);



/***/ }),

/***/ 74106:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/network-error-request-code/network-error-request-code.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorRequestCodePage": () => (/* binding */ NetworkErrorRequestCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_network_error_request_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./network-error-request-code.page.html */ 60988);
/* harmony import */ var _network_error_request_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-error-request-code.page.scss */ 27129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let NetworkErrorRequestCodePage = class NetworkErrorRequestCodePage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].network_error_request_code_page;
        });
    }
    confirm() {
        this.route.navigate(['/request-access-code']);
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
};
NetworkErrorRequestCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NetworkErrorRequestCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-network-error-request-code',
        template: _raw_loader_network_error_request_code_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_network_error_request_code_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NetworkErrorRequestCodePage);



/***/ }),

/***/ 27129:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/network-error-request-code/network-error-request-code.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldHdvcmstZXJyb3ItcmVxdWVzdC1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJmaWxlIjoibmV0d29yay1lcnJvci1yZXF1ZXN0LWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cbi5saXN0LXF1ZXN0aW9uIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4ubmV4dC1idG4ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5wIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 60988:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/network-error-request-code/network-error-request-code.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <p>{{results.first_para}}</p>\n\n  <p>{{results.sec_para}}</p>\n\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\n    {{results.rbtn}}\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\">\n        <ion-button color=\"dark\" (click)=\"confirm()\">\n          {{results.try_again}}\n          <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"printbtn   ()\">\n          {{results.print}}\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_network-error-request-code_network-error-request-code_module_ts.js.map