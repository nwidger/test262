// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.bold
es6id: B.2.3.5
description: Property descriptor for String.prototype.bold
info: >
    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(String.prototype, 'bold');
verifyWritable(String.prototype, 'bold');
verifyConfigurable(String.prototype, 'bold');
