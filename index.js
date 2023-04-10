import figlet from 'figlet'
import chalk from 'chalk'
import boxen from 'boxen'

import askProjectDetail from './lib/inquirer.js'
import { createDirectory, copyDirectoryToDirectory, readFile, writeFile } from './lib/files.js' 

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

    // console.log(getCurrentDirectoryBase())
    const src = `./templates/${bundler}/react/${language}`
    const packageSrc = `./${projectName}/package.json`

    createDirectory(projectName)
    copyDirectoryToDirectory(src, projectName)

    const packageJSON = JSON.parse(await readFile(packageSrc))

    if(css === 'twind'){
        packageJSON.dependencies = { ...packageJSON.dependencies, 'twind': 'latest' }
    }

    await writeFile(packageSrc, JSON.stringify(packageJSON, null, "\t"))
}

run()