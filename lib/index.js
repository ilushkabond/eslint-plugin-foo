'use strict';

const rules = {
    'no-foo': require('./rules/no-foo-rule'),
};

module.exports = {
    rules,
};

console.log(rules);