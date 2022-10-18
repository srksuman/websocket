import BigNumber from "bignumber.js";
import { Hash } from "../types/hash";
/**
 * Class which provides unit conversion functions.
 */
export default class IconAmount {
    /**
     * IconAmount class property which contains unit digit constants
     */
    static Unit: {
        LOOP: number;
        GLOOP: number;
        ICX: number;
    };
    /**
     * TODO: test static toLoop, fromLoop
     */
    /**
     * IconAmount static method which converts the unit of number into loop
     * @param {string|BigNumber|number} number - the value of amount.
     * @param {string|BigNumber|number} unit - the digit of unit.
     * @return {string|BigNumber|number} the value converted into loop
     */
    static toLoop: typeof toLoop;
    /**
     * IconAmount static method which converts the unit of number into ICX
     * @param {string|BigNumber|number} number - the value of amount.
     * @param {string|BigNumber|number} unit - the digit of unit.
     * @return {string|BigNumber|number} the value converted into ICX
     */
    static fromLoop: typeof fromLoop;
    value: BigNumber;
    digit: number;
    /**
     * Creates an instance of IconAmount.
     * @param {string|BigNumber|number} value - the value of amount.
     * @param {string|BigNumber|number} digit - the digit of unit.
     */
    /**
     * Note: According to official document of BigNumber.js,
     * it is recommended to create BigNumbers from String values rather than Number values
     * to avoid a potential loss of precision.
     */
    constructor(value: any, digit: any);
    /**
     * Creates an instance of IconAmount.
     * @static
     * @param {string|BigNumber|number} value - the value of amount.
     * @param {string|BigNumber|number} digit - the digit of unit.
     * @return {IconAmount} the IconAmount instance.
     */
    static of(value: any, digit: any): IconAmount;
    /**
     * Get digit property.
     * @return {number} the digit property of IconAmount instance.
     */
    getDigit(): number;
    /**
     * Convert value property into string
     * @return {string} the stringified value property of IconAmount instance
     */
    toString(): string;
    /**
     * Convert the unit of value property into loop
     * @return {BigNumber} the value property converted into loop
     */
    toLoop(): BigNumber;
    /**
     * Convert the unit of value property into custom digit
     * @param {string|BigNumber|number} digit - the digit of unit.
     * @return {IconAmount} the IconAmount instance converted into custom digit
     */
    convertUnit(digit: any): IconAmount;
}
declare function toLoop(number: Hash, unit: string): Hash;
declare function fromLoop(number: Hash, unit: string): Hash;
export {};
