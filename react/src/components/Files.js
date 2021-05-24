import React from 'react';
import { postReq } from '../Functions'

const filesAdd = (setConsole, consoled) => {
    const location = ''
    const target = ''
    postReq(setConsole, consoled,`/api/files/add/${location}/${target}`)
}

const filesGet = (setConsole, consoled) => {
    const source = ''
    const dest = ''
    postReq(setConsole, consoled,`/api/files/get/${source}/${dest}`)
}

const filesHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/files/help`)
}

const filesLs = (setConsole, consoled) => {
    const target = ''
    postReq(setConsole, consoled,`/api/files/ls/${target}`)
}

const filesPut = (setConsole, consoled) => {
    const location = ''
    const dest = ''
    postReq(setConsole, consoled,`/api/files/put/${location}/${dest}`)
}

const filesRm = (setConsole, consoled) => {
    const target = ''
    postReq(setConsole, consoled,`/api/files/add/${target}`)
}

const filesSync = (setConsole, consoled) => {
    const location = ''
    const target = ''
    postReq(setConsole, consoled,`/api/files/sync/${location}/${target}`)
}

const filesTree = (setConsole, consoled) => {
    const target = ''
    postReq(setConsole, consoled,`/api/files/tree/${target}`)
}

const xorurl = (setConsole, consoled) => {
    const location = ''
    postReq(setConsole, consoled,`/api/xorurl/${location}`)
}

const xorurlDecode = (setConsole, consoled) => {
    const xorurl = ''
    postReq(setConsole, consoled,`/api/xorurl/decode/${xorurl}`)
}

const xorurlHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/xorurl/help`)
}

const seqAppend = (setConsole, consoled) => {
    const data = ''
    const target = ''
    postReq(setConsole, consoled,`/api/seq/append/${data}/${target}`)
}

const seqHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/seq/help`)
}

const seqStore = (setConsole, consoled) => {
    const data = ''
    postReq(setConsole, consoled,`/api/seq/store/${data}`)
}

const nrsAdd = (setConsole, consoled) => {
    const name = ''
    postReq(setConsole, consoled,`/api/nrs/add/${name}`)
}

const nrsCreate = (setConsole, consoled) => {
    const name = ''
    postReq(setConsole, consoled,`/api/nrs/create/${name}`)
}

const nrsHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/nrs/help`)
}

const nrsRemove = (setConsole, consoled) => {
    const name = ''
    postReq(setConsole, consoled,`/api/nrs/remove/${name}`)
}


