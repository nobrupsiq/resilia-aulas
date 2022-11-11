const chalk = require('chalk')

const {red} = require('color-name')
const {log} = console

log(chalk.green('Essa cor é verde!'))

//rgb
log(chalk.rgb(100, 50, 120)('O meu texto do RGB'))

//template
log(`Estado: ${chalk.red('Rio de janeiro')}
Curso: ${chalk.green('JavaScript com react')}
`)
