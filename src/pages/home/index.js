import './index.scss'
import useWinSize from '../../hooks/useWinSize.js'
import logoWhiteImg from '../../static/img/logo-white.png'
import logoBlackImg from '../../static/img/logo-black.png'

export default function Home() {
  const size = useWinSize();

  // Banner组件
  const SectionA = () => {
    return <div className="full-page" style={{height: size.height}}>
      <div className="SectionA">
        <div className="mainLogoAlt">
          {/* <div className="mainLogo">
            <div className="logo1"></div>
            <div className="logo2"></div>
          </div> */}
          <img src={logoWhiteImg} className="logoBlock"></img>
        </div>
        <div className="mainTitle">
          Relationship management tools
        </div>
        <div className="mainDes">
          Ic-contacts will connect users' identities in the three fields of distributed cloud, blockchain and distributed storage, and use this as the starting point for the construction of social network.
        </div>
      </div>
    </div>
  }

  // 介绍组件
  const SectionB = () => {
    return <div className="full-page" style={{height: size.height}}>
      <div className="SectionB description">
        <div className="text">
          Smart contracts ensure that the sovereignty of personal identity and social relations belongs to the individual
        </div>
      </div>
    </div>
  }

  return (
    <div className="fullPage-wrapper">
      <SectionA/>
      <SectionB/>
    </div>
  )
}