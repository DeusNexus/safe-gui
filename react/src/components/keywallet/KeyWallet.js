import React, { useState } from 'react';
import {
    keysBalance, keysCreate, keysHelp, keysShow, 
    walletBalance, walletHelp
} from './KeyWallet.utils'
import Card from '../card/Card';
import CardList from './../cardlist/CardList';

const KeyWallet = ({STORE}) => {
    const [keysShowURL, setKeysShowURL] = useState('')
    const [keysShowSK, setKeysShowSK] = useState(false)

    const [keysCreateTestCoins, setKeysCreateTestCoins] = useState(false)
    const [keysCreatePreload, setKeysCreatePreload] = useState('')
    const [keysCreatePayWith, setKeysCreatePayWith] = useState('')

    const [walletBalanceTarget, setWalletBalanceTarget] = useState('')

    // const [walletDepositTarget, setWalletDepositTarget] = useState('')
    // const [walletDepositSK, setWalletDepositSK] = useState('')
    // const [walletDepositName, setWalletDepositName] = useState('')

    // const [walletCreateName, setWalletCreateName] = useState('')
    // const [walletCreateTestCoins, setWalletCreateTestCoins] = useState(false)
    // const [walletCreatePreload, setWalletCreatePreload] = useState('')
    // const [walletCreatePayWith, setWalletCreatePayWith] = useState('')

    // const [walletReissueFrom, setWalletReissueFrom] = useState('')
    // const [walletReissueTo, setWalletReissueTo] = useState('')
    // const [walletReissueAmount, setWalletReissueAmount] = useState('')

    return (
        <div className='container'>
        <header>
           <h1>Keys & Wallet</h1>
           <h3>Manage your Wallet & SafeKeys and create transactions</h3>
           <br/>
           <CardList title={''}>
                <Card
                    title={'KEYS BALANCE'}
                    subtitle={`Query a SafeKey's current balance`}
                >
                    <button onClick={() => keysBalance(STORE)}>BALANCE</button>
                </Card>
                <Card
                    title={'KEYS CREATE'}
                    subtitle={'Create a new SafeKey'}
                >
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
                <Card
                    title={'KEYS HELP'}
                    subtitle={'Manage keys on the SAFE Network'}
                >
                    <button onClick={() => keysHelp(STORE)}>HELP</button>
                </Card>
                <Card
                    title={'KEYS SHOW'}
                    subtitle={'Show information about a SafeKey, by default it will show info about the one owned by CLI (if found)'}
                >
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
                {/* <Card
                    title={'KEYS DEPOSIT'}
                    subtitle={'Deposit a spendable DBC in a wallet. If the DBC is not bearer, we will try to deposit using the secret key configured for use with safe. If you wish to use a different key, use the --secret-key argument'}
                >
                    <input 
                        type='text' 
                        name='keys-deposit-from' 
                        placeholder='From'
                        onChange={(e)=>setKeysDepositFrom(e.target.value)}
                    />
                    <input 
                        type='text' 
                        name='keys-deposit-to' 
                        placeholder='To'
                        onChange={(e)=>setKeysDepositTo(e.target.value)}
                    />
                    <input 
                        type='text' 
                        name='keys-deposit-amount' 
                        placeholder='Amount'
                        onChange={(e)=>setKeysDepositAmount(e.target.value)}
                    />
                    <button onClick={() => keysDeposit(STORE, keysDepositAmount, keysDepositFrom, keysDepositTo)}>DEPOSIT</button>
                </Card> */}
                <Card
                    title={'WALLET BALANCE'}
                    subtitle={`Query a Wallet's total balance`}
                >
                    <input 
                        type='text' 
                        name='wallet-balance-target' 
                        placeholder='Target - The target Wallet to check the total balance'
                        onChange={(e)=>setWalletBalanceTarget(e.target.value)}
                    />
                    <button onClick={() => walletBalance(STORE, walletBalanceTarget)}>BALANCE</button>
                </Card>
                {/* <Card
                    title={'WALLET REISSUE'}
                    subtitle={'Create a new Wallet'}
                >
                    <input
                        type='text'
                        name='wallet-reissue-name'
                        placeholder='Name of New Wallet'
                        onChange={(e)=>setReissueCreateName(e.target.value)}
                    />
                    <span><code>Use Testcoins</code> &ensp;
                        <input
                                type='checkbox'
                                name='wallet-reissue-testcoins'
                                placeholder='Testcoins'
                                onClick={()=>setWalletReissueTestCoins(!walletReissueTestCoins)}
                            />
                    </span>
                    <br/>
                    <input
                        type='text'
                        name='wallet-reissue-preload'
                        placeholder='Preload Amount'
                        onChange={(e)=>setWalletReissuePreload(e.target.value)}
                    />
                    { walletReissueTestCoins ? '' : <input
                        type='text'
                        name='wallet-reissue-paywith'
                        placeholder='Pay with SK - Testcoins Disabled'
                        onChange={(e)=>setWalletReissuePayWith(e.target.value)}
                    />}
                    <button onClick={() => walletReissue(STORE, walletReissueName, walletReissueTestCoins, walletReissuePreload, walletReissuePayWith)}>REISSUE</button>
                </Card> */}
                <Card
                    title={'WALLET HELP'}
                    subtitle={'Manage wallets on the SAFE Network'}
                >
                    <button onClick={() => walletHelp(STORE)}>HELP</button>
                </Card>
                {/* <Card
                    title={'WALLET INSERT'}
                    subtitle={'Insert a spendable balance into a Wallet'}
                >
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
                </Card> */}
                {/* <Card
                    title={'WALLET TRANSFER'}
                    subtitle={'Transfer safecoins from one Wallet to another, or to a SafeKey'}
                >
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
                </Card> */}
           </CardList>
       </header>
   </div>
    )
}

export default KeyWallet
