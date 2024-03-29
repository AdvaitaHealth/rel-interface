import './index.scss'
import { useEffect } from 'react'
import motokoImg from '../../static/img/motoko.svg'
import EthereumImg from '../../static/img/Ethereum_icon.png'
import ReversiImg from '../../static/img/Reversi.png'
import MagniImg from '../../static/img/Magni.png'
import ICTexasImg from '../../static/img/ICTexas.png'


export default function Download() {

  useEffect(() => {

  }, [])

  const downloadFile = (value) => {
    console.log(value)
    if (value == 'Reversi') {
      window.open('https://ivg37-qiaaa-aaaab-aaaga-cai.ic0.app/#!/play');
    } else if (value == 'Rise') {
      window.open('https://riseofthemagni.com/');
    } else if (value == 'Texas') {
      window.open('https://lm5fh-ayaaa-aaaah-aafua-cai.ic0.app/#/');
    } else if (value == 'Ethereum') {
      window.open('https://github.com/relationlabs/rel-contract');
    } else if (value == 'Motoko') {
      window.open('https://github.com/relationlabs/rel-contract-motoko');
    } else if (value == 'Edge' || value == 'Chrome' || value == 'Firefox' ) {
      window.open('https://github.com/relationlabs/rel-plugin/releases/download/v1.0.0/ic-contracts-browser-0.1.0.zip');
    }
  }
  return (
    <div className="DfinityPage">
      <div className="content">
        <div className="card Extension">
          <p className="cardName">Extension Download</p>
          <div className="list">
            <div className="item" onClick={downloadFile.bind(this,'Chrome')}>
              <img src="https://staticcdn2.maiziqianbao.net/static/img/extension/Chrome.png"></img>
              <span>Chrome browser</span>
            </div>
            <div className="item" onClick={downloadFile.bind(this,'Firefox')}>
              <img src="https://plugwallet.ooo/static/media/firefox.94f048fa.svg"></img>
              <span>Firefox browser</span>
            </div>
            <div className="item" onClick={downloadFile.bind(this,'Edge')}>
              <img src="https://staticcdn2.maiziqianbao.net/static/img/extension/Edge.png"></img>
              <span>Edge browser</span>
            </div>
          </div>
        </div>
        <div className="card API">
          <p className="cardName">Project Download</p>
          <div className="list">
            <div className="item" onClick={downloadFile.bind(this,'Ethereum')}>
              <img src={EthereumImg}></img>
              <span>Ethereum合约项目地址</span>
            </div>
            <div className="item" onClick={downloadFile.bind(this,'Motoko')}>
              <img src={motokoImg}></img>
              <span>Motoko合约项目地址</span>
            </div>
          </div>
        </div>
        <div className="card APP">
          <p className="cardName">Access Dapp </p>
          <div className="list">
            <div className="item" onClick={downloadFile.bind(this,'Reversi')}>
              <img src={ReversiImg}></img>
              <span>Reversi</span>
            </div>
            <div className="item" onClick={downloadFile.bind(this,'Texas')}>
              <img src={ICTexasImg}></img>
              <span>Texas Hold'em</span>
            </div>
            <div className="item" onClick={downloadFile.bind(this,'Rise')}>
              <img src={MagniImg}></img>
              <span>Rise of the Magni</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}