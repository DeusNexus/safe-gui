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

export const walletDeposit = async (STORE, walletDepositTarget, walletDepositSK, walletDepositName) => {
    const target = walletDepositTarget
    const flags = ''
    const options = `--sk ${walletDepositSK}${walletDepositName?` --name ${walletDepositName}`:''}`
    await postReq(STORE,`/api/wallet/deposit/${target}`, flags, options)
}

export const walletHelp = async (STORE) => {
    await postReq(STORE,`/api/wallet/help`)
}

export const walletReissue = async (STORE, walletReissueAmount, walletReissueFrom, walletReissueTo) => {
    const amount = walletReissueAmount
    const flags = ''
    const options = `--from ${walletReissueFrom} --to ${walletReissueTo}`
    await postReq(STORE,`/api/wallet/reissue/${amount}`, flags, options)
}
