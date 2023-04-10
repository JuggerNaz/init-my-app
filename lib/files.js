import fs from 'fs'
import path from 'path'

const getCurrentDirectoryBase = () => {
    return path.basename(process.cwd())
}

const getDirectoryFullPath = () => {
    const currentPathFile = path.dirname(import.meta.url)
    return currentPathFile.slice(0, currentPathFile.lastIndexOf('/')).replace('file://', '')
}

const directoryExists = (filePath) => {
    return fs.existsSync(filePath)
}

const createDirectory = (folderName) => {
    fs.mkdirSync(folderName)
}

const copyDirectoryToDirectory = (src, dest) => {
    fs.cpSync(src, dest, {recursive: true})
}

const readFile = async (src) => {
    const data = await fs.readFileSync(src, 'utf-8')
    return data
}

const writeFile = async (dest, data) => {
    await fs.writeFileSync(dest, data, { encoding: 'utf-8', flag: 'w' })
}

export { 
    getCurrentDirectoryBase, 
    directoryExists, 
    createDirectory, 
    copyDirectoryToDirectory, 
    readFile, 
    writeFile,
    getDirectoryFullPath
}