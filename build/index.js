"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var collection = new NumbersCollection_1.NumbersCollection([8, 2, -4, 0]);
var sorter = new Sorter_1.Sorter(collection);
sorter.sort();
console.log("sorter.collection", sorter.collection);
