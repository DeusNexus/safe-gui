import { postReq } from '../../Functions';

export const mainClean = async (STORE) => {
    await postReq(STORE, `/api/os/clean-safe`)
}

export const mainInstallFull = async (STORE) => {
    await postReq(STORE,`/api/os/curl-safe`).catch(e => console.log(e))
    await postReq(STORE,`/api/node/install`).catch(e => console.log(e))
    await postReq(STORE,`/api/node/bin-version`).catch(e => console.log(e))
}

export const mainAddSwitchCheck = async (STORE) => {
    const encodedURL = encodeURIComponent('https://sn-node.s3.eu-west-2.amazonaws.com/config/node_connection_info.config').catch(e => console.log(e))
    await postReq(STORE,`/api/networks/add/fleming-testnet/${encodedURL}`).catch(e => console.log(e))
    await postReq(STORE,`/api/networks/switch/fleming-testnet`).catch(e => console.log(e))
    await postReq(STORE,`/api/networks/check`).catch(e => console.log(e))
}

export const mainJoin = async (STORE) => {
    await postReq(STORE,`/api/node/killall`).catch(e => console.log(e))
    await postReq(STORE,`/api/node/join`).catch(e => console.log(e))
}