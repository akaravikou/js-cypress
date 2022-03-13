const axios = require('axios');

const chai = require('chai');
chai.use(require('chai-json-schema'));
const getResponseSchema = require('../test/getResponseSchema.json');

let temp;
describe("GET user test",  function() {
    it('should create a new user',  function(){
         axios.get('https://jsonplaceholder.typicode.com')
        .then(response => {
           chai.assert.equal(response.status, 200);
           chai.assert.jsonSchema(response.data, getResponseSchema);
        })
    })
})