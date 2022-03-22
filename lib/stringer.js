const { Command } = require('commander')
const { commands } = require('./commands')
const { parseArgsStringToArgv } = require('string-argv')

function runCommand(cmd, setOutput) {
    let argv = parseArgsStringToArgv(cmd, 'node', 'file.js');
    return parseCommands(argv, setOutput);
}



function parseCommands(input, outputFN) {
   const program = new Command()

   commands.forEach(c => {
      //get the definition of our command
      const commandDef = c.definition()

      //we then use it to build the command we're going to be executing later.
      const subCommand = program
         .command(commandDef.command)
         .description(commandDef.help)

      commandDef.arguments.forEach(arg => {
         subCommand.argument(arg[0], arg[1])
      })

      commandDef.options.forEach(o => {
         subCommand.option([o[0], o[1]].join(","), o[2], o[3])
      })
      subCommand
         .action(function () {
            c.action.apply(c, arguments)
            outputFN(c.getResult())
         })

   })


   program.configureOutput({
      writeErr: str => outputFN(str),
      outputError: str => outputFN(str)
   })


   program.exitOverride();

   try {
      //parse the input and decide which command we're trying to execute.
      program.parse(input)
   } catch (e) {
      outputFN(e.message)
   }

}

module.exports = {
   runCommand
}