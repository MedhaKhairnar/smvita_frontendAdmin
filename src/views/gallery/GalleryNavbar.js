import React from 'react';
import bootstrap from 'bootstrap';
import Dropzone from 'react-dropzone';
import toastr from 'toastr';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class GalleryNavbar extends React.Component {
 
    constructor(props){
        super(props);
        console.log(props);
    }
 
    render() {
        return (
            <div className="container nav-bar">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link
                            to={'/gallery/Gallery'}
                            className={`nav-link ${this.props.location.pathname === '/' ? 'active' : ''}`}
                        >
                            GALLERY
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={'/gallery/Uploader'}
                            className={`nav-link ${this.props.location.pathname === '/gallery/Uploader' ? 'active' : ''}`}
                        >
                            UPLOADER
                        </Link>
                    </li>
 
                    <li className="nav-item">
                        <Link
                            to={'/gallery/ManageGallary'}
                            className={`nav-link ${this.props.location.pathname === '/gallery/ManageGallary' ? 'active' : ''}`}
                        >
                            MANAGE
                        </Link>
                    </li>
                   {/* <li className="nav-item">
                        <a className="nav-link" href="/logout">LOGOUT</a>
        </li>*/}
                </ul>
            </div>
        );
    }
}