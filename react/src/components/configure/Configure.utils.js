import { postReq } from '../../Functions'

export const config = async (STORE) => {
    await postReq(STORE,`/api/config`)
}

// export const configAdd = async (STORE) => {
//     await postReq(STORE,`/api/config/add`)
// }

export const configAddNetwork = async (STORE) => {
    const networkName = 'fleming-testnet'
    const configLocation = 'https://sn-node.s3.eu-west-2.amazonaws.com/config/node_connection_info.config'
    await postReq(STORE,`/api/config/add/network/${networkName}/${configLocation}`)
}

export const configClear = async (STORE) => {
    await postReq(STORE,`/api/config/clear`)
}

export const configHelp = async (STORE) => {
    await postReq(STORE,`/api/config/help`)
}

// export const configRemove = async (STORE) => {
//     await postReq(STORE,`/api/config/remove`)
// }

export const configRemoveNetwork = async (STORE) => {
    const networkName = ''
    await postReq(STORE,`/api/config/remove/network/${networkName}`)
}

export const setupCompletions = async (STORE) => {
    const shell = ''
    await postReq(STORE,`/api/setup/completions/${shell}`)
}

export const setupHelp = async (STORE) => {
    await postReq(STORE,`/api/setup/help`)
}

export const help = async (STORE) => {
    await postReq(STORE,`/api/help`)
}

export const update = async (STORE) => {
    await postReq(STORE,`/api/update`)
}

export const networks = async (STORE) => {
    await postReq(STORE,`/api/networks`)
}

export const networksAdd = async (STORE) => {
    const networkName = ''
    const configLocation = ''
    await postReq(STORE,`/api/networks/add/${networkName}/${configLocation}`)
}

export const networksCheck = async (STORE) => {
    await postReq(STORE,`/api/networks/check`)
}

export const networksHelp = async (STORE) => {
    await postReq(STORE,`/api/networks/help`)
}

export const networksRemove = async (STORE) => {
    const networkName = ''
    await postReq(STORE,`/api/networks/remove/${networkName}`)
}

export const networksSection = async (STORE) => {
    const networkName = ''
    await postReq(STORE,`/api/networks/sections/${networkName}`)
}

export const networksSwitch = async (STORE) => {
    const networkName = ''
    await postReq(STORE,`/api/networks/switch/${networkName}`)
}