import React from "react";

import '../App.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small indigo shadow"  style={{backgroundColor:'rgb(241 236 236)'}}>

                <div className="container text-center text-md-left">

                        <div className="row clearfix">
                
                            <div className="col-md-3 mx-auto">

                                
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-2 text-secondary">About</h5>

                                <ul className="list-unstyled">
                                <li>
                                    <a className="text-secondary text-decoration-none"  href="/technology">User Agreement</a>
                                </li>
                                <li>
                                    <a className="text-secondary text-decoration-none"  href="/technology">Policy</a>
                                </li>
                                <li>
                                    <a className="text-secondary text-decoration-none"  href="/technology">Contact us</a>
                                </li>
                                <li>
                                    <a className="text-secondary text-decoration-none"  href="/technology">Risk Statement</a>
                                </li>
                                </ul>

                            </div>
    
                            <hr className="clearfix w-100 d-md-none" />

                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-2 text-secondary">HOW TO START?</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-secondary text-decoration-none"  href="/technology">Open an Account</a>
                                    </li>
                                    <li>
                                        <a className="text-secondary text-decoration-none"  href="/technology">Account types</a>
                                    </li>
                                    <li>
                                        <a className="text-secondary text-decoration-none"  href="/technology">Payment options</a>
                                    </li>
                                    <li>
                                        <a className="text-secondary text-decoration-none"  href="/technology">FAQ</a>
                                    </li>
                                </ul>

                            </div>
        
                            <hr className="clearfix w-100 d-md-none" />
              
                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-2 text-secondary">ADVANTAGES</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-secondary text-decoration-none"  href="/technology">Advantages</a>
                                    </li>
                                    <li>
                                        <a className="text-secondary text-decoration-none"  href="/technology">Contest</a>
                                    </li>
                                </ul>

                            </div>
               
                            <hr className="clearfix w-100 d-md-none" />
              
                            <div className="col-md-3 mx-auto">

                                
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-2 text-secondary">PLATFORM</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-secondary text-decoration-none"  href="/technology" id="lk">Features</a>
                                    </li>
                                    <li>
                                        <a className="text-secondary text-decoration-none" href="/technology">Assets</a>
                                    </li>
                                </ul>

                            </div>
           

                        </div>
             

                </div>

                <div className="footer-copyright text-center py-3 my-2">© 2020 Copyright:
                    <a href="/technology" className="text-secondary text-decoration-none"> Placodes.com</a>
                </div>
                
            </footer>
        );
    };
};

export default Footer;