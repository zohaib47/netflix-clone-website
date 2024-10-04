import React, { useState, useEffect } from 'react'
import "./browser.css";
import kidimg from '../../../assets/images/kidimg.png'
import { FaPlusCircle, FaVolumeUp, FaPlay, FaInfo, FaSearch, FaBell, FaSortDown, FaGreaterThan, FaFacebookSquare } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // For the hamburger icon
import Slider from 'react-slick';

import images1 from "../../../assets/profile-icon/profile-icon1.png"
import images2 from "../../../assets/profile-icon/profile-icon2.png"
import images3 from "../../../assets/profile-icon/profile-icon3.png"
import logo from "../../../assets/images/logo.svg";



import video from "../../../assets/videos/video-tv.m4v"
import video1 from '../../../assets/videos/video1.mp4'
import video2 from '../../../assets/videos/video2.mp4'
import video3 from '../../../assets/videos/video3.mp4'
import video4 from '../../../assets/videos/video4.mp4'
import video5 from '../../../assets/videos/video5.mp4'
import video6 from '../../../assets/videos/video6.mp4'
import video7 from '../../../assets/videos/video7.mp4'
import video8 from '../../../assets/videos/video8.mp4'
import video9 from '../../../assets/videos/video9.mp4'
import video10 from '../../../assets/videos/video10.mp4'
import video11 from '../../../assets/videos/video11.mp4'
import video12 from '../../../assets/videos/video12.mp4'
import video13 from '../../../assets/videos/video13.mp4'
import video14 from '../../../assets/videos/video14.mp4'
import video15 from '../../../assets/videos/video15.mp4'
import { FaBellConcierge, FaFacebook, FaInstagram, FaSquareYoutube, FaUpDown, FaVolumeXmark, FaYoutube } from 'react-icons/fa6';


import pic1 from "../../../assets/images/picture/pic1.jpg"
import pic2 from "../../../assets/images/picture/pic2.jpg"
import pic3 from "../../../assets/images/picture/pic3.jpg"
import pic4 from "../../../assets/images/picture/pic4.jpg"
import pic5 from "../../../assets/images/picture/pic5.jpg"
import pic6 from "../../../assets/images/picture/pic6.jpg"
import pic7 from "../../../assets/images/picture/pic7.jpg"
import pic8 from "../../../assets/images/picture/pic8.jpg"
import pic9 from "../../../assets/images/picture/pic9.webp"
import pic10 from "../../../assets/images/picture/pic10.jpg"
import pic11 from "../../../assets/images/picture/pic11.jpg"
import pic12 from "../../../assets/images/picture/pic12.jpg"
import pic13 from "../../../assets/images/picture/pic13.jpg"
import pic14 from "../../../assets/images/picture/pic14.webp"
import pic15 from "../../../assets/images/picture/pic15.webp"


const images = [images1, images2, images3];

const pic = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15]



