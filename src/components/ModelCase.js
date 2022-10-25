import React from "react";
export default function ModalCase({setIsOpen, film}){
    return(
        <div className="modal-show" onClick={()=> setIsOpen(false)}>
            <div id="modal1" className="modal" style={{display:'block',top:'50%'}}>
                <div className="modal-content">
                <h4>Trailer for <span style={{ fontStyle: 'italic', fontWeight: '500' }}>{film.Title}</span> </h4>
                    <p><iframe src={film.clip} width="100%" height="400px"  title={film.title} frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture" allowfullscreen/></p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close red text close">Close</a>
                </div>
            </div>
        </div>
    )
}
