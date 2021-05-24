import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import { FaAlignRight } from 'react-icons/fa';
import './App.css';
import Auth from './components/Auth';
import Configure from './components/Configure';
import Main from './components/Main';
import Node from './components/Node';
import Files from './components/Files';
import View from './components/View';
import KeyWallet from './components/KeyWallet'

export default function App() {

  const [style, setStyle] = useState('')
  const [consoled, setConsole] = useState('WELCOME TO THE CONSOLE!')
  const hideMenu = () => {
    if(style === '') {
      console.log('Menu hidden')
      setStyle(' hidden')
    } else {
      console.log('Menu visible')
      setStyle('')
    }
  }

  return (
    <>
      <nav>
        <span className='navigation-title'>
          <span>SafeNetwork</span> CLI2GUI
        </span>
        <ul className={'navigation-menu'+style}>
          <li>
            <a><Link to='/'>Main</Link></a>
          </li>
          <li>
            <Link to='/configure'>Configure</Link> 
          </li>
          <li>
            <Link to='/auth'>Auth</Link> 
          </li>
          <li>
            <Link to='/node'>Node</Link> 
          </li>
          <li>
            <Link to='/view'>View</Link> 
          </li>
          <li>
            <Link to='/files'>Files</Link> 
          </li>
          <li>
            <Link to='/keys-wallet'>Keys & Wallet</Link> 
          </li>
        </ul>
        <button onClick={hideMenu}>
            <FaAlignRight/>
        </button>
      </nav>
      
      <div className='main'>
        <div className='main-left'>
            { /* Route components are rendered if the path prop matches the current URL */}
            <Route exact path="/">
              <Main/>
            </Route>
            <Route path="/configure">
              <Configure setConsole={setConsole} consoled={consoled}/>
            </Route>
            <Route path="/auth">
              <Auth setConsole={setConsole} consoled={consoled}/>
            </Route>
            <Route path="/node">
              <Node setConsole={setConsole} consoled={consoled}/>
            </Route>
            <Route path="/view">
              <View setConsole={setConsole} consoled={consoled}/>
            </Route>
            <Route path="/files">
              <Files setConsole={setConsole} consoled={consoled}/>
            </Route>
            <Route path="/keys-wallet">
              <KeyWallet setConsole={setConsole} consoled={consoled}/>
            </Route>
        </div>
        <div className='main-right'>
            { /* Contains the terminal output */}
            <div className='console-top'>
              <button onClick={() => setConsole('')}>Clear Console</button>
              <h2><code>Console Output</code></h2>
            </div>
            <div className='consoleBg'>
              <textarea readOnly={true} value={consoled}>
              </textarea>
            </div>
        </div>
      </div>
    </>
  )
}