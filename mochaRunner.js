const Mocha = require('mocha')

const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './docs/mochawesome-report'
  }
})

mocha.addFile('./service/router.spec.js')

mocha.run(function(errorLength) {
  if(errorLength > 0) {
    console.log('接口测试失败')
    process.exit(1)
  } else {
    console.log('接口测试结束')
    process.exit( )
  }
})