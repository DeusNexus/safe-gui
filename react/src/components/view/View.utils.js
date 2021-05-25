import { postReq } from '../../Functions'

export const cat = (STORE, catXOR) => {
    const location = encodeURIComponent(catXOR)
    postReq(STORE,`/api/cat/${location}`)
}

export const dog = (STORE, dogXOR) => {
    const location = encodeURIComponent(dogXOR)
    postReq(STORE,`/api/dog/${location}`)
}

export const download = (STORE, downloadXOR) => {
    const location = encodeURIComponent(downloadXOR)
    postReq(STORE,`/api/dog/${location}`)
    postReq(STORE,`/api/cat/${location}`)
}