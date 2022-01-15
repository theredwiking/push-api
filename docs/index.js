
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const reqs = require('./requests');
// https://www.section.io/engineering-education/documenting-node-js-rest-api-using-swagger/
module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...reqs,
};
