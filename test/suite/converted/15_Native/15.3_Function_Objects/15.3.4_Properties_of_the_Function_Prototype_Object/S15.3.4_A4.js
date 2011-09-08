// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function prototype object does not have a valueOf property of its own. however, it inherits the valueOf property from the Object prototype Object
 *
 * @section: 15.3.4;
 * @path: 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/S15.3.4_A4.js;
 * @description: Checking valueOf property at Function.prototype;
 */

//CHECK#1
if (Function.prototype.hasOwnProperty("valueOf") !== false) {
  $ERROR('#1: The Function prototype object does not have a valueOf property of its own');
}

//CHECK#2
if (typeof Function.prototype.valueOf === "undefined") {
  $ERROR('#2: however, it inherits the valueOf property from the Object prototype Object');
}

//CHECK#3
if (Function.prototype.valueOf !== Object.prototype.valueOf) {
  $ERROR('#3: however, it inherits the valueOf property from the Object prototype Object');
}
