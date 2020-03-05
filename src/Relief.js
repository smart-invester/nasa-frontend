import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Relief.css';

export default class About extends Component {
    render() {
        return (
            <div className="about-container">

                <h1 className="DisasterTitle">DISASTER RELIEF ORGANIZATIONS</h1>
                
                <div className="title-container">
                    <p>Are you currently tracking a natural event with Earth-Force?</p>
                    <p>Are you concerned about Climate Chanage and environmental degradation?</p>
                    <p>The organizations below are dedicated to helping with with disaster relief, environmental protection and awareness.</p>
                </div>
                
                <div className="team-container">

                    <div className="photo">
                        <h2>Americares</h2>
                        <img className='img-relief' src='Americares.jpg' alt="Americares" />
                        <div className="socialicons">
                            <a href="https://www.americares.org/" className="Linkedin social">www.americares.org</a>
                        </div>
                    </div>

                    <div className="photo">
                        <h2>Direct Leaf</h2>
                        <img className='img-relief' src='Direct_Leaf.png' alt="Direc Leaf" />

                        <div className="socialicons">
                            <a href="https://www.directrelief.org/" className="Linkedin social">www.directrelief.org</a>
                        </div>
                    </div>

                    <div className="photo">
                        <h2>The Coalition for Rainforest Nations</h2>
                        <img className='img-relief' src='rainforest.png' alt="The Colaition for Rainforest Nations" />
                        <div className="socialicons">
                            <a href="https://www.rainforestcoalition.org/" className="Linkedin social">www.rainforestcoalition.org</a>
                        </div>
                    </div>
                    <div className="about-us-container-two">

                        <div className="photo">
                            <h2>Clean Air Task Force</h2>
                            <img className='img-relief' src='clear_air_task_force.jpeg' alt="Clean Air Task Force" /></div>
                        <div className="socialicons">
                            <a href="https://www.catf.us/" className="Linkedin social" >www.catf.us</a>
                        </div>
                    </div>

                    <div className="photo">
                        <h2>Rotary International</h2>
                        <img className='img-relief' src='Rotary.jpg' alt="Rotary International" />

                        <div className="socialicons">
                            <a href="https://www.rotary.org/en/rotary-helps-disaster-victims" className="Linkedin social">www.rotary.org</a>
                        </div>
                    </div>


                    <div className="photo">
                        <h2>United Nations Disaster Coordination</h2>
                        <img className='img-relief' src='United_Nations_Disaster_Coordination.png' alt="UN Disaster Coordination" />
                        <div className="socialicons">
                            <a href="https://www.unocha.org/our-work/coordination/un-disaster-assessment-and-coordination-undac" className="Linkedin social">www.unocha.org</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};