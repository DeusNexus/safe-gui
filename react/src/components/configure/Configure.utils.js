import { postReq } from '../../Functions'

export const config = (STORE) => {
    postReq(STORE,`/api/config`)
}

// export const configAdd = (STORE) => {
//     postReq(STORE,`/api/config/add`)
// }

export const configAddNetwork = (STORE) => {
    const networkName = 'fleming-testnet'
    const configLocation = 'https://sn-node.s3.eu-west-2.amazonaws.com/config/node_connection_info.config'
    postReq(STORE,`/api/config/add/network/${networkName}/${configLocation}`)
}

export const configClear = (STORE) => {
    postReq(STORE,`/api/config/clear`)
}

export const configHelp = (STORE) => {
    postReq(STORE,`/api/config/help`)
}

// export const configRemove = (STORE) => {
//     postReq(STORE,`/api/config/remove`)
// }

export const configRemoveNetwork = (STORE) => {
    const networkName = ''
    postReq(STORE,`/api/config/remove/network/${networkName}`)
}

export const setupCompletions = (STORE) => {
    const shell = ''
    postReq(STORE,`/api/setup/completions/${shell}`)
}

export const setupHelp = (STORE) => {
    postReq(STORE,`/api/setup/help`)
}

export const help = (STORE) => {
    postReq(STORE,`/api/help`)
}

export const update = (STORE) => {
    postReq(STORE,`/api/update`)
}

export const networks = (STORE) => {
    postReq(STORE,`/api/networks`)
}

export const networksAdd = (STORE) => {
    const networkName = ''
    const configLocation = ''
    postReq(STORE,`/api/networks/add/${networkName}/${configLocation}`)
}

export const networksCheck = (STORE) => {
    postReq(STORE,`/api/networks/check`)
}

export const networksHelp = (STORE) => {
    postReq(STORE,`/api/networks/help`)
}

export const networksRemove = (STORE) => {
    const networkName = ''
    postReq(STORE,`/api/networks/remove/${networkName}`)
}

export const networksSet = (STORE) => {
    const networkName = ''
    const addresses = ''
    postReq(STORE,`/api/networks/set/${networkName}/${addresses}`)
}

export const networksSwitch = (STORE) => {
    const networkName = ''
    postReq(STORE,`/api/networks/switch/${networkName}`)
}