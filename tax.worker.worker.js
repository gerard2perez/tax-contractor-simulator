/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tax/book-keeping/boo-keeping.ts":
/*!*********************************************!*\
  !*** ./src/tax/book-keeping/boo-keeping.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookKeeping": () => (/* binding */ BookKeeping)
/* harmony export */ });
/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: boo-keeping.ts
Created:  2022-03-19T05:32:25.895Z
Modified: 2022-03-27T09:09:03.379Z
*/
var BookKeeping = /** @class */ (function () {
    function BookKeeping() {
        this.income = 0;
        this.expenses = 0;
        this.ivaOnFavor = 0;
        this.ivaOnCharge = 0;
    }
    Object.defineProperty(BookKeeping.prototype, "gravableIncome", {
        get: function () {
            return this.income - this.expenses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BookKeeping.prototype, "facturated", {
        get: function () {
            return this.income + this.ivaOnCharge;
        },
        enumerable: false,
        configurable: true
    });
    BookKeeping.prototype.plus = function (right) {
        var ctrName = right.constructor.name;
        if (ctrName === 'Income') {
            this.ivaOnCharge += right.iva;
            this.income += right.isr;
        }
        else {
            this.ivaOnFavor += right.iva;
            this.expenses += right.isr;
        }
        return this;
    };
    return BookKeeping;
}());



/***/ }),

/***/ "./src/tax/book-keeping/income.ts":
/*!****************************************!*\
  !*** ./src/tax/book-keeping/income.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Income": () => (/* binding */ Income)
/* harmony export */ });
/* harmony import */ var _iva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iva */ "./src/tax/book-keeping/iva.ts");
/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movement */ "./src/tax/book-keeping/movement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: income.ts
Created:  2022-03-19T05:16:25.721Z
Modified: 2022-03-26T06:44:16.806Z
*/


var Income = /** @class */ (function (_super) {
    __extends(Income, _super);
    function Income(amount, iva) {
        if (iva === void 0) { iva = _iva__WEBPACK_IMPORTED_MODULE_0__.IVA.extranjero; }
        return _super.call(this, amount, iva) || this;
    }
    return Income;
}(_movement__WEBPACK_IMPORTED_MODULE_1__.Movement));



/***/ }),

/***/ "./src/tax/book-keeping/index.ts":
/*!***************************************!*\
  !*** ./src/tax/book-keeping/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookKeeping": () => (/* reexport safe */ _boo_keeping__WEBPACK_IMPORTED_MODULE_0__.BookKeeping),
/* harmony export */   "IVA": () => (/* reexport safe */ _iva__WEBPACK_IMPORTED_MODULE_2__.IVA),
/* harmony export */   "IVAData": () => (/* reexport safe */ _iva__WEBPACK_IMPORTED_MODULE_2__.IVAData),
/* harmony export */   "Income": () => (/* reexport safe */ _income__WEBPACK_IMPORTED_MODULE_1__.Income),
/* harmony export */   "Movement": () => (/* reexport safe */ _movement__WEBPACK_IMPORTED_MODULE_3__.Movement),
/* harmony export */   "Outcome": () => (/* reexport safe */ _outcome__WEBPACK_IMPORTED_MODULE_4__.Outcome)
/* harmony export */ });
/* harmony import */ var _boo_keeping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boo-keeping */ "./src/tax/book-keeping/boo-keeping.ts");
/* harmony import */ var _income__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income */ "./src/tax/book-keeping/income.ts");
/* harmony import */ var _iva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iva */ "./src/tax/book-keeping/iva.ts");
/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movement */ "./src/tax/book-keeping/movement.ts");
/* harmony import */ var _outcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outcome */ "./src/tax/book-keeping/outcome.ts");
/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: index.ts
Created:  2022-03-19T05:16:19.505Z
Modified: 2022-03-19T05:39:09.295Z
*/







/***/ }),

/***/ "./src/tax/book-keeping/iva.ts":
/*!*************************************!*\
  !*** ./src/tax/book-keeping/iva.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IVA": () => (/* binding */ IVA),
/* harmony export */   "IVAData": () => (/* binding */ IVAData)
/* harmony export */ });
/* harmony import */ var _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../support/i-taxes-table */ "./src/tax/support/i-taxes-table.ts");
/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: iva.ts
Created:  2022-03-19T05:16:57.509Z
Modified: 2022-03-19T05:33:01.518Z
*/

var IVAData = new _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__.TaxesDatabase([
    [1990, [[0.9, 0.14, 0]]],
    [2000, [[0.11, 0.16, 0]]]
]);
var IVA;
(function (IVA) {
    IVA[IVA["frontera"] = 0] = "frontera";
    IVA[IVA["nacional"] = 1] = "nacional";
    IVA[IVA["extranjero"] = 2] = "extranjero";
    IVA[IVA["no"] = 2] = "no";
})(IVA || (IVA = {}));


/***/ }),

/***/ "./src/tax/book-keeping/movement.ts":
/*!******************************************!*\
  !*** ./src/tax/book-keeping/movement.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Movement": () => (/* binding */ Movement)
/* harmony export */ });
/* harmony import */ var _boo_keeping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boo-keeping */ "./src/tax/book-keeping/boo-keeping.ts");
/* harmony import */ var _iva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iva */ "./src/tax/book-keeping/iva.ts");


/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: movement.ts
Created:  2022-03-19T05:16:40.890Z
Modified: 2022-03-19T07:00:11.147Z
*/
var Movement = /** @class */ (function () {
    function Movement(amount, ivaKind, year) {
        if (year === void 0) { year = new Date().getFullYear(); }
        this.amount = amount;
        this.ivaKind = ivaKind;
        this.isr = amount / (1 + _iva__WEBPACK_IMPORTED_MODULE_1__.IVAData.find(year).data[0][ivaKind]);
        this.iva = amount - this.isr;
    }
    Movement.calculate = function (movements) {
        return movements.reduce(function (prev, curr) { return prev.plus(curr); }, new _boo_keeping__WEBPACK_IMPORTED_MODULE_0__.BookKeeping());
    };
    return Movement;
}());



/***/ }),

/***/ "./src/tax/book-keeping/outcome.ts":
/*!*****************************************!*\
  !*** ./src/tax/book-keeping/outcome.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Outcome": () => (/* binding */ Outcome)
/* harmony export */ });
/* harmony import */ var _iva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iva */ "./src/tax/book-keeping/iva.ts");
/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movement */ "./src/tax/book-keeping/movement.ts");
/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: income.ts
Created:  2022-03-19T05:16:25.721Z
Modified: 2022-03-26T06:44:20.282Z
*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Outcome = /** @class */ (function (_super) {
    __extends(Outcome, _super);
    function Outcome(amount, iva) {
        if (iva === void 0) { iva = _iva__WEBPACK_IMPORTED_MODULE_0__.IVA.extranjero; }
        return _super.call(this, amount, iva) || this;
    }
    return Outcome;
}(_movement__WEBPACK_IMPORTED_MODULE_1__.Movement));



/***/ }),

/***/ "./src/tax/support/i-taxes-table.ts":
/*!******************************************!*\
  !*** ./src/tax/support/i-taxes-table.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStruct": () => (/* binding */ DataStruct),
/* harmony export */   "TaxesDatabase": () => (/* binding */ TaxesDatabase)
/* harmony export */ });
var DataStruct = /** @class */ (function () {
    function DataStruct(data) {
        this.data = data;
    }
    DataStruct.prototype.get = function (year) {
        return this.data.sort().reverse().find(function (d) { return year >= d[0]; })[1];
    };
    return DataStruct;
}());

var TaxTable = /** @class */ (function () {
    function TaxTable(taxes) {
        this.data = taxes[1];
        this.year = taxes[0];
    }
    TaxTable.prototype.thatMatches = function (fn) {
        return this.data.find(function (data) { return fn(data); });
    };
    return TaxTable;
}());
var TaxesDatabase = /** @class */ (function () {
    function TaxesDatabase(data) {
        this.tables = data.sort(function (a, b) { return b[0] - a[0]; }).map(function (table) { return new TaxTable(table); });
    }
    TaxesDatabase.prototype.find = function (year) {
        return this.tables.find(function (d) { return year >= d.year; });
    };
    return TaxesDatabase;
}());



/***/ }),

/***/ "./src/tax/taxes/cedular/cedular.ts":
/*!******************************************!*\
  !*** ./src/tax/taxes/cedular/cedular.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cedular": () => (/* binding */ Cedular)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Cedular = /** @class */ (function () {
    function Cedular(regimen) {
        this.regimen = regimen;
    }
    Cedular.prototype.calculateTaxes = function () {
        var _a = this.regimen.prepareParameters(), gravableIncome = _a.gravableIncome, params = __rest(_a, ["gravableIncome"]);
        var cedular = gravableIncome * this.TaxesTable.get(this.regimen.year);
        return __assign(__assign({}, params), { cedular: cedular, gravableIncome: gravableIncome });
    };
    Cedular.prototype.toString = function () {
        return this.regimen.toString();
    };
    return Cedular;
}());



/***/ }),

/***/ "./src/tax/taxes/cedular/gto-cedular.ts":
/*!**********************************************!*\
  !*** ./src/tax/taxes/cedular/gto-cedular.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NEWGTOCedular": () => (/* binding */ NEWGTOCedular)
/* harmony export */ });
/* harmony import */ var _tables_cedular_isr_guanajauto_cedular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tables/cedular/isr-guanajauto.cedular */ "./src/tax/taxes/tables/cedular/isr-guanajauto.cedular.ts");
/* harmony import */ var _cedular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cedular */ "./src/tax/taxes/cedular/cedular.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var NEWGTOCedular = /** @class */ (function (_super) {
    __extends(NEWGTOCedular, _super);
    function NEWGTOCedular(regimen) {
        var _this = _super.call(this, regimen) || this;
        _this.regimen = regimen;
        _this.TaxesTable = _tables_cedular_isr_guanajauto_cedular__WEBPACK_IMPORTED_MODULE_0__.GTCTable;
        return _this;
    }
    NEWGTOCedular.prototype.calculateTaxes = function () {
        var _a = this.regimen.calculateTaxes(), isr = _a.isr, gravableIncome = _a.gravableIncome, previewISR = _a.previewISR, SN = _a.salarioNormalizado, SP = _a.salarioPercibido, params = __rest(_a, ["isr", "gravableIncome", "previewISR", "salarioNormalizado", "salarioPercibido"]);
        var cedular = this.regimen.cedular(gravableIncome, _tables_cedular_isr_guanajauto_cedular__WEBPACK_IMPORTED_MODULE_0__.GTCTable.get(this.regimen.year));
        var impuestoCargo = isr + cedular;
        var salarioNormalizado = SN - cedular;
        var salarioPercibido = SP - cedular;
        return __assign(__assign({}, params), { isr: isr, salarioNormalizado: salarioNormalizado, salarioPercibido: salarioPercibido, impuestoCargo: impuestoCargo, previewISR: previewISR, gravableIncome: gravableIncome, cedular: cedular });
    };
    return NEWGTOCedular;
}(_cedular__WEBPACK_IMPORTED_MODULE_1__.Cedular));



