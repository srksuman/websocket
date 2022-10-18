/// <reference types="node" />
interface KeyStore {
    version: 3;
    id: string;
    address: string;
    crypto: {
        ciphertext: string;
        cipherparams: {
            iv: string;
        };
        cipher: string;
        kdf: any;
        kdfparams: {
            dklen: number;
            salt: string;
            prf?: string;
            n?: number;
            r?: number;
            p?: number;
            c?: number;
        };
        mac: string;
    };
    coinType: "icx";
}
/**
 * Class which provides EOA functions.
 */
export default class Wallet {
    private _privKey;
    private privKey;
    private pubKey;
    private address;
    /**
     * Creates an instance of Wallet.
     * @param {string} privKey - The private key.
     */
    constructor(privKey: typeof Buffer);
    /**
     * Creates an instance of Wallet.
     * @static
     * @return {Wallet} The wallet instance.
     */
    static create(): Wallet;
    /**
     * Import existing wallet instance using private key.
     * @static
     * @param {string} privKey - The private key.
     * @return {Wallet} The wallet instance.
     */
    static loadPrivateKey(privKey: string): Wallet;
    /**
     * Import existing wallet instance using keystore object.
     * @static
     * @param {object|string} keystore - The keystore object or stringified object.
     * @param {string} password - The password of keystore object.
     * @param {boolean=} nonStrict - Set whether checking keystore file case-insensitive or not. (affects when 'keystore' param is string.)
     * @return {Wallet} The wallet instance.
     */
    static loadKeystore(keystore: KeyStore | string, password: string, nonStrict: boolean): Wallet;
    /**
     * Get keystore object of an instance of a `Wallet` class.
     * @param {string} password - The new password for encryption.
     * @param {object=} opts - The custom options for encryption.
     * @return {object} A keystore object.
     */
    store(password: string, opts?: any): KeyStore;
    /**
     * Generate signature string by signing transaction object.
     * @param {Buffer} data - The serialized transaction object.
     * @return {string} The signature string.
     */
    sign(data: typeof Buffer): string;
    /**
     * Get private key of wallet instance.
     * @return {string} The private key.
     */
    getPrivateKey(): string;
    /**
     * Get public key of wallet instance.
     * @return {string} The public key.
     */
    getPublicKey(): string;
    /**
     * Get EOA address of wallet instance.
     * @return {string} The EOA address.
     */
    getAddress(): string;
}
export {};
