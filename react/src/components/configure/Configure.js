import React from 'react';
import { 
    config, configAddNetwork, configClear, configHelp, configRemoveNetwork,
    setupCompletions, setupHelp, help, update, 
    networks, networksAdd, networksCheck, networksHelp, networksRemove, networksSet, networksSwitch
} from './Configure.utils'
import Card from '../card/Card';
import CardList from './../cardlist/CardList';


const Configure = ({ STORE }) => {
    return (
        <div className='container'>
             <header>
                <h1>Configure</h1>
                <h3>Change the default values if necessary to custom values</h3>
                <CardList title={''}>
                    <Card
                        title={'HELP'}
                        subtitle={''}
                    >
                        <button onClick={() => help(STORE)}>HELP</button>
                    </Card>
                    <Card
                        title={'UPDATE'}
                        subtitle={'Update the application to the latest available version'}
                    >
                        <button onClick={() => update(STORE)}>UPDATE</button>
                    </Card>
                    <Card
                        title={'CONFIG'}
                        subtitle={'CLI config settings'}
                    >
                        <button onClick={() => config(STORE)}>CONFIG</button>
                    </Card>
                    <Card
                        title={'CONFIG ADD NETWORK'}
                        subtitle={''}
                    >
                        <input type='text' name='config-add-network-networkname' placeholder='Network Name'></input>
                        <input 
                            type='file' 
                            name='config-add-network-configlocation' 
                            placeholder='Config Location'
                            onChange={(e)=>console.log(e.target.value)}
                        />
                        <button onClick={() => configAddNetwork(STORE)}>ADD NETWORK</button>
                    </Card>
                    <Card
                        title={'CONFIG CLEAR'}
                        subtitle={'Remove all config settings'}
                    >
                        <button onClick={() => configClear(STORE)}>CLEAR</button>
                    </Card>
                    <Card
                        title={'CONFIG HELP'}
                        subtitle={''}
                    >
                        <button onClick={() => configHelp(STORE)}>HELP</button>
                    </Card>
                    <Card
                        title={'CONFIG REMOVE NETWORK'}
                        subtitle={''}
                    >
                        <input type='text' name='config-remove-network-networkname' placeholder='Network Name'></input>
                        <button onClick={() => configRemoveNetwork(STORE)}>REMOVE NETWORK</button>
                    </Card>
                    <Card
                        title={'SETUP COMPLETIONS'}
                        subtitle={'Dump shell completions'}
                    >
                        <button onClick={() => setupCompletions(STORE)}>COMPLETIONS</button>
                    </Card>
                    <Card
                        title={'SETUP HELP'}
                        subtitle={'Perform setup tasks'}
                    >
                        <button onClick={() => setupHelp(STORE)}>HELP</button>
                    </Card>
                    <Card
                        title={'NETWORKS'}
                        subtitle={''}
                    >
                        <button onClick={() => networks(STORE)}>NETWORKS</button>
                    </Card>
                    <Card
                        title={'NETWORKS ADD'}
                        subtitle={'Add a network to the CLI config using an existing network configuration file'}
                    >
                        <input type='text' name='networks-add-networkname' placeholder='Network Name'></input>
                        <input type='file' name='networks-add-configlocation' placeholder='Config Location'></input>
                        <button onClick={() => networksAdd(STORE)}>ADD</button>
                    </Card>
                    <Card
                        title={'NETWORKS CHECK'}
                        subtitle={'Check current network configuration and try to match it to networks in the CLI config'}
                    >
                        <button onClick={() => networksCheck(STORE)}>CHECK</button>
                    </Card>
                    <Card
                        title={'NETWORKS HELP'}
                        subtitle={'Switch between SAFE networks'}
                    >
                        <button onClick={() => networksHelp(STORE)}>HELP</button>
                    </Card>
                    <Card
                        title={'NETWORKS REMOVE'}
                        subtitle={'Remove a network from the CLI config'}
                    >
                        <input type='text' name='networks-remove-networkname' placeholder='Network Name'></input>
                        <button onClick={() => networksRemove(STORE)}>REMOVE</button>
                    </Card>
                    <Card
                        title={'NETWORKS SET'}
                        subtitle={'Set the list of IP addrsses (and port numbers) for a network in the CLI config'}
                    >
                        <input type='text' name='networks-set-networkname' placeholder='Network Name'></input>
                        <input type='text' name='networks-set-addresses' placeholder='Addresses...'></input>
                        <button onClick={() => networksSet(STORE)}>SET</button>
                    </Card>
                    <Card
                        title={'NETWORKS SWITCH'}
                        subtitle={'Switch to a different SAFE network'}
                    >
                        <input type='text' name='networks-switch-networkname' placeholder='Network Name'></input>
                        <button onClick={() => networksSwitch(STORE)}>SWITCH</button>
                    </Card>
                </CardList>
            </header>
        </div>
    )
}

export default Configure
