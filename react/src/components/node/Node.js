import React, { useState } from 'react';
import {
    binVersion, help, install, join, killall, runBabyFleming, update
} from './Node.utils';
import Card from '../card/Card';
import CardList from './../cardlist/CardList';

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
           <CardList title={''}>
               <Card
                    title={'NODE BIN-VERSION'}
                    subtitle={'Gets the version of `sn_node` binary'}
               >
                    <button onClick={() => binVersion(STORE)}>BIN-VERSION</button>
               </Card>
               <Card
                    title={'NODE HELP'}
                    subtitle={'Commands to manage Safe Network Nodes'}
               >
                    <button onClick={() => help(STORE)}>HELP</button>
               </Card>
               <Card
                    title={'NODE INSTALL'}
                    subtitle={'Install latest sn_node released version in the system'}
               >
                    <button onClick={() => install(STORE)}>INSTALL</button>
               </Card>
               <Card
                    title={'NODE JOIN'}
                    subtitle={'Join an already running network'}
               >
                    <input type='text' name='join-network-name' placeholder='network-name' onChange={(e) => setNodeJoinVal(e.target.value)}></input>
                    <button onClick={() => join(STORE, nodeJoinVal)}>JOIN</button>
               </Card>
               <Card
                    title={'NODE KILLALL'}
                    subtitle={'Shutdown all running nodes processes'}
               >
                    <button onClick={() => killall(STORE)}>KILLALL</button>
               </Card>
               <Card
                    title={'NODE RUN-BABY-FLEMING'}
                    subtitle={'Run nodes to form a local single-section Safe network'}
               >
                    <button onClick={() => runBabyFleming(STORE)}>RUN-BABY-FLEMING</button>
               </Card>
               <Card
                    title={'NODE UPDATE'}
                    subtitle={'Update to latest sn_node released version'}
               >
                    <button onClick={() => update(STORE)}>UPDATE</button>
               </Card>
           </CardList>
       </header>
   </div>
    )
}

export default Node
