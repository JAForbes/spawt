Spawt

=====

`spawt('npm run x')` instead of `spawn(npm.cmd, ['run', 'x'])`

Quick Start
-----------

```
npm install spawt
```

```
var run = require('spawt')

run('npm run build')
```

Background
----------

In the Node world there are two key ways to run child processes `spawn` or `exec`.  

One is more convenient (`exec`) while one doesn't overflow your buffer, and protects you from command injections.

`spawt` gives you a convenient `exec` like API but uses `spawn` under the hood.
It also will try some common (and customizable) file extensions to try if the initial file can't be found on your path.

`spawt` also returns the underlying child_process object, so you can listen to `error` and `message` events as if you
want to do it manually.

API
---

`spawt(command: String, [options: {}, attempt: ['cmd','exe']])`

- `command` The command to run (e.g. `npm run whatever`)
- `options` Options to pass to the underlying child_process object
- `attempt` A list of file extensions to attempt if the bare filename is not found (A windows thing mostly)

Returns [`child_process`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)

Launches a new process with the given command.

The second argument is used to specify additional options, with these defaults:

```
{ cwd: undefined,
  env: process.env
}
```

Use cwd to specify the working directory from which the process is spawned. If not given, the default is to inherit the current working directory.

Use env to specify environment variables that will be visible to the new process, the default is process.env.

And we're done!