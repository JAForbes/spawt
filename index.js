var spawn = require('child_process').spawn

function run(string, options, attempt){
	attempt = attempt || ['cmd','exe']
	options = options || {}
	
	var parts = string.split(' ')
	var file = parts[0]
	var args = parts.slice(1)
	
	var cp = spawn(file, args)
		cp.on('error', function(e){
			if(e.code == 'ENOENT' && attempt.length){
				var extension = attempt.shift()
				run(file+'.'+extension + ' ' + args.join(' '), options, attempt)
			}
		})
	return cp
}

module.exports = run