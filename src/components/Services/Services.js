import React, {useState} from 'react'
import './Services.css'
import Legal from './cards/Legal'
import Compliance from './cards/Compliance';
import Litigation from './cards/Litigation';
import Investigation from './cards/Investigation';
import Brochure from './../../files/Brochure.pdf'
import { saveAs } from 'file-saver';


function Services() {

  const saveFile = () => {
    saveAs(
      Brochure,
      "Brochure"
    );
  };

  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const handleClick1 = () => {setClick1(true);setClick2(false);setClick3(false);setClick4(false);}
  const handleClick2 = () => {setClick1(false);setClick2(true);setClick3(false);setClick4(false);}
  const handleClick3 = () => {setClick1(false);setClick2(false);setClick3(true);setClick4(false);}
  const handleClick4 = () => {setClick1(false);setClick2(false);setClick3(false);setClick4(true);}

  return (
    <div className='service-parent'>
        
        <div class="head">
            <div class="line"></div>
            <p>Services Offered</p>
            <div class="line"></div>
        </div>
        <div class="service-card">
            <div class="card-nav">
              <p className={click1 ? 'card-element-active' : 'card-element'} onClick={handleClick1}>Corporate Legal<br/>Solutions</p>
              <p className={click2 ? 'card-element-active' : 'card-element'} onClick={handleClick2}>Compliance &<br/>Regulatory Advisory</p>
              <p className={click3 ? 'card-element-active' : 'card-element'} onClick={handleClick3}>Litigation<br/>Management</p>
              <p className={click4 ? 'card-element-active' : 'card-element'} onClick={handleClick4}>Investigation &<br/>Forensic</p>
            </div>
            
            <div class="card-info">
              {click1 ? <Legal/> : click2 ? <Compliance/> : click3 ? <Litigation/> : click4 ? <Investigation/> : <Legal/>}
            </div>
            <div class="card-button" onClick={saveFile}>
              Download Brochure
            </div>
        </div>
    </div>
  )
}

export default Services