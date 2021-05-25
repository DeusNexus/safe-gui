import { postReq } from '../../Functions'

export const keysBalance = (STORE) => {
    postReq(STORE,`/api/keys/balance`)
}

export const keysCreate = (STORE, keysCreateTestCoins, keysCreatePreload, keysCreatePayWith) => {
    const flags = `${keysCreateTestCoins ? `--test-coins`:''}`
    const options = `${keysCreatePreload ? `--preload ${keysCreatePreload} ${!keysCreateTestCoins?`--pay-with ${keysCreatePayWith}`:''}`:''}`
    postReq(STORE,`/api/keys/create`, flags, options)
}

export const keysHelp = (STORE) => {
    postReq(STORE,`/api/keys/help`)
}

export const keysShow = (STORE, keysShowURL, keysShowSK) => {
    const keyUrl = encodeURIComponent(keysShowURL)
    const flags = keysShowSK ? `--show-sk` : ''
    const options = ''
    postReq(STORE, keyUrl ? `/api/keys/show/${keyUrl}` : `/api/keys/show`, flags, options)
}

export const keysTransfer = (STORE, keysTransferAmount, keysTransferFrom, keysTransferTo) => {
    const amount = keysTransferAmount
    const flags = ''
    const options = `--from ${keysTransferFrom} --to ${keysTransferTo}`
    postReq(STORE,`/api/keys/transfer/${amount}`,flags,options)
}

export const walletBalance = (STORE) => {
    postReq(STORE,`/api/wallet/balance`)
}

export const walletCreate = (STORE, walletCreateName, walletCreateTestCoins, walletCreatePreload, walletCreatePayWith) => {
    const flags = walletCreateTestCoins ? `--test-coins` : ''
    const options = `--name ${walletCreateName} ${walletCreatePreload ? `--preload ${walletCreatePreload}`: ''} ${!walletCreateTestCoins?`--pay-with ${walletCreatePayWith}`:''}`
    postReq(STORE,`/api/wallet/create`,flags,options)
}

export const walletHelp = (STORE) => {
    postReq(STORE,`/api/wallet/help`)
}

export const walletInsert = (STORE, walletInsertTarget, walletInsertSK, walletInsertName) => {
    const target = walletInsertTarget
    const flags = ''
    const options = `--sk ${walletInsertSK}${walletInsertName?` --name ${walletInsertName}`:''}`
    postReq(STORE,`/api/wallet/insert/${target}`, flags, options)
}

export const walletTransfer = (STORE, walletTransferAmount, walletTransferFrom, walletTransferTo) => {
    const amount = walletTransferAmount
    const flags = ''
    const options = `--from ${walletTransferFrom} --to ${walletTransferTo}`
    postReq(STORE,`/api/wallet/transfer/${amount}`, flags, options)
}
