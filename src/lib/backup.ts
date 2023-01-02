import { ChildProcessWithoutNullStreams, spawn, exec } from 'child_process'
import moment from 'moment'
import { platform, arch } from 'process'
import { sleep } from '../utils'

type useBackupType = {
    onSentMessage: (message: string) => void
}

export const useBackup = (props: useBackupType) => {
    const Path3System = 'C:\\3System\\'
    const CurrentDate = moment().format('YYYYMMDD')
    const PathCurrent = process.cwd()
    const PathDBOS = 'C:\\DBOS\\'

    const Backup3System = () => {
        // code here
    }

    const backupRegTo3System = async () => {
        const system = platform
        if (system === 'win32') {
            props.onSentMessage(`備份註冊表 HKEY_LOCAL_MACHINE\\Software\\3S 到${Path3System}${CurrentDate}.reg`)
            const result: string = await new Promise((resolve, reject) => {
                exec(`reg.exe EXPORT HKEY_LOCAL_MACHINE\\Software\\3s ${Path3System}${CurrentDate}.reg`, (
                    err,
                    _,
                    stderr
                ) => {
                    if (err) reject(err.message)
                    if (stderr) reject(stderr)

                    resolve("")
                })
            })

            if (result) throw new Error(result)
        }
    }

    const execute = async () => {
        try {
            props.onSentMessage('========================================')
            await sleep(1000)
            backupRegTo3System()
            Backup3System()
        } catch(err) {
            console.log('useBackup execute error', err)
        }
    }

    return {
        execute,
    }
}