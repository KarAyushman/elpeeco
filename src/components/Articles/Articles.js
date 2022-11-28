import React from 'react'
import './Articles.css'
import {motion} from 'framer-motion';


function Articles() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <div class="media-parent">
      <div class="media-head">
        <div class="line"></div>
        <p>Media</p>
        <div class="line"></div>
      </div>
      <div class="media-cards">
        <a href="https://timesofindia.indiatimes.com/business/india-business/insurance-fdi-a-trickle-1-5-yrs-after-cap-hiked/articleshow/94138569.cms" class="media-card">
          <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11IzsE.img?h=1080&w=1920&m=6&q=60&o=f&l=f" alt="" className="card-image"/>
          <div class="card-text">
            <p class="article-head">Insurance FDI a trickle 1.5 years after cap hiked.</p>
            <p class="article-date">Sep 12, 2022, 08:40 IST</p>
            <p class="article-des">According to a study on capital, amalgamation & transfer of insurance business prepared by <b>ElpeeCo</b>, a consultancy firm that advises firms on regulatory issues, Irdai’s rules for promoters are the most stringent among all regulators. “The Irdai prescriptions mandate eternal promoter holding 50% of the equity capital of a listed or a PE-promoted insurer.” <br/></p>
          </div>
        </a>
        <a href="https://www.bqprime.com/business/irdai-mulls-to-privatise-insurance-information-bureau" class="media-card">
          <img src="https://gumlet.assettype.com/bloombergquint%2F2022-06%2F493eb4bb-7e0c-47a8-8960-799d8b224590%2Fistockphoto_1295819436_170667a.jpg?rect=0%2C34%2C508%2C286&auto=format%2Ccompress&fmt=webp&dpr=1.0&q=70&w=1800" alt="" className="card-image"/>
          <div class="card-text">
            <p class="article-head">IRDAI Mulls To Privatise Insurance Information Bureau</p>
            <p class="article-date">Jun 24, 2022, 15:07 IST</p>
            <p class="article-des">Lokanath Kar, founder ElpeeCo and former chief legal and principal compliance officer with ICICI Lombard General Insurance Co., told BQ Prime that IIB has been collecting a lot of data since its inception in 2012. "This data could find meaningful applications in the insurance industry as well as be useful to people outside the insurance sector."<br/>Currently, there is limited usage of data since the IIB has been constituted in the form of a society, he said...</p>
          </div>
        </a>
        
      </div>
    </div>
    </motion.div>
    
  )
}

export default Articles