import React from 'react';
import bootstrap from 'bootstrap';
import Dropzone from 'react-dropzone';
import toastr from 'toastr';
import axios from 'axios';
import ReactGallery from 'react-photo-gallery';
import SelectedImage from 'react-images';
export default class ManageGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            selectAll: false,
            selected : false,
            selected_count : true
        };
    }
    selectImage(event, obj) {
        let images = this.state.images;
        images[obj.index].selected = !images[obj.index].selected;
        this.setState({
            images: images,
        } ,() => {
            this.verifyMarked();
        });
    }
    verifyMarked(){
        let marked = false,
            mark_count = 0;
        this.state.images.map(image => {
            if(image.selected){
                marked = true;
                mark_count += 1;
            }
        });
        this.setState({
            selected : marked,
            selected_count : mark_count
        })
    }
    deleteImages(e) {
        e.preventDefault();
        let marked = this.state.images.filter(image => {
            return image.selected;
        });
        marked.map(image => {
            axios.delete('/photos', {
                params : {
                    id : image.id
                }
            }).then(response => {
                if(response.data.deleted){
                    this.setState({
                        images : this.state.images.filter(img => {
                            return img.id !== image.id
                        })
                    });
                    toastr.success('Images deleted from gallery');
                }
            })
        })
    }
    componentDidMount(){
        /*fetch('/photos')
            .then(response => {
                let images = response.data.map(image => {
                    return {
                        src : '/storage/' + image.uri,
                        width : image.width,
                        height : image.height,
                        id :  image.id
                    }
                }
                );
                
             
                this.setState({
                    images : images
                })
            })*/
            this.setState({
                images : [{uri:"https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?rnd=",width:200,height:200},
                {uri:"https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?rnd=",width:200,height:200}
                ]

            })

    }
 
    render() {
 
        return (
            <div className="gallery">
                {this.state.selected > 0 &&
                <button
                    className="btn btn-danger deleteBtn"
                    onClick={this.deleteImages.bind(this)}
                >
                    Delete {this.state.selected_count} Selected Photos
                </button>
                }
                {this.state.images.length ?
                    <ReactGallery
                        photos={this.state.images}
                        onClick={this.selectImage.bind(this)}
                        ImageComponent={SelectedImage} />
                    :
                    <div className="no-images">
                        <h5 className="text-center">
                            You currently have no images in your photos gallery
                        </h5>
                    </div>
                }
            </div>
 
        );
    }
}