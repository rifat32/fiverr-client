import React, { useEffect } from 'react'


const Header = () => {
    
  return (
   <header className="StyledBox-sc-13pk1d4-0 fDVPSJ">
  <div className="StyledBox-sc-13pk1d4-0 fFMHYs">
    <a aria-label="Cyberscope home page" tabIndex={0} title="Cyberscope" href="index.html" className="StyledBox-sc-13pk1d4-0 lgHfHv"><svg width={42} height={42} viewBox="0 0 254 254" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_830_8844" maskUnits="userSpaceOnUse" x={0} y={0} width={254} height={254}>
          <path d="M133.583 244.577C129.346 246.212 124.653 246.212 120.417 244.577C87.3613 231.887 58.9331 209.467 38.8873 180.28C18.8415 151.093 8.12125 116.511 8.1427 81.103V33.3773C8.13266 31.375 8.76735 29.4227 9.95287 27.809C11.1384 26.1954 12.8118 25.0062 14.7256 24.4173C87.9941 2.66103 166.006 2.66103 239.274 24.4173C241.188 25.0062 242.861 26.1954 244.047 27.809C245.232 29.4227 245.867 31.375 245.857 33.3773V81.103C245.878 116.511 235.158 151.093 215.112 180.28C195.067 209.467 166.638 231.887 133.583 244.577Z" fill="#18D6EA" stroke="#18D6EA" strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" />
        </mask>
        <g mask="url(#mask0_830_8844)">
          <path d="M-74 168V-57C83.6667 -113.333 373 -188.2 269 6.99999C165 202.2 -3 195.667 -74 168Z" fill="#24E2C5" />
          <path d="M-26.9927 190.984C152 221 339 79.0003 305 -72.9997C333.001 -53.2334 405.526 -15.9773 450.124 -20.2269C505.871 -25.539 446.764 102.646 463.119 116.155C476.203 126.963 481.472 256.045 482.47 319.235L-10.2975 366.19L-26.9927 190.984Z" fill="#24E2C5" />
          <path d="M19 30.5001C1.00009 37.1857 17.1456 120.627 19.0001 109.5C22.0002 91.5001 12.0906 55.2682 48.0001 35.0001C86.5002 21.0001 170.5 18.7917 159 14C141.077 6.53212 54 17.5001 19 30.5001Z" fill="white" />
        </g></svg></a>
    <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 hzCveV" />
    <a href="index.html" className="StyledAnchor-sc-1rp7lwl-0 iAtaPk"><span className="StyledText-sc-1sadyjn-0 jtLwNB">Cyber</span><span className="StyledText-sc-1sadyjn-0 cCLerk">scope</span></a>
  </div>
  <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 gjhxsu" />
  <div className="StyledBox-sc-13pk1d4-0 iSQrxd">
    <li tabIndex={0} role="none" className="StyledBox-sc-13pk1d4-0 gOgQWw">
      <a role="menuitem" data-ga="navigation::click::services" className="StyledAnchor-sc-1rp7lwl-0 PXwzl sc-3e0f79c2-0 sc-6755221c-0 jbsbJW jGmkcI" href="services.html"><div className="StyledBox-sc-13pk1d4-0 iRZPqd sc-8c989d00-0 gWgYHj">
          <span className="StyledText-sc-1sadyjn-0 kkAToY">Services</span><svg aria-label="FormDown" viewBox="0 0 24 24" className="StyledIcon-sc-ofa7kd-0 kvdnNA sc-6755221c-1 kOEXID">
            <path fill="none" stroke="#000" strokeWidth={2} d="m18 9-6 6-6-6" />
          </svg></div></a>
    </li>
    <li tabIndex={0} role="none" className="StyledBox-sc-13pk1d4-0 gOgQWw">
      <a role="menuitem" data-ga="navigation::click::products" className="StyledAnchor-sc-1rp7lwl-0 PXwzl sc-3e0f79c2-0 sc-6755221c-0 jbsbJW HCJNq" href="products.html"><div className="StyledBox-sc-13pk1d4-0 iRZPqd sc-8c989d00-0 gWgYHj">
          <span className="StyledText-sc-1sadyjn-0 kkAToY">Products</span><svg aria-label="FormDown" viewBox="0 0 24 24" className="StyledIcon-sc-ofa7kd-0 kvdnNA sc-6755221c-1 kOEXID">
            <path fill="none" stroke="#000" strokeWidth={2} d="m18 9-6 6-6-6" />
          </svg></div></a>
    </li>
    <a className="StyledAnchor-sc-1rp7lwl-0 PXwzl sc-3e0f79c2-0 jbsbJW" href="audits.html">Audit Reports</a><a className="StyledAnchor-sc-1rp7lwl-0 PXwzl sc-3e0f79c2-0 jbsbJW" href="index.html#kyc">KYC</a><a className="StyledAnchor-sc-1rp7lwl-0 PXwzl sc-3e0f79c2-0 jbsbJW" href="blog/topics/case-studies.html">Case Studies</a>
    <li tabIndex={0} role="none" className="StyledBox-sc-13pk1d4-0 gOgQWw">
      <a role="menuitem" data-ga="navigation::click::resources" className="StyledAnchor-sc-1rp7lwl-0 PXwzl sc-3e0f79c2-0 sc-6755221c-0 jbsbJW jGmkcI" href="blog.html"><div className="StyledBox-sc-13pk1d4-0 iRZPqd sc-8c989d00-0 gWgYHj">
          <span className="StyledText-sc-1sadyjn-0 kkAToY">Resources</span><svg aria-label="FormDown" viewBox="0 0 24 24" className="StyledIcon-sc-ofa7kd-0 kvdnNA sc-6755221c-1 kOEXID">
            <path fill="none" stroke="#000" strokeWidth={2} d="m18 9-6 6-6-6" />
          </svg></div></a>
    </li>
    <a data-ga="navigation::click::contactUs" href="products.html#contact" className="StyledButton-sc-323bzc-0 cFMpUR">Contact Us</a>
  </div>
</header>

  )
}

export default Header