import React, { useState } from 'react';
import { postReq } from '../../Functions'

const cat = (STORE, catXOR) => {
    const location = encodeURIComponent(catXOR)
    postReq(STORE,`/api/cat/${location}`)
}

const dog = (STORE, dogXOR) => {
    const location = encodeURIComponent(dogXOR)
    postReq(STORE,`/api/dog/${location}`)
}

const download = (STORE, downloadXOR) => {
    const location = encodeURIComponent(downloadXOR)
    postReq(STORE,`/api/dog/${location}`)
    postReq(STORE,`/api/cat/${location}`)
}


const View = ({STORE}) => {
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
                   <p><b>Inspect XOR-URL container</b> - Inspect data on the SAFE Network providing only metadata information about the content</p>
                   <input type='text' 
                        name='dog_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setDogXOR(e.target.value)}
                    />
                   <button onClick={() => dog(STORE,dogXOR)}>DOG</button>
               </li>
               <br/>
               <li>
                   <p><b>View XOR-URL content (file/folder)</b> - Read data on the SAFE Network</p>
                   <input 
                        type='text' 
                        name='cat_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setCatXOR(e.target.value)}
                   />
                   <button onClick={() => cat(STORE,catXOR)}>CAT</button>
               </li>
               <br/>
               <li>
                   <p><b>Download XOR-URL content (file/folder)</b> - Pipe Datastream into a local file</p>
                   <input type='text' 
                        name='download_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setDownloadXOR(e.target.value)}
                    />
                   <button onClick={() => download(STORE,downloadXOR)}>Download</button>
               </li>
           </ul>
       </header>
   </div>
    )
}

export default View