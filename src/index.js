const {Command, flags} = require('@oclif/command')

/**
 * A command to read saved upcoming interview data and display it in the
 * terminal
 *
 * Shape of expected interview data:
 * name of co, date of upcoming, name of contact, website
*/
class CliAppCommand extends Command {
  async run() {
    const {flags} = this.parse(CliAppCommand)
    const csv = `
    AcmeCo,07/02/21,Donald Duck,disney.com,donald@disney.com,
    GitHub,07/03/21,Nat Friedman,github.com,nat@github.com,
    `
    // TODO
    // const csv = this.readDataFromFile('../path/to/file')
    this.printHeaders()
    this.printCells(csv)
  }

  printCells(csv) {
    csv
      .split("\n")
      .map(this.convertToCell)
      .forEach(line => this.printLine(line))
  }

  // Take comma separated string and convert it to pipe separated, with no
  // leading or trailing spac, and remove the final comma.
  convertToCell(line) {
    return line
      .slice(0, -1)
      .replace(/,/g, " | ")
      .trim()
  }

  printLine(line) {
    this.log(line)
  }

  printHeaders() {
    [
      `Upcoming interviews\n`,
      `Name   | Date   | Email   | Website   \n`
    ].forEach(line => this.printLine(line))
  }
}

CliAppCommand.description = `A command to read saved upcoming interview data and display it in the terminal`

CliAppCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
}

module.exports = CliAppCommand
