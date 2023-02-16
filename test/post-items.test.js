const request = require('supertest');
const app = require('../File');
const expect = require('chai').expect;

describe('POST /items', function() {
  it('should upload a new medical bill', function(done) {
    const bill = {
      patientName: 'Bob Johnson',
      patientAddress: '789 Elm St, Anytown USA',
      hospitalName: 'Regional Medical Center',
      dateOfService: '2022-02-13',
      billAmount: 2000.00
    };
    request(app)
      .post('/items')
      .send(bill)
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('id', 3);
        expect(res.body).to.have.property('patientName', 'Bob Johnson');
        expect(res.body).to.have.property('patientAddress', '789 Elm St, Anytown USA');
        expect(res.body).to.have.property('hospitalName', 'Regional Medical Center');
        expect(res.body).to.have.property('dateOfService', '2022-02-13');
        expect(res.body).to.have.property('billAmount', 2000.00);
        done();
      });
  });
});
