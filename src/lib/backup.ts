import { exec, execFile } from 'child_process'

export interface IBackupResult {
    commands: Array<string>
    backupDir: string
}

export const useBackup = () => {
    const currentPath = process.cwd()

    const Backup3System = async () => {
        const result: IBackupResult = await new Promise((resolve, reject) => {
            exec(`${currentPath}\\src\\external-libs\\3system_lib_2.exe`,
            { encoding: 'buffer' },
            (err, stdout, stderr) => {
                if (err) reject(err.message)
                const error = Buffer.from(stderr)
                const result = Buffer.from(stdout)

                if (error.toString("utf-8")) {
                    reject(error.toString("utf-8"))
                }

                console.log(result.toString("utf-8"))
                const execResult: IBackupResult = JSON.parse(result.toString("utf-8"))
                resolve(execResult)
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