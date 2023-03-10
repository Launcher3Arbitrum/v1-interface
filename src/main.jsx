import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

import { metamask } from './assets';
import { CustomButton } from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <ThirdwebProvider desiredChainId={ChainId.Arbitrum}>
        <Router>
            <StateContextProvider>
                <div className="donate"><center><p>๐ย Help us to develop more open-source projects by making a donation directly to : <strong><a href='https://etherscan.io/address/0xbff3ee7d3648ce6b7de82dea427c3a1629aaf671' target="_blank"><u>xtycoon.eth</u></a></strong> โจ</p></center></div>
                <App />
                <div className="social"><center><h4><strong><u><a href='https://arbiscan.io/address/0xce4ea67f35a8a98e22cff99b90beed56aadd01b7' target="_blank">Arbiscan</a></u></strong> | <strong><u><a href='https://launcher3.gitbook.io/docs/' target="_blank">Whitepaper</a></u></strong> | <strong><u><a href='https://twitter.com/launcher3fund' target="_blank">Twitter</a></u></strong> | <strong><u><a href='https://t.me/launcher3' target="_blank">Telegram</a></u></strong> | <strong><u><a href='https://github.com/Launcher3Arbitrum' target="_blank">Github</a></u></strong></h4></center>
                </div>
                <div className="powered"><center><p>Contribute & Raise funds easily for your #Web3 project on the best Crowdfunding Platform on #Arbitrum. ๐ Powered by <strong><u><a href='https://www.hlabz.cc/'>www.hlabz.cc</a></u></strong> ๐ด</p></center></div>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)
