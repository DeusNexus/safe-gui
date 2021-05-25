import React, { useState } from 'react';
import {
    binVersion, help, install, join, killall, runBabyFleming, update
} from './Node.utils';
import Card from '../card/Card';

const Node = ({STORE}) => {
    const [nodeJoinVal, setNodeJoinVal] = useState('')

    //hideShow
    const [showNodeBin, setShowNodeBin] = useState(false)
    const [showNodeHelp, setShowNodeHelp] = useState(false)
    const [showNodeInstall, setShowNodeInstall] = useState(false)
    const [showNodeJoin, setShowNodeJoin] = useState(false)
    const [showNodeKillAll, setShowNodeKillAll] = useState(false)
    const [showNodeRunBabyFleming, setShowNodeRunBabyFleming] = useState(false)
    const [showNodeUpdate, setShowNodeUpdate] = useState(false)

    return (
        <div className='container'>
        <header>
           <h1>Node</h1>
           <h3>Interact with your Node(s)</h3>
           <br/>
           <ul>
               <li>
                   <Card>
                        <p><b>NODE BIN-VERSION</b> - Gets the version of `sn_node` binary</p>
                        <button onClick={() => binVersion(STORE)}>BIN-VERSION</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NODE HELP</b> - Commands to manage Safe Network Nodes</p>
                        <button onClick={() => help(STORE)}>HELP</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NODE INSTALL</b>- Install latest sn_node released version in the system</p>
                        <button onClick={() => install(STORE)}>INSTALL</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NODE JOIN</b> - Join an already running network</p>
                        <input type='text' name='join-network-name' placeholder='network-name' onChange={(e) => setNodeJoinVal(e.target.value)}></input>
                        <button onClick={() => join(STORE, nodeJoinVal)}>JOIN</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NODE KILLALL</b> - Shutdown all running nodes processes</p>
                        <button onClick={() => killall(STORE)}>KILLALL</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NODE RUN-BABY-FLEMING</b> - Run nodes to form a local single-section Safe network</p>
                        <button onClick={() => runBabyFleming(STORE)}>RUN-BABY-FLEMING</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>NODE UPDATE</b> - Update to latest sn_node released version</p>
                        <button onClick={() => update(STORE)}>UPDATE</button>
                   </Card>
               </li>
           </ul>
       </header>
   </div>
    )
}

export default Node
