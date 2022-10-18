/**
 * Class representing the Exception
 */
export declare class Exception {
    code: string;
    message: string;
    /**
     * Creates an instance of Exception.
     * @param {string} code The exception code.
     * @param {string} message The exception message.
     */
    constructor(code: string, message: string);
    /**
     * Converts Exception instance to string.
     * @return The exception string.
     */
    toString(): string;
}
/**
 * The exception class relate to data type.
 * @extends {Exception}
 */
export declare class DataError extends Exception {
    /**
     * Creates an instance of DataError.
     * @param {string} message The exception message.
     */
    constructor(message: string);
}
/**
 * The exception class relate to format.
 * @extends {Exception}
 */
export declare class FormatError extends Exception {
    /**
     * Creates an instance of FormatError.
     * @param {string} message The exception message.
     */
    constructor(message: string);
}
/**
 * The exception class relate to wallet issue.
 * @extends {Exception}
 */
export declare class WalletError extends Exception {
    /**
     * Creates an instance of WalletError.
     * @param {string} message The exception message.
     */
    constructor(message: string);
}
/**
 * The exception class relate to network issue.
 * @extends {Exception}
 */
export declare class RpcError extends Exception {
    /**
     * Creates an instance of RpcError.
     * @param {string} message The exception message.
     */
    constructor(message: string);
}
/**
 * The exception class relate to SCORE issue.
 * @extends {Exception}
 */
export declare class ScoreError extends Exception {
    /**
     * Creates an instance of ScoreError.
     * @param {string} message The exception message.
     */
    constructor(message: string);
}
export declare class NetworkError extends Exception {
    constructor(message: string);
}
