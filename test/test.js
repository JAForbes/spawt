var run = require('..')
var test = require('tape')
var path = require('path')

test('picks correct command file', function(t){
    
    run(path.resolve(__dirname, 'commands', 'a'))
        .stdout.on('data', function(stdout){
            t.ok(String(stdout).indexOf(process.platform) > -1)
            t.end()
        })
})
