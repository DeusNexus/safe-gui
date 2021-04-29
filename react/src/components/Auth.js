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
                            <p>AUTH ALLOW:</p>
                            <input type='text' name='allow-req-id' placeholder='req-id'></input>
                            <button onClick={() => authAllow(setConsole, consoled)}>ALLOW</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH APPS:</p>
                            <button onClick={() => authApps(setConsole, consoled)}>APPS</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH BIN-VERSION:</p>
                            <button onClick={() => authBinVersion(setConsole, consoled)}>BIN-VERSION</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH CLEAR:</p>
                            <button onClick={() => authClear(setConsole, consoled)}>CLEAR</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH CREATE:</p>
                            <button onClick={() => authCreate(setConsole, consoled)}>CREATE</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH DENY:</p>
                            <input type='text' name='deny-req-id' placeholder='req-id'></input>
                            <button onClick={() => authDeny(setConsole, consoled)}>DENY</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH HELP:</p>
                            <button onClick={() => authHelp(setConsole, consoled)}>HELP</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH INSTALL:</p>
                            <button onClick={() => authInstall(setConsole, consoled)}>INSTALL</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH LOCK:</p>
                            <button onClick={() => authLock(setConsole, consoled)}>LOCK</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH REQS:</p>
                            <button onClick={() => authReqs(setConsole, consoled)}>REQS</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH RESTART:</p>
                            <button onClick={() => authRestart(setConsole, consoled)}>RESTART</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH REVOKE:</p>
                            <input type='text' name='revoke-app-id' placeholder='app-id'></input>
                            <button onClick={() => authRevoke(setConsole, consoled)}>REVOKE</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH START:</p>
                            <button onClick={() => authStart(setConsole, consoled)}>START</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH STATUS:</p>
                            <button onClick={() => authStatus(setConsole, consoled)}>STATUS</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH STOP:</p>
                            <button onClick={() => authStop(setConsole, consoled)}>STOP</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH SUBSCRIBE:</p>
                            <input type='text' name='subscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                            <button onClick={() => authSubscribe(setConsole, consoled)}>SUBSCRIBE</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH UNLOCK:</p>
                            <button onClick={() => authUnlock(setConsole, consoled)}>UNLOCK</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH UNSUBSCRIBE:</p>
                            <input type='text' name='unsubscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                            <button onClick={() => authUnsubscribe(setConsole, consoled)}>UNSUBSCRIBE</button>
                        </li>
                        <br/>
                        <li>
                            <p>AUTH UPDATE:</p>
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
