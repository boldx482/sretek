import React from 'react';

import '../App.css';


class Header extends React.Component {

    openButton() {
        document.getElementById("sidebar").style.width = "100%";
        document.getElementById("sidebar").style.height = "90.3vh";
        document.getElementById("gixa").style.display = "block";
        document.getElementById("gixb").style.display = "block";
        document.getElementById("gixc").style.display = "block";
        document.getElementById("gixd").style.display = "block";
        document.getElementById("gixe").style.display = "block";
        document.getElementById("gixf").style.display = "block";
        document.getElementById("close").style.display = "block";
        document.getElementById("sidebar").style.backgroundColor= "white";
        document.getElementById("sidebar").style.zIndex= "1";
    }

    render() {
        return (
            <div className="d-flex clearfix py-2 pr-2 border border-dark shadow" style={{backgroundColor:'#2b2a37'}}>
                <div className="col-2">
                    <img width={100} height={80} src="/tekplus.png" alt='logo' />
                </div>
                <div className="col-6 py-3">
                    <p className="container text-light ml-4 d-none d-lg-inline"><a className='text-light text-decoration-none' href='/'>Latest</a><i className="fa fa-angle-down" style={{fontSize:'22px', color:'#6c757d'}} aria-hidden="true"></i></p>
                    <p className="container text-light  d-none d-lg-inline"><a className='text-light text-decoration-none' href='/technology'>Tech</a><i className="fa fa-angle-down" style={{fontSize:'20px', color:'#6c757d'}} aria-hidden="true"></i></p>
                    <p className="container text-light  d-none d-sm-none d-lg-inline">Special<i className="fa fa-angle-down" style={{fontSize:'20px', color:'#6c757d'}} aria-hidden="true"></i></p>
                    <p className="container text-warning  d-none d-sm-none d-lg-inline">Promotions</p>
                </div>
                <div className="col-3 py-3">
                    <div className="bg-success py-2 px-3 ml-4 d-none d-lg-inline rounded-lg text-light"><a className='text-light text-decoration-none' href='/sport'>Sport</a></div>
                    <div className="py-2 px-3 ml-4 d-none d-lg-inline rounded-lg text-light"  style={{backgroundColor:'#dc3545'}}><a className='text-white text-decoration-none' href='/entertainment'>Entertainment</a></div>
                </div>
                <div className="col-1 pt-4 px-2">
                    <div className="d-lg-none pr-2">
                        <div onClick={this.openButton} className="hover-blue">
                            <div style={{backgroundColor:'#d9d6d6',height:'4px',width:'18px',marginBottom:'2px'}}></div>
                            <div style={{backgroundColor:'#d9d6d6',height:'4px',width:'18px',marginBottom:'2px'}}></div>
                            <div style={{backgroundColor:'#d9d6d6',height:'4px',width:'18px',marginBottom:'2px'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Header;