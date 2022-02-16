const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require("../index");

chai.use(chaiHttp)
chai.should()

describe("Make Sure that status is 200", () => {
    it("Should return by 200", (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    })
})

describe("Make Sure register on data", () => {
    it("Should return by 400", (done) => {
        chai.request(app)
            .post('/register')
            .end((err, res) => {
                res.should.have.status(400);
                // res.body.should.be.a('object');
                done();
            });
    })
})