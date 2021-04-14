import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
      return(
        <div>
        <div className="blog">
            <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-6 item">
                <div className="body">
                    <img src="assets/img/image_biodata.png" alt="biodata" title="me" />
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
                    <hr className="offset-sm" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <hr className="offset-lg" />
        <hr className="offset-lg" />
        </div>

      )
  }

export default About