import { ChildProcessWithoutNullStreams, spawn, exec } from 'child_process'
import moment from 'moment'
import { platform, arch } from 'process'

type useBackupType = {
    onSentMessage: (message: string) => void
}

export const useBackup = (props: useBackupType) => {
    const Path3System = 'C:\\3System\\'
    const CurrentDate = moment().format('yyyyMMdd')
    const PathCurrent = process.cwd()
    const PathDBOS = 'C:\\DBOS\\'

    const backupRegTo3System = async () => {
        const system = platform
        if (system === 'win32') {
            props.onSentMessage(`備份註冊表 HKEY_LOCAL_MACHINE\\Software\\3S 到${Path3System}${CurrentDate}.reg`)
            const result = await new Promise((resolve, reject) => {
                exec(`reg.exe EXPORT HKEY_LOCAL_MACHINE\\Software\\WOW6432Node ${Path3System}${CurrentDate}.reg`, (err) => {
                    if (err) reject(err.message)
                    resolve("")
                })

                resolve("")
            })

            if (result) {
                throw new Error("error making 3sSystem backup")
            }
        }
    }

    const execute = () => {
        try {
            props.onSentMessage('========================================')
            backupRegTo3System()
        } catch(err) {
            console.log('useBackup execute error', err)
        }
    }

    return {
        execute,
    }
}