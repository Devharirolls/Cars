import React from 'react';
import  'boxicons';
import  '../styles/banner.css';
import Img1 from '../images/car1.jpg';
import Img7 from '../images/car7.jpg';
import Img2 from '../images/car2.jpg';
import Img3 from '../images/car3.jpg';
import Img5 from '../images/car5.jpg';
import Img6 from '../images/car6.jpg';
import Img8 from '../images/car4.jpg';
import Img9 from '../images/car8.jpg';
import Img10 from '../images/car9.jpg';
import Video1 from '../videos/trailer-1.mp4';
import Video2 from '../videos/trailer-2.mp4';
import Video3 from '../videos/trailer-3.mp4';

const Banner = () => {


function changeVideo(name){
  const bgVideoList = document.querySelectorAll('.bg-video')
  const videoContainer = document.querySelectorAll('.video-container')

  bgVideoList.forEach((video) =>{
    video.classList.remove('active')
    if(video.classList.contains(name)){
      video.classList.add('active');
    }
  });

  videoContainer.forEach((video) =>{
    video.classList.remove('active')
    if(video.classList.contains(name)){
      video.classList.add('active');
    }
  });
}



  return (
   <>
    <div className="banners">
        <a href="#" className="share"><box-icon type='solid' name='share-alt'></box-icon></a>
        
      { /* Triangle */ }

        <div className="triangle one">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img1} alt="image"/>
            </div>
            <div className="flip-card-back">
              <p>See the Surprice</p>
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
            </div>
          </div>
        </div>

        <div className="triangle two">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img2} alt="image"/>
            </div>
            <div className="flip-card-back">
              <p>See the Surprice</p>
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
            </div>
          </div>
        </div>

        <div className="triangle three">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img3} alt="image"/>
            </div>
            <div className="flip-card-back">
              <p>See the Surprice</p>
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
            </div>
          </div>
        </div>

        <div className="triangle four video-container video-2">
          <div className="flip-card">
            <div className="flip-card-front">
              <video 
                src={Video2} 
                className='video-2'
                autoPlay
                muted
                loop
                ></video>
            </div>
            <div className="flip-card-back">
              <p>See the Surprice</p>
              <a href="#" className='play' onClick={() => changeVideo('video-2')}><box-icon name='play-circle'></box-icon></a>
            </div>
          </div>
        </div>

        <div className="triangle five video-container video-1">
          <div className="flip-card">
            <div className="flip-card-front">
            <video 
                src={Video1} 
                className='video-1'
                autoPlay
                muted
                loop
                ></video>
            </div>
            <div className="flip-card-back">
              <p>See the Surprice</p>
              <a href="#" className='play' onClick={() => changeVideo('video-1')}><box-icon name='play-circle'></box-icon></a>
            </div>
          </div>
        </div>

        <div className="triangle six">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img6} alt="image"/>
            </div>
            <div className="flip-card-back">
              <p>See the Surprice</p>
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
            </div>
          </div>
        </div>

        <div className="triangle seven">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img7} alt="image"/>
            </div>
            <div className="flip-card-back">
              <p>See the Surprice</p>
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
            </div>
          </div>
        </div>

        { /* Inverse Triangle */ }
        <div className="triangle-inverse one">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img9} alt="image"/>
            </div>
            <div className="flip-card-back">
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
              <p>See the Surprice</p>
            </div>
          </div>
        </div>

        <div className="triangle-inverse two">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img8} alt="image"/>
            </div>
            <div className="flip-card-back">
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
              <p>See the Surprice</p>
            </div>
          </div>
        </div>

        <div className="triangle-inverse three video-container video-3 active">
          <div className="flip-card">
            <div className="flip-card-front">
            <video 
                src={Video3} 
                className='video-3'
                autoPlay
                muted
                loop
                ></video>
            </div>
            <div className="flip-card-back">
            <a href="#" className='play' onClick={() => changeVideo('video-3')}><box-icon name='play-circle'></box-icon></a>
              <p>See the Surprice</p>
            </div>
          </div>
        </div>

        <div className="triangle-inverse four">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img10} alt="image"/>
            </div>
            <div className="flip-card-back">
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
              <p>See the Surprice</p>
            </div>
          </div>
        </div>

        <div className="triangle-inverse five">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src={Img5} alt="image"/>
            </div>
            <div className="flip-card-back">
              <a href="#" className='play'><box-icon name='play-circle'></box-icon></a>
              <p>See the Surprice</p>
            </div>
          </div>
        </div>

      {/* Banner Title */}
      <div className="banner-title">
        <h1>Mo<span className="text-special">D</span>els</h1>
        <span className='subtitle'>A creative Community</span>
      </div>

        {/* Banner Background Video list */}
        <div className="bg-video-list">
          <video
          className='bg-video video-1' 
          src={Video1}
          autoPlay
          loop
          muted
          >
          </video>
          <video
          className='bg-video video-2' 
          src={Video2}
          autoPlay
          loop
          muted
          >
          </video>
          <video
          className='bg-video video-3 active' 
          src={Video3}
          autoPlay
          loop
          muted
          >
          </video>
        </div>

        {/* Banner Content */}
        <div className="content">
          <a href="#" className="more">
            Learn More <box-icon type='solid' name='right-arrow-alt'></box-icon>
          </a>
          <p> Luxury car makers use high-quality parts, including expensive interior materials.
             Driving pleasure and cabin comfort are the key ingredients.
              The luxury car specs will show that all the car's 
            </p>
        </div>

        {/* Social Icons */}
        <ul className='sci'>
            <li><a href="#"><box-icon type='logo' name='facebook-circle'></box-icon></a></li>
            <li><a href="#"><box-icon type='logo' name='instagram'></box-icon></a></li>
            <li><a href="#"><box-icon type='logo' name='twitter'></box-icon></a></li>
        </ul>
    </div>
   </>
  )
}

export default Banner;
