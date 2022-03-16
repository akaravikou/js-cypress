const axios = require('axios');
const chai = require('chai');
const { expect } = require('chai');
const config = require('../resources/config');

let responseSchema = require('../resources/users/get/getResponseSchema.json');
let postRequest = require('../resources/users/post/request.json');
let postResponse = require('../resources/users/post/response.json');
let requestMissingFields = require('../resources/users/post/requestMissingFields.json');
let responseMissingFields = require('../resources/users/post/responseMissingFields.json');
let deleteResponse = require('../resources/users/delete/response.json');
let deleteRequest = require('../resources/users/delete/request.json');

describe("API", () => {

    it('Get request, check status, validate response by json schema', () => {
        chai.use(require('chai-json-schema'));

        axios.get(config.baseUrl + config.endPoint)
            .then(response => {
                chai.assert.equal(response.status, 200);
                return response;
            })
            .then(response => {
                chai.assert.jsonSchema(response.data, responseSchema);
            }).catch(error => {
                console.log(error);
            });
    })
    it('Post request, check status, validate response', () => {
        postRequest.name = config.name;
        postRequest.username = config.username;
        postRequest.company.name = config.companyName;

        postResponse.name = config.name;
        postResponse.username = config.username;
        postResponse.company.name = config.companyName;

        axios.post(config.baseUrl + config.endPoint, postRequest)
            .then((response) => {
                expect(response.status).to.be.equal(201);
                return response;
            }).then(response => {
                expect(response.data).to.be.deep.equal(postResponse);
            }).catch(error => {
                console.log(error);
            });
    })
    it('Post request with missing fields, check status, validate response', () => {
        delete requestMissingFields.name;
        delete requestMissingFields.username;
        requestMissingFields.company.name = config.companyName;
        responseMissingFields.company.name = config.companyName;

        axios.post(config.baseUrl + config.endPoint, requestMissingFields)
            .then(response => {
                chai.assert.equal(response.status, 201);
                return response;
            })
            .then(response => {
                expect(response.data).to.be.deep.equal(responseMissingFields);
            }).catch(error => {
                console.log(error);
            });
    })
    it('Delete request, check status, validate response', () => {
        axios.delete(config.baseUrl + config.endPoint + '/1', deleteRequest)
            .then(response => {
                expect(response.status).to.equal(200);
                return response;
            })
            .then(response => {
                expect(response.data).to.be.deep.equal(deleteResponse);
            }).catch(error => {
                console.log(error);
            });
    })
})
