import { postReq } from '../../Functions'

export const cat = async (STORE, catXOR) => {
    const location = encodeURIComponent(catXOR)
    await postReq(STORE,`/api/cat/${location}`)
}

export const dog = async (STORE, dogXOR) => {
    const location = encodeURIComponent(dogXOR)
    await postReq(STORE,`/api/dog/${location}`)
}

export const download = async (STORE, downloadXOR) => {
    const location = encodeURIComponent(downloadXOR)
    await postReq(STORE,`/api/dog/${location}`)
    await postReq(STORE,`/api/cat/${location}`)
}