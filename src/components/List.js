import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';


export default function List() {

    const [album, setAlbum] = useState([]);
    const [spinner, setSpinner] = useState(false);    

    const fetchAlbum = async () => {
        setSpinner(true);
        const response = await axios("https://jsonplaceholder.typicode.com/albums")
        setAlbum(response.data)
        setSpinner(false);

    }
    useEffect(() => {
        fetchAlbum();
    }, []);


    const navigate = useNavigate();
    const openAlbum = (id) => {
        navigate('/album/' + id);
    }

    return (
        <div className="main-wrapper">
            <div className="card-tittle">
                <h1>Albums</h1>
            </div>
         
            <div className="list-wrapper">
            {spinner == true ? <p>Loading....</p>: null}

            {album.map((data, i) =>
                <div className="item">
                    <button className="card-box" onClick={() => openAlbum(data.id)}>
                         {data.title} 
                    </button>
                </div>
            )}
            </div>
        </div>
    );
}