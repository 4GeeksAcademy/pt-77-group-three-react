import React from "react";

const Card = (props) => {
    return (
        <div className="text-center mx-2 w-25 mt-4 py-3">
            <div className="card h-100" style={{width: " 18rem;" }}>
                <img src={props.img} className="card-img-top" alt="#"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.body}</p>
                        <a href="#" className="btn btn-success">{props.feet}</a>
                    </div>
            </div>
        </div>
    );
};

export default Card;
