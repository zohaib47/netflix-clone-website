import React, { useState } from 'react'
import './pages.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import img2 from '../../assets/images/mobile.jpg'
import videotv from '../../assets/videos/video-tv.m4v'
import kids from '../../assets/images/kids.png'
// import { BsChevronRight } from "react-icons/bs";




export default function Home() {



  const [isVisible1, setIsVisible1] = useState(false);
  const handleClick1 = () => {
    setIsVisible1(!isVisible1);
  };

  const [isVisible2, setIsVisible2] = useState(false);
  const handleClick2 = () => {
    setIsVisible2(!isVisible2);
  };

  const [isVisible3, setIsVisible3] = useState(false);
  const handleClick3 = () => {
    setIsVisible3(!isVisible3);
  };

  const [isVisible4, setIsVisible4] = useState(false);
  const handleClick4 = () => {
    setIsVisible4(!isVisible4);
  };

  const [isVisible5, setIsVisible5] = useState(false);
  const handleClick5 = () => {
    setIsVisible5(!isVisible5);
  };

  const [isVisible6, setIsVisible6] = useState(false);
  const handleClick6 = () => {
    setIsVisible6(!isVisible6);
  };
  return (

    <>


      <div className="sepration"></div>


      <section className='home-section'>

        <div className="container ">
          <div className="row display-class">
            <div className=" col col-12 col-md-6  first-home   ">
              <h2 className='heading'>Enjoy on your TV</h2>
              <p className='paragraph'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>


            </div>
            <div className="col col-12 col-md-6  second-home ">
              {/* <div className="second-home-img ">
                <img src={img1} alt=" home-img" />
              </div> */}

              <div className="card-tv-video  d-flex align-items-center  justify-content-center ">
                <video autoPlay playsInline muted lopp > 
                  <source src={videotv}/>
                </video>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* second section */}
      <div className="sepration"></div>

      <section className='second-section home-section'>
        <div className="container ">
          <div className="row">

            <div className="col col-12 col-md-6 imgcol   ">
              <div className="second-home-img1 ">
                <img src={img2} alt=" home-img1" />
              </div>
            </div>
            <div className=" col col-12 col-md-6  descol   ">
              <h2 className='heading'>Download your shows to watch offline</h2>
              <p>Save your favorites easily and always have something to watch.</p>

            </div>
          </div>
        </div>

      </section>


      {/* third section */}
      <div className="sepration"></div>

      <section className='third-section '>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-first ">
              <h1>Watch <br /> every where</h1>
              <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="col-12 col-md-5 ">

            </div>
          </div>

        </div>

      </section>

      {/* forth section */}

      <div className="sepration"></div>

      <section className='second-section home-section forth-section'>
        <div className="container ">
          <div className="row">
            <div className="col col-12 col-md-6 imgcol   ">
              <div className="second-home-img1 ">
                <img src={kids} alt=" home-img1" />
              </div>
            </div>
            <div className=" col col-12 col-md-6  descol   ">
              <h2 className='forth-heading'>Create profile for kids</h2>
              <p className='forth-paragraph'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>

            </div>
          </div>
        </div>
      </section>


      {/* frequently question */}

      <div className="sepration"></div>

      <section className='frequently-question question'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Frequently asked question</h1>

            </div>


            <div className="ask-qus ">

              <div class="ask1">
                <div class=" details  container " onClick={handleClick1}
                >
                  <h4>What is Netflix?</h4>
                  <button >
                    {isVisible1 ? <svg class="icon2" id="cross1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-x-lg " viewBox="0 0 16 16">
                      <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> : <svg class="icon1" id="plus1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-plus-lg " viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>}


                  </button>
                </div>
                {isVisible1 &&
                  <p>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                    movies, anime, documentaries, and more on thousands of internet-connected devices.
                    <br /><br />
                    You can watch as much as you want, whenever you want without a single commercial – all
                    for one low monthly price. There's always something new to discover and new TV shows and
                    movies are added every week!
                  </p>
                }
              </div>

              <div class="ask1">
                <div class="container details" onClick={handleClick2}>
                  <h4>How much does Netflix cost? </h4>
                  <button >
                    {isVisible2 ? <svg class="icon2" id="cross1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-x-lg " viewBox="0 0 16 16">
                      <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> : <svg class="icon1" id="plus1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-plus-lg " viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>}


                  </button>
                </div>
                {isVisible2 &&
                  <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for
                    one fixed monthly fee. Plans range from Rs 1,100 to Rs 250 a month. No extra costs, no
                    contracts.
                  </p>
                }
              </div>
              <div class="ask1">
                <div class="container details" onClick={handleClick3}>
                  <h4>Where can I watch?</h4>
                  <button >
                    {isVisible3 ? <svg class="icon2" id="cross1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-x-lg " viewBox="0 0 16 16">
                      <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> : <svg class="icon1" id="plus1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-plus-lg " viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>}

                  </button>
                </div>
                {isVisible3 &&
                  <p>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
                    at netflix.com from your personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones, tablets, streaming media
                    players and game consoles.
                    <br /><br />
                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use
                    downloads to watch while you're on the go and without an internet connection. Take
                    Netflix with you anywhere.
                  </p>
                }
              </div>
              <div class="ask1">
                <div class="container details" onClick={handleClick4}>
                  <h4>How do I cancle?</h4>
                  <button>
                    {isVisible4 ? <svg class="icon2" id="cross1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-x-lg " viewBox="0 0 16 16">
                      <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> : <svg class="icon1" id="plus1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-plus-lg " viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>}

                  </button>
                </div>
                {isVisible4 &&
                  <p>
                    Netflix is flexible. There are no pesky contracts and no commitments. You can easily
                    cancel your account online in two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </p>
                }
              </div>
              <div class="ask1" >
                <div class="container details" onClick={handleClick5}>
                  <h4>What can I Watch on Netflix?</h4>
                  <button>
                    {isVisible5 ? <svg class="icon2" id="cross1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-x-lg " viewBox="0 0 16 16">
                      <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> : <svg class="icon1" id="plus1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-plus-lg " viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>}

                  </button>
                </div>
                {isVisible5 &&
                  <p>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                    award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                  </p>
                }
              </div>

              <div class="ask1">
                <div class="container details" id="data6" onClick={handleClick6}>
                  <h4>Is Netflix good for Kids?</h4>
                  <button>
                    {isVisible6 ? <svg class="icon2" id="cross1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-x-lg " viewBox="0 0 16 16">
                      <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> : <svg class="icon1" id="plus1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" className="bi bi-plus-lg " viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>}

                  </button>
                </div>
                {isVisible6 &&
                  <p>
                    The Netflix Kids experience is included in your membership to give parents control while
                    kids enjoy family-friendly TV shows and movies in their own space.
                    <br /><br />
                    Kids profiles come with PIN-protected parental controls that let you restrict the
                    maturity rating of content kids can watch and block specific titles you don’t want kids
                    to see.
                  </p>
                }
              </div>

            </div>

            <div className="col-12">
              <p>Ready to watch? Enter your email to create or restart your membership.</p>

              <div className='inputs'>
                <input type="text" placeholder="Email adress" />
                <button className="butn butn-red">Get Started  </button>
              
              </div>
            </div>
          </div>

        </div>
      </section>








    </>

  )
}
