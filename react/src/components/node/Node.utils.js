import { postReq } from '../../Functions'

export const binVersion = (STORE) => {
    postReq(STORE,`/api/node/bin-version`)
}

export const help = (STORE) => {
    postReq(STORE,`/api/node/help`)
}

export const install = (STORE) => {
    postReq(STORE,`/api/node/install`)
}

export const join = (STORE, nodeJoinVal) => {
    const networkName = nodeJoinVal
    postReq(STORE,`/api/node/join/${networkName}`)
}

export const killall = (STORE) => {
    postReq(STORE,`/api/node/killall`)
}

export const runBabyFleming = (STORE) => {
    // const testing = '--testing'
    // const verbose = '-y'
    postReq(STORE,`/api/node/run-baby-fleming`,'','')
}

export const update = (STORE) => {
    postReq(STORE,`/api/node/update`)
}