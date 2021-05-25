import React from 'react';
import {
    authAllow, authApps, authBinVersion, authClear, authCreate, authDeny, authHelp, authInstall, authLock, authReqs,
    authRestart, authRevoke, authStart, authStatus, authStop, authSubscribe, authUnlock, authUnsubscribe, authUpdate,
    createAndLogin, reauth
} from './Auth.utils';
import Card from './../card/Card';

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
                            <Card>
                                <p><b>AUTH ALLOW</b> - Send request to a remote Authenticator daemon to allow an authorisation request</p>
                                <input type='text' name='allow-req-id' placeholder='req-id'></input>
                                <button onClick={() => authAllow(STORE)}>ALLOW</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH APPS</b> - Send request to a remote Authenticator daemon to retrieve the list of the authorised applications</p>
                                <button onClick={() => authApps(STORE)}>APPS</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH BIN-VERSION</b> - Shows the version of the Authenticator binary</p>
                                <button onClick={() => authBinVersion(STORE)}>BIN-VERSION</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH CLEAR</b> - Clear Safe CLI authorisation credentials from local file</p>
                                <button onClick={() => authClear(STORE)}>CLEAR</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH CREATE</b> - Send request to a remote Authenticator daemon to create a new Safe</p>
                                <button onClick={() => authCreate(STORE)}>CREATE</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH DENY</b> - Send request to a remote Authenticator daemon to deny an authorisation request</p>
                                <input type='text' name='deny-req-id' placeholder='req-id'></input>
                                <button onClick={() => authDeny(STORE)}>DENY</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH HELP</b> - Authorise the SAFE CLI and interact with a remote Authenticator daemon</p>
                                <button onClick={() => authHelp(STORE)}>HELP</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH INSTALL</b> - Install latest sn_authd released version in the system</p>
                                <button onClick={() => authInstall(STORE)}>INSTALL</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH LOCK</b> - Send request to a remote Authenticator daemon to lock any currently unlocked Safe</p>
                                <button onClick={() => authLock(STORE)}>LOCK</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH REQS</b> - Send request to a remote Authenticator daemon to retrieve the list of the pending authorisation requests</p>
                                <button onClick={() => authReqs(STORE)}>REQS</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH RESTART</b> - Restarts the Authenticator daemon if it's running already</p>
                                <button onClick={() => authRestart(STORE)}>RESTART</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH REVOKE</b> - Send request to a remote Authenticator daemon to revoke permissions from a previously authorised application</p>
                                <input type='text' name='revoke-app-id' placeholder='app-id'></input>
                                <button onClick={() => authRevoke(STORE)}>REVOKE</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH START</b> - Starts the Authenticator daemon if it's not running already</p>
                                <button onClick={() => authStart(STORE)}>START</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH STATUS</b> - Send request to a remote Authenticator daemon to obtain a status report</p>
                                <button onClick={() => authStatus(STORE)}>STATUS</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH STOP</b> - Stops the Authenticator daemon if it's running</p>
                                <button onClick={() => authStop(STORE)}>STOP</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH SUBSCRIBE</b> - Send request to a remote Authenticator daemon to subscribe an endpoint URL to receive authorisation requests notifications</p>
                                <input type='text' name='subscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                                <button onClick={() => authSubscribe(STORE)}>SUBSCRIBE</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH UNLOCK</b> - Send request to a remote Authenticator daemon to unlock a Safe</p>
                                <button onClick={() => authUnlock(STORE)}>UNLOCK</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH UNSUBSCRIBE</b> - Send request to a remote Authenticator daemon to unsubscribe an endpoint URL from authorisation requests notifications</p>
                                <input type='text' name='unsubscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                                <button onClick={() => authUnsubscribe(STORE)}>UNSUBSCRIBE</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p><b>AUTH UPDATE</b> - Update sn_authd binary to a new available released version</p>
                                <button onClick={() => authUpdate(STORE)}>UPDATE</button>
                            </Card>
                        </li>
                    </ul>
                    <br/>
                    <ul>
                        <h3 style={{color: 'red'}}>Command Sequences</h3>
                        <li>
                            <Card>
                                <p>Create Default and Login:</p>
                                <button onClick={() => createAndLogin(STORE)}>Initialize</button>
                            </Card>
                        </li>
                        <br/>
                        <li>
                            <Card>
                                <p>Re-authenticate with Default Credentials</p>
                                <button onClick={() => reauth(STORE)}>Login</button>
                            </Card>
                        </li>
                        <br/>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Auth
