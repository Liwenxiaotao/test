const request = require('supertest')
const app = require('./app.js')


describe("接口", function() {
  it("test接口", function(done) {
    request(app).get('/test')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
        if (res.body.data === 'hello world') {
          done()
        } else {
          done(new Error('接口数据错误'))
        }
      })
  })
})