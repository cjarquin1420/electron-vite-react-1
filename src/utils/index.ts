export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export enum ProcessOptions {
    BACKUP = 0,
    INSTALL_DBOS = 1,
    ROLLBACK = 2,
}

export const jsonParse = (input: any) => {
    try {
        return JSON.parse(input)
    } catch(err) {
        console.error('error parsing data', err)
        return undefined
    }
}