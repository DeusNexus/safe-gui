import Axios from 'axios';

export const updateConsole = (data,STORE) => {
    STORE.setConsole(new Date().toLocaleTimeString() + '\n' + data.console + data.error + '\n' + STORE.consoled)
}

export const postReq = async (STORE, url, flags, options) => {
    console.log(url)
    STORE.setConsole(new Date().toLocaleTimeString()+ `\nRequested ${url} from API, resolving...\n\n` + STORE.consoled)
    await Axios.post(url, { 
        flags: flags ? flags : '', 
        options: options ? options : ''
    })
        .then(d => d.data)
        .then(d => {
            updateConsole(d, STORE)
        })
        .catch(e => alert(e))
}