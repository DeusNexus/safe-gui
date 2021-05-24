import React from 'react';
import { postReq } from '../Functions'

// const auth = (setConsole, consoled) => {
//     postReq(setConsole, consoled,'/api/auth')
// }

const authAllow = (setConsole, consoled) => {
    const reqId = 0
    postReq(setConsole, consoled,`/api/auth/allow/${reqId}`)
}

const authApps = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/apps')
}

const authBinVersion = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/bin-version')
}

const authClear = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/clear')
}

const authCreate = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/create', '--test-coins', '--config default_credentials.json')
}

const authDeny = (setConsole, consoled) => {
    const reqId = 0
    postReq(setConsole, consoled,`/api/auth/deny/${reqId}`)
}

const authHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/help')
}

const authInstall = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/install')
}

const authLock = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/lock')
}

const authReqs = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/reqs')
}

const authRestart = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/restart')
}

const authRevoke = (setConsole, consoled) => {
    const appId = 0
    postReq(setConsole, consoled,`/api/auth/revoke/${appId}`)
}

const authStart = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/start')
}

const authStatus = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/status')
}

const authStop = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/stop')
}

const authSubscribe = (setConsole, consoled) => {
    const notifsEndpoint = ''
    postReq(setConsole, consoled,`/api/auth/subscribe/${notifsEndpoint}`)
}

const authUnlock = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/unlock')
}

const authUnsubscribe = (setConsole, consoled) => {
    const notifsEndpoint = ''
    postReq(setConsole, consoled,`/api/auth/unsubscribe/${notifsEndpoint}`)
}

const authUpdate = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/update')
}

//Sequences
const createAndLogin = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/restart')
    postReq(setConsole, consoled,'/api/auth/create')
    postReq(setConsole, consoled,'/api/auth/unlock')
    postReq(setConsole, consoled,'/api/auth/status')
}

const reauth = (setConsole, consoled) => {
    postReq(setConsole, consoled,'/api/auth/restart')
    postReq(setConsole, consoled,'/api/auth/unlock')
    postReq(setConsole, consoled,'/api/auth/status')
}

const Auth = ({ setConsole, consoled }) => {
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
                            <button onClick={() => auth(setConsole, consoled)}>AUTH</button>
                        </li> */}
                        <h3 style={{color: 'red'}}>Generic Commands</h3>
                        <li>
                            <p><b>AUTH ALLOW</b> - Send request to a remote Authenticator daemon to allow an authorisation request</p>
                            <input type='text' name='allow-req-id' placeholder='req-id'></input>
                            <button onClick={() => authAllow(setConsole, consoled)}>ALLOW</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH APPS</b> - Send request to a remote Authenticator daemon to retrieve the list of the authorised applications</p>
                            <button onClick={() => authApps(setConsole, consoled)}>APPS</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH BIN-VERSION</b> - Shows the version of the Authenticator binary</p>
                            <button onClick={() => authBinVersion(setConsole, consoled)}>BIN-VERSION</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH CLEAR</b> - Clear Safe CLI authorisation credentials from local file</p>
                            <button onClick={() => authClear(setConsole, consoled)}>CLEAR</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH CREATE</b> - Send request to a remote Authenticator daemon to create a new Safe</p>
                            <button onClick={() => authCreate(setConsole, consoled)}>CREATE</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH DENY</b> - Send request to a remote Authenticator daemon to deny an authorisation request</p>
                            <input type='text' name='deny-req-id' placeholder='req-id'></input>
                            <button onClick={() => authDeny(setConsole, consoled)}>DENY</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH HELP</b> - Authorise the SAFE CLI and interact with a remote Authenticator daemon</p>
                            <button onClick={() => authHelp(setConsole, consoled)}>HELP</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH INSTALL</b> - Install latest sn_authd released version in the system</p>
                            <button onClick={() => authInstall(setConsole, consoled)}>INSTALL</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH LOCK</b> - Send request to a remote Authenticator daemon to lock any currently unlocked Safe</p>
                            <button onClick={() => authLock(setConsole, consoled)}>LOCK</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH REQS</b> - Send request to a remote Authenticator daemon to retrieve the list of the pending authorisation requests</p>
                            <button onClick={() => authReqs(setConsole, consoled)}>REQS</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH RESTART</b> - Restarts the Authenticator daemon if it's running already</p>
                            <button onClick={() => authRestart(setConsole, consoled)}>RESTART</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH REVOKE</b> - Send request to a remote Authenticator daemon to revoke permissions from a previously authorised application</p>
                            <input type='text' name='revoke-app-id' placeholder='app-id'></input>
                            <button onClick={() => authRevoke(setConsole, consoled)}>REVOKE</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH START</b> - Starts the Authenticator daemon if it's not running already</p>
                            <button onClick={() => authStart(setConsole, consoled)}>START</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH STATUS</b> - Send request to a remote Authenticator daemon to obtain a status report</p>
                            <button onClick={() => authStatus(setConsole, consoled)}>STATUS</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH STOP</b> - Stops the Authenticator daemon if it's running</p>
                            <button onClick={() => authStop(setConsole, consoled)}>STOP</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH SUBSCRIBE</b> - Send request to a remote Authenticator daemon to subscribe an endpoint URL to receive authorisation requests
notifications</p>
                            <input type='text' name='subscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                            <button onClick={() => authSubscribe(setConsole, consoled)}>SUBSCRIBE</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH UNLOCK</b> - Send request to a remote Authenticator daemon to unlock a Safe</p>
                            <button onClick={() => authUnlock(setConsole, consoled)}>UNLOCK</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH UNSUBSCRIBE</b> - Send request to a remote Authenticator daemon to unsubscribe an endpoint URL from authorisation requests notifications</p>
                            <input type='text' name='unsubscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                            <button onClick={() => authUnsubscribe(setConsole, consoled)}>UNSUBSCRIBE</button>
                        </li>
                        <br/>
                        <li>
                            <p><b>AUTH UPDATE</b> - Update sn_authd binary to a new available released version</p>
                            <button onClick={() => authUpdate(setConsole, consoled)}>UPDATE</button>
                        </li>
                    </ul>
                    <br/>
                    <ul>
                        <h3 style={{color: 'red'}}>Command Sequences</h3>
                        <li>
                            <p>Create Default and Login:</p>
                            <button onClick={() => createAndLogin(setConsole, consoled)}>Initialize</button>
                        </li>
                        <br/>
                        <li>
                            <p>Re-authenticate with Default Credentials</p>
                            <button onClick={() => reauth(setConsole, consoled)}>Login</button>
                        </li>
                        <br/>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Auth
