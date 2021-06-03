import { postReq } from '../../Functions'

export const binVersion = async (STORE) => {
    await postReq(STORE,`/api/node/bin-version`)
}

export const help = async (STORE) => {
    await postReq(STORE,`/api/node/help`)
}

export const install = async (STORE) => {
    await postReq(STORE,`/api/node/install`)
}

export const join = async (STORE, nodeJoinVal) => {
    const networkName = nodeJoinVal
    await postReq(STORE,`/api/node/join/${networkName}`)
}

export const killall = async (STORE) => {
    await postReq(STORE,`/api/node/killall`)
}

export const runBabyFleming = async (STORE) => {
    // const testing = '--testing'
    // const verbose = '-y'
    await postReq(STORE,`/api/node/run-baby-fleming`,'','')
}

export const update = async (STORE) => {
    await postReq(STORE,`/api/node/update`)
}