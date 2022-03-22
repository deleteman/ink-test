const {Command} = require('./Command')

class ExitCommand extends Command {

    constructor() {
        super("exit",
              "Ends this application",
            [
            ],
            [
            ])
    }

    action(str, options) {
        process.exit()
    }
}

module.exports= ExitCommand