export default function Browser() {



  const iconStyle = {
    width: '80px',
    height: '80px',
    color: 'rgb(118, 118, 118)',
    cursor: 'pointer',

  };
  const [profiles, setProfiles] = useState([]); // Profiles state
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [newProfile, setNewProfile] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

 

  const moveSlide = (direction) => {
    const newSlide = (currentSlide + direction + images.length) % images.length; // Wrap around
    setCurrentSlide(newSlide);
  };

 

  // Check localStorage on component mount to set visibility
  useEffect(() => {
    const showMainBrowse = localStorage.getItem('showMainBrowse');
    if (showMainBrowse === 'true') {
      setShowSecondDiv(null);
    }
  }, []);

  const handleClick2 = () => {
    setShowSecondDiv(true);
    localStorage.setItem('showMainBrowse', 'true'); // Save state to localStorage
  };



  const handleAddProfileClick = () => {
    setShowModal(true); // Show modal on button click
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setSelectedImage(randomImage);
  };



  const handleProfileSubmit = () => {
    if (newProfile && profiles.length < 4) {

      setProfiles([...profiles, { name: newProfile, image: selectedImage }]);
      setNewProfile("");
      setShowModal(false);
      setSelectedImage(null); // Reset the selected image
    }
  };

  const handleInputChange = (event) => {
    setNewProfile(event.target.value);


  };

  const handleCancel = () => {
    setNewProfile("");
    setShowModal(false);
    setSelectedImage(null); // Reset the selected image
  };



  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For toggling menu


  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  const videoSets = [
    {
      title: "Action Movies",
      videos: [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10,],
    },
    {
      title: "Comedy Movies",
      videos: [video11, video12, video13, video14, video15, video6, video7, video8, video9, video10,],
    },
    {
      title: "Drama Movies",
      videos: [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10,],
    },
    {
      title: "Horror Movies",
      videos: [video11, video12, video13, video14, video15, video6, video7, video8, video9, video10,],
    },
    {
      title: "Sci-Fi Movies",
      videos: [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10,],
    },
  ];





  return (
    <>

      {/* browse section */}


      {!showSecondDiv && (

        <div className="container-fluid browserSection">
          <h1 className="heading">Who's Watching?</h1>
          <div className="row profile-row">

            {profiles.map((profile, index) => (

              <div className="profileDiv" key={index} onClick={handleClick2}>
                <div className="imgdiv mt-3">
                  <img src={profile.image} alt="Selected" className="profile-img" />

                </div>

                <p className="profile-name">{profile.name}</p>
              </div>
            ))}

            {/* Kids Profile */}
            <div className="profileDiv hoverdiv">
              <div className="imgdiv">
                <img src={kidimg} alt="Kid's Profile" className="profile-img" onClick={handleClick2} />
              </div>
              <span className="profile-name">Kids</span>
            </div>

            {/* Add Profile Button */}
            {profiles.length < 4 && (
              <div className="profileDiv plusDiv hoverdiv" onClick={handleAddProfileClick} >
                <div className="imgdiv imgplus ">
                  <FaPlusCircle style={iconStyle} />
                </div>
                <span className="profile-name" >Add Profile</span>
              </div>

            )}
          </div>


          {/* Modal for adding profile */}

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2 className='text-center'>Add Profile</h2>
                <p className='text-center'>Add a profile for another person watching Netflix.</p>

                <input
                  type="text"
                  placeholder="Name"
                  value={newProfile}
                  onChange={handleInputChange}
                  className="profileInput"
                />

                <div className="imgdiv">
                  {selectedImage ? (
                    <img src={selectedImage} alt="Selecteded" className="profile-img" style={{ maxWidth: '100px', marginRight: '10px' }} />
                  ) : (
                    <p className="placeholder-img" style={{ width: '100px', height: '100px', backgroundColor: 'red', display: 'flex', alignItems: 'left', justifyContent: 'left' }}>No Image</p>
                  )}
                </div>


                <div className="kidsProfile ">
                  <h6 className='text-left'>Kids Profile</h6>
                  <p className='text-gray fw-100'>Only see kid-friendly TV showa and movies</p>
                </div>

                <hr />

                <div className="modal-buttons">
                  <button onClick={handleProfileSubmit} className="modal-btn ok-btn">
                    Save
                  </button>
                  <button onClick={handleCancel} className="modal-btn cancel-btn">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <button className="manageButton">Manage Profile</button>
        </div>


      )}







      {/* Browser main page */}





      {showSecondDiv && (

        <div className='mainbrowse'>
          <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            {/* <nav className=  'navbar'> */}
            <span><img width="100" src={logo} alt="" /></span>
            {/* Hamburger Icon for Mobile */}
            <div className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>

            </ul>
            {/* Right Side: Buttons */}
            <div className={`navbar-buttons ${menuOpen ? "open" : ""}`}>
              <button className="nav-btn"> <FaSearch /> </button>
              <button className="nav-btn">Kids</button>
              <button className="nav-btn"> <FaBell /> </button>
              <button className="nav-btn"><FaSortDown /></button>
            </div>
          </nav>

          <div className="video-background">
            <video autoPlay playsInline muted lopp className="background-video">
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="left-content">


              <button className='btn btn-secondary  px-4 fs-5'><FaInfo className='mb-1 me-3 bg-secondary border border-2 rounded-5 p-1 fs-5' /> More Info</button>
              <br />
              <button className='btn btn-light fw-bold fs-5 px-4 mt-4'> <FaPlay className='pb-1' /> Play</button>
            </div>

            <div className="right-content">


              <a className='btn btn-light border mx-4 rounded-circle '> <FaVolumeUp /> </a>
              <span className='btn btn-secondary  pe-5 border border-5 border-light border-end-0 border-top-0 border-bottom-0 rounded-1  '>18+</span>

            </div>
          </div>


           {/* 1st row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">My List</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> 
          </div>

          {/*  2nd row */}
        
          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">International TV Showss</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> 
          </div>

          
           {/* 3rd row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">US TV Shows</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> 
          </div>

          
           {/* 4th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">TV Periods Dramas</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>
          
           {/* 5th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">Today's Top Pic for You</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>

          
           {/* 6th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">Assian Movies and TV</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>

           {/* 7th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">Kids & Family TV</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>

           {/* 8th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">Watch in One WEEkend</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>

         {/* 9th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">Period Pieces</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>


       {/* 10th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">Made in india</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>


          {/* 11th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">TV Mysteries</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>


        {/* 12th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">Anime</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>


         {/* 13th row  */}

          {/* other videos */}
          <div className="videoRow-title-card">
            <h2 className="rowheader">
              <a href="browse/m/mylist" className="rowtitle">
                <div className="row-header-title">Tv Comedies</div>
              </a>
              <div className="more-visible">
                <div className="see-all-links">Explore all</div>
                <div className="aro-row-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </h2>
          </div>
        
          <div className="slider-container">
            <div className="slides-wrapper">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {pic.map((pic, index) => (
                  <div className="slide" key={index} style={{ minWidth: '20%', margin: "0px 10px 10px 0px", boxSizing: 'border-box' }}>
                    <img src={pic} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '150px', }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev-slide" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next-slide" onClick={() => moveSlide(1)}>&#10095;</button> {/* Right arrow */}
          </div>











{/* 
          <div className="carousel-container" style={{padding: '20px', }}>

      {videoSets.map((set, index) => (
        <video key={index} title={set.title} videos={set.videos} > </video>
      ))}
    </div> */}





          <div className='browsefooter'>
            <style>
              {`
      .browsefooter {
        background-color: transprent;
        padding: 40px 0;
        width: 100%;
        color: #555555;
      }

      .browsefooter .row  .link a {
        color: #555555;
        line-height: 2.5rem;
        text-transform: capitalize;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        display: block;
        margin-bottom: 10px;
      }

      .browsefooter .row .link a:hover {
        text-decoration: underline;
        color: #555555;

      }

      .browsefooter .container {
        max-width: 1140px;
        margin: auto;
      }

      .browsefooter .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
      }

      .browsefooter .row .col-3 {
        flex: 1;
        min-width: 200px;
      }

      /* Responsive styling */
      @media (max-width: 768px) {
        .browsefooter .row {
          flex-direction: column;
          align-items: flex-start;
        }
        .browsefooter .col-3 {
          margin-bottom: 20px;
        }
      }
    `}
            </style>



            <div className="container">
              <div className="row">

                <div className="col-12  ">
                  <div className='link'>
                    <span> <FaFacebookSquare style={{fontSize:"30px" , paddingLeft:"6px"}}/> </span>
                    <span> <FaInstagram style={{fontSize:"30px" , paddingLeft:"6px"}}/> </span>
                    <span> <FaSquareYoutube style={{fontSize:"30px" , paddingLeft:"6px"}}/> </span>
                  </div>

                </div>
              </div>
              <div className="row">

                <div className="col-3">
                  <div className='link'>
                    <a href="https://help.netflix.com/support/412">audio description</a>
                    <a href="https://www.netflix.com/signup/creditoption#">investor relations</a>
                    <a href="https://www.netflix.com/signup/creditoption#">legal notic</a>
                  </div>


                </div>


                <div className="col-3">
                  <div className='link'>
                    <a href="https://help.netflix.com/support/412">Help center</a>
                    <a href="https://help.netflix.com/legal/corpinfo">job</a>
                    <a href="https://help.netflix.com/legal/corpinfo">cookies preference </a>

                  </div>
                </div>

                <div className="col-3">
                  <div className='link'>
                    <a href="https://help.netflix.com/legal/termsofuse">gift cards</a>
                    <a href="https://help.netflix.com/legal/termsofuse">term of use</a>
                    <a href="https://help.netflix.com/legal/termsofuse">corporate information</a>

                  </div>
                </div>
                <div className="col-3">
                  <div className='link'>
                    <a href="https://help.netflix.com/legal/termsofuse">media center</a>
                    <a href="https://help.netflix.com/legal/privacy">privacy</a>
                    <a href="https://help.netflix.com/legal/privacy">contact</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className='link'>
                   <button className='browse-footer-btn'>service code</button>
                   <p className='browse-footer-p'>1997- 2024 Netflix, inc. <br />By Mr. Zohaib </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>




      )}











    </>

  );
};


