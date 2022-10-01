import React from 'react';
import Card from './../card/Card';
import CardList from './../cardlist/CardList';
import { mainClean, mainInstallFull, mainAddSwitchCheck, mainJoin } from './Main.utils';

function Main({STORE}) {
    return (
        <div className='container'>
            <header>
                <h1>General Overview</h1>
                <h3>SAFE CLI commands that can be used in a graphical manner</h3>
                <CardList title={''}>
                    <Card 
                        title={'Clean (using default directory):'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>rm -rf $HOME/.safe</code><br/>
                            <button onClick={() => mainClean(STORE)}>Execute Sequence</button>
                        </div>
                    </Card>
                    <Card 
                        title={'Clean and Install latest (using default directory):'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>curl -so- https://sn-api.s3.amazonaws.com/install.sh | bash</code><br/>
                            <code>safe node install</code><br/>
                            <code>safe node bin-version</code>
                            <br/>
                            <button onClick={() => mainInstallFull(STORE)}>Execute Sequence</button>
                        </div>
                    </Card>
                    <Card 
                        title={'Add, Switch and Check Test-Network:'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>safe networks add fleming-testnet https://sn-node.s3.eu-west-2.amazonaws.com/config/node_connection_info.config</code><br/>
                            <code>safe networks switch fleming-testnet</code><br/>
                            <code>safe networks check</code>
                            <br/>
                            <button onClick={() => mainAddSwitchCheck(STORE)}>Execute Sequence</button>
                        </div>
                    </Card>
                    <Card 
                        title={'Join network with Node (optional):'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>safe node killall</code><br/>
                            <code>safe node join</code>
                            <br/>
                            <button onClick={() => mainJoin(STORE)}>Execute Sequence</button>
                        </div>
                    </Card>
                    {/* <Card 
                        title={'Upload Custom File to the Network:'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>safe files put $from $to</code>
                        </div>
                    </Card>
                    <Card 
                        title={'Upload Custom Files/Folder to the Network:'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>safe files put --recursive $from $to</code>
                        </div>
                    </Card>
                    <Card 
                        title={'Inspect XOR-URL container:'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>safe dog $xor_url</code>
                        </div>
                    </Card>
                    <Card 
                        title={'View XOR-URL content (file/folder):'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>safe cat $xor_url</code>
                        </div>
                    </Card>
                    <Card 
                        title={'Download XOR-URL content (file/folder):'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>safe dog $xor_url --json</code><br/>
                            <code>safe cat $xor_url | safe_downloads/file.$media_type </code>
                        </div>
                    </Card>
                    <Card 
                        title={'Generate New SafeKey Preloaded with 1000 Test-coins:'}
                        subtitle={''}
                        showDefault={true}
                    >
                        <div className='textBg'>
                            <code>safe keys create --test-coins --preload 1000</code>
                        </div>
                    </Card> */}
                </CardList>
            </header>
        </div>
    )
}

export default Main
