import React from 'react';
import { postReq } from '../../Functions'

// const auth = (STORE) => {
//     postReq(STORE,'/api/auth')
// }

const authAllow = (STORE) => {
    const reqId = 0
    postReq(STORE,`/api/auth/allow/${reqId}`)
}

const authApps = (STORE) => {
    postReq(STORE,'/api/auth/apps')
}

const authBinVersion = (STORE) => {
    postReq(STORE,'/api/auth/bin-version')
}

const authClear = (STORE) => {
    postReq(STORE,'/api/auth/clear')
}

const authCreate = (STORE) => {
    postReq(STORE,'/api/auth/create', '--test-coins', '--config default_credentials.json')
}

const authDeny = (STORE) => {
    const reqId = 0
    postReq(STORE,`/api/auth/deny/${reqId}`)
}

const authHelp = (STORE) => {
    postReq(STORE,'/api/auth/help')
}

const authInstall = (STORE) => {
    postReq(STORE,'/api/auth/install')
}

const authLock = (STORE) => {
    postReq(STORE,'/api/auth/lock')
}

const authReqs = (STORE) => {
    postReq(STORE,'/api/auth/reqs')
}

const authRestart = (STORE) => {
    postReq(STORE,'/api/auth/restart')
}

const authRevoke = (STORE) => {
    const appId = 0
    postReq(STORE,`/api/auth/revoke/${appId}`)
}

const authStart = (STORE) => {
    postReq(STORE,'/api/auth/start')
}

const authStatus = (STORE) => {
    postReq(STORE,'/api/auth/status')
}

const authStop = (STORE) => {
    postReq(STORE,'/api/auth/stop')
}

const authSubscribe = (STORE) => {
    const notifsEndpoint = ''
    postReq(STORE,`/api/auth/subscribe/${notifsEndpoint}`)
}

const authUnlock = (STORE) => {
    postReq(STORE,'/api/auth/unlock')
}

const authUnsubscribe = (STORE) => {
    const notifsEndpoint = ''
    postReq(STORE,`/api/auth/unsubscribe/${notifsEndpoint}`)
}

const authUpdate = (STORE) => {
    postReq(STORE,'/api/auth/update')
}

//Sequences
const createAndLogin = (STORE) => {
    postReq(STORE,'/api/auth/restart')
    postReq(STORE,'/api/auth/create')
    postReq(STORE,'/api/auth/unlock')
    postReq(STORE,'/api/auth/status')
}

const reauth = (STORE) => {
    postReq(STORE,'/api/auth/restart')
    postReq(STORE,'/api/auth/unlock')
    postReq(STORE,'/api/auth/status')
}

const Auth = ({ STORE }) => {
    return (
        <div className='container'>
             <header>
                <h1>Auth</h1>
                <h3>Interact with the authenticator daemon</h3>
                <br/>
                <div className='button-container'>
                    <ul>
                        {/* <br/>
                        <li>
                            <p>AUTH:</p>
                            <button onClick={() => auth(STORE)}>AUTH</button>
                        </li> */}
                        <h3 style={{color: 'red'}}>Generic Commands</h3>
                        <li>
                            <p><b>AUTH ALLOW</b> - Send request to a remote Authenticator daemon to allow an authorisation request</p>
                            <input type='text' name='allow-req-id' placeholder='req-id'></input>
                            <button onClick={() => authAllow(STORE)}>ALLOW</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH APPS</b> - Send request to a remote Authenticator daemon to retrieve the list of the authorised applications</p>
                            <button onClick={() => authApps(STORE)}>APPS</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH BIN-VERSION</b> - Shows the version of the Authenticator binary</p>
                            <button onClick={() => authBinVersion(STORE)}>BIN-VERSION</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH CLEAR</b> - Clear Safe CLI authorisation credentials from local file</p>
                            <button onClick={() => authClear(STORE)}>CLEAR</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH CREATE</b> - Send request to a remote Authenticator daemon to create a new Safe</p>
                            <button onClick={() => authCreate(STORE)}>CREATE</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH DENY</b> - Send request to a remote Authenticator daemon to deny an authorisation request</p>
                            <input type='text' name='deny-req-id' placeholder='req-id'></input>
                            <button onClick={() => authDeny(STORE)}>DENY</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH HELP</b> - Authorise the SAFE CLI and interact with a remote Authenticator daemon</p>
                            <button onClick={() => authHelp(STORE)}>HELP</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH INSTALL</b> - Install latest sn_authd released version in the system</p>
                            <button onClick={() => authInstall(STORE)}>INSTALL</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH LOCK</b> - Send request to a remote Authenticator daemon to lock any currently unlocked Safe</p>
                            <button onClick={() => authLock(STORE)}>LOCK</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH REQS</b> - Send request to a remote Authenticator daemon to retrieve the list of the pending authorisation requests</p>
                            <button onClick={() => authReqs(STORE)}>REQS</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH RESTART</b> - Restarts the Authenticator daemon if it's running already</p>
                            <button onClick={() => authRestart(STORE)}>RESTART</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH REVOKE</b> - Send request to a remote Authenticator daemon to revoke permissions from a previously authorised application</p>
                            <input type='text' name='revoke-app-id' placeholder='app-id'></input>
                            <button onClick={() => authRevoke(STORE)}>REVOKE</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH START</b> - Starts the Authenticator daemon if it's not running already</p>
                            <button onClick={() => authStart(STORE)}>START</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH STATUS</b> - Send request to a remote Authenticator daemon to obtain a status report</p>
                            <button onClick={() => authStatus(STORE)}>STATUS</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH STOP</b> - Stops the Authenticator daemon if it's running</p>
                            <button onClick={() => authStop(STORE)}>STOP</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH SUBSCRIBE</b> - Send request to a remote Authenticator daemon to subscribe an endpoint URL to receive authorisation requests
notifications</p>
                            <input type='text' name='subscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                            <button onClick={() => authSubscribe(STORE)}>SUBSCRIBE</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH UNLOCK</b> - Send request to a remote Authenticator daemon to unlock a Safe</p>
                            <button onClick={() => authUnlock(STORE)}>UNLOCK</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH UNSUBSCRIBE</b> - Send request to a remote Authenticator daemon to unsubscribe an endpoint URL from authorisation requests notifications</p>
                            <input type='text' name='unsubscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                            <button onClick={() => authUnsubscribe(STORE)}>UNSUBSCRIBE</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH UPDATE</b> - Update sn_authd binary to a new available released version</p>
                            <button onClick={() => authUpdate(STORE)}>UPDATE</button>
                        </li>
                    </ul>
                    <br/>
                    <ul>
                        <h3 style={{color: 'red'}}>Command Sequences</h3>
                        <li>
                            <p>Create Default and Login:</p>
                            <button onClick={() => createAndLogin(STORE)}>Initialize</button>
                        </li>
                        <br/>
                        <li>
                            <p>Re-authenticate with Default Credentials</p>
                            <button onClick={() => reauth(STORE)}>Login</button>
                        </li>
                        <br/>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Auth
