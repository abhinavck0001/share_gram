import React from 'react'
import Cover from '../../img/escobarC.jpg'
import profile from '../../img/escobar2'
import './profileCard.css'

const profilecard = () => {
    return (
        <div className='ProfileCard'>
            <div className='ProfileImages'>
                <img src={Cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>PABLO ESCOBAR</span>
                <span>king of cocain</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>59</span>
                        <span>following</span>
                    </div>
                    <div className="vL"></div>
                    <div className="follow">
                        <span>113M</span>
                        <span>followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>My Profile</span>

        </div>
    )
}

export default profilecard