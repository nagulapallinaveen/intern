const request = require('supertest');
const app = require('../File');
const expect = require('chai').expect;

describe('GET /items', function() {
  it('should return a list of all medical bills', function(done) {
    request(app)
      .get('/items')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(2);
        expect(res.body[0]).to.have.property('id', 1);
        expect(res.body[0]).to.have.property('patientName', 'John Smith');
        expect(res.body[0]).to.have.property('patientAddress', '123 Main St, Anytown USA');
        expect(res.body[0]).to.have.property('hospitalName', 'General Hospital');
        expect(res.body[0]).to.have.property('dateOfService', '2022-02-15');
        expect(res.body[0]).to.have.property('billAmount', 1500.00);
        expect(res.body[1]).to.have.property('id', 2);
        expect(res.body[1]).to.have.property('patientName', 'Jane Doe');
        expect(res.body[1]).to.have.property('patientAddress', '456 Oak St, Somewhere USA');
        expect(res.body[1]).to.have.property('hospitalName', 'Community Hospital');
        expect(res.body[1]).to.have.property('dateOfService', '2022-02-14');
        expect(res.body[1]).to.have.property('billAmount', 1000.00);
        done();
      });
  });
});
