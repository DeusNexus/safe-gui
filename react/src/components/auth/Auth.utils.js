import { postReq } from '../../Functions'

// export const auth = (STORE) => {
//     postReq(STORE,'/api/auth')
// }

export const authAllow = (STORE) => {
    const reqId = 0
    postReq(STORE,`/api/auth/allow/${reqId}`)
}

export const authApps = (STORE) => {
    postReq(STORE,'/api/auth/apps')
}

export const authBinVersion = (STORE) => {
    postReq(STORE,'/api/auth/bin-version')
}

export const authClear = (STORE) => {
    postReq(STORE,'/api/auth/clear')
}

export const authCreate = (STORE) => {
    postReq(STORE,'/api/auth/create', '--test-coins', '--config default_credentials.json')
}

export const authDeny = (STORE) => {
    const reqId = 0
    postReq(STORE,`/api/auth/deny/${reqId}`)
}

export const authHelp = (STORE) => {
    postReq(STORE,'/api/auth/help')
}

export const authInstall = (STORE) => {
    postReq(STORE,'/api/auth/install')
}

export const authLock = (STORE) => {
    postReq(STORE,'/api/auth/lock')
}

export const authReqs = (STORE) => {
    postReq(STORE,'/api/auth/reqs')
}

export const authRestart = (STORE) => {
    postReq(STORE,'/api/auth/restart')
}

export const authRevoke = (STORE) => {
    const appId = 0
    postReq(STORE,`/api/auth/revoke/${appId}`)
}

export const authStart = (STORE) => {
    postReq(STORE,'/api/auth/start')
}

export const authStatus = (STORE) => {
    postReq(STORE,'/api/auth/status')
}

export const authStop = (STORE) => {
    postReq(STORE,'/api/auth/stop')
}

export const authSubscribe = (STORE) => {
    const notifsEndpoint = ''
    postReq(STORE,`/api/auth/subscribe/${notifsEndpoint}`)
}

export const authUnlock = (STORE) => {
    postReq(STORE,'/api/auth/unlock')
}

export const authUnsubscribe = (STORE) => {
    const notifsEndpoint = ''
    postReq(STORE,`/api/auth/unsubscribe/${notifsEndpoint}`)
}

export const authUpdate = (STORE) => {
    postReq(STORE,'/api/auth/update')
}

//Sequences
export const createAndLogin = (STORE) => {
    postReq(STORE,'/api/auth/restart')
    postReq(STORE,'/api/auth/create')
    postReq(STORE,'/api/auth/unlock')
    postReq(STORE,'/api/auth/status')
}

export const reauth = (STORE) => {
    postReq(STORE,'/api/auth/restart')
    postReq(STORE,'/api/auth/unlock')
    postReq(STORE,'/api/auth/status')
}