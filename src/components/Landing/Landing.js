import React from 'react'
import './Landing.css'
import lightLogo from '../../images/lightLogo.png'

function landing() {
  return (
    <>
        <div className='landing-main'>
            <div class="logo-div">
                <img src={lightLogo} className="logo-main" alt=""/>
            </div>
            <div class="title">
                <p className='heading'>
                    <b>Legal and Regulatory</b><br/>
                    Serivces for Insurance<br/>
                    and Financial Service<br/>
                    Ecosystems.
                </p>
                <p class="subtext">
                    ElpeeCo is a law firm rendering bouquet of services to the insurance and other financial services ecosystem of India. 
                    Driven by the commitment to deliver tangible value to business and commercial enterprises, the firm is acknowledged for its focused approach to legal, compliance, regulatory and other governance environment from a risk management perspective.
                </p>
            </div>
        </div>
    </>
    
  )
}

export default landing