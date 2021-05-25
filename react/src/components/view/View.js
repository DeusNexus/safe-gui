import React, { useState } from 'react';
import { cat, dog, download } from './View.utils';
import Card from '../card/Card';
import CardList from './../cardlist/CardList';

const View = ({STORE}) => {
    const [dogXOR, setDogXOR] = useState('')
    const [catXOR, setCatXOR] = useState('')
    const [downloadXOR, setDownloadXOR] = useState('')

    return (
        <div className='container'>
        <header>
           <h1>View</h1>
           <h3>Retrieve and Display data on the SafeNetwork</h3>
           <CardList title={''}>
                <Card
                    title={'Inspect XOR-URL container'}
                    subtitle={' Inspect data on the SAFE Network providing only metadata information about the content'}
                >
                    <input 
                        type='text' 
                        name='dog_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setDogXOR(e.target.value)}
                    />
                    <button onClick={() => dog(STORE,dogXOR)}>DOG</button>
                </Card>
                <Card
                    title={'View XOR-URL content (file/folder)'}
                    subtitle={'Read data on the SAFE Network'}
                >
                    <input 
                        type='text' 
                        name='cat_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setCatXOR(e.target.value)}
                    />
                    <button onClick={() => cat(STORE,catXOR)}>CAT</button>
                </Card>
                <Card
                    title={'Download XOR-URL content (file/folder)'}
                    subtitle={'Pipe Datastream into a local file'}
                >
                    <input 
                        type='text' 
                        name='download_xorurl' 
                        placeholder='XOR-URL'
                        onChange={(e)=>setDownloadXOR(e.target.value)}
                    />
                    <button onClick={() => download(STORE,downloadXOR)}>Download</button>
                </Card>
           </CardList>
       </header>
   </div>
    )
}

export default View