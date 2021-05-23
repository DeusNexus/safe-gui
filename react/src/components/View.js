import React, { useState } from 'react';
import { postReq } from '../Functions'

const cat = (setConsole, consoled, catXOR) => {
    const location = encodeURIComponent(catXOR)
    postReq(setConsole, consoled,`/api/cat/${location}`)
}

const dog = (setConsole, consoled, dogXOR) => {
    const location = encodeURIComponent(dogXOR)
    postReq(setConsole, consoled,`/api/dog/${location}`)
}

const download = (setConsole, consoled, downloadXOR) => {
    const location = encodeURIComponent(downloadXOR)
    postReq(setConsole, consoled,`/api/dog/${location}`)
    postReq(setConsole, consoled,`/api/cat/${location}`)
}


const View = ({setConsole, consoled}) => {
    const [dogXOR, setDogXOR] = useState('')
    const [catXOR, setCatXOR] = useState('')
    const [downloadXOR, setDownloadXOR] = useState('')

    return (
        <div className='container'>
        <header>
           <h1>View</h1>
           <h3>Retrieve and Display data on the SafeNetwork</h3>
           <ul>
               <br/>
               <li>
                   <b>Inspect XOR-URL container</b><br/>
                   <input type='text' 
                        name='dog_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setDogXOR(e.target.value)}
                    />
                   <button onClick={() => dog(setConsole, consoled,dogXOR)}>DOG</button>
               </li>
               <br/>
               <li>
                   <b>View XOR-URL content (file/folder)</b><br/>
                   <input 
                        type='text' 
                        name='cat_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setCatXOR(e.target.value)}
                   />
                   <button onClick={() => cat(setConsole, consoled,catXOR)}>CAT</button>
               </li>
               <br/>
               <li>
                   <b>Download XOR-URL content (file/folder)</b><br/>
                   <input type='text' 
                        name='download_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setDownloadXOR(e.target.value)}
                    />
                   <button onClick={() => download(setConsole, consoled,downloadXOR)}>Download</button>
               </li>
           </ul>
       </header>
   </div>
    )
}

export default View