import React from 'react';
import { 
    config, configAddNetwork, configClear, configHelp, configRemoveNetwork,
    setupCompletions, setupHelp, help, update, 
    networks, networksAdd, networksCheck, networksHelp, networksRemove, networksSet, networksSwitch
} from './Configure.utils'
import Card from '../card/Card';


const Configure = ({ STORE }) => {
    return (
        <div className='container'>
             <header>
                <h1>Configure</h1>
                <h3>Change the default values if necessary to custom values</h3>
                <ul>
                    <li>
                        <Card>
                            <b>HELP</b><br/>
                            <button onClick={() => help(STORE)}>HELP</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>UPDATE</b> - Update the application to the latest available version</p>
                            <button onClick={() => update(STORE)}>UPDATE</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>CONFIG</b> - CLI config settings</p>
                            <button onClick={() => config(STORE)}>CONFIG</button>
                        </Card>
                    </li>
                    <br/>
                    {/* <li>
                        <b>CONFIG ADD</b><br/>
                        <button onClick={() => configAdd(STORE)}>ADD</button>
                    </li>
                    <br/> */}
                    <li>
                        <Card>
                            <b>CONFIG ADD NETWORK</b><br/>
                            <input type='text' name='config-add-network-networkname' placeholder='Network Name'></input>
                            <input 
                                type='file' 
                                name='config-add-network-configlocation' 
                                placeholder='Config Location'
                                onChange={(e)=>console.log(e.target.value)}
                            />
                            <button onClick={() => configAddNetwork(STORE)}>ADD NETWORK</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>CONFIG CLEAR</b> - Remove all config settings</p>
                            <button onClick={() => configClear(STORE)}>CLEAR</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <b>CONFIG HELP</b><br/>
                            <button onClick={() => configHelp(STORE)}>HELP</button>
                        </Card>
                    </li>
                    <br/>
                    {/* <li>
                        <b>CONFIG REMOVE</b><br/>
                        <button onClick={() => configRemove(STORE)}>REMOVE</button>
                    </li>
                    <br/> */}
                    <li>
                        <Card>
                            <b>CONFIG REMOVE NETWORK</b><br/>
                            <input type='text' name='config-remove-network-networkname' placeholder='Network Name'></input>
                            <button onClick={() => configRemoveNetwork(STORE)}>REMOVE NETWORK</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>SETUP COMPLETIONS</b> - Dump shell completions</p>
                            <button onClick={() => setupCompletions(STORE)}>COMPLETIONS</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>SETUP HELP</b> - Perform setup tasks</p>
                            <button onClick={() => setupHelp(STORE)}>HELP</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>NETWORKS</b></p>
                            <button onClick={() => networks(STORE)}>NETWORKS</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>NETWORKS ADD</b> - Add a network to the CLI config using an existing network configuration file</p>
                            <input type='text' name='networks-add-networkname' placeholder='Network Name'></input>
                            <input type='file' name='networks-add-configlocation' placeholder='Config Location'></input>
                            <button onClick={() => networksAdd(STORE)}>ADD</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>NETWORKS CHECK</b> - Check current network configuration and try to match it to networks in the CLI config</p>
                            <button onClick={() => networksCheck(STORE)}>CHECK</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>NETWORKS HELP</b> - Switch between SAFE networks</p>
                            <button onClick={() => networksHelp(STORE)}>HELP</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>NETWORKS REMOVE</b> - Remove a network from the CLI config</p>
                            <input type='text' name='networks-remove-networkname' placeholder='Network Name'></input>
                            <button onClick={() => networksRemove(STORE)}>REMOVE</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>NETWORKS SET</b> - Set the list of IP addrsses (and port numbers) for a network in the CLI config</p>
                            <input type='text' name='networks-set-networkname' placeholder='Network Name'></input>
                            <input type='text' name='networks-set-addresses' placeholder='Addresses...'></input>
                            <button onClick={() => networksSet(STORE)}>SET</button>
                        </Card>
                    </li>
                    <br/>
                    <li>
                        <Card>
                            <p><b>NETWORKS SWITCH</b> - Switch to a different SAFE network</p>
                            <input type='text' name='networks-switch-networkname' placeholder='Network Name'></input>
                            <button onClick={() => networksSwitch(STORE)}>SWITCH</button>
                        </Card>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Configure
