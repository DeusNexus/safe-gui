import { postReq } from '../../Functions'

export const keysBalance = async (STORE) => {
    await postReq(STORE,`/api/keys/balance`)
}

export const keysCreate = async (STORE, keysCreateTestCoins, keysCreatePreload, keysCreatePayWith) => {
    const flags = `${keysCreateTestCoins ? `--test-coins`:''}`
    const options = `${keysCreatePreload ? `--preload ${keysCreatePreload} ${!keysCreateTestCoins?`--pay-with ${keysCreatePayWith}`:''}`:''}`
    await postReq(STORE,`/api/keys/create`, flags, options)
}

export const keysHelp = async (STORE) => {
    await postReq(STORE,`/api/keys/help`)
}

export const keysShow = async (STORE, keysShowURL, keysShowSK) => {
    const keyUrl = encodeURIComponent(keysShowURL)
    const flags = keysShowSK ? `--show-sk` : ''
    const options = ''
    await postReq(STORE, keyUrl ? `/api/keys/show/${keyUrl}` : `/api/keys/show`, flags, options)
}

export const keysTransfer = async (STORE, keysTransferAmount, keysTransferFrom, keysTransferTo) => {
    const amount = keysTransferAmount
    const flags = ''
    const options = `--from ${keysTransferFrom} --to ${keysTransferTo}`
    await postReq(STORE,`/api/keys/transfer/${amount}`,flags,options)
}

export const walletBalance = async (STORE) => {
    await postReq(STORE,`/api/wallet/balance`)
}

export const walletCreate = async (STORE, walletCreateName, walletCreateTestCoins, walletCreatePreload, walletCreatePayWith) => {
    const flags = walletCreateTestCoins ? `--test-coins` : ''
    const options = `--name ${walletCreateName} ${walletCreatePreload ? `--preload ${walletCreatePreload}`: ''} ${!walletCreateTestCoins?`--pay-with ${walletCreatePayWith}`:''}`
    await postReq(STORE,`/api/wallet/create`,flags,options)
}

export const walletHelp = async (STORE) => {
    await postReq(STORE,`/api/wallet/help`)
}

export const walletInsert = async (STORE, walletInsertTarget, walletInsertSK, walletInsertName) => {
    const target = walletInsertTarget
    const flags = ''
    const options = `--sk ${walletInsertSK}${walletInsertName?` --name ${walletInsertName}`:''}`
    await postReq(STORE,`/api/wallet/insert/${target}`, flags, options)
}

export const walletTransfer = async (STORE, walletTransferAmount, walletTransferFrom, walletTransferTo) => {
    const amount = walletTransferAmount
    const flags = ''
    const options = `--from ${walletTransferFrom} --to ${walletTransferTo}`
    await postReq(STORE,`/api/wallet/transfer/${amount}`, flags, options)
}
