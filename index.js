var spawn = require('child_process').spawn
var spawnSync = require('child_process').spawnSync
var path = require('path')

function run(command, options){
     
        options = options || {}
            
        command = command
            .replace(/\//g, path.sep)
            .replace(/\\/g, path.sep)
            
        var parts = command.split(' ')
        var extension = process.platform == 'win32' ? '.cmd' : ''
        var file = parts[0] + extension
        var args = parts.slice(1)
        
        console.log('spawn', file,args, process.platform)
        return spawn(file, args)
}

module.exports = run