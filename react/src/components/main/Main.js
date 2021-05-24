import React from 'react'

function Main() {
    return (
        <div className='container'>
            <header>
                <h1>General Overview</h1>
                <h3>SAFE CLI commands that can be used in a graphical manner</h3>
                <ul>
                    <br/>
                    <li>
                        <b>Clean and Install latest (using default directory):</b><br/>
                        <div className='textBg'>
                            <code>rm -rf $HOME/.safe</code><br/>
                            <code>curl -so- https://sn-api.s3.amazonaws.com/install.sh | bash</code><br/>
                            <code>safe auth install</code><br/>
                            <code>safe node install</code><br/>
                            <code>safe auth bin-version</code><br/>
                            <code>safe node bin-version</code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>Add, Switch and Check Test-Network:</b><br/>
                        <div className='textBg'>
                            <code>safe networks add fleming-testnet https://sn-node.s3.eu-west-2.amazonaws.com/config/node_connection_info.config</code><br/>
                            <code>safe networks switch fleming-testnet</code><br/>
                            <code>safe networks check</code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>Create Default and Login:</b><br/>
                        <div className='textBg'>
                            <code>safe authd restart</code><br/>
                            <code>safe authd create --test-coins --config default_credentials.json</code><br/>
                            <code>safe authd unlock --self-auth --config default_credentials.json</code><br/>
                            <code>safe authd status</code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>Join network with Node (optional):</b><br/>
                        <div className='textBg'>
                            <code>safe node killall</code><br/>
                            <code>safe node join</code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>Upload Custom File to the Network:</b><br/>
                        <div className='textBg'>
                            <code>safe files put $from $to</code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>Upload Custom Files/Folder to the Network:</b><br/>
                        <div className='textBg'>
                            <code>safe files put --recursive $from $to</code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>Inspect XOR-URL container:</b><br/>
                        <div className='textBg'>
                            <code>safe dog $xor_url</code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>View XOR-URL content (file/folder):</b><br/>
                        <div className='textBg'>
                            <code>safe cat $xor_url</code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>Download XOR-URL content (file/folder):</b><br/>
                        <div className='textBg'>
                            <code>safe dog $xor_url --json</code><br/>
                            <code>safe cat $xor_url | safe_downloads/file.$media_type </code>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <b>Generate New SafeKey Preloaded with 1000 Test-coins:</b><br/>
                        <div className='textBg'>
                            <code>safe keys create --test-coins --preload 1000</code>
                        </div>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Main
