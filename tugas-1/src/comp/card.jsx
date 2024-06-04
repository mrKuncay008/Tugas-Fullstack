// File
import {useState} from "react";
import imgKotak from "../assets/1.png"


const Card = () => {
    const [zoomed, setZoomed] = useState(false);

    function toggleZoom() {
        setZoomed(!zoomed);
    }
    return (
        
            <div className='container-1'>
                <div className="wrapper">
                    <div className="kotak-1" onAuxClick={toggleZoom}>
                        <img src={imgKotak}  className={zoomed ? "gambar-zoom zoomed" : "gambar-zoom"} alt=""/>
                        <span className="label-1">Label kotak</span>
                    </div>
                    <div className="kotak-2">
                        <img src={imgKotak}  className="" alt="" />
                        <span className="label-2">Label kotak</span>
                    </div>
                    <div className="kotak-3">
                        <img src={imgKotak}  className="" alt="" />
                        <span className="label-3">Label kotak</span>
                    </div>
                    <div className="kotak-4">
                        <img src={imgKotak}  className="" alt="" />
                        <span className="label-4">Label kotak</span>
                    </div>
                    <div className="kotak-5">
                        <img src={imgKotak}  className="" alt="" />
                        <span className="label-5">Label kotak</span>
                    </div>   
                    <div className="kotak-6">
                        <img src={imgKotak}  className="" alt="" />
                        <span className="label-6">Label kotak</span>
                    </div>   
                    <div className="kotak-7">
                        <img src={imgKotak}  className="" alt="" />
                        <span className="label-7">Label kotak</span>
                    </div>    
                    <div className="kotak-8">
                        <img src={imgKotak}  className="" alt="" />
                        <span className="label-8">Label kotak</span>
                    </div>    
                </div>
            </div>
    )
}
export default Card