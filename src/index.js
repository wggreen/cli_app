const {Command, flags} = require('@oclif/command')

/**
 * name of co, date of upcoming, name of contact, website[
*/
class CliAppCommand extends Command {
  async run() {
    const {flags} = this.parse(CliAppCommand)
    const csv = `
    AcmeCo,07/02/21,Donald Duck,disney.com,donald@disney.com,
    GitHub,07/03/21,Nat Fridman,github.com,nat@github.com,
    `
    const lines = csv.split("\n")

    const header = `Upcoming interviews\n`
    this.log(header)

    const tableHeader = `Name   | Date   | Email   | Website   \n`
    this.log(tableHeader)

    lines.forEach(line => {
      if (line !== "") {
        this.log(line.trim())
      }
    })
  }
}

CliAppCommand.description = `Describe the command here
...
Extra documentation goes here
`

CliAppCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = CliAppCommand
