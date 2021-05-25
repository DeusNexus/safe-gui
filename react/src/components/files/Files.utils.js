import { postReq } from '../../Functions'

export const filesAdd = (STORE) => {
    const location = ''
    const target = ''
    postReq(STORE,`/api/files/add/${location}/${target}`)
}

export const filesGet = (STORE) => {
    const source = ''
    const dest = ''
    postReq(STORE,`/api/files/get/${source}/${dest}`)
}

export const filesHelp = (STORE) => {
    postReq(STORE,`/api/files/help`)
}

export const filesLs = (STORE) => {
    const target = ''
    postReq(STORE,`/api/files/ls/${target}`)
}

export const filesPut = (STORE) => {
    const location = ''
    const dest = ''
    postReq(STORE,`/api/files/put/${location}/${dest}`)
}

export const filesRm = (STORE) => {
    const target = ''
    postReq(STORE,`/api/files/add/${target}`)
}

export const filesSync = (STORE) => {
    const location = ''
    const target = ''
    postReq(STORE,`/api/files/sync/${location}/${target}`)
}

export const filesTree = (STORE) => {
    const target = ''
    postReq(STORE,`/api/files/tree/${target}`)
}

export const xorurl = (STORE) => {
    const location = ''
    postReq(STORE,`/api/xorurl/${location}`)
}

export const xorurlDecode = (STORE) => {
    const xorurl = ''
    postReq(STORE,`/api/xorurl/decode/${xorurl}`)
}

export const xorurlHelp = (STORE) => {
    postReq(STORE,`/api/xorurl/help`)
}

export const seqAppend = (STORE) => {
    const data = ''
    const target = ''
    postReq(STORE,`/api/seq/append/${data}/${target}`)
}

export const seqHelp = (STORE) => {
    postReq(STORE,`/api/seq/help`)
}

export const seqStore = (STORE) => {
    const data = ''
    postReq(STORE,`/api/seq/store/${data}`)
}

export const nrsAdd = (STORE) => {
    const name = ''
    postReq(STORE,`/api/nrs/add/${name}`)
}

export const nrsCreate = (STORE) => {
    const name = ''
    postReq(STORE,`/api/nrs/create/${name}`)
}

export const nrsHelp = (STORE) => {
    postReq(STORE,`/api/nrs/help`)
}

export const nrsRemove = (STORE) => {
    const name = ''
    postReq(STORE,`/api/nrs/remove/${name}`)
}