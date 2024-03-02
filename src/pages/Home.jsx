import React from 'react'
import "../assets/css/Home.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div>
        <NavbarHome/>
    </div>

  
  <div className="MainContainer">
      <div className="Left">
        <div className="MainTitle">
           <h4>Learn about<br></br>investing and<br></br> Groww</h4>
        </div>
        <div className='SubContent'>
        <h4>You'll Wonder Where The Yellow Went, <br></br>When You Brush Your Teeth With Investment.</h4>
        </div>
        <div className='Start'>
        <button data-text="Awesome" class="button" onClick={()=>navigate("/signup")} >
    <span class="actual-text">&nbsp;Join&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;Join&nbsp;</span>
</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://res.cloudinary.com/digo6wzsf/image/upload/v1695119595/6736639_ztpo5a.jpg" alt=" " width="650" height="600"></img>
      </div>
      
  </div>
  <div className="second">
    <div className='secondLeft'>
      <div className='secondLeftIcon'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2V19h2v-1.5zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06A8.481 8.481 0 0 1 20.5 12c0 2.34-.95 4.47-2.49 6.01l1.06 1.06A9.969 9.969 0 0 0 22 12zM3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06A8.481 8.481 0 0 1 3.5 12zm14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06A6.976 6.976 0 0 0 19 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89zM7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05A6.976 6.976 0 0 0 5 12c0 1.93.78 3.68 2.05 4.95z"></path></svg>
      </div>
      <div className="secondLeftHeading">
        Markets in a snapshot.
      </div>
      <div className="secondLeftSub">
        <div>Simplified enough for beginners.<br></br>Detailed enough for experts.</div>
      </div>
      <div className='secondLeftBut'>
        <button data-text="Awesome" class="buttontj" onClick={()=>navigate("/signup")} >
        <span class="actual-text">&nbsp;START&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;START&nbsp;</span>
        </button>
      </div>
    </div>

    <div className='secondRight'>
    <img class="" src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocksExplore.b7e25ae9.svg" width="720" height="690" alt="" loading="lazy"/>
    </div>
  </div>

  <div className="third">
  <div className='thirdRight'>
      <img class="" src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/fastOrdering.b396cbcc.svg" width="630" height="690" alt="" loading="lazy"/>
      </div>
      <div className="thirdLeft">
          <div className='thirdLeftIcon'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></svg>
          </div>
          <div className='thirdLeftHeading'>
            Fast order execution.
          </div>
          <div className='thirdLeftSub'>
          <div>Never miss a market move.<br></br>Place orders in a breeze.</div>
          </div>
          <div className='thirdLeftBut'>
            <button data-text="Awesome" class="buttontj" onClick={()=>navigate("/signup")} >
            <span class="actual-text">&nbsp;EXECUTE&nbsp;</span>
            <span class="hover-text" aria-hidden="true">&nbsp;EXECUTE&nbsp;</span>
            </button>
      </div>
      </div>
      

      
  </div>
  <Footer/>
  </>
  )
}

export default Home;