/***/ }),

/***/ "./src/tax/taxes/federal/isr.ts":
/*!**************************************!*\
  !*** ./src/tax/taxes/federal/isr.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ISRTax": () => (/* binding */ ISRTax)
/* harmony export */ });
/* harmony import */ var _book_keeping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../book-keeping */ "./src/tax/book-keeping/index.ts");
/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: isr.ts
Created:  2022-01-30T04:26:12.869Z
Modified: 2022-04-19T19:59:06.910Z
*/

var ISRTax = /** @class */ (function () {
    function ISRTax(_a) {
        var _b = _a.year, year = _b === void 0 ? new Date().getFullYear() : _b, movements = _a.movements;
        this.year = year;
        this.bookKeeping = _book_keeping__WEBPACK_IMPORTED_MODULE_0__.Movement.calculate(movements);
    }
    ISRTax.prototype.cedular = function (gravableIncome, amount) {
        return gravableIncome * amount;
    };
    ISRTax.prototype.add = function () {
        var _this = this;
        var movements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            movements[_i] = arguments[_i];
        }
        movements.forEach(function (mov) { return _this.bookKeeping.plus(mov); });
    };
    ISRTax.prototype.limitCondition = function (_a, utility) {
        var inferior = _a[0], superior = _a[1];
        return utility >= inferior && utility < superior;
    };
    ISRTax.prototype.findTaxStep = function (gravableIncome) {
        var _this = this;
        var _a;
        return (_a = this.TaxTable.find(this.year).thatMatches(function (d) {
            return _this.limitCondition(d, gravableIncome);
        })) !== null && _a !== void 0 ? _a : this.TaxTable.find(this.year).data[0];
    };
    /** This can be overide */
    ISRTax.prototype.prepareParameters = function () {
        var _a = this.bookKeeping, income = _a.income, gravableIncome = _a.gravableIncome, outcome = _a.expenses, facturated = _a.facturated;
        var _b = this.findTaxStep(gravableIncome), inferior = _b[0], superior = _b[1], cuota = _b[2], rate = _b[3], tblSprd = _b.slice(4);
        var excedentLI = gravableIncome - inferior;
        var marginalTax = excedentLI * (rate / 100);
        var previewISR = marginalTax + cuota;
        return {
            salarioNormalizado: 0,
            salarioPercibido: 0,
            isr: 0,
            cedular: 0,
            impuestoCargo: 0,
            facturated: facturated,
            income: income,
            outcome: outcome,
            gravableIncome: gravableIncome,
            previewISR: previewISR,
            marginalTax: marginalTax,
            inferior: inferior,
            cuota: cuota,
            rate: rate,
            excedentLI: excedentLI,
            others: {
                superior: superior,
                tblSprd: tblSprd
            },
            extra: {}
        };
    };
    return ISRTax;
}());



/***/ }),

/***/ "./src/tax/taxes/regimen/salary.ts":
/*!*****************************************!*\
  !*** ./src/tax/taxes/regimen/salary.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewSalary": () => (/* binding */ NewSalary)
/* harmony export */ });
/* harmony import */ var _federal_isr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../federal/isr */ "./src/tax/taxes/federal/isr.ts");
/* harmony import */ var _tables_isr_salary_tables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tables/isr-salary.tables */ "./src/tax/taxes/tables/isr-salary.tables.ts");
/* harmony import */ var _tables_uma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tables/uma */ "./src/tax/taxes/tables/uma.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var primaRiesgo = 0.005;
function reduce(compundObject) {
    return Object.keys(compundObject).reduce(function (total, key) {
        var data = compundObject[key];
        if (typeof data === 'object') {
            return total + reduce(data);
        }
        return total + data;
    }, 0);
}
var NewSalary = /** @class */ (function (_super) {
    __extends(NewSalary, _super);
    function NewSalary(_a) {
        var _b = _a.year, year = _b === void 0 ? new Date().getFullYear() : _b, _c = _a.diasAguinaldo, diasAguinaldo = _c === void 0 ? 15 : _c, _d = _a.primaVacacional, primaVacacional = _d === void 0 ? 0.25 : _d, _e = _a.diasVacaciones, diasVacaciones = _e === void 0 ? 6 : _e, _f = _a.movements, movements = _f === void 0 ? [] : _f;
        var _this = _super.call(this, { year: year, movements: movements }) || this;
        _this.TaxTable = _tables_isr_salary_tables__WEBPACK_IMPORTED_MODULE_1__.TABLE;
        _this.diasAguinaldo = 15;
        _this.primaVacacional = 0.25;
        _this.diasVacaciones = 6;
        _this.diasAguinaldo = diasAguinaldo;
        _this.primaVacacional = primaVacacional;
        _this.diasVacaciones = diasVacaciones;
        return _this;
    }
    NewSalary.prototype.cedular = function (gravableIncome, amount) {
        return 0;
    };
    NewSalary.prototype.calculateTaxes = function () {
        var UMA = _tables_uma__WEBPACK_IMPORTED_MODULE_2__.UMATable.get(this.year);
        var salary = this.bookKeeping.facturated;
        var MAXSDI = 25 * UMA;
        /** Salario Diario */
        var SD = salary / 30;
        /** Factor de Integracion */
        var FI = (365 + this.diasAguinaldo + this.diasVacaciones * this.primaVacacional) / 365;
        var primaVacacional = SD * this.primaVacacional * this.diasVacaciones;
        /** Salario Diario Integrado */
        var SDI = SD * FI;
        /** Salario Base Corizacion */
        var SBC = SDI > MAXSDI ? MAXSDI : SDI;
        var aguinaldo = SD * this.diasAguinaldo;
        var prima = SD * this.diasVacaciones * this.primaVacacional;
        var dias = 30;
        var empleador = {
            RiesgoTrabajo: dias * SBC * primaRiesgo,
            EnfermedadMaternidad: {
                EyM: dias * UMA * 0.204,
                EyMEx: dias * (SBC - 3 * UMA > 0 ? (SBC - 3 * UMA) * 0.011 : 0),
                EyMD: dias * SBC * 0.007,
                EyMP: dias * SBC * 0.0105
            },
            InvalidezVida: {
                Especie: dias * SBC * 0.0175,
                Retiro: dias * SBC * 0.02
            },
            RCEAV: {
                Retiro: dias * SBC * 0.02 / 2,
                CEAV: dias * SBC * 0.03150 / 2
            },
            Infonavit: dias * SBC * 0.05 / 2,
            Guarderias: dias * SBC * 0.01
        };
        var trabajador = {
            RiesgoTrabajo: 0,
            EnfermedadMaternidad: {
                EyM: 0,
                EyMEx: dias * (SBC - 3 * UMA > 0 ? (SBC - 3 * UMA) * 0.004 : 0),
                EyMD: dias * SBC * 0.0025,
                EyMP: dias * SBC * 0.00375
            },
            InvalidezVida: {
                Especie: dias * SBC * 0.00625,
                Retiro: dias * SBC * 0
            },
            RCEAV: {
                Retiro: 0,
                CEAV: dias * SBC * 0.01125 / 2
            },
            Infonavit: 0,
            Guarderias: 0
        };
        var imssTrabajador = reduce(trabajador);
        var imssPatron = reduce(empleador);
        var _a = this.prepareParameters(), previewISR = _a.previewISR, params = __rest(_a, ["previewISR"]);
        var isr = previewISR;
        var salarioPercibido = salary - isr - imssTrabajador;
        var salarioNormalizado = ((salary - isr + imssPatron) * 12 + aguinaldo + primaVacacional) / 12;
        return __assign(__assign({}, params), { cedular: 0, impuestoCargo: 0, cuota: 0, previewISR: previewISR, extra: {
                SDI: SDI,
                primaVacacional: primaVacacional,
                SD: SD,
                SBC: SBC,
                aguinaldo: aguinaldo,
                prima: prima,
                empleador: empleador,
                trabajador: trabajador,
                imssPatron: imssPatron,
                imssTrabajador: imssTrabajador
            }, isr: isr, salarioPercibido: salarioPercibido, salarioNormalizado: salarioNormalizado });
    };
    return NewSalary;
}(_federal_isr__WEBPACK_IMPORTED_MODULE_0__.ISRTax));



/***/ }),

/***/ "./src/tax/taxes/regimen/services.ts":
/*!*******************************************!*\
  !*** ./src/tax/taxes/regimen/services.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegimenServicios": () => (/* binding */ RegimenServicios)
/* harmony export */ });
/* harmony import */ var _federal_isr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../federal/isr */ "./src/tax/taxes/federal/isr.ts");
/* harmony import */ var _tables_isr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tables/isr-services */ "./src/tax/taxes/tables/isr-services.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var RegimenServicios = /** @class */ (function (_super) {
    __extends(RegimenServicios, _super);
    function RegimenServicios() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TaxTable = _tables_isr_services__WEBPACK_IMPORTED_MODULE_1__.TABLE;
        return _this;
    }
    RegimenServicios.prototype.cedular = function (gravableIncome, amount) {
        return gravableIncome * amount;
    };
    RegimenServicios.prototype.calculateTaxes = function () {
        var _a = this.prepareParameters(), gravableIncome = _a.gravableIncome, previewISR = _a.previewISR, all = __rest(_a, ["gravableIncome", "previewISR"]);
        var salarioNormalizado = gravableIncome - previewISR;
        return __assign(__assign({}, all), { salarioPercibido: salarioNormalizado, salarioNormalizado: salarioNormalizado, gravableIncome: gravableIncome, previewISR: previewISR, isr: previewISR });
    };
    return RegimenServicios;
}(_federal_isr__WEBPACK_IMPORTED_MODULE_0__.ISRTax));



/***/ }),

/***/ "./src/tax/taxes/tables/cedular/isr-guanajauto.cedular.ts":
/*!****************************************************************!*\
  !*** ./src/tax/taxes/tables/cedular/isr-guanajauto.cedular.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GTCTable": () => (/* binding */ GTCTable)
/* harmony export */ });
/* harmony import */ var _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/i-taxes-table */ "./src/tax/support/i-taxes-table.ts");

var GTCTable = new _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__.DataStruct([
    [1990, 0.03],
    [2013, 0.05]
]);


/***/ }),

