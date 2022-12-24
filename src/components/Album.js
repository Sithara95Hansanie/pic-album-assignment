import { useParams } from "react-router-dom";
import axios from "axios";
import React,{useState, useEffect} from "react";


const Album = () =>{
    let params = useParams();
    const [picture, setPicture] = useState([]);
    const [toggle, setToggle] = useState('');

    const fetchAlbumData = async () => {
        const response = await axios('https://jsonplaceholder.typicode.com/photos?albumId='+params.id);
        setPicture(response.data)
    }

    useEffect(()=>{
        fetchAlbumData();
    },[]);

    return (
        <div className="card-container">
            <div className="card-tittle">
                <h1> Album {params.id}</h1>
            </div>
            <div className="image-container">
            <div className="image-gallery">
                {picture.map((data,i)=>
                <>
                <div key={i} className= {data.url == toggle ? "img-card active" : "img-card" }>
                    <img onClick={() => setToggle(data.url)} src={data.thumbnailUrl} alt={data.title}/>
                </div>
                </>
                )}

            </div>
          
            { toggle ? (
                <div className="image-preview">
                    <img src={toggle}/>
                </div>
            ):null}
           </div>
        </div>
    );
};

export default Album;