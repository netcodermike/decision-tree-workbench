import {test} from 'node:test';import assert from 'node:assert/strict';import * as c from '../src/core.js';
test('separates classes; rejects invalid features',()=>{const t=c.train(c.parse('1,1,a\n2,2,a\n8,8,b\n9,9,b'));assert.equal(c.predict(t,[1,2]),'a');assert.equal(c.predict(t,[9,8]),'b');assert.throws(()=>c.train([{x:[NaN,1],label:'x'}]));assert.throws(()=>c.parse('bad'))});
