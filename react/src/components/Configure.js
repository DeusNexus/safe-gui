import React from 'react';
import { postReq } from '../Functions'

const config = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/config`)
}

// const configAdd = (setConsole, consoled) => {
//     postReq(setConsole, consoled,`/api/config/add`)
// }

const configAddNetwork = (setConsole, consoled) => {
    const networkName = 'fleming-testnet'
    const configLocation = 'https://sn-node.s3.eu-west-2.amazonaws.com/config/node_connection_info.config'
    postReq(setConsole, consoled,`/api/config/add/network/${networkName}/${configLocation}`)
}

const configClear = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/config/clear`)
}

const configHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/config/help`)
}

// const configRemove = (setConsole, consoled) => {
//     postReq(setConsole, consoled,`/api/config/remove`)
// }

const configRemoveNetwork = (setConsole, consoled) => {
    const networkName = ''
    postReq(setConsole, consoled,`/api/config/remove/network/${networkName}`)
}

const setupCompletions = (setConsole, consoled) => {
    const shell = ''
    postReq(setConsole, consoled,`/api/setup/completions/${shell}`)
}

const setupHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/setup/help`)
}

const help = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/help`)
}

const update = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/update`)
}

const networks = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/networks`)
}

const networksAdd = (setConsole, consoled) => {
    const networkName = ''
    const configLocation = ''
    postReq(setConsole, consoled,`/api/networks/add/${networkName}/${configLocation}`)
}

const networksCheck = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/networks/check`)
}

const networksHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/networks/help`)
}

const networksRemove = (setConsole, consoled) => {
    const networkName = ''
    postReq(setConsole, consoled,`/api/networks/remove/${networkName}`)
}

const networksSet = (setConsole, consoled) => {
    const networkName = ''
    const addresses = ''
    postReq(setConsole, consoled,`/api/networks/set/${networkName}/${addresses}`)
}

const networksSwitch = (setConsole, consoled) => {
    const networkName = ''
    postReq(setConsole, consoled,`/api/networks/switch/${networkName}`)
}

const Configure = ({ setConsole, consoled }) => {
    return (
        <div className='container'>
             <header>
                <h1>Configure</h1>
                <h3>Change the default values if necessary to custom values</h3>
                <ul>
                    <li>
                        <b>HELP</b><br/>
                        <button onClick={() => help(setConsole, consoled)}>HELP</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>UPDATE</b> - Update the application to the latest available version</p>
                        <button onClick={() => update(setConsole, consoled)}>UPDATE</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>CONFIG</b> - CLI config settings</p>
                        <button onClick={() => config(setConsole, consoled)}>CONFIG</button>
                    </li>
                    <br/>
                    {/* <li>
                        <b>CONFIG ADD</b><br/>
                        <button onClick={() => configAdd(setConsole, consoled)}>ADD</button>
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
                        <button onClick={() => configAddNetwork(setConsole, consoled)}>ADD NETWORK</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>CONFIG CLEAR</b> - Remove all config settings</p>
                        <button onClick={() => configClear(setConsole, consoled)}>CLEAR</button>
                    </li>
                    <br/>
                    <li>
                        <b>CONFIG HELP</b><br/>
                        <button onClick={() => configHelp(setConsole, consoled)}>HELP</button>
                    </li>
                    <br/>
                    {/* <li>
                        <b>CONFIG REMOVE</b><br/>
                        <button onClick={() => configRemove(setConsole, consoled)}>REMOVE</button>
                    </li>
                    <br/> */}
                    <li>
                        <b>CONFIG REMOVE NETWORK</b><br/>
                        <input type='text' name='config-remove-network-networkname' placeholder='Network Name'></input>
                        <button onClick={() => configRemoveNetwork(setConsole, consoled)}>REMOVE NETWORK</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>SETUP COMPLETIONS</b> - Dump shell completions</p>
                        <button onClick={() => setupCompletions(setConsole, consoled)}>COMPLETIONS</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>SETUP HELP</b> - Perform setup tasks</p>
                        <button onClick={() => setupHelp(setConsole, consoled)}>HELP</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS</b></p>
                        <button onClick={() => networks(setConsole, consoled)}>NETWORKS</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS ADD</b> - Add a network to the CLI config using an existing network configuration file</p>
                        <input type='text' name='networks-add-networkname' placeholder='Network Name'></input>
                        <input type='file' name='networks-add-configlocation' placeholder='Config Location'></input>
                        <button onClick={() => networksAdd(setConsole, consoled)}>ADD</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS CHECK</b> - Check current network configuration and try to match it to networks in the CLI config</p>
                        <button onClick={() => networksCheck(setConsole, consoled)}>CHECK</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS HELP</b> - Switch between SAFE networks</p>
                        <button onClick={() => networksHelp(setConsole, consoled)}>HELP</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS REMOVE</b> - Remove a network from the CLI config</p>
                        <input type='text' name='networks-remove-networkname' placeholder='Network Name'></input>
                        <button onClick={() => networksRemove(setConsole, consoled)}>REMOVE</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS SET</b> - Set the list of IP addrsses (and port numbers) for a network in the CLI config</p>
                        <input type='text' name='networks-set-networkname' placeholder='Network Name'></input>
                        <input type='text' name='networks-set-addresses' placeholder='Addresses...'></input>
                        <button onClick={() => networksSet(setConsole, consoled)}>SET</button>
                    </li>
                    <br/>
                    <li>
                        <p><b>NETWORKS SWITCH</b> - Switch to a different SAFE network</p>
                        <input type='text' name='networks-switch-networkname' placeholder='Network Name'></input>
                        <button onClick={() => networksSwitch(setConsole, consoled)}>SWITCH</button>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Configure
