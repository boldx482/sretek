import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Fetch_blogs } from '../actions'

import '../App.css';

class BlogPage extends React.Component {

    componentDidMount() {
        this.buttonClose();
        this.props.Fetch_blogs();
        window.scrollTo(0, 0);
    };

    buttonClose() {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("sidebar").style.height = "0px";
        document.getElementById("gixa").style.display = "none";
        document.getElementById("gixb").style.display = "none";
        document.getElementById("gixc").style.display = "none";
        document.getElementById("gixd").style.display = "none";
        document.getElementById("gixe").style.display = "none";
        document.getElementById("gixf").style.display = "none";
        document.getElementById("close").style.display = "none";
        document.getElementById("sidebar").style.backgroundColor= "white";
    }

    renderList(){
        return  this.props.streams?.slice(0, 40).map((blog, index) => 
                    
            <div key={index} className="d-md-flex px-4 mb-4">
                <div className="mb-4">
                    <img className='rounded' width={302} height={120} src={blog.image} alt='logo' />
                </div>
                <div className="flex-column pl-2">
                    <div className="text-secondary">
                        <span> Date:{new Date(blog.created_at).toLocaleString()}</span>
                    </div>   
                    <div className='flex-column font-semibold'>
                        {blog.title}
                        <Link className='text-decoration-none text-secondary' to={`/singleblog/${blog.id-1}`}>Continue...</Link>
                    </div> 
                </div>
            </div>
        ) 
                   
    }

    render() {
        return (
        <>
            <div>

                <div className="shadow bg-dark" id="sidebar" style={{position: 'fixed'}}>
                    <button id="close" onClick={this.buttonClose} className="float-right bg-dark border-dark text-danger">X</button>
                    <center>
                        <a className="text-danger mb-4 mt-5 text-decoration-none" id="gixa" href="/"><strong>Latest</strong></a>
                        <a className="text-danger mb-4 text-decoration-none" id="gixb" href="/technology"><strong>Technology</strong></a>
                        <a className="text-danger mb-4 text-decoration-none" id="gixf" href="/technology"><strong>Special</strong></a>
                        <a className="text-danger mb-4 text-decoration-none" id="gixc" href="/technology"><strong>Promotions</strong></a>
                        <a className="text-danger mb-4 text-decoration-none" id="gixd" href="/sport"><strong>Sport</strong></a>
                        <a className="text-danger text-decoration-none" id="gixe" href="/entertainment"><strong>Entertainment</strong></a>
                    </center>
                </div>

                <div className="d-md-flex"  style={{width:'100wh'}}>
                    <div className='flex-column'>
                        <div className='d-md-flex py-4'>
                            <div className='d-none d-md-block p-2'>{/*<img width={200} height={150} src="/xv.png" alt='logo image' />*/}</div>
                            <div className='p-2'></div>
                            <div className='d-none d-md-block p-2'></div>
                        </div>
                        {this.renderList()}
                    </div>
                    <div className='d-none d-md-block col-md-4 p-5 m-4' style={{backgroundColor:'rgb(241 236 236)', height:'100vh'}}>
                        
                    </div>
                </div>

            </div>
            <div className="d-flex text-wrap">
                <div className="col">
   
                    <p className="text-break mx-sm-5 text-secondary mt-5">
                        Tekpluz is one of the best technology, sport and entertainment website launched.
                        It is coordinated by placodes.com and concern in different kinds of latest blogs
                        on cryptocurrency, forex trading, soccer, tennis and those related to music industry.
                        It is being protected against cybercrime and further updating will be implemented my the coordinating team.
                    </p>
                </div>
            </div>
            <hr />
        </>
        );
    };
};


const mapStateToProps = (state) => {
    return {streams: state.blogs.blogs }
}
export default connect(mapStateToProps, {Fetch_blogs})(BlogPage);
