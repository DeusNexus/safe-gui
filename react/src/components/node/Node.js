import React, { useState } from 'react';
import { postReq } from '../../Functions'

const binVersion = (STORE) => {
    postReq(STORE,`/api/node/bin-version`)
}

const help = (STORE) => {
    postReq(STORE,`/api/node/help`)
}

const install = (STORE) => {
    postReq(STORE,`/api/node/install`)
}

const join = (STORE, nodeJoinVal) => {
    const networkName = nodeJoinVal
    postReq(STORE,`/api/node/join/${networkName}`)
}

const killall = (STORE) => {
    postReq(STORE,`/api/node/killall`)
}

const runBabyFleming = (STORE) => {
    // const testing = '--testing'
    // const verbose = '-y'
    postReq(STORE,`/api/node/run-baby-fleming`,'','')
}

const update = (STORE) => {
    postReq(STORE,`/api/node/update`)
}

const Node = ({STORE}) => {
    const [nodeJoinVal, setNodeJoinVal] = useState('')

    return (
        <div className='container'>
        <header>
           <h1>Node</h1>
           <h3>Interact with your Node(s)</h3>
           <br/>
           <ul>
               <li>
                   <p><b>NODE BIN-VERSION</b> - Gets the version of `sn_node` binary</p>
                   <button onClick={() => binVersion(STORE)}>BIN-VERSION</button>
               </li>
               <br/>
               <li>
                   <p><b>NODE HELP</b> - Commands to manage Safe Network Nodes</p>
                   <button onClick={() => help(STORE)}>HELP</button>
               </li>
               <br/>
               <li>
                   <p><b>NODE INSTALL</b>- Install latest sn_node released version in the system</p>
                   <button onClick={() => install(STORE)}>INSTALL</button>
               </li>
               <br/>
               <li>
                   <p><b>NODE JOIN</b> - Join an already running network</p>
                   <input type='text' name='join-network-name' placeholder='network-name' onChange={(e) => setNodeJoinVal(e.target.value)}></input>
                   <button onClick={() => join(STORE, nodeJoinVal)}>JOIN</button>
               </li>
               <br/>
               <li>
                   <p><b>NODE KILLALL</b> - Shutdown all running nodes processes</p>
                   <button onClick={() => killall(STORE)}>KILLALL</button>
               </li>
               <br/>
               <li>
                   <p><b>NODE RUN-BABY-FLEMING</b> - Run nodes to form a local single-section Safe network</p>
                   <button onClick={() => runBabyFleming(STORE)}>RUN-BABY-FLEMING</button>
               </li>
               <br/>
               <li>
                   <p><b>NODE UPDATE</b> - Update to latest sn_node released version</p>
                   <button onClick={() => update(STORE)}>UPDATE</button>
               </li>
           </ul>
       </header>
   </div>
    )
}

export default Node
