#!/usr/bin/env node

import meow from 'meow'
import boxen from 'boxen'
import chalk from 'chalk'
import quotes from './quotes'

function quote (direction) {
  const formatQuote = s => {
    const q = `${s.quote}

      -- ${chalk.yellow(s.source)}`

    return boxen(q, {
      padding: 1,
      borderStyle: 'classic',
      float: direction.toString()
    })
  }

  const y = Math.floor(Math.random() * quotes.length)
  const quote = formatQuote(quotes[y])

  return process.stdout.write(`\n${quote}\n`)
}

function inpire (x, flags) {
  let direction

  flags ? direction = flags.direction : direction = 'center'

  quote(direction)
}

const cli = meow(`
  Usage
    $ keep-going
  Options
    $ keep-going --direction, -d [left, right, center] aligns quote in given direction
    $ keep-going --version, -v Print out the version number
    $ keep-going --help Prints out this helpful instruction
`, {
  alias: {
    v: 'version',
    d: 'direction'
  }
})

inpire(cli.input[0], cli.flags)