import React, { useState } from 'react';
import { cat, dog, download } from './View.utils';
import Card from '../card/Card';

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
                   <Card>
                        <p><b>Inspect XOR-URL container</b> - Inspect data on the SAFE Network providing only metadata information about the content</p>
                        <input 
                            type='text' 
                            name='dog_xorurl' 
                            placeholder='XOR-URL'
                            onChange={(e)=>setDogXOR(e.target.value)}
                        />
                        <button onClick={() => dog(STORE,dogXOR)}>DOG</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>View XOR-URL content (file/folder)</b> - Read data on the SAFE Network</p>
                        <input 
                            type='text' 
                            name='cat_xorurl' 
                            placeholder='XOR-URL'
                            onChange={(e)=>setCatXOR(e.target.value)}
                        />
                        <button onClick={() => cat(STORE,catXOR)}>CAT</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>Download XOR-URL content (file/folder)</b> - Pipe Datastream into a local file</p>
                        <input 
                            type='text' 
                            name='download_xorurl' 
                            placeholder='XOR-URL'
                            onChange={(e)=>setDownloadXOR(e.target.value)}
                        />
                        <button onClick={() => download(STORE,downloadXOR)}>Download</button>
                   </Card>
               </li>
           </ul>
       </header>
   </div>
    )
}

export default View