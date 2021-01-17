const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');

describe('GET / Search items by query', () => {
    it('OK, Search items', (done) => {
        request(app).get('/api/items?search=ipod')
        .then((res => {
            expect(res.status).to.equal(200);
            const body = res.body;
            expect(body).to.contain.property('author');
            expect(body.items).to.not.be.empty;
            done();
        }));
    });
});


describe('GET / Search items by id', () => {
    it('OK, Search by id', (done) => {
        request(app).get('/api/items/MLA872095427')
        .then((res => {
            expect(res.status).to.equal(200);
            const body = res.body;
            expect(body.item.id).to.equal('MLA872095427');
        
            done();
        }));
    });
});