/***/ "./src/tax/taxes/tables/isr-salary.tables.ts":
/*!***************************************************!*\
  !*** ./src/tax/taxes/tables/isr-salary.tables.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TABLE": () => (/* binding */ TABLE)
/* harmony export */ });
/* harmony import */ var _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../support/i-taxes-table */ "./src/tax/support/i-taxes-table.ts");
/* harmony import */ var _max_income__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./max-income */ "./src/tax/taxes/tables/max-income.ts");


var TABLE = new _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__.TaxesDatabase([
    [2022,
        [
            [0.01, 644.58, 0.00, 1.92],
            [644.59, 5470.92, 12.38, 6.40],
            [5470.93, 9614.66, 321.26, 10.88],
            [9614.67, 11176.62, 772.10, 16.00],
            [11176.63, 13381.47, 1022.01, 17.92],
            [13381.48, 26988.50, 1417.12, 21.36],
            [26988.51, 42537.58, 4323.58, 23.52],
            [42537.59, 81211.25, 7980.73, 30.00],
            [81211.26, 108281.67, 19582.83, 32.00],
            [108281.68, 324845.01, 28245.36, 34.00],
            [324845.02, _max_income__WEBPACK_IMPORTED_MODULE_1__.MAX_INCOME, 101876.90, 35.00]
        ]
    ],
    [2021,
        [
            [0.01, 644.58, 0.00, 1.92],
            [644.59, 5470.92, 12.38, 6.40],
            [5470.93, 9614.66, 321.26, 10.88],
            [9614.67, 11176.62, 772.10, 16.00],
            [11176.63, 13381.47, 1022.01, 17.92],
            [13381.48, 26988.50, 1417.12, 21.36],
            [26988.51, 42537.58, 4323.58, 23.52],
            [42537.59, 81211.25, 7980.73, 30.00],
            [81211.26, 108281.67, 19582.83, 32.00],
            [108281.68, 324845.01, 28245.36, 34.00],
            [324845.02, _max_income__WEBPACK_IMPORTED_MODULE_1__.MAX_INCOME, 101876.90, 35.00]
        ]
    ]
]);


/***/ }),

/***/ "./src/tax/taxes/tables/isr-services.ts":
/*!**********************************************!*\
  !*** ./src/tax/taxes/tables/isr-services.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TABLE": () => (/* binding */ TABLE)
/* harmony export */ });
/* harmony import */ var _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../support/i-taxes-table */ "./src/tax/support/i-taxes-table.ts");
/* harmony import */ var _max_income__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./max-income */ "./src/tax/taxes/tables/max-income.ts");


var TABLE = new _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__.TaxesDatabase([
    [2021, [
            [0.01, 644.58, 0, 1.92],
            [644.59, 5470.92, 12.38, 6.40],
            [5470.93, 9614.66, 321.26, 10.88],
            [9614.67, 11176.62, 772.1, 16.00],
            [11176.63, 13381.47, 1022.01, 17.92],
            [13381.48, 26988.50, 1417.12, 21.36],
            [26988.51, 42537.58, 4323.58, 23.52],
            [42537.59, 81211.25, 7980.73, 30.00],
            [81211.26, 108281.67, 19582.83, 32.00],
            [108281.68, 324845.01, 28245.36, 34.00],
            [324845.02, _max_income__WEBPACK_IMPORTED_MODULE_1__.MAX_INCOME, 101876.90, 35.00]
        ]],
    [2022, [
            [0.01, 644.58, 0, 1.92],
            [644.59, 5470.92, 12.38, 6.40],
            [5470.93, 9614.66, 321.26, 10.88],
            [9614.67, 11176.62, 772.1, 16.00],
            [11176.63, 13381.47, 1022.01, 17.92],
            [13381.48, 26988.50, 1417.12, 21.36],
            [26988.51, 42537.58, 4323.58, 23.52],
            [42537.59, 81211.25, 7980.73, 30.00],
            [81211.26, 108281.67, 19582.83, 32.00],
            [108281.68, 324845.01, 28245.36, 34.00],
            [324845.02, _max_income__WEBPACK_IMPORTED_MODULE_1__.MAX_INCOME, 101876.90, 35.00]
        ]],
]);


/***/ }),

/***/ "./src/tax/taxes/tables/max-income.ts":
/*!********************************************!*\
  !*** ./src/tax/taxes/tables/max-income.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_INCOME": () => (/* binding */ MAX_INCOME)
/* harmony export */ });
/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: max-income.ts
Created:  2022-03-21T23:14:20.311Z
Modified: 2022-03-21T23:14:36.900Z
*/
var MAX_INCOME = 999999999;


/***/ }),

/***/ "./src/tax/taxes/tables/uma.ts":
/*!*************************************!*\
  !*** ./src/tax/taxes/tables/uma.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UMATable": () => (/* binding */ UMATable)
/* harmony export */ });
/* harmony import */ var _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../support/i-taxes-table */ "./src/tax/support/i-taxes-table.ts");

var UMATable = new _support_i_taxes_table__WEBPACK_IMPORTED_MODULE_0__.DataStruct([
    [2020, 86.88],
    [2021, 89.62],
    [2022, 96.22]
]);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./src/web-workers/tax.worker.ts ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tax_book_keeping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tax/book-keeping */ "./src/tax/book-keeping/index.ts");
/* harmony import */ var _tax_taxes_cedular_gto_cedular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tax/taxes/cedular/gto-cedular */ "./src/tax/taxes/cedular/gto-cedular.ts");
/* harmony import */ var _tax_taxes_regimen_salary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tax/taxes/regimen/salary */ "./src/tax/taxes/regimen/salary.ts");
/* harmony import */ var _tax_taxes_regimen_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tax/taxes/regimen/services */ "./src/tax/taxes/regimen/services.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




