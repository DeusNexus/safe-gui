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
                        <b>UPDATE</b><br/>
                        <button onClick={() => update(setConsole, consoled)}>UPDATE</button>
                    </li>
                    <br/>
                    <li>
                        <b>CONFIG</b><br/>
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
                        <input type='file' name='config-add-network-configlocation' placeholder='Config Location'></input>
                        <button onClick={() => configAddNetwork(setConsole, consoled)}>ADD NETWORK</button>
                    </li>
                    <br/>
                    <li>
                        <b>CONFIG CLEAR</b><br/>
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
                        <b>SETUP COMPLETIONS</b><br/>
                        <button onClick={() => setupCompletions(setConsole, consoled)}>COMPLETIONS</button>
                    </li>
                    <br/>
                    <li>
                        <b>SETUP HELP</b><br/>
                        <button onClick={() => setupHelp(setConsole, consoled)}>HELP</button>
                    </li>
                    <br/>
                    <li>
                        <b>NETWORKS</b><br/>
                        <button onClick={() => networks(setConsole, consoled)}>NETWORKS</button>
                    </li>
                    <br/>
                    <li>
                        <b>NETWORKS ADD</b><br/>
                        <input type='text' name='networks-add-networkname' placeholder='Network Name'></input>
                        <input type='file' name='networks-add-configlocation' placeholder='Config Location'></input>
                        <button onClick={() => networksAdd(setConsole, consoled)}>ADD</button>
                    </li>
                    <br/>
                    <li>
                        <b>NETWORKS CHECK</b><br/>
                        <button onClick={() => networksCheck(setConsole, consoled)}>CHECK</button>
                    </li>
                    <br/>
                    <li>
                        <b>NETWORKS HELP</b><br/>
                        <button onClick={() => networksHelp(setConsole, consoled)}>HELP</button>
                    </li>
                    <br/>
                    <li>
                        <b>NETWORKS REMOVE</b><br/>
                        <input type='text' name='networks-remove-networkname' placeholder='Network Name'></input>
                        <button onClick={() => networksRemove(setConsole, consoled)}>REMOVE</button>
                    </li>
                    <br/>
                    <li>
                        <b>NETWORKS SET</b><br/>
                        <input type='text' name='networks-set-networkname' placeholder='Network Name'></input>
                        <input type='text' name='networks-set-addresses' placeholder='Addresses...'></input>
                        <button onClick={() => networksSet(setConsole, consoled)}>SET</button>
                    </li>
                    <br/>
                    <li>
                        <b>NETWORKS SWITCH</b><br/>
                        <input type='text' name='networks-switch-networkname' placeholder='Network Name'></input>
                        <button onClick={() => networksSwitch(setConsole, consoled)}>SWITCH</button>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Configure
