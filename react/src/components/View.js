import React from 'react';
import { postReq } from '../Functions'

const cat = (setConsole, consoled) => {
    const location = 'safe://url'
    postReq(setConsole, consoled,`/api/cat/${location}`)
}

const dog = (setConsole, consoled) => {
    const location = 'safe://url'
    postReq(setConsole, consoled,`/api/dog/${location}`)
}

const download = (setConsole, consoled) => {
    const location = 'safe://url'
    postReq(setConsole, consoled,`/api/dog/${location}`)
    postReq(setConsole, consoled,`/api/cat/${location}`)
}


const View = ({setConsole, consoled}) => {
    return (
        <div className='container'>
        <header>
           <h1>View</h1>
           <h3>Retrieve and Display data on the SafeNetwork</h3>
           <ul>
               <br/>
               <li>
                   <b>Inspect XOR-URL container</b><br/>
                   <input type='text' name='dog_xorurl' placeholder='XOR-URL'></input>
                   <button onClick={() => dog(setConsole, consoled)}>DOG</button>
               </li>
               <br/>
               <li>
                   <b>View XOR-URL content (file/folder)</b><br/>
                   <input type='text' name='cat_xorurl' placeholder='XOR-URL'></input>
                   <button onClick={() => cat(setConsole, consoled)}>CAT</button>
               </li>
               <br/>
               <li>
                   <b>Download XOR-URL content (file/folder)</b><br/>
                   <input type='text' name='download_xorurl' placeholder='XOR-URL'></input>
                   <button onClick={() => download(setConsole, consoled)}>Download</button>
               </li>
           </ul>
       </header>
   </div>
    )
}

export default View