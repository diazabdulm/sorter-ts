import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const collection = new NumbersCollection([8, 2, -4, 0]);
const sorter = new Sorter(collection);

sorter.sort();
console.log("sorter.collection", sorter.collection);
