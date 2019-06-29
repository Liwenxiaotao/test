const axios = require('axios')
describe("接口", function() {
  it("test接口", function(done) {
    axios.get('http://localhost:3000/test')
      .then(function(res) {
        if(res.data.data === 'hello world') {
          done()
        } else {
          done(new Error('数据请求错误'))
        }
      })
      .catch(function(error) {
        done(error)
      })
  })
})