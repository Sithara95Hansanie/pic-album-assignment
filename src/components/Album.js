import { useParams } from "react-router-dom";
import axios from "axios";
import React,{useState, useEffect} from "react";


const Album = () =>{
    let params = useParams();
    const [picture, setPicture] = useState([]);
    const [url, setUrl] = useState('');
    const [spinner, setSpinner] = useState(false);    


    const fetchAlbumData = async () => {
        setSpinner(true);
        const response = await axios('https://jsonplaceholder.typicode.com/photos?albumId='+params.id);
        setPicture(response.data)
        setSpinner(false);
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
                {spinner == true ? <p>Loading....</p>: null}
            <div className="image-gallery">
                {picture.map((data,i)=>
                <>
                <div key={i} className= {data.url == url ? "img-card active" : "img-card" }>
                    <img onClick={() => setUrl(data.url)} src={data.thumbnailUrl} alt={data.title}/>
                </div>
                </>
                )}

            </div>
            { url ?(
                <div className="image-preview">
                    <img src={url}/>
                </div>
            ): null}
           </div>   
        </div>
    );
};

export default Album;