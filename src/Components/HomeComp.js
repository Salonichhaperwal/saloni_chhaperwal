import React from 'react'
import "../Assets/Styles/Homestyles.css";
import empimg from "../Assets/Images/Emp.png"
import tgline from "../Assets/Images/tgline.png"
import group from "../Assets/Images/group.png"
function HomeComp() {
  return (
        <div className='container-fluid two'>
            <div className="heading d-flex ">
                <img className='empingimg mt-3' src={empimg} alt="" />
                <img className='tglineimg mt-5' src={tgline} alt="" />
            </div>
            <div className="comingsoonbtndiv">
                <button className='mt-4 comingsoonbtn'>Coming Soon <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> </button>
            </div>
            <div className="groupdiv">
                <img className='groupimg' src={group} alt="" />
            </div>

            <div className="datadiv">
                <div className="dataone">
                    <h2 className='noofnode p-4'>No. of Node Operators</h2>
                    <h1 className='num p-4'>2000</h1>
                </div>
                <div className="datatwo">
                <h2 className='noofnode p-4'>No. of Node Operators <span className='last30days'>(last 30 days)</span></h2>
                <h1 className='num p-4'>12,000</h1>
                </div>
            </div>
            
        </div>
  )
}

export default HomeComp