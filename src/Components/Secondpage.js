import React from 'react'
import "../Assets/Styles/Secondpage.css";
import Globe from "../Assets/Images/globe.png"
import Subtract from "../Assets/Images/Subtract.png"
import contentn from "../Assets/Images/contentn.png"
import orchestrators from "../Assets/Images/orchestrators.png"
import validators from "../Assets/Images/validators.png"
import icon1 from "../Assets/Images/ellipse_images/icon1.png"
import icon2 from "../Assets/Images/ellipse_images/icon2.png"
import icon3 from "../Assets/Images/ellipse_images/icon3.png"
import icon4 from "../Assets/Images/ellipse_images/icon4.png"
import icon5 from "../Assets/Images/ellipse_images/icon6.png";

function Secondpage() {
  return (
    <div className='container'>
      <div className="fancloudcdn">
      FanCloud CDN network revolutionizes video infrastructure with community-driven Innovation
      </div>
      <div className="desc mb-5">
      FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community- driven consumption
      </div>

      <div className="globediv">
          <img className='Subtractimg' src= {Subtract} alt="" />
          <img className='globeimg' src= {Globe} alt="" />

        <img class="icon icon2" src={icon2} alt="Icon 2"/>
        <img class="icon icon3" src={icon3} alt="Icon 3"/>
        <img class="icon icon4" src={icon4} alt="Icon 4"/>
        <img class="icon icon5" src={icon5} alt="Icon 5"/>
        <img class="icon icon6" src={icon5} alt="Icon 6"/>
      </div>
      <div className="contentdiv pb-5">
         <div className="contentonediv">
          <h2>Content Nodes</h2>
          <p>Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN</p>

          <div className="Deploydiv">
                <button className='mt-4 Deploybtn'>Deploy <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> </button>
            </div>
         </div>
         <div className="contentonediv twodiv">
          <h2>Orchestrators</h2>
          <p>Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance</p>

          <div className="Deploydiv cmg">
                <button className='mt-4 Deploybtn comingsoonbtn'>Coming soon  </button>
            </div>
         </div>

         <div className="contentonediv">
          <h2>Validators</h2>
          <p>Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.</p>

          <div className="Deploydiv cmg">
                <button className='mt-4 Deploybtn comingsoonbtn2'>Coming soon  </button>
            </div>
         </div>
        {/* <img className='contentimg' src= {contentn} alt="" />
        <img className='contentimg' src= {orchestrators} alt="" />
        <img className='contentimg' src= {validators} alt="" /> */}

      </div>


    </div>
  )
}

export default Secondpage