import React, { useState } from 'react';
import { postReq } from '../Functions'

const binVersion = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/node/bin-version`)
}

const help = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/node/help`)
}

const install = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/node/install`)
}

const join = (setConsole, consoled, nodeJoinVal) => {
    const networkName = nodeJoinVal
    postReq(setConsole, consoled,`/api/node/join/${networkName}`)
}

const killall = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/node/killall`)
}

const runBabyFleming = (setConsole, consoled) => {
    // const testing = '--testing'
    // const verbose = '-y'
    postReq(setConsole, consoled,`/api/node/run-baby-fleming`,'','')
}

const update = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/node/update`)
}

const Node = ({setConsole, consoled}) => {
    const [nodeJoinVal, setNodeJoinVal] = useState('')

    return (
        <div className='container'>
        <header>
           <h1>Node</h1>
           <h3>Interact with your Node(s)</h3>
           <br/>
           <ul>
               <li>
                   <b>NODE BIN-VERSION</b><br/>
                   <button onClick={() => binVersion(setConsole, consoled)}>BIN-VERSION</button>
               </li>
               <br/>
               <li>
                   <b>NODE HELP</b><br/>
                   <button onClick={() => help(setConsole, consoled)}>HELP</button>
               </li>
               <br/>
               <li>
                   <b>NODE INSTALL</b><br/>
                   <button onClick={() => install(setConsole, consoled)}>INSTALL</button>
               </li>
               <br/>
               <li>
                   <b>NODE JOIN</b><br/>
                   <input type='text' name='join-network-name' placeholder='network-name' onChange={(e) => setNodeJoinVal(e.target.value)}></input>
                   <button onClick={() => join(setConsole, consoled, nodeJoinVal)}>JOIN</button>
               </li>
               <br/>
               <li>
                   <b>NODE KILLALL</b><br/>
                   <button onClick={() => killall(setConsole, consoled)}>KILLALL</button>
               </li>
               <br/>
               <li>
                   <b>NODE RUN-BABY-FLEMING</b><br/>
                   <button onClick={() => runBabyFleming(setConsole, consoled)}>RUN-BABY-FLEMING</button>
               </li>
               <br/>
               <li>
                   <b>NODE UPDATE</b><br/>
                   <button onClick={() => update(setConsole, consoled)}>UPDATE</button>
               </li>
           </ul>
       </header>
   </div>
    )
}

export default Node
