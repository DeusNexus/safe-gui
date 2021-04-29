import Axios from 'axios';

export const updateConsole = (data,consoled,setConsole) => {
    setConsole(new Date().toLocaleTimeString() + '\n' + data.console + data.error + '\n' + consoled)
}

export const postReq = (setConsole, consoled, url, flags, options) => {
    console.log(url)
    setConsole(new Date().toLocaleTimeString()+ `\nRequested ${url} from API, resolving...\n\n` + consoled)
    Axios.post(url, { 
        flags: flags ? flags : '', 
        options: options ? options : ''
    })
        .then(d => d.data)
        .then(d => updateConsole(d, consoled, setConsole))
        .catch(e => alert(e))
}