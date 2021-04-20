import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rian from '../assets/rian.jpg';

const About = () => {
      return(
        <div>
            <div className="hero is-primary">
                    <div className="hero-body container">
                    <h4 className="title"> About Author </h4>
                </div>
            </div>
        <div className="blog">
            <div className="container">
            <br/>
            <div className="row">
                <div className="col-sm-6 col-md-6 item">
                <div className="body">
                    <img src={Rian} alt="biodata" title="me" id="imgx" />
                </div>
                </div>
                <div className="col-sm-6 col-md-6 item">
                <div className="body">
                    
                    <div className="caption">
                    <h1 className="h3">Herlangga Satria Mulia Pewana</h1>
                    <label> 1841720042 </label>
                    <hr className="offset-sm" />
                    <p>Address       : Lumajang</p>
                    <p>Date of Birth : 22 Desember 1998 </p>
                    <p>Email         : rianherlangga61@gmail.com</p>
                    <p>
                        <br/>
                        Im an Game Designer from State Polytechnic of Malang,
                        Currently studying in Information Technology
                        Still trough the 6th Semester, Learning about Web for a while, because Web programming
                        especially for the part of nowadays industry need , One of the requirements are best skills to get
                        a job, the current demand that always be a key to apply crowd consumption is media
                        sharing of a product on entry level as the consumer wanted.
                    </p>
                    <hr className="offset-sm" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <hr className="offset-lg" />
        </div>

      )
  }

export default About