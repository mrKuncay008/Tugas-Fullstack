// File
import React, { useState } from 'react';
import imgKotak from "../assets/1.png";
const Card = () => {

  const clickPopup = () => {
  document.querySelectorAll('.container-1 img').forEach( image => {
    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
  });
};
const closePopup = () => {
  document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
  }};

    return (
        <>
            <div className='container-1'>
                <div className="wrapper">
                    <div className="kotak-1">
                        <img src={imgKotak} className="image" alt=""/>
                        <div className="content-1">
                            <p>Hallo</p>
                        </div>
                        <span className="label-1">Label kotak</span>
                    </div>
                    <div className="kotak-2">
                        <img src={imgKotak}  className="image" alt="" />
                        <div className="content-2">
                            <p>Hallo</p>
                        </div>
                        <span className="label-2">Label kotak</span>
                    </div>
                    <div className="kotak-3">
                        <img src={imgKotak}  className="image" alt="" />
                        <div className="content-3">
                            <p>Hallo</p>
                        </div>
                        <span className="label-3">Label kotak</span>
                    </div>
                    <div className="kotak-4">
                        <img src={imgKotak}  className="image" alt="" />
                        <div className="content-4">
                            <p>Hallo</p>
                        </div>
                        <span className="label-4">Label kotak</span>
                    </div>
                    <div className="kotak-5">
                        <img src={imgKotak}  className="image" alt="" />
                        <div className="content-5">
                            <p>Hallo</p>
                        </div>
                        <span className="label-5">Label kotak</span>
                    </div>
                    <div className="kotak-6">
                        <img src={imgKotak}  className="image" alt="" />
                        <div className="content-6">
                            <p>Hallo</p>
                        </div>
                        <span className="label-6">Label kotak</span>
                    </div>
                    <div className="kotak-7">
                        <img src={imgKotak}  className="image" alt="" />
                        <div className="content-7">
                            <p>Hallo</p>
                        </div>
                        <span className="label-7">Label kotak</span>
                    </div>
                    <div className="kotak-8">
                        <img src={imgKotak}  className="image" alt="" />
                        <div className="content-8">
                            <p>Hallo</p>
                        </div>
                        <span className="label-8">Label kotak</span>
                    </div>
                </div>
                <div className="popup-img">
                <span onClick={closePopup}>&times;</span>
                <img src={imgKotak} onClick={clickPopup}/>
            </div>
            </div>
        </>
    )
}
export default Card
