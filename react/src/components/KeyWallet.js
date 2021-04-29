import React from 'react';
import { postReq } from '../Functions'

const keysBalance = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/keys/balance`)
}

const keysCreate = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/keys/create`, '--test-coins', '--preload 1000')
}

const keysHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/keys/help`)
}

const keysShow = (setConsole, consoled) => {
    const keyUrl = ''
    postReq(setConsole, consoled,`/api/keys/show/${keyUrl}`)
}

const keysTransfer = (setConsole, consoled) => {
    const amount = 0
    postReq(setConsole, consoled,`/api/keys/transfer/${amount}`)
}

const walletBalance = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/wallet/balance`)
}

const walletCreate = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/wallet/create`,'--test-coins','--preload 5000')
}

const walletHelp = (setConsole, consoled) => {
    postReq(setConsole, consoled,`/api/wallet/help`)
}

const walletInsert = (setConsole, consoled) => {
    const target = ''
    postReq(setConsole, consoled,`/api/wallet/insert/${target}`)
}

const walletTransfer = (setConsole, consoled) => {
    const amount = 0
    postReq(setConsole, consoled,`/api/wallet/transfer/${amount}`)
}

const KeyWallet = ({setConsole, consoled}) => {
    return (
        <div className='container'>
        <header>
           <h1>Keys & Wallet</h1>
           <h3>Manage your Wallet & SafeKeys and create transactions</h3>
           <br/>
           <ul>
               <li>
                   <b>KEYS BALANCE</b><br/>
                   <button onClick={() => keysBalance(setConsole, consoled)}>BALANCE</button>
               </li>
               <br/>
               <li>
                   <b>KEYS CREATE</b><br/>
                   <button onClick={() => keysCreate(setConsole, consoled)}>CREATE</button>
               </li>
               <br/>
               <li>
                   <b>KEYS HELP</b><br/>
                   <button onClick={() => keysHelp(setConsole, consoled)}>HELP</button>
               </li>
               <br/>
               <li>
                   <b>KEYS SHOW</b><br/>
                   <input type='text' name='keys-show-keyurl' placeholder='KeyUrl'></input>
                   <button onClick={() => keysShow(setConsole, consoled)}>SHOW</button>
               </li>
               <br/>
               <li>
                   <b>KEYS TRANSFER</b><br/>
                   <input type='text' name='keys-transfer-amount' placeholder='Amount'></input>
                   <button onClick={() => keysTransfer(setConsole, consoled)}>TRANSFER</button>
               </li>
               <br/>
               <li>
                   <b>WALLET BALANCE</b><br/>
                   <button onClick={() => walletBalance(setConsole, consoled)}>BALANCE</button>
               </li>
               <br/>
               <li>
                   <b>WALLET CREATE</b><br/>
                   <button onClick={() => walletCreate(setConsole, consoled)}>CREATE</button>
               </li>
               <br/>
               <li>
                   <b>WALLET HELP</b><br/>
                   <button onClick={() => walletHelp(setConsole, consoled)}>HELP</button>
               </li>
               <br/>
               <li>
                   <b>WALLET INSERT</b><br/>
                   <input type='text' name='wallet-insert-target' placeholder='Target'></input>
                   <button onClick={() => walletInsert(setConsole, consoled)}>INSERT</button>
               </li>
               <br/>
               <li>
                   <b>WALLET TRANSFER</b><br/>
                   <input type='text' name='wallet-transfer-amount' placeholder='Amount'></input>
                   <button onClick={() => walletTransfer(setConsole, consoled)}>TRANSFER</button>
               </li>
               <br/>
           </ul>
       </header>
   </div>
    )
}

export default KeyWallet
