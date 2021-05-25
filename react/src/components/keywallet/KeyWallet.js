import React, { useState } from 'react';
import {
    keysBalance, keysCreate, keysHelp, keysShow, keysTransfer, 
    walletBalance, walletCreate, walletHelp, walletInsert, walletTransfer
} from './KeyWallet.utils'
import Card from '../card/Card';

const KeyWallet = ({STORE}) => {
    const [keysShowURL, setKeysShowURL] = useState('')
    const [keysShowSK, setKeysShowSK] = useState(false)

    const [keysCreateTestCoins, setKeysCreateTestCoins] = useState(false)
    const [keysCreatePreload, setKeysCreatePreload] = useState('')
    const [keysCreatePayWith, setKeysCreatePayWith] = useState('')

    const [keysTransferFrom, setKeysTransferFrom] = useState('')
    const [keysTransferTo, setKeysTransferTo] = useState('')
    const [keysTransferAmount, setKeysTransferAmount] = useState('')

    const [walletBalanceTarget, setWalletBalanceTarget] = useState('')

    const [walletInsertTarget, setWalletInsertTarget] = useState('')
    const [walletInsertSK, setWalletInsertSK] = useState('')
    const [walletInsertName, setWalletInsertName] = useState('')

    const [walletCreateName, setWalletCreateName] = useState('')
    const [walletCreateTestCoins, setWalletCreateTestCoins] = useState(false)
    const [walletCreatePreload, setWalletCreatePreload] = useState('')
    const [walletCreatePayWith, setWalletCreatePayWith] = useState('')

    const [walletTransferFrom, setWalletTransferFrom] = useState('')
    const [walletTransferTo, setWalletTransferTo] = useState('')
    const [walletTransferAmount, setWalletTransferAmount] = useState('')

    return (
        <div className='container'>
        <header>
           <h1>Keys & Wallet</h1>
           <h3>Manage your Wallet & SafeKeys and create transactions</h3>
           <br/>
           <ul>
               <li>
                   <Card>
                        <p><b>KEYS BALANCE</b> - Query a SafeKey's current balance</p>
                        <button onClick={() => keysBalance(STORE)}>BALANCE</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>KEYS CREATE</b> - Create a new SafeKey</p>
                        <span><code>Use Testcoins</code> &ensp;
                            <input
                                type='checkbox'
                                name='keys-create-testcoins'
                                placeholder='Testcoins'
                                onClick={()=>setKeysCreateTestCoins(!keysCreateTestCoins)}
                            />
                        </span>
                        <input
                            type='text'
                            name='keys-create-preload'
                            placeholder='Preload Amount'
                            onChange={(e)=>setKeysCreatePreload(e.target.value)}
                        />
                        { keysCreateTestCoins ? '' : <input
                            type='text'
                            name='keys-create-paywith'
                            placeholder='Pay with SK - Testcoins Disabled'
                            onChange={(e)=>setKeysCreatePayWith(e.target.value)}
                        />}
                        <button onClick={() => keysCreate(STORE, keysCreateTestCoins, keysCreatePreload, keysCreatePayWith)}>CREATE</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>KEYS HELP</b> - Manage keys on the SAFE Network</p>
                        <button onClick={() => keysHelp(STORE)}>HELP</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>KEYS SHOW</b> - Show information about a SafeKey, by default it will show info about the one owned by CLI (if found)</p>
                        <span><code>Show SK</code> &ensp;
                            <input
                                type='checkbox'
                                name='keys-show-showsk'
                                placeholder='show sk'
                                onClick={()=>setKeysShowSK(!keysShowSK)}
                            />
                        </span>
                        <input 
                            type='text' 
                            name='keys-show-keyurl' 
                            placeholder='Keyurl (Optional)'
                            onChange={(e)=>setKeysShowURL(e.target.value)}
                        />
                        <button onClick={() => keysShow(STORE,keysShowURL, keysShowSK)}>SHOW</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>KEYS TRANSFER</b> - Transfer safecoins from one SafeKey to another, or to a Wallet</p>
                        <input 
                            type='text' 
                            name='keys-transfer-from' 
                            placeholder='From'
                            onChange={(e)=>setKeysTransferFrom(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='keys-transfer-to' 
                            placeholder='To'
                            onChange={(e)=>setKeysTransferTo(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='keys-transfer-amount' 
                            placeholder='Amount'
                            onChange={(e)=>setKeysTransferAmount(e.target.value)}
                        />
                        <button onClick={() => keysTransfer(STORE, keysTransferAmount, keysTransferFrom, keysTransferTo)}>TRANSFER</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>WALLET BALANCE</b> - Query a Wallet's total balance</p>
                        <input 
                            type='text' 
                            name='wallet-balance-target' 
                            placeholder='Target - The target Wallet to check the total balance'
                            onChange={(e)=>setWalletBalanceTarget(e.target.value)}
                        />
                        <button onClick={() => walletBalance(STORE, walletBalanceTarget)}>BALANCE</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>WALLET CREATE</b> - Create a new Wallet</p>
                        <input
                            type='text'
                            name='wallet-create-name'
                            placeholder='Name of New Wallet'
                            onChange={(e)=>setWalletCreateName(e.target.value)}
                        />
                        <span><code>Use Testcoins</code> &ensp;
                            <input
                                    type='checkbox'
                                    name='wallet-create-testcoins'
                                    placeholder='Testcoins'
                                    onClick={()=>setWalletCreateTestCoins(!walletCreateTestCoins)}
                                />
                        </span>
                        <br/>
                        <input
                            type='text'
                            name='wallet-create-preload'
                            placeholder='Preload Amount'
                            onChange={(e)=>setWalletCreatePreload(e.target.value)}
                        />
                        { walletCreateTestCoins ? '' : <input
                            type='text'
                            name='wallet-create-paywith'
                            placeholder='Pay with SK - Testcoins Disabled'
                            onChange={(e)=>setWalletCreatePayWith(e.target.value)}
                        />}
                        <button onClick={() => walletCreate(STORE, walletCreateName, walletCreateTestCoins, walletCreatePreload, walletCreatePayWith)}>CREATE</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>WALLET HELP</b> - Manage wallets on the SAFE Network</p>
                        <button onClick={() => walletHelp(STORE)}>HELP</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>WALLET INSERT</b> - Insert a spendable balance into a Wallet</p>
                        <input 
                            type='text' 
                            name='wallet-insert-target' 
                            placeholder='Target - The target Wallet to insert the spendable balance'
                            onChange={(e)=>setWalletInsertTarget(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='wallet-insert-sk' 
                            placeholder='SK - Pass the secret key needed to make the balance spendable'
                            onChange={(e)=>setWalletInsertSK(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='wallet-insert-name' 
                            placeholder='Name - The name to give this spendable balance'
                            onChange={(e)=>setWalletInsertName(e.target.value)}
                        />
                        <button onClick={() => walletInsert(STORE, walletInsertTarget, walletInsertSK, walletInsertName)}>INSERT</button>
                   </Card>
               </li>
               <br/>
               <li>
                   <Card>
                        <p><b>WALLET TRANSFER</b> - Transfer safecoins from one Wallet to another, or to a SafeKey</p>
                        <input 
                            type='text' 
                            name='wallet-transfer-from' 
                            placeholder='From - Source Wallet URL'
                            onChange={(e)=>setWalletTransferFrom(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='wallet-transfer-to' 
                            placeholder='To - The receiving Wallet/SafeKey URL or public key'
                            onChange={(e)=>setWalletTransferTo(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='wallet-transfer-amount' 
                            placeholder='Amount - Number of safecoins to transfer'
                            onChange={(e)=>setWalletTransferAmount(e.target.value)}
                        />
                        <button onClick={() => walletTransfer(
                        STORE, walletTransferAmount, 
                        walletTransferFrom, walletTransferTo)
                        }>TRANSFER</button>
                   </Card>
               </li>
               <br/>
           </ul>
       </header>
   </div>
    )
}

export default KeyWallet
