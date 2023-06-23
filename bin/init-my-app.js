#! /usr/bin/env node

import figlet from 'figlet'
import chalk from 'chalk'
import boxen from 'boxen'
import path from 'path'
import url from 'url'

import askProjectDetail from '../lib/inquirer.js'
import { createDirectory, copyDirectoryToDirectory, readFile, writeFile, getDirectoryFullPath } from '../lib/files.js' 

const log = console.log

log(
    boxen(
        chalk.green(
            figlet.textSync('IMA', {
                font: 'Star Wars'
            })
        ),
        {
            padding: 1,
            title: 'Init My App',
            titleAlignment: 'center',
            borderColor: 'green',
            borderStyle: 'classic'
        }
    )
)

log(chalk.blue.bold('\n A highly opinionated starter based on author preferred way. \n'))
log(chalk.bgYellow(' Warning: Please carefuly use it. TQ! \n'))

const run = async () => {
    const {
        projectName,
        bundler,
        language, 
        css
    } = await askProjectDetail()

    const src = `/templates/${bundler}/react/${language}`
    const packageSrc = `./${projectName}/package.json`

    log(chalk.blue.bold(`\n\n Complete path: ${getDirectoryFullPath()}`))

    log(chalk.bgRed(`Another way of getting current path: ${ path.dirname(import.meta.url) }`))

    createDirectory(projectName)
    copyDirectoryToDirectory( getDirectoryFullPath() + src, projectName)

    const packageJSON = JSON.parse(await readFile(packageSrc))

    if(css === 'twind'){
        packageJSON.dependencies = { ...packageJSON.dependencies, 'twind': 'latest' }
    }

    await writeFile(packageSrc, JSON.stringify(packageJSON, null, "\t"))

    log(chalk.green.bold(`\n App has been initated. Next: 
    ▶️  cd ${projectName}
    ▶️  npm intall
    ▶️  npm run dev
    `))
}

run()