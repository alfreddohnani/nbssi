import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer className="footer">
          <div className="footer_content">
            <div className="container">
              <div className="row">
                
                <div className="col-lg-10 col-lg-offset-1 footer_col">
                  <div className="footer_about">
                    <div>
                      <Link to="#">
                        <div className="logo_container d-flex flex-row align-items-start justify-content-start">
                          <div className="logo_image"><div><img src="assets/images/nbssilogo_original.png" alt="" /></div></div>
                          <div className="logo_content">
                            <div id="logo_text" className="logo_text logo_text_not_ie">NBSSI</div>
                            <div className="logo_sub">Coronavirus (Covid-19) Alleviation Programme</div>
                          </div>
                        </div>
                      </Link>	
                    </div>
                    <div className="footer_about_text">
                      <p>The Coronavirus Alleviation Programme (CAP) Business Support Scheme is a &nbsp;
                        Government of Ghana initiative to support MSMEs in Ghana.  For more information about this scheme, go to &nbsp;
                        <a href="https://nbssi.gov.gh/capsupport/about/" target="_blank">https://nbssi.gov.gh/capsupport/about/</a></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* <div className="footer_extra">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="footer_extra_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-start justify-content-center">
                    <div className="footer_social">
                       <div className="footer_social_title">Follow us on Social Media</div>
                      <ul className="footer_social_list">
                        <li><Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-dribbble" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-behance" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                      </ul> 
                    </div>
                    <div className="footer_extra_right ml-lg-auto text-lg-right">
                      <div className="footer_extra_links">
                        <ul>
                          <li><Link to="contact.html">Contact us</Link></li>
                          <li><Link to="#">Sitemap</Link></li>
                          <li><Link to="#">Privacy</Link></li>
                        </ul>
                      </div> 
                       <div className="copyright">
                        Copyright &copy; All rights reserved | Powered by <Link to="https://logicielghana.com" target="_blank" >Logiciel</Link>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </footer>
    )
}