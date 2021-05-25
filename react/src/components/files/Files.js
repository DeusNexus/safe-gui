import React from 'react';
import {
    filesAdd, filesGet, filesHelp, filesLs, filesPut, filesRm, filesSync, filesTree,
    xorurl, xorurlDecode, xorurlHelp, seqAppend, seqHelp, seqStore, nrsAdd, nrsCreate, nrsHelp, nrsRemove
} from './Files.utils';
import Card from './../card/Card';

const Files = ({STORE}) => {
    return (
        <div className='container'>
        <header>
           <h1>File Management</h1>
           <h3>Select folder or file to upload from local storage</h3>
           <p>Default target is <code>'/'</code> on the Network</p>
           <br/>
           <ul>
                <li>
                    <Card>
                        <p><b>FILES ADD</b> - Add a file to an existing FilesContainer on the network</p>
                        <input type='file' name='files-add-location' placeholder='PATH to File or Folder'></input>
                        <input type='text' name='files-add-target' placeholder='Target PATH (optional)'></input>
                        <button onClick={() => filesAdd(STORE)}>ADD</button>
                    </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>FILES GET</b> - Get a file or folder from the SAFE Network</p>
                        <input type='text' name='files-get-source' placeholder='Source'></input>
                        <input type='file' name='files-get-dest' placeholder='Dest'></input>
                        <button onClick={() => filesGet(STORE)}>GET</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>FILES HELP</b> - Manage files on the SAFE Network</p>
                        <button onClick={() => filesHelp(STORE)}>HELP</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>FILES LS</b> - List files found in an existing FilesContainer on the network</p>
                        <input type='text' name='files-ls-target' placeholder='XORURL'></input>
                        <button onClick={() => filesLs(STORE)}>PUT</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>FILES PUT</b> - Put a file or folder's files onto the SAFE Network</p>
                        <input type='file' name='files-put-location' placeholder='PATH to File or Folder'></input>
                        <input type='text' name='files-put-dest' placeholder='Target PATH (optional)'></input>
                        <button onClick={() => filesPut(STORE)}>PUT</button>
                   </Card>
               </li>
               <li>
                   <Card>
                        <p><b>FILES RM</b> - Remove a file from an existing FilesContainer on the network</p>
                        <input type='text' name='files-rm-target' placeholder='Target'></input>
                        <button onClick={() => filesRm(STORE)}>RM</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>FILES SYNC</b> - Sync files to the SAFE Network</p>
                        <input type='file' name='files-sync-location' placeholder='Location'></input>
                        <input type='text' name='files-sync-target' placeholder='Target'></input>
                        <button onClick={() => filesSync(STORE)}>SYNC</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>FILES TREE</b> - Recursively list files found in an existing FilesContainer on the network</p>
                        <input type='text' name='files-tree-target' placeholder='Target'></input>
                        <button onClick={() => filesTree(STORE)}>TREE</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>XORURL</b>- Obtain the XOR-URL of data without uploading it to the network, or decode XOR-URLs</p>
                        <input type='text' name='xorurl-location' placeholder='Location'></input>
                        <button onClick={() => xorurl(STORE)}>XORURL</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>XORURL DECODE</b> - Decode a XOR-URL extracting all the information encoded it in</p>
                        <input type='text' name='xorurl-decode-xorurl' placeholder='XORURL'></input>
                        <button onClick={() => xorurlDecode(STORE)}>DECODE</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>XORURL HELP</b></p>
                        <button onClick={() => xorurlHelp(STORE)}>HELP</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <b>SEQ APPEND</b><p>- Append an element to an existing Sequence on the network</p>
                        <input type='file' name='seq-append-data' placeholder='Data'></input>
                        <input type='text' name='seq-append-target' placeholder='Target'></input>
                        <button onClick={() => seqAppend(STORE)}>APPEND</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>SEQ HELP</b> - Manage Sequences on the Safe Network</p>
                        <button onClick={() => seqHelp(STORE)}>HELP</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>SEQ STORE</b> - Stores a new Sequence on the Safe Network</p>
                        <input type='file' name='seq-store-data' placeholder='Data'></input>
                        <button onClick={() => seqStore(STORE)}>STORE</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NRS ADD</b> - Add a subname to an existing NRS name, or updates its link if it already exists</p>
                        <input type='text' name='nrs-add-name' placeholder='Name'></input>
                        <button onClick={() => nrsAdd(STORE)}>ADD</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NRS CREATE</b> - Create a new public name</p>
                        <input type='text' name='nrs-create-name' placeholder='Name'></input>
                        <button onClick={() => nrsCreate(STORE)}>Create</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NRS HELP</b> - Manage public names on the SAFE Network</p>
                        <button onClick={() => nrsHelp(STORE)}>HELP</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NRS REMOVE</b> - Remove a subname from an NRS name</p>
                        <input type='text' name='nrs-remove-name' placeholder='Name'></input>
                        <button onClick={() => nrsRemove(STORE)}>REMOVE</button>
                   </Card>
               </li>
               <br/>
           </ul>
       </header>
   </div>
    )
}

export default Files
