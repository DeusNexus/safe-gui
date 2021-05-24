import React from 'react';
import { postReq } from '../../Functions'

const config = (STORE) => {
    postReq(STORE,`/api/config`)
}

// const configAdd = (STORE) => {
//     postReq(STORE,`/api/config/add`)
// }

const configAddNetwork = (STORE) => {
    const networkName = 'fleming-testnet'
    const configLocation = 'https://sn-node.s3.eu-west-2.amazonaws.com/config/node_connection_info.config'
    postReq(STORE,`/api/config/add/network/${networkName}/${configLocation}`)
}

const configClear = (STORE) => {
    postReq(STORE,`/api/config/clear`)
}

const configHelp = (STORE) => {
    postReq(STORE,`/api/config/help`)
}

// const configRemove = (STORE) => {
//     postReq(STORE,`/api/config/remove`)
// }

const configRemoveNetwork = (STORE) => {
    const networkName = ''
    postReq(STORE,`/api/config/remove/network/${networkName}`)
}

const setupCompletions = (STORE) => {
    const shell = ''
    postReq(STORE,`/api/setup/completions/${shell}`)
}

const setupHelp = (STORE) => {
    postReq(STORE,`/api/setup/help`)
}

const help = (STORE) => {
    postReq(STORE,`/api/help`)
}

const update = (STORE) => {
    postReq(STORE,`/api/update`)
}

const networks = (STORE) => {
    postReq(STORE,`/api/networks`)
}

const networksAdd = (STORE) => {
    const networkName = ''
    const configLocation = ''
    postReq(STORE,`/api/networks/add/${networkName}/${configLocation}`)
}

const networksCheck = (STORE) => {
    postReq(STORE,`/api/networks/check`)
}

const networksHelp = (STORE) => {
    postReq(STORE,`/api/networks/help`)
}

const networksRemove = (STORE) => {
    const networkName = ''
    postReq(STORE,`/api/networks/remove/${networkName}`)
}

const networksSet = (STORE) => {
    const networkName = ''
    const addresses = ''
    postReq(STORE,`/api/networks/set/${networkName}/${addresses}`)
}

const networksSwitch = (STORE) => {
    const networkName = ''
    postReq(STORE,`/api/networks/switch/${networkName}`)
}

const Configure = ({ STORE }) => {
    return (
        <div className='container'>
             <header>
                <h1>Configure</h1>
                <h3>Change the default values if necessary to custom values</h3>
                <ul>
                    <li>
                        <b>HELP</b><br/>
                        <button onClick={() => help(STORE)}>HELP</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>UPDATE</b> - Update the application to the latest available version</p>
                        <button onClick={() => update(STORE)}>UPDATE</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>CONFIG</b> - CLI config settings</p>
                        <button onClick={() => config(STORE)}>CONFIG</button>
                    </li>
                    <br/>
                    {/* <li>
                        <b>CONFIG ADD</b><br/>
                        <button onClick={() => configAdd(STORE)}>ADD</button>
                    </li>
                    <br/> */}
                    <li>
                        <b>CONFIG ADD NETWORK</b><br/>
                        <input type='text' name='config-add-network-networkname' placeholder='Network Name'></input>
                        <input 
                            type='file' 
                            name='config-add-network-configlocation' 
                            placeholder='Config Location'
                            onChange={(e)=>console.log(e.target.value)}
                        />
                        <button onClick={() => configAddNetwork(STORE)}>ADD NETWORK</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>CONFIG CLEAR</b> - Remove all config settings</p>
                        <button onClick={() => configClear(STORE)}>CLEAR</button>
                    </li>
                    <br/>
                    <li>
                        <b>CONFIG HELP</b><br/>
                        <button onClick={() => configHelp(STORE)}>HELP</button>
                    </li>
                    <br/>
                    {/* <li>
                        <b>CONFIG REMOVE</b><br/>
                        <button onClick={() => configRemove(STORE)}>REMOVE</button>
                    </li>
                    <br/> */}
                    <li>
                        <b>CONFIG REMOVE NETWORK</b><br/>
                        <input type='text' name='config-remove-network-networkname' placeholder='Network Name'></input>
                        <button onClick={() => configRemoveNetwork(STORE)}>REMOVE NETWORK</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>SETUP COMPLETIONS</b> - Dump shell completions</p>
                        <button onClick={() => setupCompletions(STORE)}>COMPLETIONS</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>SETUP HELP</b> - Perform setup tasks</p>
                        <button onClick={() => setupHelp(STORE)}>HELP</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS</b></p>
                        <button onClick={() => networks(STORE)}>NETWORKS</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS ADD</b> - Add a network to the CLI config using an existing network configuration file</p>
                        <input type='text' name='networks-add-networkname' placeholder='Network Name'></input>
                        <input type='file' name='networks-add-configlocation' placeholder='Config Location'></input>
                        <button onClick={() => networksAdd(STORE)}>ADD</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS CHECK</b> - Check current network configuration and try to match it to networks in the CLI config</p>
                        <button onClick={() => networksCheck(STORE)}>CHECK</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS HELP</b> - Switch between SAFE networks</p>
                        <button onClick={() => networksHelp(STORE)}>HELP</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS REMOVE</b> - Remove a network from the CLI config</p>
                        <input type='text' name='networks-remove-networkname' placeholder='Network Name'></input>
                        <button onClick={() => networksRemove(STORE)}>REMOVE</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS SET</b> - Set the list of IP addrsses (and port numbers) for a network in the CLI config</p>
                        <input type='text' name='networks-set-networkname' placeholder='Network Name'></input>
                        <input type='text' name='networks-set-addresses' placeholder='Addresses...'></input>
                        <button onClick={() => networksSet(STORE)}>SET</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS SWITCH</b> - Switch to a different SAFE network</p>
                        <input type='text' name='networks-switch-networkname' placeholder='Network Name'></input>
                        <button onClick={() => networksSwitch(STORE)}>SWITCH</button>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Configure
