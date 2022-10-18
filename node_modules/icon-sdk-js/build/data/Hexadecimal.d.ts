/**
 * Check whether string starts with '0x' prefix.
 * @param {string} str - the string.
 * @return {boolean} returns true if string starts with '0x' prefix.
 */
export declare function is0xPrefix(str: string): boolean;
/**
 * Check whether string starts with 'hx' prefix.
 * @param {string} str - the string.
 * @return {boolean} returns true if string starts with 'hx' prefix.
 */
export declare function isHxPrefix(str: string): boolean;
/**
 * Check whether string starts with 'cx' prefix.
 * @param {string} str - the string.
 * @return {boolean} returns true if string starts with 'cx' prefix.
 */
export declare function isCxPrefix(str: string): boolean;
/**
 * Add '0x' prefix to string.
 * @param {string} str - the string.
 * @return {string} the string with '0x' prefix.
 */
export declare function add0xPrefix(str: string): string;
/**
 * Add 'hx' prefix to string.
 * @param {string} str - the string.
 * @return {string} the string with 'hx' prefix.
 */
export declare function addHxPrefix(str: string): string;
/**
 * Add 'cx' prefix to string.
 * @param {string} str - the string.
 * @return {string} the string with 'cx' prefix.
 */
export declare function addCxPrefix(str: string): string;
/**
 * remove '0x' prefix from string.
 * @param {string} str - the string.
 * @return {string} the string without '0x' prefix.
 */
export declare function remove0xPrefix(str: string): string;
/**
 * remove 'hx' prefix from string.
 * @param {string} str - the string.
 * @return {string} the string without 'hx' prefix.
 */
export declare function removeHxPrefix(str: string): string;
/**
 * remove 'cx' prefix from string.
 * @param {string} str - the string.
 * @return {string} the string without 'cx' prefix.
 */
export declare function removeCxPrefix(str: string): string;
