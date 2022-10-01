import React from 'react';
import {
    filesAdd, filesGet, filesHelp, filesLs, filesPut, filesRm, filesSync, filesTree,
    xorurl, xorurlDecode, xorurlHelp, nrsAdd, nrsCreate, nrsHelp, nrsRemove
} from './Files.utils';
import Card from './../card/Card';
import CardList from './../cardlist/CardList';

const Files = ({STORE}) => {
    return (
        <div className='container'>
        <header>
           <h1>File Management</h1>
           <h3>Select folder or file to upload from local storage</h3>
           <p>Default target is <code>'/'</code> on the Network</p>
           <br/>
           <CardList title={''}>
                <Card
                    title={'FILES ADD'}
                    subtitle={'Add a file to an existing FilesContainer on the network'}
                >
                    <input type='file' name='files-add-location' placeholder='PATH to File or Folder'></input>
                    <input type='text' name='files-add-target' placeholder='Target PATH (optional)'></input>
                    <button onClick={() => filesAdd(STORE)}>ADD</button>
                </Card>
                <Card
                title={'FILES GET'}
                subtitle={'Get a file or folder from the SAFE Network'}
                >
                    <input type='text' name='files-get-source' placeholder='Source'></input>
                    <input type='file' name='files-get-dest' placeholder='Dest'></input>
                    <button onClick={() => filesGet(STORE)}>GET</button>
                </Card>
                <Card
                title={'FILES HELP'}
                subtitle={'Manage files on the SAFE Network'}
                >
                    <button onClick={() => filesHelp(STORE)}>HELP</button>
                </Card>
                <Card
                title={'FILES LS'}
                subtitle={'List files found in an existing FilesContainer on the network'}
                >
                    <input type='text' name='files-ls-target' placeholder='XORURL'></input>
                    <button onClick={() => filesLs(STORE)}>PUT</button>
                </Card>
                <Card
                title={'FILES PUT'}
                subtitle={`Put a file or folder's files onto the SAFE Network`}
                >
                    <input type='file' name='files-put-location' placeholder='PATH to File or Folder'></input>
                    <input type='text' name='files-put-dest' placeholder='Target PATH (optional)'></input>
                    <button onClick={() => filesPut(STORE)}>PUT</button>
                </Card>
                <Card
                title={'FILES RM'}
                subtitle={'Remove a file from an existing FilesContainer on the network'}
                >
                    <input type='text' name='files-rm-target' placeholder='Target'></input>
                    <button onClick={() => filesRm(STORE)}>RM</button>
                </Card>
                <Card
                title={'FILES SYNC'}
                subtitle={'Sync files to the SAFE Network'}
                >
                    <input type='file' name='files-sync-location' placeholder='Location'></input>
                    <input type='text' name='files-sync-target' placeholder='Target'></input>
                    <button onClick={() => filesSync(STORE)}>SYNC</button>
                </Card>
                <Card
                title={'FILES TREE'}
                subtitle={'Recursively list files found in an existing FilesContainer on the network'}
                >
                    <input type='text' name='files-tree-target' placeholder='Target'></input>
                    <button onClick={() => filesTree(STORE)}>TREE</button>
                </Card>
                <Card
                title={'XORURL'}
                subtitle={'Obtain the XOR-URL of data without uploading it to the network, or decode XOR-URLs'}
                >
                    <input type='text' name='xorurl-location' placeholder='Location'></input>
                    <button onClick={() => xorurl(STORE)}>XORURL</button>
                </Card>
                <Card
                title={'XORURL DECODE'}
                subtitle={'Decode a XOR-URL extracting all the information encoded it in'}
                >
                    <input type='text' name='xorurl-decode-xorurl' placeholder='XORURL'></input>
                    <button onClick={() => xorurlDecode(STORE)}>DECODE</button>
                </Card>
                <Card
                title={'XORURL HELP'}
                subtitle={''}
                >
                    <button onClick={() => xorurlHelp(STORE)}>HELP</button>
                </Card>
                <Card
                title={'NRS ADD'}
                subtitle={'Add a subname to an existing NRS name, or updates its link if it already exists'}
                >
                    <input type='text' name='nrs-add-name' placeholder='Name'></input>
                    <button onClick={() => nrsAdd(STORE)}>ADD</button>
                </Card>
                <Card
                title={'NRS CREATE'}
                subtitle={'Create a new public name'}
                >
                    <input type='text' name='nrs-create-name' placeholder='Name'></input>
                    <button onClick={() => nrsCreate(STORE)}>Create</button>
                </Card>
                <Card
                title={'NRS HELP'}
                subtitle={'Manage public names on the SAFE Network'}
                >
                    <button onClick={() => nrsHelp(STORE)}>HELP</button>
                </Card>
                <Card
                title={'NRS REMOVE'}
                subtitle={'Remove a subname from an NRS name'}
                >
                    <input type='text' name='nrs-remove-name' placeholder='Name'></input>
                    <button onClick={() => nrsRemove(STORE)}>REMOVE</button>
                </Card>
           </CardList>
       </header>
   </div>
    )
}

export default Files
