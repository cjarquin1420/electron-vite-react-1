import { exec } from 'child_process'
import { jsonParse, ProcessOptions } from '../utils'
import * as iconv from 'iconv-lite';

export interface IBackupResult {
    commands: Array<string>
    backupDir: string
}

export const useBackup = () => {
    const currentPath = process.cwd()

    const Backup3System = async () => {
        const result: IBackupResult = await new Promise((resolve, reject) => {
            exec(`${currentPath}\\src\\external-libs\\3system_lib_2.exe ${ProcessOptions.BACKUP}`,
            { encoding: null },  // set encoding to utf8
            (err, stdout, stderr) => {
                if (err) reject(err.message)
                const error = Buffer.from(stderr)
                const result = Buffer.from(stdout)

                if (error.toString("utf-8")) {
                    reject(error.toString("utf-8"))
                    return
                }
                
                //const execResult: IBackupResult = jsonParse(iconv.decode(result, 'GBK'))
                const execResult: IBackupResult = jsonParse(result.toString("utf-8")) 
                resolve(execResult)
                //console.log(execResult)
            })
        })

        return result
    }

    const execute = async () => {
        return Backup3System()
    }

    return {
        execute,
    }
}
