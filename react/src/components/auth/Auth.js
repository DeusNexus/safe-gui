import React from 'react';
import {
    authAllow, authApps, authBinVersion, authClear, authCreate, authDeny, authHelp, authInstall, authLock, authReqs,
    authRestart, authRevoke, authStart, authStatus, authStop, authSubscribe, authUnlock, authUnsubscribe, authUpdate,
    createAndLogin, reauth
} from './Auth.utils';
import Card from './../card/Card';
import CardList from './../cardlist/CardList';

const Auth = ({ STORE }) => {
    return (
        <div className='container'>
             <header>
                <h1>Auth</h1>
                <h3>Interact with the authenticator daemon</h3>
                <br/>
                <div className='button-container'>
                    <CardList className="cardlist" title={<h3 style={{color: 'red'}}>Generic Commands</h3>}>
                        <Card
                            title={'AUTH ALLOW'}
                            subtitle={'Send request to a remote Authenticator daemon to allow an authorisation request'}
                        >
                            <input type='text' name='allow-req-id' placeholder='req-id'></input>
                            <button onClick={() => authAllow(STORE)}>ALLOW</button>
                        </Card>
                        <Card
                            title={'AUTH APPS'}
                            subtitle={'Send request to a remote Authenticator daemon to retrieve the list of the authorised application'}
                        >
                            <button onClick={() => authApps(STORE)}>APPS</button>
                        </Card>
                        <Card
                            title={'AUTH BIN-VERSION'}
                            subtitle={'Shows the version of the Authenticator binary'}
                        >
                            <button onClick={() => authBinVersion(STORE)}>BIN-VERSION</button>
                        </Card>
                        <Card
                            title={'AUTH CLEAR'}
                            subtitle={'Clear Safe CLI authorisation credentials from local file'}
                        >
                            <button onClick={() => authClear(STORE)}>CLEAR</button>
                        </Card>
                        <Card
                            title={'AUTH CREATE'}
                            subtitle={'Send request to a remote Authenticator daemon to create a new Safe'}
                        >
                            <button onClick={() => authCreate(STORE)}>CREATE</button>
                        </Card>
                        <Card
                            title={'AUTH DENY'}
                            subtitle={'Send request to a remote Authenticator daemon to deny an authorisation request'}
                        >
                            <input type='text' name='deny-req-id' placeholder='req-id'></input>
                            <button onClick={() => authDeny(STORE)}>DENY</button>
                        </Card>
                        <Card
                            title={'AUTH HELP'}
                            subtitle={'Authorise the SAFE CLI and interact with a remote Authenticator daemon'}
                        >
                            <button onClick={() => authHelp(STORE)}>HELP</button>
                        </Card>
                        <Card
                            title={'AUTH INSTALL'}
                            subtitle={'Install latest sn_authd released version in the system'}
                        >
                            <button onClick={() => authInstall(STORE)}>INSTALL</button>
                        </Card>
                        <Card
                            title={'AUTH LOCK'}
                            subtitle={'Send request to a remote Authenticator daemon to lock any currently unlocked Safe'}
                        >
                            <button onClick={() => authLock(STORE)}>LOCK</button>
                        </Card>
                        <Card
                            title={'AUTH REQS'}
                            subtitle={'Send request to a remote Authenticator daemon to retrieve the list of the pending authorisation requests'}
                        >
                            <button onClick={() => authReqs(STORE)}>REQS</button>
                        </Card>
                        <Card
                            title={'AUTH RESTART'}
                            subtitle={`Restarts the Authenticator daemon if it's running already`}
                        >
                            <button onClick={() => authRestart(STORE)}>RESTART</button>
                        </Card>
                        <Card
                            title={'AUTH REVOKE'}
                            subtitle={'Send request to a remote Authenticator daemon to revoke permissions from a previously authorised application'}
                        >
                            <input type='text' name='revoke-app-id' placeholder='app-id'></input>
                            <button onClick={() => authRevoke(STORE)}>REVOKE</button>
                        </Card>
                        <Card
                            title={'AUTH START'}
                            subtitle={`Starts the Authenticator daemon if it's not running already`}
                        >
                            <button onClick={() => authStart(STORE)}>START</button>
                        </Card>
                        <Card
                            title={'AUTH STATUS'}
                            subtitle={'Send request to a remote Authenticator daemon to obtain a status report'}
                        >
                            <button onClick={() => authStatus(STORE)}>STATUS</button>
                        </Card>
                        <Card
                            title={'AUTH STOP'}
                            subtitle={`Stops the Authenticator daemon if it's running`}
                        >
                            <button onClick={() => authStop(STORE)}>STOP</button>
                        </Card>
                        <Card
                            title={'AUTH SUBSCRIBE'}
                            subtitle={'Send request to a remote Authenticator daemon to subscribe an endpoint URL to receive authorisation requests notifications'}
                        >
                            <input type='text' name='subscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                            <button onClick={() => authSubscribe(STORE)}>SUBSCRIBE</button>
                        </Card>
                        <Card
                            title={'AUTH UNLOCK'}
                            subtitle={'Send request to a remote Authenticator daemon to unlock a Safe'}
                        >
                            <button onClick={() => authUnlock(STORE)}>UNLOCK</button>
                        </Card>
                        <Card
                            title={'AUTH UNSUBSCRIBE'}
                            subtitle={'Send request to a remote Authenticator daemon to unsubscribe an endpoint URL from authorisation requests notifications'}
                        >
                            <input type='text' name='unsubscribe-notifs-endpoint' placeholder='notifs-endpoint'></input>
                            <button onClick={() => authUnsubscribe(STORE)}>UNSUBSCRIBE</button>
                        </Card>
                        <Card
                            title={'AUTH UPDATE'}
                            subtitle={'Update sn_authd binary to a new available released version'}
                        >
                            <button onClick={() => authUpdate(STORE)}>UPDATE</button>
                        </Card>
                    </CardList>
                    <CardList className="cardlist" title={<h3 style={{color: 'red'}}>Command Sequences</h3>}>
                        <Card
                            title={'Create Default and Login'}
                            subtitle={''}
                        >
                            <button onClick={() => createAndLogin(STORE)}>Initialize</button>
                        </Card>
                        <Card
                            title={'Re-authenticate with Default Credentials'}
                            subtitle={''}
                        >
                            <button onClick={() => reauth(STORE)}>Login</button>
                        </Card>
                    </CardList>
                </div>
            </header>
        </div>
    )
}

export default Auth
