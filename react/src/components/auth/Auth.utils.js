import { postReq } from '../../Functions'

// export const auth = async (STORE) => {
//     await postReq(STORE,'/api/auth')
// }

export const authAllow = async (STORE) => {
    const reqId = 0
    await postReq(STORE,`/api/auth/allow/${reqId}`)
}

export const authApps = async (STORE) => {
    await postReq(STORE,'/api/auth/apps')
}

export const authBinVersion = async (STORE) => {
    await postReq(STORE,'/api/auth/bin-version')
}

export const authClear = async (STORE) => {
    await postReq(STORE,'/api/auth/clear')
}

export const authCreate = async (STORE) => {
    await postReq(STORE,'/api/auth/create', '--test-coins', '--config default_credentials.json')
}

export const authDeny = async (STORE) => {
    const reqId = 0
    await postReq(STORE,`/api/auth/deny/${reqId}`)
}

export const authHelp = async (STORE) => {
    await postReq(STORE,'/api/auth/help')
}

export const authInstall = async (STORE) => {
    await postReq(STORE,'/api/auth/install')
}

export const authLock = async (STORE) => {
    await postReq(STORE,'/api/auth/lock')
}

export const authReqs = async (STORE) => {
    await postReq(STORE,'/api/auth/reqs')
}

export const authRestart = async (STORE) => {
    await postReq(STORE,'/api/auth/restart')
}

export const authRevoke = async (STORE) => {
    const appId = 0
    await postReq(STORE,`/api/auth/revoke/${appId}`)
}

export const authStart = async (STORE) => {
    await postReq(STORE,'/api/auth/start')
}

export const authStatus = async (STORE) => {
    await postReq(STORE,'/api/auth/status')
}

export const authStop = async (STORE) => {
    await postReq(STORE,'/api/auth/stop')
}

export const authSubscribe = async (STORE) => {
    const notifsEndpoint = ''
    await postReq(STORE,`/api/auth/subscribe/${notifsEndpoint}`)
}

export const authUnlock = async (STORE) => {
    await postReq(STORE,'/api/auth/unlock')
}

export const authUnsubscribe = async (STORE) => {
    const notifsEndpoint = ''
    await postReq(STORE,`/api/auth/unsubscribe/${notifsEndpoint}`)
}

export const authUpdate = async (STORE) => {
    await postReq(STORE,'/api/auth/update')
}

//Sequences
export const createAndLogin = async (STORE) => {
    await postReq(STORE,'/api/auth/restart')
    await postReq(STORE,'/api/auth/create')
    await postReq(STORE,'/api/auth/unlock')
    await postReq(STORE,'/api/auth/status')
}

export const reauth = async (STORE) => {
    await postReq(STORE,'/api/auth/restart')
    await postReq(STORE,'/api/auth/unlock')
    await postReq(STORE,'/api/auth/status')
}