function calcAditionals(benefits) {
    var spiceIncome = 0;
    if (benefits.MedicalInsurance) {
        spiceIncome += 30000 / 12;
    }
    if (benefits.LifeInsurance) {
        spiceIncome += 450;
    }
    if (benefits.DentalInsurance) {
        spiceIncome += 3000 / 12;
    }
    if (benefits.SightInsurance) {
        spiceIncome += 6000 / 12;
    }
    return spiceIncome;
}
function findMxSalary(salary, salarioPercibido, benefits) {
    var money = salary;
    var target = salarioPercibido;
    var compareInfo = {};
    var salarioNormalizado = 0;
    var extra = calcAditionals(benefits);
    do {
        compareInfo = new _tax_taxes_cedular_gto_cedular__WEBPACK_IMPORTED_MODULE_1__.NEWGTOCedular(new _tax_taxes_regimen_salary__WEBPACK_IMPORTED_MODULE_2__.NewSalary({
            diasAguinaldo: benefits.Aguinaldo,
            diasVacaciones: benefits.PaidVacations,
            primaVacacional: benefits.VacationsBonus / 100,
            movements: [new _tax_book_keeping__WEBPACK_IMPORTED_MODULE_0__.Income(money)]
        })).calculateTaxes();
        salarioNormalizado = compareInfo.salarioNormalizado + extra;
        money -= 1;
    } while (target < salarioNormalizado);
    console.log({ extra: extra, salarioPercibido: salarioPercibido, compareInfo: compareInfo });
    return {
        mxGross: compareInfo.income,
        mxNet: compareInfo.salarioPercibido,
        mxReal: compareInfo.salarioNormalizado,
        mxExtra: (compareInfo.salarioNormalizado - compareInfo.salarioPercibido) + extra
    };
}
function calculate(_a) {
    var data = _a.data;
    var _b = data, salary = _b.salary, usdMode = _b.usdMode, incoming = __rest(_b, ["salary", "usdMode"]);
    if (salary > 0) {
        var income = new _tax_taxes_cedular_gto_cedular__WEBPACK_IMPORTED_MODULE_1__.NEWGTOCedular(new _tax_taxes_regimen_services__WEBPACK_IMPORTED_MODULE_3__.RegimenServicios({
            movements: [new _tax_book_keeping__WEBPACK_IMPORTED_MODULE_0__.Income(salary)]
        }));
        var data_1 = income.calculateTaxes();
        console.log(data_1);
        var mxData = findMxSalary(salary, data_1.salarioPercibido, incoming);
        console.log(mxData);
        self.postMessage(__assign({ usNet: data_1.salarioPercibido }, mxData));
    }
    else {
        self.postMessage({});
    }
}
self.addEventListener('message', calculate);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7QUFDb0I7QUFDVDtBQUNTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUVBQWEsS0FBSyxnRUFBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscURBQU07QUFDbEMsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ04sa0JBQWtCLDRFQUE0RTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlFQUFhLEtBQUsseUVBQWdCO0FBQzNELDRCQUE0QixxREFBTTtBQUNsQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RheC9ib29rLWtlZXBpbmcvYm9vLWtlZXBpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RheC9ib29rLWtlZXBpbmcvaW5jb21lLnRzIiwid2VicGFjazovLy8uL3NyYy90YXgvYm9vay1rZWVwaW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90YXgvYm9vay1rZWVwaW5nL2l2YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGF4L2Jvb2sta2VlcGluZy9tb3ZlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGF4L2Jvb2sta2VlcGluZy9vdXRjb21lLnRzIiwid2VicGFjazovLy8uL3NyYy90YXgvc3VwcG9ydC9pLXRheGVzLXRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy90YXgvdGF4ZXMvY2VkdWxhci9jZWR1bGFyLnRzIiwid2VicGFjazovLy8uL3NyYy90YXgvdGF4ZXMvY2VkdWxhci9ndG8tY2VkdWxhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGF4L3RheGVzL2ZlZGVyYWwvaXNyLnRzIiwid2VicGFjazovLy8uL3NyYy90YXgvdGF4ZXMvcmVnaW1lbi9zYWxhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RheC90YXhlcy9yZWdpbWVuL3NlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy90YXgvdGF4ZXMvdGFibGVzL2NlZHVsYXIvaXNyLWd1YW5hamF1dG8uY2VkdWxhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGF4L3RheGVzL3RhYmxlcy9pc3Itc2FsYXJ5LnRhYmxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGF4L3RheGVzL3RhYmxlcy9pc3Itc2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RheC90YXhlcy90YWJsZXMvbWF4LWluY29tZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGF4L3RheGVzL3RhYmxlcy91bWEudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi13b3JrZXJzL3RheC53b3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkNvcHlyaWdodCAoQykgMjAyMiBHZXJhcmRvIFDDqXJleiBQw6lyZXogLSBBbGwgUmlnaHRzIFJlc2VydmVkXG48Z2VyYXJkMnBlcmV6QG91dGxvb2suY29tPlxuVW5hdXRob3JpemVkIGNvcHlpbmcgb2YgdGhpcyBmaWxlLCB2aWEgYW55IG1lZGl1bSBpcyBzdHJpY3RseSBwcm9oaWJpdGVkXG5Qcm9wcmlldGFyeSBhbmQgY29uZmlkZW50aWFsXG5cbkZpbGU6IGJvby1rZWVwaW5nLnRzXG5DcmVhdGVkOiAgMjAyMi0wMy0xOVQwNTozMjoyNS44OTVaXG5Nb2RpZmllZDogMjAyMi0wMy0yN1QwOTowOTowMy4zNzlaXG4qL1xudmFyIEJvb2tLZWVwaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvb2tLZWVwaW5nKCkge1xuICAgICAgICB0aGlzLmluY29tZSA9IDA7XG4gICAgICAgIHRoaXMuZXhwZW5zZXMgPSAwO1xuICAgICAgICB0aGlzLml2YU9uRmF2b3IgPSAwO1xuICAgICAgICB0aGlzLml2YU9uQ2hhcmdlID0gMDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJvb2tLZWVwaW5nLnByb3RvdHlwZSwgXCJncmF2YWJsZUluY29tZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5jb21lIC0gdGhpcy5leHBlbnNlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb29rS2VlcGluZy5wcm90b3R5cGUsIFwiZmFjdHVyYXRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5jb21lICsgdGhpcy5pdmFPbkNoYXJnZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJvb2tLZWVwaW5nLnByb3RvdHlwZS5wbHVzID0gZnVuY3Rpb24gKHJpZ2h0KSB7XG4gICAgICAgIHZhciBjdHJOYW1lID0gcmlnaHQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgaWYgKGN0ck5hbWUgPT09ICdJbmNvbWUnKSB7XG4gICAgICAgICAgICB0aGlzLml2YU9uQ2hhcmdlICs9IHJpZ2h0Lml2YTtcbiAgICAgICAgICAgIHRoaXMuaW5jb21lICs9IHJpZ2h0LmlzcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXZhT25GYXZvciArPSByaWdodC5pdmE7XG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VzICs9IHJpZ2h0LmlzcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBCb29rS2VlcGluZztcbn0oKSk7XG5leHBvcnQgeyBCb29rS2VlcGluZyB9O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbi8qXG5Db3B5cmlnaHQgKEMpIDIwMjIgR2VyYXJkbyBQw6lyZXogUMOpcmV6IC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuPGdlcmFyZDJwZXJlekBvdXRsb29rLmNvbT5cblVuYXV0aG9yaXplZCBjb3B5aW5nIG9mIHRoaXMgZmlsZSwgdmlhIGFueSBtZWRpdW0gaXMgc3RyaWN0bHkgcHJvaGliaXRlZFxuUHJvcHJpZXRhcnkgYW5kIGNvbmZpZGVudGlhbFxuXG5GaWxlOiBpbmNvbWUudHNcbkNyZWF0ZWQ6ICAyMDIyLTAzLTE5VDA1OjE2OjI1LjcyMVpcbk1vZGlmaWVkOiAyMDIyLTAzLTI2VDA2OjQ0OjE2LjgwNlpcbiovXG5pbXBvcnQgeyBJVkEgfSBmcm9tICcuL2l2YSc7XG5pbXBvcnQgeyBNb3ZlbWVudCB9IGZyb20gJy4vbW92ZW1lbnQnO1xudmFyIEluY29tZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW5jb21lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEluY29tZShhbW91bnQsIGl2YSkge1xuICAgICAgICBpZiAoaXZhID09PSB2b2lkIDApIHsgaXZhID0gSVZBLmV4dHJhbmplcm87IH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGFtb3VudCwgaXZhKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW5jb21lO1xufShNb3ZlbWVudCkpO1xuZXhwb3J0IHsgSW5jb21lIH07XG4iLCIvKlxuQ29weXJpZ2h0IChDKSAyMDIyIEdlcmFyZG8gUMOpcmV6IFDDqXJleiAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbjxnZXJhcmQycGVyZXpAb3V0bG9vay5jb20+XG5VbmF1dGhvcml6ZWQgY29weWluZyBvZiB0aGlzIGZpbGUsIHZpYSBhbnkgbWVkaXVtIGlzIHN0cmljdGx5IHByb2hpYml0ZWRcblByb3ByaWV0YXJ5IGFuZCBjb25maWRlbnRpYWxcblxuRmlsZTogaW5kZXgudHNcbkNyZWF0ZWQ6ICAyMDIyLTAzLTE5VDA1OjE2OjE5LjUwNVpcbk1vZGlmaWVkOiAyMDIyLTAzLTE5VDA1OjM5OjA5LjI5NVpcbiovXG5leHBvcnQgKiBmcm9tICcuL2Jvby1rZWVwaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vaW5jb21lJztcbmV4cG9ydCAqIGZyb20gJy4vaXZhJztcbmV4cG9ydCAqIGZyb20gJy4vbW92ZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9vdXRjb21lJztcbiIsIi8qXG5Db3B5cmlnaHQgKEMpIDIwMjIgR2VyYXJkbyBQw6lyZXogUMOpcmV6IC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuPGdlcmFyZDJwZXJlekBvdXRsb29rLmNvbT5cblVuYXV0aG9yaXplZCBjb3B5aW5nIG9mIHRoaXMgZmlsZSwgdmlhIGFueSBtZWRpdW0gaXMgc3RyaWN0bHkgcHJvaGliaXRlZFxuUHJvcHJpZXRhcnkgYW5kIGNvbmZpZGVudGlhbFxuXG5GaWxlOiBpdmEudHNcbkNyZWF0ZWQ6ICAyMDIyLTAzLTE5VDA1OjE2OjU3LjUwOVpcbk1vZGlmaWVkOiAyMDIyLTAzLTE5VDA1OjMzOjAxLjUxOFpcbiovXG5pbXBvcnQgeyBUYXhlc0RhdGFiYXNlIH0gZnJvbSAnLi4vc3VwcG9ydC9pLXRheGVzLXRhYmxlJztcbmV4cG9ydCB2YXIgSVZBRGF0YSA9IG5ldyBUYXhlc0RhdGFiYXNlKFtcbiAgICBbMTk5MCwgW1swLjksIDAuMTQsIDBdXV0sXG4gICAgWzIwMDAsIFtbMC4xMSwgMC4xNiwgMF1dXVxuXSk7XG5leHBvcnQgdmFyIElWQTtcbihmdW5jdGlvbiAoSVZBKSB7XG4gICAgSVZBW0lWQVtcImZyb250ZXJhXCJdID0gMF0gPSBcImZyb250ZXJhXCI7XG4gICAgSVZBW0lWQVtcIm5hY2lvbmFsXCJdID0gMV0gPSBcIm5hY2lvbmFsXCI7XG4gICAgSVZBW0lWQVtcImV4dHJhbmplcm9cIl0gPSAyXSA9IFwiZXh0cmFuamVyb1wiO1xuICAgIElWQVtJVkFbXCJub1wiXSA9IDJdID0gXCJub1wiO1xufSkoSVZBIHx8IChJVkEgPSB7fSkpO1xuIiwiaW1wb3J0IHsgQm9va0tlZXBpbmcgfSBmcm9tICcuL2Jvby1rZWVwaW5nJztcbmltcG9ydCB7IElWQURhdGEgfSBmcm9tICcuL2l2YSc7XG4vKlxuQ29weXJpZ2h0IChDKSAyMDIyIEdlcmFyZG8gUMOpcmV6IFDDqXJleiAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbjxnZXJhcmQycGVyZXpAb3V0bG9vay5jb20+XG5VbmF1dGhvcml6ZWQgY29weWluZyBvZiB0aGlzIGZpbGUsIHZpYSBhbnkgbWVkaXVtIGlzIHN0cmljdGx5IHByb2hpYml0ZWRcblByb3ByaWV0YXJ5IGFuZCBjb25maWRlbnRpYWxcblxuRmlsZTogbW92ZW1lbnQudHNcbkNyZWF0ZWQ6ICAyMDIyLTAzLTE5VDA1OjE2OjQwLjg5MFpcbk1vZGlmaWVkOiAyMDIyLTAzLTE5VDA3OjAwOjExLjE0N1pcbiovXG52YXIgTW92ZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW92ZW1lbnQoYW1vdW50LCBpdmFLaW5kLCB5ZWFyKSB7XG4gICAgICAgIGlmICh5ZWFyID09PSB2b2lkIDApIHsgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTsgfVxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICAgICAgdGhpcy5pdmFLaW5kID0gaXZhS2luZDtcbiAgICAgICAgdGhpcy5pc3IgPSBhbW91bnQgLyAoMSArIElWQURhdGEuZmluZCh5ZWFyKS5kYXRhWzBdW2l2YUtpbmRdKTtcbiAgICAgICAgdGhpcy5pdmEgPSBhbW91bnQgLSB0aGlzLmlzcjtcbiAgICB9XG4gICAgTW92ZW1lbnQuY2FsY3VsYXRlID0gZnVuY3Rpb24gKG1vdmVtZW50cykge1xuICAgICAgICByZXR1cm4gbW92ZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycikgeyByZXR1cm4gcHJldi5wbHVzKGN1cnIpOyB9LCBuZXcgQm9va0tlZXBpbmcoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTW92ZW1lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTW92ZW1lbnQgfTtcbiIsIi8qXG5Db3B5cmlnaHQgKEMpIDIwMjIgR2VyYXJkbyBQw6lyZXogUMOpcmV6IC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuPGdlcmFyZDJwZXJlekBvdXRsb29rLmNvbT5cblVuYXV0aG9yaXplZCBjb3B5aW5nIG9mIHRoaXMgZmlsZSwgdmlhIGFueSBtZWRpdW0gaXMgc3RyaWN0bHkgcHJvaGliaXRlZFxuUHJvcHJpZXRhcnkgYW5kIGNvbmZpZGVudGlhbFxuXG5GaWxlOiBpbmNvbWUudHNcbkNyZWF0ZWQ6ICAyMDIyLTAzLTE5VDA1OjE2OjI1LjcyMVpcbk1vZGlmaWVkOiAyMDIyLTAzLTI2VDA2OjQ0OjIwLjI4MlpcbiovXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgSVZBIH0gZnJvbSAnLi9pdmEnO1xuaW1wb3J0IHsgTW92ZW1lbnQgfSBmcm9tICcuL21vdmVtZW50JztcbnZhciBPdXRjb21lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPdXRjb21lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGNvbWUoYW1vdW50LCBpdmEpIHtcbiAgICAgICAgaWYgKGl2YSA9PT0gdm9pZCAwKSB7IGl2YSA9IElWQS5leHRyYW5qZXJvOyB9XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBhbW91bnQsIGl2YSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE91dGNvbWU7XG59KE1vdmVtZW50KSk7XG5leHBvcnQgeyBPdXRjb21lIH07XG4iLCJ2YXIgRGF0YVN0cnVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXRhU3RydWN0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgRGF0YVN0cnVjdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zb3J0KCkucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHllYXIgPj0gZFswXTsgfSlbMV07XG4gICAgfTtcbiAgICByZXR1cm4gRGF0YVN0cnVjdDtcbn0oKSk7XG5leHBvcnQgeyBEYXRhU3RydWN0IH07XG52YXIgVGF4VGFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGF4VGFibGUodGF4ZXMpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gdGF4ZXNbMV07XG4gICAgICAgIHRoaXMueWVhciA9IHRheGVzWzBdO1xuICAgIH1cbiAgICBUYXhUYWJsZS5wcm90b3R5cGUudGhhdE1hdGNoZXMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maW5kKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBmbihkYXRhKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGF4VGFibGU7XG59KCkpO1xudmFyIFRheGVzRGF0YWJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGF4ZXNEYXRhYmFzZShkYXRhKSB7XG4gICAgICAgIHRoaXMudGFibGVzID0gZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiWzBdIC0gYVswXTsgfSkubWFwKGZ1bmN0aW9uICh0YWJsZSkgeyByZXR1cm4gbmV3IFRheFRhYmxlKHRhYmxlKTsgfSk7XG4gICAgfVxuICAgIFRheGVzRGF0YWJhc2UucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoeWVhcikge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZXMuZmluZChmdW5jdGlvbiAoZCkgeyByZXR1cm4geWVhciA+PSBkLnllYXI7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFRheGVzRGF0YWJhc2U7XG59KCkpO1xuZXhwb3J0IHsgVGF4ZXNEYXRhYmFzZSB9O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBDZWR1bGFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENlZHVsYXIocmVnaW1lbikge1xuICAgICAgICB0aGlzLnJlZ2ltZW4gPSByZWdpbWVuO1xuICAgIH1cbiAgICBDZWR1bGFyLnByb3RvdHlwZS5jYWxjdWxhdGVUYXhlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5yZWdpbWVuLnByZXBhcmVQYXJhbWV0ZXJzKCksIGdyYXZhYmxlSW5jb21lID0gX2EuZ3JhdmFibGVJbmNvbWUsIHBhcmFtcyA9IF9fcmVzdChfYSwgW1wiZ3JhdmFibGVJbmNvbWVcIl0pO1xuICAgICAgICB2YXIgY2VkdWxhciA9IGdyYXZhYmxlSW5jb21lICogdGhpcy5UYXhlc1RhYmxlLmdldCh0aGlzLnJlZ2ltZW4ueWVhcik7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGFyYW1zKSwgeyBjZWR1bGFyOiBjZWR1bGFyLCBncmF2YWJsZUluY29tZTogZ3JhdmFibGVJbmNvbWUgfSk7XG4gICAgfTtcbiAgICBDZWR1bGFyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaW1lbi50b1N0cmluZygpO1xuICAgIH07XG4gICAgcmV0dXJuIENlZHVsYXI7XG59KCkpO1xuZXhwb3J0IHsgQ2VkdWxhciB9O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBHVENUYWJsZSB9IGZyb20gJy4uL3RhYmxlcy9jZWR1bGFyL2lzci1ndWFuYWphdXRvLmNlZHVsYXInO1xuaW1wb3J0IHsgQ2VkdWxhciB9IGZyb20gJy4vY2VkdWxhcic7XG52YXIgTkVXR1RPQ2VkdWxhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTkVXR1RPQ2VkdWxhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBORVdHVE9DZWR1bGFyKHJlZ2ltZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcmVnaW1lbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmVnaW1lbiA9IHJlZ2ltZW47XG4gICAgICAgIF90aGlzLlRheGVzVGFibGUgPSBHVENUYWJsZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBORVdHVE9DZWR1bGFyLnByb3RvdHlwZS5jYWxjdWxhdGVUYXhlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5yZWdpbWVuLmNhbGN1bGF0ZVRheGVzKCksIGlzciA9IF9hLmlzciwgZ3JhdmFibGVJbmNvbWUgPSBfYS5ncmF2YWJsZUluY29tZSwgcHJldmlld0lTUiA9IF9hLnByZXZpZXdJU1IsIFNOID0gX2Euc2FsYXJpb05vcm1hbGl6YWRvLCBTUCA9IF9hLnNhbGFyaW9QZXJjaWJpZG8sIHBhcmFtcyA9IF9fcmVzdChfYSwgW1wiaXNyXCIsIFwiZ3JhdmFibGVJbmNvbWVcIiwgXCJwcmV2aWV3SVNSXCIsIFwic2FsYXJpb05vcm1hbGl6YWRvXCIsIFwic2FsYXJpb1BlcmNpYmlkb1wiXSk7XG4gICAgICAgIHZhciBjZWR1bGFyID0gdGhpcy5yZWdpbWVuLmNlZHVsYXIoZ3JhdmFibGVJbmNvbWUsIEdUQ1RhYmxlLmdldCh0aGlzLnJlZ2ltZW4ueWVhcikpO1xuICAgICAgICB2YXIgaW1wdWVzdG9DYXJnbyA9IGlzciArIGNlZHVsYXI7XG4gICAgICAgIHZhciBzYWxhcmlvTm9ybWFsaXphZG8gPSBTTiAtIGNlZHVsYXI7XG4gICAgICAgIHZhciBzYWxhcmlvUGVyY2liaWRvID0gU1AgLSBjZWR1bGFyO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHBhcmFtcyksIHsgaXNyOiBpc3IsIHNhbGFyaW9Ob3JtYWxpemFkbzogc2FsYXJpb05vcm1hbGl6YWRvLCBzYWxhcmlvUGVyY2liaWRvOiBzYWxhcmlvUGVyY2liaWRvLCBpbXB1ZXN0b0NhcmdvOiBpbXB1ZXN0b0NhcmdvLCBwcmV2aWV3SVNSOiBwcmV2aWV3SVNSLCBncmF2YWJsZUluY29tZTogZ3JhdmFibGVJbmNvbWUsIGNlZHVsYXI6IGNlZHVsYXIgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTkVXR1RPQ2VkdWxhcjtcbn0oQ2VkdWxhcikpO1xuZXhwb3J0IHsgTkVXR1RPQ2VkdWxhciB9O1xuIiwiLypcbkNvcHlyaWdodCAoQykgMjAyMiBHZXJhcmRvIFDDqXJleiBQw6lyZXogLSBBbGwgUmlnaHRzIFJlc2VydmVkXG48Z2VyYXJkMnBlcmV6QG91dGxvb2suY29tPlxuVW5hdXRob3JpemVkIGNvcHlpbmcgb2YgdGhpcyBmaWxlLCB2aWEgYW55IG1lZGl1bSBpcyBzdHJpY3RseSBwcm9oaWJpdGVkXG5Qcm9wcmlldGFyeSBhbmQgY29uZmlkZW50aWFsXG5cbkZpbGU6IGlzci50c1xuQ3JlYXRlZDogIDIwMjItMDEtMzBUMDQ6MjY6MTIuODY5WlxuTW9kaWZpZWQ6IDIwMjItMDQtMTlUMTk6NTk6MDYuOTEwWlxuKi9cbmltcG9ydCB7IE1vdmVtZW50IH0gZnJvbSAnLi4vLi4vYm9vay1rZWVwaW5nJztcbnZhciBJU1JUYXggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSVNSVGF4KF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9hLnllYXIsIHllYXIgPSBfYiA9PT0gdm9pZCAwID8gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIDogX2IsIG1vdmVtZW50cyA9IF9hLm1vdmVtZW50cztcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICAgICAgdGhpcy5ib29rS2VlcGluZyA9IE1vdmVtZW50LmNhbGN1bGF0ZShtb3ZlbWVudHMpO1xuICAgIH1cbiAgICBJU1JUYXgucHJvdG90eXBlLmNlZHVsYXIgPSBmdW5jdGlvbiAoZ3JhdmFibGVJbmNvbWUsIGFtb3VudCkge1xuICAgICAgICByZXR1cm4gZ3JhdmFibGVJbmNvbWUgKiBhbW91bnQ7XG4gICAgfTtcbiAgICBJU1JUYXgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vdmVtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbW92ZW1lbnRzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgbW92ZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG1vdikgeyByZXR1cm4gX3RoaXMuYm9va0tlZXBpbmcucGx1cyhtb3YpOyB9KTtcbiAgICB9O1xuICAgIElTUlRheC5wcm90b3R5cGUubGltaXRDb25kaXRpb24gPSBmdW5jdGlvbiAoX2EsIHV0aWxpdHkpIHtcbiAgICAgICAgdmFyIGluZmVyaW9yID0gX2FbMF0sIHN1cGVyaW9yID0gX2FbMV07XG4gICAgICAgIHJldHVybiB1dGlsaXR5ID49IGluZmVyaW9yICYmIHV0aWxpdHkgPCBzdXBlcmlvcjtcbiAgICB9O1xuICAgIElTUlRheC5wcm90b3R5cGUuZmluZFRheFN0ZXAgPSBmdW5jdGlvbiAoZ3JhdmFibGVJbmNvbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5UYXhUYWJsZS5maW5kKHRoaXMueWVhcikudGhhdE1hdGNoZXMoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5saW1pdENvbmRpdGlvbihkLCBncmF2YWJsZUluY29tZSk7XG4gICAgICAgIH0pKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLlRheFRhYmxlLmZpbmQodGhpcy55ZWFyKS5kYXRhWzBdO1xuICAgIH07XG4gICAgLyoqIFRoaXMgY2FuIGJlIG92ZXJpZGUgKi9cbiAgICBJU1JUYXgucHJvdG90eXBlLnByZXBhcmVQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmJvb2tLZWVwaW5nLCBpbmNvbWUgPSBfYS5pbmNvbWUsIGdyYXZhYmxlSW5jb21lID0gX2EuZ3JhdmFibGVJbmNvbWUsIG91dGNvbWUgPSBfYS5leHBlbnNlcywgZmFjdHVyYXRlZCA9IF9hLmZhY3R1cmF0ZWQ7XG4gICAgICAgIHZhciBfYiA9IHRoaXMuZmluZFRheFN0ZXAoZ3JhdmFibGVJbmNvbWUpLCBpbmZlcmlvciA9IF9iWzBdLCBzdXBlcmlvciA9IF9iWzFdLCBjdW90YSA9IF9iWzJdLCByYXRlID0gX2JbM10sIHRibFNwcmQgPSBfYi5zbGljZSg0KTtcbiAgICAgICAgdmFyIGV4Y2VkZW50TEkgPSBncmF2YWJsZUluY29tZSAtIGluZmVyaW9yO1xuICAgICAgICB2YXIgbWFyZ2luYWxUYXggPSBleGNlZGVudExJICogKHJhdGUgLyAxMDApO1xuICAgICAgICB2YXIgcHJldmlld0lTUiA9IG1hcmdpbmFsVGF4ICsgY3VvdGE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzYWxhcmlvTm9ybWFsaXphZG86IDAsXG4gICAgICAgICAgICBzYWxhcmlvUGVyY2liaWRvOiAwLFxuICAgICAgICAgICAgaXNyOiAwLFxuICAgICAgICAgICAgY2VkdWxhcjogMCxcbiAgICAgICAgICAgIGltcHVlc3RvQ2FyZ286IDAsXG4gICAgICAgICAgICBmYWN0dXJhdGVkOiBmYWN0dXJhdGVkLFxuICAgICAgICAgICAgaW5jb21lOiBpbmNvbWUsXG4gICAgICAgICAgICBvdXRjb21lOiBvdXRjb21lLFxuICAgICAgICAgICAgZ3JhdmFibGVJbmNvbWU6IGdyYXZhYmxlSW5jb21lLFxuICAgICAgICAgICAgcHJldmlld0lTUjogcHJldmlld0lTUixcbiAgICAgICAgICAgIG1hcmdpbmFsVGF4OiBtYXJnaW5hbFRheCxcbiAgICAgICAgICAgIGluZmVyaW9yOiBpbmZlcmlvcixcbiAgICAgICAgICAgIGN1b3RhOiBjdW90YSxcbiAgICAgICAgICAgIHJhdGU6IHJhdGUsXG4gICAgICAgICAgICBleGNlZGVudExJOiBleGNlZGVudExJLFxuICAgICAgICAgICAgb3RoZXJzOiB7XG4gICAgICAgICAgICAgICAgc3VwZXJpb3I6IHN1cGVyaW9yLFxuICAgICAgICAgICAgICAgIHRibFNwcmQ6IHRibFNwcmRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHRyYToge31cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBJU1JUYXg7XG59KCkpO1xuZXhwb3J0IHsgSVNSVGF4IH07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IElTUlRheCB9IGZyb20gJy4uL2ZlZGVyYWwvaXNyJztcbmltcG9ydCB7IFRBQkxFIH0gZnJvbSAnLi4vdGFibGVzL2lzci1zYWxhcnkudGFibGVzJztcbmltcG9ydCB7IFVNQVRhYmxlIH0gZnJvbSAnLi4vdGFibGVzL3VtYSc7XG52YXIgcHJpbWFSaWVzZ28gPSAwLjAwNTtcbmZ1bmN0aW9uIHJlZHVjZShjb21wdW5kT2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbXB1bmRPYmplY3QpLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIGtleSkge1xuICAgICAgICB2YXIgZGF0YSA9IGNvbXB1bmRPYmplY3Rba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgcmVkdWNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbCArIGRhdGE7XG4gICAgfSwgMCk7XG59XG52YXIgTmV3U2FsYXJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOZXdTYWxhcnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTmV3U2FsYXJ5KF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9hLnllYXIsIHllYXIgPSBfYiA9PT0gdm9pZCAwID8gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIDogX2IsIF9jID0gX2EuZGlhc0FndWluYWxkbywgZGlhc0FndWluYWxkbyA9IF9jID09PSB2b2lkIDAgPyAxNSA6IF9jLCBfZCA9IF9hLnByaW1hVmFjYWNpb25hbCwgcHJpbWFWYWNhY2lvbmFsID0gX2QgPT09IHZvaWQgMCA/IDAuMjUgOiBfZCwgX2UgPSBfYS5kaWFzVmFjYWNpb25lcywgZGlhc1ZhY2FjaW9uZXMgPSBfZSA9PT0gdm9pZCAwID8gNiA6IF9lLCBfZiA9IF9hLm1vdmVtZW50cywgbW92ZW1lbnRzID0gX2YgPT09IHZvaWQgMCA/IFtdIDogX2Y7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHsgeWVhcjogeWVhciwgbW92ZW1lbnRzOiBtb3ZlbWVudHMgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuVGF4VGFibGUgPSBUQUJMRTtcbiAgICAgICAgX3RoaXMuZGlhc0FndWluYWxkbyA9IDE1O1xuICAgICAgICBfdGhpcy5wcmltYVZhY2FjaW9uYWwgPSAwLjI1O1xuICAgICAgICBfdGhpcy5kaWFzVmFjYWNpb25lcyA9IDY7XG4gICAgICAgIF90aGlzLmRpYXNBZ3VpbmFsZG8gPSBkaWFzQWd1aW5hbGRvO1xuICAgICAgICBfdGhpcy5wcmltYVZhY2FjaW9uYWwgPSBwcmltYVZhY2FjaW9uYWw7XG4gICAgICAgIF90aGlzLmRpYXNWYWNhY2lvbmVzID0gZGlhc1ZhY2FjaW9uZXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTmV3U2FsYXJ5LnByb3RvdHlwZS5jZWR1bGFyID0gZnVuY3Rpb24gKGdyYXZhYmxlSW5jb21lLCBhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICBOZXdTYWxhcnkucHJvdG90eXBlLmNhbGN1bGF0ZVRheGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgVU1BID0gVU1BVGFibGUuZ2V0KHRoaXMueWVhcik7XG4gICAgICAgIHZhciBzYWxhcnkgPSB0aGlzLmJvb2tLZWVwaW5nLmZhY3R1cmF0ZWQ7XG4gICAgICAgIHZhciBNQVhTREkgPSAyNSAqIFVNQTtcbiAgICAgICAgLyoqIFNhbGFyaW8gRGlhcmlvICovXG4gICAgICAgIHZhciBTRCA9IHNhbGFyeSAvIDMwO1xuICAgICAgICAvKiogRmFjdG9yIGRlIEludGVncmFjaW9uICovXG4gICAgICAgIHZhciBGSSA9ICgzNjUgKyB0aGlzLmRpYXNBZ3VpbmFsZG8gKyB0aGlzLmRpYXNWYWNhY2lvbmVzICogdGhpcy5wcmltYVZhY2FjaW9uYWwpIC8gMzY1O1xuICAgICAgICB2YXIgcHJpbWFWYWNhY2lvbmFsID0gU0QgKiB0aGlzLnByaW1hVmFjYWNpb25hbCAqIHRoaXMuZGlhc1ZhY2FjaW9uZXM7XG4gICAgICAgIC8qKiBTYWxhcmlvIERpYXJpbyBJbnRlZ3JhZG8gKi9cbiAgICAgICAgdmFyIFNESSA9IFNEICogRkk7XG4gICAgICAgIC8qKiBTYWxhcmlvIEJhc2UgQ29yaXphY2lvbiAqL1xuICAgICAgICB2YXIgU0JDID0gU0RJID4gTUFYU0RJID8gTUFYU0RJIDogU0RJO1xuICAgICAgICB2YXIgYWd1aW5hbGRvID0gU0QgKiB0aGlzLmRpYXNBZ3VpbmFsZG87XG4gICAgICAgIHZhciBwcmltYSA9IFNEICogdGhpcy5kaWFzVmFjYWNpb25lcyAqIHRoaXMucHJpbWFWYWNhY2lvbmFsO1xuICAgICAgICB2YXIgZGlhcyA9IDMwO1xuICAgICAgICB2YXIgZW1wbGVhZG9yID0ge1xuICAgICAgICAgICAgUmllc2dvVHJhYmFqbzogZGlhcyAqIFNCQyAqIHByaW1hUmllc2dvLFxuICAgICAgICAgICAgRW5mZXJtZWRhZE1hdGVybmlkYWQ6IHtcbiAgICAgICAgICAgICAgICBFeU06IGRpYXMgKiBVTUEgKiAwLjIwNCxcbiAgICAgICAgICAgICAgICBFeU1FeDogZGlhcyAqIChTQkMgLSAzICogVU1BID4gMCA/IChTQkMgLSAzICogVU1BKSAqIDAuMDExIDogMCksXG4gICAgICAgICAgICAgICAgRXlNRDogZGlhcyAqIFNCQyAqIDAuMDA3LFxuICAgICAgICAgICAgICAgIEV5TVA6IGRpYXMgKiBTQkMgKiAwLjAxMDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJbnZhbGlkZXpWaWRhOiB7XG4gICAgICAgICAgICAgICAgRXNwZWNpZTogZGlhcyAqIFNCQyAqIDAuMDE3NSxcbiAgICAgICAgICAgICAgICBSZXRpcm86IGRpYXMgKiBTQkMgKiAwLjAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUkNFQVY6IHtcbiAgICAgICAgICAgICAgICBSZXRpcm86IGRpYXMgKiBTQkMgKiAwLjAyIC8gMixcbiAgICAgICAgICAgICAgICBDRUFWOiBkaWFzICogU0JDICogMC4wMzE1MCAvIDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJbmZvbmF2aXQ6IGRpYXMgKiBTQkMgKiAwLjA1IC8gMixcbiAgICAgICAgICAgIEd1YXJkZXJpYXM6IGRpYXMgKiBTQkMgKiAwLjAxXG4gICAgICAgIH07XG4gICAgICAgIHZhciB0cmFiYWphZG9yID0ge1xuICAgICAgICAgICAgUmllc2dvVHJhYmFqbzogMCxcbiAgICAgICAgICAgIEVuZmVybWVkYWRNYXRlcm5pZGFkOiB7XG4gICAgICAgICAgICAgICAgRXlNOiAwLFxuICAgICAgICAgICAgICAgIEV5TUV4OiBkaWFzICogKFNCQyAtIDMgKiBVTUEgPiAwID8gKFNCQyAtIDMgKiBVTUEpICogMC4wMDQgOiAwKSxcbiAgICAgICAgICAgICAgICBFeU1EOiBkaWFzICogU0JDICogMC4wMDI1LFxuICAgICAgICAgICAgICAgIEV5TVA6IGRpYXMgKiBTQkMgKiAwLjAwMzc1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSW52YWxpZGV6VmlkYToge1xuICAgICAgICAgICAgICAgIEVzcGVjaWU6IGRpYXMgKiBTQkMgKiAwLjAwNjI1LFxuICAgICAgICAgICAgICAgIFJldGlybzogZGlhcyAqIFNCQyAqIDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSQ0VBVjoge1xuICAgICAgICAgICAgICAgIFJldGlybzogMCxcbiAgICAgICAgICAgICAgICBDRUFWOiBkaWFzICogU0JDICogMC4wMTEyNSAvIDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJbmZvbmF2aXQ6IDAsXG4gICAgICAgICAgICBHdWFyZGVyaWFzOiAwXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpbXNzVHJhYmFqYWRvciA9IHJlZHVjZSh0cmFiYWphZG9yKTtcbiAgICAgICAgdmFyIGltc3NQYXRyb24gPSByZWR1Y2UoZW1wbGVhZG9yKTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcmVwYXJlUGFyYW1ldGVycygpLCBwcmV2aWV3SVNSID0gX2EucHJldmlld0lTUiwgcGFyYW1zID0gX19yZXN0KF9hLCBbXCJwcmV2aWV3SVNSXCJdKTtcbiAgICAgICAgdmFyIGlzciA9IHByZXZpZXdJU1I7XG4gICAgICAgIHZhciBzYWxhcmlvUGVyY2liaWRvID0gc2FsYXJ5IC0gaXNyIC0gaW1zc1RyYWJhamFkb3I7XG4gICAgICAgIHZhciBzYWxhcmlvTm9ybWFsaXphZG8gPSAoKHNhbGFyeSAtIGlzciArIGltc3NQYXRyb24pICogMTIgKyBhZ3VpbmFsZG8gKyBwcmltYVZhY2FjaW9uYWwpIC8gMTI7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGFyYW1zKSwgeyBjZWR1bGFyOiAwLCBpbXB1ZXN0b0NhcmdvOiAwLCBjdW90YTogMCwgcHJldmlld0lTUjogcHJldmlld0lTUiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBTREk6IFNESSxcbiAgICAgICAgICAgICAgICBwcmltYVZhY2FjaW9uYWw6IHByaW1hVmFjYWNpb25hbCxcbiAgICAgICAgICAgICAgICBTRDogU0QsXG4gICAgICAgICAgICAgICAgU0JDOiBTQkMsXG4gICAgICAgICAgICAgICAgYWd1aW5hbGRvOiBhZ3VpbmFsZG8sXG4gICAgICAgICAgICAgICAgcHJpbWE6IHByaW1hLFxuICAgICAgICAgICAgICAgIGVtcGxlYWRvcjogZW1wbGVhZG9yLFxuICAgICAgICAgICAgICAgIHRyYWJhamFkb3I6IHRyYWJhamFkb3IsXG4gICAgICAgICAgICAgICAgaW1zc1BhdHJvbjogaW1zc1BhdHJvbixcbiAgICAgICAgICAgICAgICBpbXNzVHJhYmFqYWRvcjogaW1zc1RyYWJhamFkb3JcbiAgICAgICAgICAgIH0sIGlzcjogaXNyLCBzYWxhcmlvUGVyY2liaWRvOiBzYWxhcmlvUGVyY2liaWRvLCBzYWxhcmlvTm9ybWFsaXphZG86IHNhbGFyaW9Ob3JtYWxpemFkbyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBOZXdTYWxhcnk7XG59KElTUlRheCkpO1xuZXhwb3J0IHsgTmV3U2FsYXJ5IH07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IElTUlRheCB9IGZyb20gJy4uL2ZlZGVyYWwvaXNyJztcbmltcG9ydCB7IFRBQkxFIH0gZnJvbSAnLi4vdGFibGVzL2lzci1zZXJ2aWNlcyc7XG52YXIgUmVnaW1lblNlcnZpY2lvcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVnaW1lblNlcnZpY2lvcywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWdpbWVuU2VydmljaW9zKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuVGF4VGFibGUgPSBUQUJMRTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZWdpbWVuU2VydmljaW9zLnByb3RvdHlwZS5jZWR1bGFyID0gZnVuY3Rpb24gKGdyYXZhYmxlSW5jb21lLCBhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIGdyYXZhYmxlSW5jb21lICogYW1vdW50O1xuICAgIH07XG4gICAgUmVnaW1lblNlcnZpY2lvcy5wcm90b3R5cGUuY2FsY3VsYXRlVGF4ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJlcGFyZVBhcmFtZXRlcnMoKSwgZ3JhdmFibGVJbmNvbWUgPSBfYS5ncmF2YWJsZUluY29tZSwgcHJldmlld0lTUiA9IF9hLnByZXZpZXdJU1IsIGFsbCA9IF9fcmVzdChfYSwgW1wiZ3JhdmFibGVJbmNvbWVcIiwgXCJwcmV2aWV3SVNSXCJdKTtcbiAgICAgICAgdmFyIHNhbGFyaW9Ob3JtYWxpemFkbyA9IGdyYXZhYmxlSW5jb21lIC0gcHJldmlld0lTUjtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBhbGwpLCB7IHNhbGFyaW9QZXJjaWJpZG86IHNhbGFyaW9Ob3JtYWxpemFkbywgc2FsYXJpb05vcm1hbGl6YWRvOiBzYWxhcmlvTm9ybWFsaXphZG8sIGdyYXZhYmxlSW5jb21lOiBncmF2YWJsZUluY29tZSwgcHJldmlld0lTUjogcHJldmlld0lTUiwgaXNyOiBwcmV2aWV3SVNSIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFJlZ2ltZW5TZXJ2aWNpb3M7XG59KElTUlRheCkpO1xuZXhwb3J0IHsgUmVnaW1lblNlcnZpY2lvcyB9O1xuIiwiaW1wb3J0IHsgRGF0YVN0cnVjdCB9IGZyb20gJy4uLy4uLy4uL3N1cHBvcnQvaS10YXhlcy10YWJsZSc7XG5leHBvcnQgdmFyIEdUQ1RhYmxlID0gbmV3IERhdGFTdHJ1Y3QoW1xuICAgIFsxOTkwLCAwLjAzXSxcbiAgICBbMjAxMywgMC4wNV1cbl0pO1xuIiwiaW1wb3J0IHsgVGF4ZXNEYXRhYmFzZSB9IGZyb20gJy4uLy4uL3N1cHBvcnQvaS10YXhlcy10YWJsZSc7XG5pbXBvcnQgeyBNQVhfSU5DT01FIH0gZnJvbSAnLi9tYXgtaW5jb21lJztcbmV4cG9ydCB2YXIgVEFCTEUgPSBuZXcgVGF4ZXNEYXRhYmFzZShbXG4gICAgWzIwMjIsXG4gICAgICAgIFtcbiAgICAgICAgICAgIFswLjAxLCA2NDQuNTgsIDAuMDAsIDEuOTJdLFxuICAgICAgICAgICAgWzY0NC41OSwgNTQ3MC45MiwgMTIuMzgsIDYuNDBdLFxuICAgICAgICAgICAgWzU0NzAuOTMsIDk2MTQuNjYsIDMyMS4yNiwgMTAuODhdLFxuICAgICAgICAgICAgWzk2MTQuNjcsIDExMTc2LjYyLCA3NzIuMTAsIDE2LjAwXSxcbiAgICAgICAgICAgIFsxMTE3Ni42MywgMTMzODEuNDcsIDEwMjIuMDEsIDE3LjkyXSxcbiAgICAgICAgICAgIFsxMzM4MS40OCwgMjY5ODguNTAsIDE0MTcuMTIsIDIxLjM2XSxcbiAgICAgICAgICAgIFsyNjk4OC41MSwgNDI1MzcuNTgsIDQzMjMuNTgsIDIzLjUyXSxcbiAgICAgICAgICAgIFs0MjUzNy41OSwgODEyMTEuMjUsIDc5ODAuNzMsIDMwLjAwXSxcbiAgICAgICAgICAgIFs4MTIxMS4yNiwgMTA4MjgxLjY3LCAxOTU4Mi44MywgMzIuMDBdLFxuICAgICAgICAgICAgWzEwODI4MS42OCwgMzI0ODQ1LjAxLCAyODI0NS4zNiwgMzQuMDBdLFxuICAgICAgICAgICAgWzMyNDg0NS4wMiwgTUFYX0lOQ09NRSwgMTAxODc2LjkwLCAzNS4wMF1cbiAgICAgICAgXVxuICAgIF0sXG4gICAgWzIwMjEsXG4gICAgICAgIFtcbiAgICAgICAgICAgIFswLjAxLCA2NDQuNTgsIDAuMDAsIDEuOTJdLFxuICAgICAgICAgICAgWzY0NC41OSwgNTQ3MC45MiwgMTIuMzgsIDYuNDBdLFxuICAgICAgICAgICAgWzU0NzAuOTMsIDk2MTQuNjYsIDMyMS4yNiwgMTAuODhdLFxuICAgICAgICAgICAgWzk2MTQuNjcsIDExMTc2LjYyLCA3NzIuMTAsIDE2LjAwXSxcbiAgICAgICAgICAgIFsxMTE3Ni42MywgMTMzODEuNDcsIDEwMjIuMDEsIDE3LjkyXSxcbiAgICAgICAgICAgIFsxMzM4MS40OCwgMjY5ODguNTAsIDE0MTcuMTIsIDIxLjM2XSxcbiAgICAgICAgICAgIFsyNjk4OC41MSwgNDI1MzcuNTgsIDQzMjMuNTgsIDIzLjUyXSxcbiAgICAgICAgICAgIFs0MjUzNy41OSwgODEyMTEuMjUsIDc5ODAuNzMsIDMwLjAwXSxcbiAgICAgICAgICAgIFs4MTIxMS4yNiwgMTA4MjgxLjY3LCAxOTU4Mi44MywgMzIuMDBdLFxuICAgICAgICAgICAgWzEwODI4MS42OCwgMzI0ODQ1LjAxLCAyODI0NS4zNiwgMzQuMDBdLFxuICAgICAgICAgICAgWzMyNDg0NS4wMiwgTUFYX0lOQ09NRSwgMTAxODc2LjkwLCAzNS4wMF1cbiAgICAgICAgXVxuICAgIF1cbl0pO1xuIiwiaW1wb3J0IHsgVGF4ZXNEYXRhYmFzZSB9IGZyb20gJy4uLy4uL3N1cHBvcnQvaS10YXhlcy10YWJsZSc7XG5pbXBvcnQgeyBNQVhfSU5DT01FIH0gZnJvbSAnLi9tYXgtaW5jb21lJztcbmV4cG9ydCB2YXIgVEFCTEUgPSBuZXcgVGF4ZXNEYXRhYmFzZShbXG4gICAgWzIwMjEsIFtcbiAgICAgICAgICAgIFswLjAxLCA2NDQuNTgsIDAsIDEuOTJdLFxuICAgICAgICAgICAgWzY0NC41OSwgNTQ3MC45MiwgMTIuMzgsIDYuNDBdLFxuICAgICAgICAgICAgWzU0NzAuOTMsIDk2MTQuNjYsIDMyMS4yNiwgMTAuODhdLFxuICAgICAgICAgICAgWzk2MTQuNjcsIDExMTc2LjYyLCA3NzIuMSwgMTYuMDBdLFxuICAgICAgICAgICAgWzExMTc2LjYzLCAxMzM4MS40NywgMTAyMi4wMSwgMTcuOTJdLFxuICAgICAgICAgICAgWzEzMzgxLjQ4LCAyNjk4OC41MCwgMTQxNy4xMiwgMjEuMzZdLFxuICAgICAgICAgICAgWzI2OTg4LjUxLCA0MjUzNy41OCwgNDMyMy41OCwgMjMuNTJdLFxuICAgICAgICAgICAgWzQyNTM3LjU5LCA4MTIxMS4yNSwgNzk4MC43MywgMzAuMDBdLFxuICAgICAgICAgICAgWzgxMjExLjI2LCAxMDgyODEuNjcsIDE5NTgyLjgzLCAzMi4wMF0sXG4gICAgICAgICAgICBbMTA4MjgxLjY4LCAzMjQ4NDUuMDEsIDI4MjQ1LjM2LCAzNC4wMF0sXG4gICAgICAgICAgICBbMzI0ODQ1LjAyLCBNQVhfSU5DT01FLCAxMDE4NzYuOTAsIDM1LjAwXVxuICAgICAgICBdXSxcbiAgICBbMjAyMiwgW1xuICAgICAgICAgICAgWzAuMDEsIDY0NC41OCwgMCwgMS45Ml0sXG4gICAgICAgICAgICBbNjQ0LjU5LCA1NDcwLjkyLCAxMi4zOCwgNi40MF0sXG4gICAgICAgICAgICBbNTQ3MC45MywgOTYxNC42NiwgMzIxLjI2LCAxMC44OF0sXG4gICAgICAgICAgICBbOTYxNC42NywgMTExNzYuNjIsIDc3Mi4xLCAxNi4wMF0sXG4gICAgICAgICAgICBbMTExNzYuNjMsIDEzMzgxLjQ3LCAxMDIyLjAxLCAxNy45Ml0sXG4gICAgICAgICAgICBbMTMzODEuNDgsIDI2OTg4LjUwLCAxNDE3LjEyLCAyMS4zNl0sXG4gICAgICAgICAgICBbMjY5ODguNTEsIDQyNTM3LjU4LCA0MzIzLjU4LCAyMy41Ml0sXG4gICAgICAgICAgICBbNDI1MzcuNTksIDgxMjExLjI1LCA3OTgwLjczLCAzMC4wMF0sXG4gICAgICAgICAgICBbODEyMTEuMjYsIDEwODI4MS42NywgMTk1ODIuODMsIDMyLjAwXSxcbiAgICAgICAgICAgIFsxMDgyODEuNjgsIDMyNDg0NS4wMSwgMjgyNDUuMzYsIDM0LjAwXSxcbiAgICAgICAgICAgIFszMjQ4NDUuMDIsIE1BWF9JTkNPTUUsIDEwMTg3Ni45MCwgMzUuMDBdXG4gICAgICAgIF1dLFxuXSk7XG4iLCIvKlxuQ29weXJpZ2h0IChDKSAyMDIyIEdlcmFyZG8gUMOpcmV6IFDDqXJleiAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbjxnZXJhcmQycGVyZXpAb3V0bG9vay5jb20+XG5VbmF1dGhvcml6ZWQgY29weWluZyBvZiB0aGlzIGZpbGUsIHZpYSBhbnkgbWVkaXVtIGlzIHN0cmljdGx5IHByb2hpYml0ZWRcblByb3ByaWV0YXJ5IGFuZCBjb25maWRlbnRpYWxcblxuRmlsZTogbWF4LWluY29tZS50c1xuQ3JlYXRlZDogIDIwMjItMDMtMjFUMjM6MTQ6MjAuMzExWlxuTW9kaWZpZWQ6IDIwMjItMDMtMjFUMjM6MTQ6MzYuOTAwWlxuKi9cbmV4cG9ydCB2YXIgTUFYX0lOQ09NRSA9IDk5OTk5OTk5OTtcbiIsImltcG9ydCB7IERhdGFTdHJ1Y3QgfSBmcm9tICcuLi8uLi9zdXBwb3J0L2ktdGF4ZXMtdGFibGUnO1xuZXhwb3J0IHZhciBVTUFUYWJsZSA9IG5ldyBEYXRhU3RydWN0KFtcbiAgICBbMjAyMCwgODYuODhdLFxuICAgIFsyMDIxLCA4OS42Ml0sXG4gICAgWzIwMjIsIDk2LjIyXVxuXSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBJbmNvbWUgfSBmcm9tICcuLi90YXgvYm9vay1rZWVwaW5nJztcbmltcG9ydCB7IE5FV0dUT0NlZHVsYXIgfSBmcm9tICcuLi90YXgvdGF4ZXMvY2VkdWxhci9ndG8tY2VkdWxhcic7XG5pbXBvcnQgeyBOZXdTYWxhcnkgfSBmcm9tICcuLi90YXgvdGF4ZXMvcmVnaW1lbi9zYWxhcnknO1xuaW1wb3J0IHsgUmVnaW1lblNlcnZpY2lvcyB9IGZyb20gJy4uL3RheC90YXhlcy9yZWdpbWVuL3NlcnZpY2VzJztcbmZ1bmN0aW9uIGNhbGNBZGl0aW9uYWxzKGJlbmVmaXRzKSB7XG4gICAgdmFyIHNwaWNlSW5jb21lID0gMDtcbiAgICBpZiAoYmVuZWZpdHMuTWVkaWNhbEluc3VyYW5jZSkge1xuICAgICAgICBzcGljZUluY29tZSArPSAzMDAwMCAvIDEyO1xuICAgIH1cbiAgICBpZiAoYmVuZWZpdHMuTGlmZUluc3VyYW5jZSkge1xuICAgICAgICBzcGljZUluY29tZSArPSA0NTA7XG4gICAgfVxuICAgIGlmIChiZW5lZml0cy5EZW50YWxJbnN1cmFuY2UpIHtcbiAgICAgICAgc3BpY2VJbmNvbWUgKz0gMzAwMCAvIDEyO1xuICAgIH1cbiAgICBpZiAoYmVuZWZpdHMuU2lnaHRJbnN1cmFuY2UpIHtcbiAgICAgICAgc3BpY2VJbmNvbWUgKz0gNjAwMCAvIDEyO1xuICAgIH1cbiAgICByZXR1cm4gc3BpY2VJbmNvbWU7XG59XG5mdW5jdGlvbiBmaW5kTXhTYWxhcnkoc2FsYXJ5LCBzYWxhcmlvUGVyY2liaWRvLCBiZW5lZml0cykge1xuICAgIHZhciBtb25leSA9IHNhbGFyeTtcbiAgICB2YXIgdGFyZ2V0ID0gc2FsYXJpb1BlcmNpYmlkbztcbiAgICB2YXIgY29tcGFyZUluZm8gPSB7fTtcbiAgICB2YXIgc2FsYXJpb05vcm1hbGl6YWRvID0gMDtcbiAgICB2YXIgZXh0cmEgPSBjYWxjQWRpdGlvbmFscyhiZW5lZml0cyk7XG4gICAgZG8ge1xuICAgICAgICBjb21wYXJlSW5mbyA9IG5ldyBORVdHVE9DZWR1bGFyKG5ldyBOZXdTYWxhcnkoe1xuICAgICAgICAgICAgZGlhc0FndWluYWxkbzogYmVuZWZpdHMuQWd1aW5hbGRvLFxuICAgICAgICAgICAgZGlhc1ZhY2FjaW9uZXM6IGJlbmVmaXRzLlBhaWRWYWNhdGlvbnMsXG4gICAgICAgICAgICBwcmltYVZhY2FjaW9uYWw6IGJlbmVmaXRzLlZhY2F0aW9uc0JvbnVzIC8gMTAwLFxuICAgICAgICAgICAgbW92ZW1lbnRzOiBbbmV3IEluY29tZShtb25leSldXG4gICAgICAgIH0pKS5jYWxjdWxhdGVUYXhlcygpO1xuICAgICAgICBzYWxhcmlvTm9ybWFsaXphZG8gPSBjb21wYXJlSW5mby5zYWxhcmlvTm9ybWFsaXphZG8gKyBleHRyYTtcbiAgICAgICAgbW9uZXkgLT0gMTtcbiAgICB9IHdoaWxlICh0YXJnZXQgPCBzYWxhcmlvTm9ybWFsaXphZG8pO1xuICAgIGNvbnNvbGUubG9nKHsgZXh0cmE6IGV4dHJhLCBzYWxhcmlvUGVyY2liaWRvOiBzYWxhcmlvUGVyY2liaWRvLCBjb21wYXJlSW5mbzogY29tcGFyZUluZm8gfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbXhHcm9zczogY29tcGFyZUluZm8uaW5jb21lLFxuICAgICAgICBteE5ldDogY29tcGFyZUluZm8uc2FsYXJpb1BlcmNpYmlkbyxcbiAgICAgICAgbXhSZWFsOiBjb21wYXJlSW5mby5zYWxhcmlvTm9ybWFsaXphZG8sXG4gICAgICAgIG14RXh0cmE6IChjb21wYXJlSW5mby5zYWxhcmlvTm9ybWFsaXphZG8gLSBjb21wYXJlSW5mby5zYWxhcmlvUGVyY2liaWRvKSArIGV4dHJhXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNhbGN1bGF0ZShfYSkge1xuICAgIHZhciBkYXRhID0gX2EuZGF0YTtcbiAgICB2YXIgX2IgPSBkYXRhLCBzYWxhcnkgPSBfYi5zYWxhcnksIHVzZE1vZGUgPSBfYi51c2RNb2RlLCBpbmNvbWluZyA9IF9fcmVzdChfYiwgW1wic2FsYXJ5XCIsIFwidXNkTW9kZVwiXSk7XG4gICAgaWYgKHNhbGFyeSA+IDApIHtcbiAgICAgICAgdmFyIGluY29tZSA9IG5ldyBORVdHVE9DZWR1bGFyKG5ldyBSZWdpbWVuU2VydmljaW9zKHtcbiAgICAgICAgICAgIG1vdmVtZW50czogW25ldyBJbmNvbWUoc2FsYXJ5KV1cbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgZGF0YV8xID0gaW5jb21lLmNhbGN1bGF0ZVRheGVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFfMSk7XG4gICAgICAgIHZhciBteERhdGEgPSBmaW5kTXhTYWxhcnkoc2FsYXJ5LCBkYXRhXzEuc2FsYXJpb1BlcmNpYmlkbywgaW5jb21pbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyhteERhdGEpO1xuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKF9fYXNzaWduKHsgdXNOZXQ6IGRhdGFfMS5zYWxhcmlvUGVyY2liaWRvIH0sIG14RGF0YSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7fSk7XG4gICAgfVxufVxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsY3VsYXRlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==