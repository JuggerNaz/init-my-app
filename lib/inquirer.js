import inquirer from 'inquirer'
import chalk from 'chalk'

import { getCurrentDirectoryBase, directoryExists } from './files.js'

const log = console.log

export default function askProjectDetail () {
    const questions = [
        {
            name: 'projectName',
            type: 'input',
            message: 'Enter your project name: ',
            validate: (value) => {
                if(value.length){
                    if(directoryExists(value)){
                        log(chalk.bgRed.bold(`\n\n Directory with a project name ${value} already exist, please choose another name or delete first existing folder. \n`))
                    }
                    else
                        return true
                }
                else
                    log(`No input gathered, no name wasn't a choice, thus enter a name for your project.`)
            }
        },
        {
            name: 'bundler',
            type: 'list',
            message: 'Choose your favorite bunder: ',
            choices: ['webpack','vite'],
            default: 'vite'
        },
        {
            name: 'language',
            type: 'list',
            message: 'Choose your preferred language: ',
            choices: ['javascript','typescript'],
            default: 'typescript'
        },
        {
            name: 'css',
            type: 'list',
            message: 'Pick your CSS Framework type: ',
            choices: ['none', 'twind', 'tailwind (v3)'],
            default: 'twind'
        }
    ]

    return inquirer.prompt(questions)
}