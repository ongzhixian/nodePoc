# Debugging

## Add breakpoints

To add a breakpoint, add `debugger;`. 

## Debugging application

Then run application using 'inspect':

`node inspect <filename>`

## Debugger commands

Note: 
    This is not a complete list of commands.
    For complete list of commands, see [Node.js debugger documentation](https://nodejs.org/api/debugger.html).
    You can also type 'help' in the debugger to get a list of commands.

run, restart, r       Run the application or reconnect
kill                  Kill a running application or disconnect

cont, c               Resume execution
next, n               Continue to next line in current file
step, s               Step into, potentially entering a function
out, o                Step out, leaving the current function
backtrace, bt         Print the current backtrace
list                  Print the source around the current line where execution is currently paused

exec(expr)            Evaluate the expression and print the value
repl                  Enter a debug repl that works like exec