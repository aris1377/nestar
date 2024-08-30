import { ObjectId } from "mongoose";

export interface T {
    [key: string]: any;
}


// Collection'ni ixtiyoriy document'ini o'zgartirib beradi
export interface StatisticModifier {
	_id: ObjectId; // doc _id
	targetKey: string; // what change
	modifier: number; // what value
}