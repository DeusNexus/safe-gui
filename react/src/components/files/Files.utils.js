import { postReq } from '../../Functions'

export const filesAdd = async (STORE) => {
    const location = ''
    const target = ''
    await postReq(STORE,`/api/files/add/${location}/${target}`)
}

export const filesGet = async (STORE) => {
    const source = ''
    const dest = ''
    await postReq(STORE,`/api/files/get/${source}/${dest}`)
}

export const filesHelp = async (STORE) => {
    await postReq(STORE,`/api/files/help`)
}

export const filesLs = async (STORE) => {
    const target = ''
    await postReq(STORE,`/api/files/ls/${target}`)
}

export const filesPut = async (STORE) => {
    const location = ''
    const dest = ''
    await postReq(STORE,`/api/files/put/${location}/${dest}`)
}

export const filesRm = async (STORE) => {
    const target = ''
    await postReq(STORE,`/api/files/add/${target}`)
}

export const filesSync = async (STORE) => {
    const location = ''
    const target = ''
    await postReq(STORE,`/api/files/sync/${location}/${target}`)
}

export const filesTree = async (STORE) => {
    const target = ''
    await postReq(STORE,`/api/files/tree/${target}`)
}

export const xorurl = async (STORE) => {
    const location = ''
    await postReq(STORE,`/api/xorurl/${location}`)
}

export const xorurlDecode = async (STORE) => {
    const xorurl = ''
    await postReq(STORE,`/api/xorurl/decode/${xorurl}`)
}

export const xorurlHelp = async (STORE) => {
    await postReq(STORE,`/api/xorurl/help`)
}

export const nrsAdd = async (STORE) => {
    const name = ''
    await postReq(STORE,`/api/nrs/add/${name}`)
}

export const nrsCreate = async (STORE) => {
    const name = ''
    await postReq(STORE,`/api/nrs/create/${name}`)
}

export const nrsHelp = async (STORE) => {
    await postReq(STORE,`/api/nrs/help`)
}

export const nrsRemove = async (STORE) => {
    const name = ''
    await postReq(STORE,`/api/nrs/remove/${name}`)
}