const Files = ({setConsole, consoled}) => {
    return (
        <div className='container'>
        <header>
           <h1>File Management</h1>
           <h3>Select folder or file to upload from local storage</h3>
           <p>Default target is <code>'/'</code> on the Network</p>
           <br/>
           <ul>
                <li>
                   <p><b>FILES ADD</b> - Add a file to an existing FilesContainer on the network</p>
                   <input type='file' name='files-add-location' placeholder='PATH to File or Folder'></input>
                   <input type='text' name='files-add-target' placeholder='Target PATH (optional)'></input>
                   <button onClick={() => filesAdd(setConsole, consoled)}>ADD</button>
               </li>
               <br/>
               <li>
                   <p><b>FILES GET</b> - Get a file or folder from the SAFE Network</p>
                   <input type='text' name='files-get-source' placeholder='Source'></input>
                   <input type='file' name='files-get-dest' placeholder='Dest'></input>
                   <button onClick={() => filesGet(setConsole, consoled)}>GET</button>
               </li>
               <br/>
               <li>
                   <p><b>FILES HELP</b> - Manage files on the SAFE Network</p>
                   <button onClick={() => filesHelp(setConsole, consoled)}>HELP</button>
               </li>
               <br/>
               <li>
                   <p><b>FILES LS</b> - List files found in an existing FilesContainer on the network</p>
                   <input type='text' name='files-ls-target' placeholder='XORURL'></input>
                   <button onClick={() => filesLs(setConsole, consoled)}>PUT</button>
               </li>
               <br/>
               <li>
                   <p><b>FILES PUT</b> - Put a file or folder's files onto the SAFE Network</p>
                   <input type='file' name='files-put-location' placeholder='PATH to File or Folder'></input>
                   <input type='text' name='files-put-dest' placeholder='Target PATH (optional)'></input>
                   <button onClick={() => filesPut(setConsole, consoled)}>PUT</button>
               </li>
               <li>
                   <p><b>FILES RM</b> - Remove a file from an existing FilesContainer on the network</p>
                   <input type='text' name='files-rm-target' placeholder='Target'></input>
                   <button onClick={() => filesRm(setConsole, consoled)}>RM</button>
               </li>
               <br/>
               <li>
                   <p><b>FILES SYNC</b> - Sync files to the SAFE Network</p>
                   <input type='file' name='files-sync-location' placeholder='Location'></input>
                   <input type='text' name='files-sync-target' placeholder='Target'></input>
                   <button onClick={() => filesSync(setConsole, consoled)}>SYNC</button>
               </li>
               <br/>
               <li>
                   <p><b>FILES TREE</b> - Recursively list files found in an existing FilesContainer on the network</p>
                   <input type='text' name='files-tree-target' placeholder='Target'></input>
                   <button onClick={() => filesTree(setConsole, consoled)}>TREE</button>
               </li>
               <br/>
               <li>
                   <p><b>XORURL</b>- Obtain the XOR-URL of data without uploading it to the network, or decode XOR-URLs</p>
                   <input type='text' name='xorurl-location' placeholder='Location'></input>
                   <button onClick={() => xorurl(setConsole, consoled)}>XORURL</button>
               </li>
               <br/>
               <li>
                   <p><b>XORURL DECODE</b> - Decode a XOR-URL extracting all the information encoded it in</p>
                   <input type='text' name='xorurl-decode-xorurl' placeholder='XORURL'></input>
                   <button onClick={() => xorurlDecode(setConsole, consoled)}>DECODE</button>
               </li>
               <br/>
               <li>
                   <p><b>XORURL HELP</b></p>
                   <button onClick={() => xorurlHelp(setConsole, consoled)}>HELP</button>
               </li>
               <br/>
               <li>
                   <b>SEQ APPEND</b><p>- Append an element to an existing Sequence on the network</p>
                   <input type='file' name='seq-append-data' placeholder='Data'></input>
                   <input type='text' name='seq-append-target' placeholder='Target'></input>
                   <button onClick={() => seqAppend(setConsole, consoled)}>APPEND</button>
               </li>
               <br/>
               <li>
                   <p><b>SEQ HELP</b> - Manage Sequences on the Safe Network</p>
                   <button onClick={() => seqHelp(setConsole, consoled)}>HELP</button>
               </li>
               <br/>
               <li>
                   <p><b>SEQ STORE</b> - Stores a new Sequence on the Safe Network</p>
                   <input type='file' name='seq-store-data' placeholder='Data'></input>
                   <button onClick={() => seqStore(setConsole, consoled)}>STORE</button>
               </li>
               <br/>
               <li>
                   <p><b>NRS ADD</b> - Add a subname to an existing NRS name, or updates its link if it already exists</p>
                   <input type='text' name='nrs-add-name' placeholder='Name'></input>
                   <button onClick={() => nrsAdd(setConsole, consoled)}>ADD</button>
               </li>
               <br/>
               <li>
                   <p><b>NRS CREATE</b> - Create a new public name</p>
                   <input type='text' name='nrs-create-name' placeholder='Name'></input>
                   <button onClick={() => nrsCreate(setConsole, consoled)}>Create</button>
               </li>
               <br/>
               <li>
                   <p><b>NRS HELP</b> - Manage public names on the SAFE Network</p>
                   <button onClick={() => nrsHelp(setConsole, consoled)}>HELP</button>
               </li>
               <br/>
               <li>
                   <p><b>NRS REMOVE</b> - Remove a subname from an NRS name</p>
                   <input type='text' name='nrs-remove-name' placeholder='Name'></input>
                   <button onClick={() => nrsRemove(setConsole, consoled)}>REMOVE</button>
               </li>
               <br/>
           </ul>
       </header>
   </div>
    )
}

export default Files
