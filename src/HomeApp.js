import React, { useState ,useEffect} from "react";
import "./App.css";
import LazyLoad from "react-lazyload";
import { Button, Modal } from "react-bootstrap";
import Premint from "./assets/Premint.svg";
// import Sheet from "./assets/Google Form.svg";
import Sheet from "./assets/Google Form V2.png";
import Point from "./assets/Point.svg";
import TwitterConvTrkr from "react-twitter-conversion-tracker";
// import sTimer from './context/context';
import Clock from "./components/Clock";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";


function HomeApp() {
  const truncate = (input, len) =>input.length > len ? `${input.substring(0, len)}...` : input;

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  const [showTimer, setShowTimer] = useState(true);
  // const {showTimer, setShowTimer} = useContext(sTimer);
  useEffect(() => {
    TwitterConvTrkr.init("o8f2i");
    console.log("init done")
  }, []);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    console.log("pageview");
    TwitterConvTrkr.pageView(); 
    setShow(true)
  };


  const connectWallet=()=>{
    dispatch(connect());
  }

  

  // useEffect(()=>{
  //   console.log(document.querySelectorAll(".disclosure"))
  //   console.log(document.getElementsByClassName("disclosure"))
  //   // if( document.getElementsByClassName("disclosure").length===0)return;
    
  //   let interval= setInterval(()=>{
  //     document.querySelectorAll(".disclosure").forEach(item=> {
  //       item.addEventListener('click', function (){
  //           item.classList.toggle('opened');
  //         }
  //       )
  //     });
  //     if(document.querySelectorAll(".disclosure").length>0){
  //       clearInterval(interval)
  //     }
  //   },[1])
   

    
  // },[document.querySelectorAll(".disclosure")])
  const openDisclosure=(num)=>{
    document.getElementById(`disclosure-${num}`).classList.toggle('opened');
  }

  function runTailer () {
     if (document.getElementById("video-container").classList.contains("has-video")){
      closeTrailer();   
     }else {
         document.getElementById("video").currentTime = 0;
         document.getElementById("video").play();
      document.getElementById("video-container").classList.add("has-video");
      document.getElementById("video-container").getElementsByTagName("video")[0].muted = false;
     }
     
  }

  function runGuide () {
    if (document.getElementById("video2-container").classList.contains("has-video")){
      closeGuide();   
    }else {
        document.getElementById("video2").currentTime = 0;
        document.getElementById("video2").play();
     document.getElementById("video2-container").classList.add("has-video");
     document.getElementById("video2-container").getElementsByTagName("video")[0].muted = false;
    }
    
 }

  function closeTrailer () {
    document.getElementById("video-container").getElementsByTagName("video")[0].muted = true;
    document.getElementById("video-container").classList.remove("has-video");
  }
  function closeGuide () {
    document.getElementById("video2-container").getElementsByTagName("video")[0].muted = true;
    document.getElementById("video2-container").classList.remove("has-video");
  }
  return (


      <div className="App">
        <nav className="main-content" onLoad={window["initDisc"]}>
          <img
            src="/assets/06_backgrounds/@1x/background_1.png"
            style={{ top: "50px", width: "2005px", left: "calc(50% - 1002px)" }}
            alt=""
            className="background-image mb-hd blend "
          />
          <img
            src="/assets/06_backgrounds/@1x/background_1_m.jpg"
            style={{ width: "100vw", height: "auto!important" }}
            alt=""
            className="background-image mb-vb blend "
          />
              <header id="mint-wolfboss" className="header">
          <div className="header__left">
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-between",
              }}
              id="hleft-ct"
            >
              <a href="/">
                <img
                  className="header__left__logo"
                  src={"/assets/01_logo/wolf_boss_logo.svg"}
                  alt=""
                />
              </a>
              <img
                src="/assets/00_icons/menu.svg"
                className="mb-vb"
                id="open-header-button"
                onClick={window["header"]}
                alt=""
              />

              <img
                src="/assets/00_icons/close.svg"
                className="mb-vb"
                id="close-header-button"
                onClick={window["header"]}
                alt=""
              />
            </div>
            <ul className="header__left__links">
              <li className="header__left__links__item">
                <a href="#features">Features</a>
              </li>
              <li className="header__left__links__item">
                <a href="#roadmap">Roadmap</a>
              </li>
              <li className="header__left__links__item">
                <a href="#team">Team</a>
              </li>
              <li className="header__left__links__item">
                <a href="#mint">How to mint</a>
              </li>
              <li className="header__left__links__item">
                {" "}
                <a href="#faq">FAQ</a>{" "}
              </li>
            </ul>
          </div>
          <div className="header__right">
            <div>
              <a
                href="https://twitter.com/wolfboss_nft"
                target="_blank"
                rel="noreferrer"
                className="social-button transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M8.28 20.126c7.544 0 11.672-6.256 11.672-11.672 0-.176 0-.352-.008-.528a8.357 8.357 0 0 0 2.048-2.128 8.314 8.314 0 0 1-2.36.648 4.127 4.127 0 0 0 1.808-2.272 8.16 8.16 0 0 1-2.608.992A4.095 4.095 0 0 0 15.84 3.87a4.107 4.107 0 0 0-4.104 4.104c0 .32.04.632.104.936a11.649 11.649 0 0 1-8.456-4.288 4.113 4.113 0 0 0 1.272 5.48A4.15 4.15 0 0 1 2.8 9.59v.056a4.11 4.11 0 0 0 3.288 4.024 4 4 0 0 1-1.08.144c-.264 0-.52-.024-.768-.072a4.102 4.102 0 0 0 3.832 2.848 8.228 8.228 0 0 1-5.096 1.76c-.328 0-.656-.016-.976-.056a11.669 11.669 0 0 0 6.28 1.832"
                      fillOpacity=".6"
                      fill="#E0E0FF"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/wolfboss_nft/"
                target="_blank"
                rel="noreferrer"
                className="social-button transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M13.028 2c1.8.004 2.18.018 3.095.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.042.914.056 1.295.06 3.095v2.056c-.004 1.8-.018 2.18-.06 3.095-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-.914.042-1.295.056-3.095.06h-2.056c-1.8-.004-2.18-.018-3.095-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.042-.914-.056-1.295-.06-3.095v-2.056c.004-1.8.018-2.18.06-3.095.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465.914-.042 1.295-.056 3.095-.06zm-.472 1.802h-1.112c-1.559.001-2.173.008-2.76.028l-.195.007-.53.023c-.975.045-1.504.207-1.857.344-.466.182-.8.399-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857l-.023.53-.007.195c-.02.587-.027 1.201-.028 2.76v1.112c.001 1.559.008 2.173.028 2.76l.007.195.023.53c.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344l.53.023.195.007c.587.02 1.201.027 2.76.028h1.112c1.559-.001 2.173-.008 2.76-.028l.195-.007.53-.023c.975-.045 1.504-.207 1.857-.344.466-.182.8-.399 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857l.023-.53.007-.195c.02-.587.027-1.201.028-2.76v-1.112c-.001-1.559-.008-2.173-.028-2.76l-.007-.195a86.81 86.81 0 0 0-.023-.53c-.045-.975-.207-1.504-.344-1.857a3.098 3.098 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344a86.802 86.802 0 0 0-.53-.023l-.195-.007c-.587-.02-1.201-.027-2.76-.028zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"
                      fillOpacity=".6"
                      fill="#E0E0FF"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="https://discord.gg/wolfboss"
                target="_blank"
                rel="noreferrer"
                className="social-button transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M18.93 5.644a16.493 16.493 0 0 0-4.07-1.263.062.062 0 0 0-.066.031c-.175.313-.37.72-.506 1.041a15.226 15.226 0 0 0-4.573 0A10.537 10.537 0 0 0 9.2 4.412a.064.064 0 0 0-.065-.031 16.447 16.447 0 0 0-4.07 1.263.058.058 0 0 0-.028.023C2.444 9.54 1.734 13.319 2.083 17.05a.069.069 0 0 0 .026.047 16.585 16.585 0 0 0 4.994 2.525.065.065 0 0 0 .07-.023c.385-.526.728-1.08 1.022-1.662a.063.063 0 0 0-.035-.088 10.922 10.922 0 0 1-1.56-.744.064.064 0 0 1-.007-.106c.105-.079.21-.16.31-.243a.062.062 0 0 1 .065-.009c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 0 1 .066.008c.1.083.205.165.31.244a.064.064 0 0 1-.005.106c-.499.291-1.017.537-1.561.743a.064.064 0 0 0-.034.089c.3.581.643 1.135 1.02 1.66a.063.063 0 0 0 .07.025 16.53 16.53 0 0 0 5.003-2.525.064.064 0 0 0 .026-.046c.417-4.314-.699-8.061-2.957-11.384a.05.05 0 0 0-.026-.023zM8.684 14.778c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.111-.796 2.016-1.798 2.016zm6.646 0c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.111-.788 2.016-1.797 2.016z"
                      fillOpacity=".6"
                      fill="#E0E0FF"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="https://opensea.io/collection/wolfboss"
                target="_blank"
                rel="noreferrer"
                className="social-button transparent"
              >
                <svg width="24" height="24" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                        <path d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"
                        fill="#E0E0FF"
                        fillRule="nonzero"
                        fillOpacity=".6"
                        />
                </g></svg>
              </a>
            </div>
           
            {blockchain.account!==null?
                <button className="pink-button" >
                  <div>{truncate(blockchain.account,10)}</div>
                </button>
                :
                <button className="pink-button" onClick={()=>{showTimer===true?handleShow():connectWallet()}}>
                  {showTimer===false?
                   <div>Connect Wallet</div>:
                   <div>Mint NFT</div>
                  }
                 
                </button>
              }
              
           
          </div>
        </header>
          
          <div className="first-screen__container container">
            <div>
              <img src="/assets/01_logo/@1x/wolf_boss_logo_big.png" alt="" />
            </div>
            <div>
            { showTimer ? <h1>Coming soon</h1> : <h1> PRESALE IS LIVE</h1> }
              <img
                src="/assets/01_logo/@1x/wolf_boss_sign.png"
                srcSet="/assets/01_logo/@2x/wolf_boss_sign@2x.png 2x"
                alt=""
              />
              <p>
                Join the pack with the 6666 Wolfboss NFT digital art collection
              </p>
              <Clock showTimer={showTimer} setShowTimer={setShowTimer}/>
              <div>
              { showTimer ?
              <button className="b pink-button" onClick={handleShow}>
              <div> Mint NFT</div>
            </button>
                :""}
              { showTimer ?
                <a
                href="https://discord.gg/wolfboss"
                rel="noreferrer"
                target="_blank"
                className="b purple-long-button"
              >
                <div>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path
                          d="M18.93 5.644a16.493 16.493 0 0 0-4.07-1.263.062.062 0 0 0-.066.031c-.175.313-.37.72-.506 1.041a15.226 15.226 0 0 0-4.573 0A10.537 10.537 0 0 0 9.2 4.412a.064.064 0 0 0-.065-.031 16.447 16.447 0 0 0-4.07 1.263.058.058 0 0 0-.028.023C2.444 9.54 1.734 13.319 2.083 17.05a.069.069 0 0 0 .026.047 16.585 16.585 0 0 0 4.994 2.525.065.065 0 0 0 .07-.023c.385-.526.728-1.08 1.022-1.662a.063.063 0 0 0-.035-.088 10.922 10.922 0 0 1-1.56-.744.064.064 0 0 1-.007-.106c.105-.079.21-.16.31-.243a.062.062 0 0 1 .065-.009c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 0 1 .066.008c.1.083.205.165.31.244a.064.064 0 0 1-.005.106c-.499.291-1.017.537-1.561.743a.064.064 0 0 0-.034.089c.3.581.643 1.135 1.02 1.66a.063.063 0 0 0 .07.025 16.53 16.53 0 0 0 5.003-2.525.064.064 0 0 0 .026-.046c.417-4.314-.699-8.061-2.957-11.384a.05.05 0 0 0-.026-.023zM8.684 14.778c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.111-.796 2.016-1.798 2.016zm6.646 0c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.111-.788 2.016-1.797 2.016z"
                          fill="#5865F2"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <span>Join Discord</span>
                  </div>
                </div>
              </a>
                :''}
                { showTimer ?
                <button className="b orange-long-button" onClick={handleShow}>
                <div> Get Whitelisted</div>
              </button>
              :'' }
              </div>
              <div></div>
            </div>
            <div id="fs-card-container">
              <div
                className="card"
                style={{
                  right: "0",
                  top: "-74px",
                  left: "auto",
                  transform: "rotate(-4deg)",
                }}
              >
                {/* <img src="/assets/03_cards/@1x/alpha.jpg" alt="" /> */}
                <img
                  src="/assets/00_cards/@1x/00.jpg"
                  srcSet="/assets/00_cards/@2x/00@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div
                className="card"
                style={{
                  right: "0",
                  top: "-74px",
                  left: "auto",
                  transform: "rotate(7deg)",
                }}
              >
                {/* <img src="/assets/03_cards/@1x/bored.jpg" alt="" /> */}
                <img
                  src="/assets/00_cards/@1x/02.jpg"
                  srcSet="/assets/00_cards/@2x/02@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div
                className="card"
                style={{ right: "0", top: "-74px", left: "auto" }}
              >
                {/* <img src="/assets/03_cards/@1x/alpha.jpg" alt="" /> */}
                <img
                  src="/assets/00_cards/@1x/01.jpg"
                  srcSet="/assets/00_cards/@2x/01@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div
                className="card"
                style={{
                  right: "-270px",
                  top: "-62px",
                  left: "auto",
                  transform: "rotate(21deg)",
                  zIndex: "95",
                }}
              >
                {/* <img src="/assets/03_cards/@1x/agressive.jpg" alt="" /> */}
                <img
                  src="/assets/00_cards/@1x/03.jpg"
                  srcSet="/assets/00_cards/@2x/03@2x.jpg 2x"
                  alt=""
                />
              </div>
            </div>
          </div>
          <LazyLoad once>
            <div
              className="first-screen__video__container container"
              data-aos="fade-up"
            >
              <h2 style={{ zIndex: "100" }}>Watch the official teaser video</h2>
              <div id="video-container">
                {/* <video poster="/assets/videos/@1x/video_1.jpg" id="video">
                  <source src="/assets/videos/video.mp4" type="video/mp4"></source>
              </video> */}
                <video poster="/assets/videos/poster.gif" id="video">
                  <source
                    src="/assets/videos/video.mp4"
                    type="video/mp4"
                  ></source>
                </video>
                {/* <img src="/assets/05_images/@1x/video_1.jpg" alt="" /> */}

                <img src="/assets/videos/poster.gif" alt="" />
                <button onClick={()=>runTailer()} className="pink-button-icon">
                  <div>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h32v32H0z" />
                        <path
                          d="M11.29 23.573c.395 0 .737-.123 1.186-.386l10.467-6.065c.783-.457 1.143-.844 1.143-1.459 0-.615-.36-1.002-1.143-1.459L12.476 8.14c-.449-.255-.791-.387-1.187-.387-.773 0-1.362.589-1.362 1.556v12.717c0 .958.589 1.547 1.362 1.547z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <div></div>
                  </div>
                </button>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad once>
            <div className="second-screen">
              <div className="second-screen__container container" id="features">
                <h1> Features</h1>

                <div>
                  <div data-aos="fade-right">
                    <div style={{ zIndex: "11" }}>
                      <img
                        src="/assets/05_images/@1x/oculus.png"
                        className="mb-hd"
                        alt=""
                      />
                      <img
                        src="/assets/05_images/@1x/oculus_m.png"
                        className="mb-vb"
                        alt=""
                      />
                      <h5>VR/Mobile</h5>
                    </div>
                    <div className="ss-line"></div>
                    <div style={{ zIndex: "10" }}>
                      <img
                        src="/assets/05_images/@1x/xbox.jpg"
                        className="mb-hd"
                        alt=""
                      />
                      <img
                        src="/assets/05_images/@1x/xbox_m.jpg"
                        className="mb-vb"
                        alt=""
                      />
                      <h5>
                        Nextgen/ <br />
                        Console
                      </h5>
                    </div>
                  </div>

                  <div data-aos="fade-left">
                    <div className="info-table">
                      <div>
                        <img src="/assets/00_icons/card.svg" alt="" />
                      </div>
                      <nav>
                        <h2>Game Ready Assets</h2>
                        <p>
                          Ready-to-use, optimized assets for game avatar linking!
                        </p>
                      </nav>
                    </div>
                    <div className="info-table">
                      <div style={{ backgroundColor: "#f545620f" }}>
                        <img src="/assets/00_icons/feature.svg" alt="" />
                      </div>
                      <nav>
                        <h2>Join The Elite</h2>
                        <p>
                          Special events, giveaways and perks strictly for token
                          holders only
                        </p>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad once>
            <div className="third-screen">
              <img
                src="assets/06_backgrounds/@1x/01.jpg"
                srcSet="assets/06_backgrounds/@2x/01@2x.jpg 2x"
                width="1920"
                style={{ mixBlendMode: "lighten", left: "calc(50% - 960px)" }}
                alt=""
                className="background-image"
              />

              <div className="third-screen__container container">
                <div>
                  <div>
                    <h1>WolfBoss Collection</h1>
                    <p>
                      The unique collection crafted by WolfBoss is an AI
                      randomized conceptualization to represent your supreme
                      digital identity
                    </p>
                  </div>
                  <div>
                    <img
                      src="/assets/05_images/@1x/social_background.png"
                      className="mb-hd"
                      alt=""
                    />
                    <img
                      src="/assets/05_images/@1x/social_background_m.png"
                      className="mb-vb"
                      alt=""
                    />
                    <div>
                      <h3>Connect with the wolfpack on our social Networks!</h3>
                      <div>
                        <a
                          href="https://twitter.com/wolfboss_nft"
                          target="_blank"
                          rel="noreferrer"
                          className="social-button"
                        >
                          <img src="/assets/00_icons/twitter.svg" alt="" />
                        </a>
                        <a
                          href="https://www.instagram.com/wolfboss_nft/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-button"
                        >
                          <img src="/assets/00_icons/instagram.svg" alt="" />
                        </a>
                        <a
                          href="https://discord.gg/wolfboss"
                          target="_blank"
                          rel="noreferrer"
                          className="social-button"
                        >
                          <img src="/assets/00_icons/discord.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div data-aos="flip-left" data-aos-duration="300">
                    <h5>ALPHA</h5>
                    <img
                      src="/assets/03_cards/@1x/00.jpg"
                      srcSet="/assets/03_cards/@2x/00@2x.jpg 2x"
                      alt=""
                    />
                  </div>
                  <div data-aos="flip-left" data-aos-duration="600">
                    {" "}
                    <h5>AGRESSIVE</h5>
                    <img
                      src="/assets/03_cards/@1x/01.jpg"
                      srcSet="/assets/03_cards/@2x/01@2x.jpg 2x"
                      alt=""
                    />
                  </div>
                  <div data-aos="flip-left" data-aos-duration="900">
                    {" "}
                    <h5>BORED</h5>
                    <img
                      src="/assets/03_cards/@1x/02.jpg"
                      srcSet="/assets/03_cards/@2x/02@2x.jpg 2x"
                      alt=""
                    />
                  </div>
                  <div data-aos="flip-left" data-aos-duration="1200">
                    {" "}
                    <h5>CLEVER</h5>
                    <img
                      src="/assets/03_cards/@1x/03.jpg"
                      srcSet="/assets/03_cards/@2x/03@2x.jpg 2x"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad once>
            <div className="fourth-screen" id="roadmap">
              <img
                src="/assets/06_backgrounds/@1x/background_3.png"
                srcSet="/assets/06_backgrounds/@2x/background_3@2x.png 2x"
                className="background-image mb-hd"
                style={{ height: "1478px", width: "120vw", left: "-10vw" }}
                alt=""
              />
              <img
                src="/assets/06_backgrounds/@1x/background_3_m.png"
                srcSet="/assets/06_backgrounds/@2x/background_3_m@2x.png 2x"
                className="background-image mb-vb"
                style={{ width: "100vw" }}
                alt=""
              />
              <div className="fourth-screen__container container">
                <h1>Roadmap</h1>
                <img
                  src="/assets/04_roadmap/svg/roadmap_path.svg"
                  style={{ top: "128px", left: "calc(50% - 502px)" }}
                  className="background-image mb-hd"
                  alt=""
                />
                <img
                  src="/assets/01_logo/@1x/wolf_boss_logo_silver.png"
                  className="background-image mb-hd"
                  style={{
                    top: "515px",
                    left: "-147px",
                    width: "638px",
                    height: "660px",
                  }}
                  alt=""
                />
                <div>
                  <div>
                    <div>
                      <div
                        className="roadmap-item"
                        style={{ marginRight: "24px" }}
                      >
                        <img
                          src="/assets/04_roadmap/@1x/one.png"
                          srcSet="/assets/04_roadmap/@2x/one@2x.png 2x"
                          alt=""
                        />
                        <h4>Phase One: WolfBoss Begins</h4>
                        <p>
                          Community building and engagement on social media
                          through promotions, giveaways and contests. We will
                          initiate partner introductions.
                        </p>
                      </div>
                      <div className="roadmap-item">
                        <img
                          src="/assets/04_roadmap/@1x/two.png"
                          srcSet="/assets/04_roadmap/@2x/two@2x.png 2x"
                          alt=""
                        />
                        <h4>Phase Two: Establishment</h4>
                        <p>
                          Focus strongly on art quality and building a healthy
                          community for sustainable growth. Recruit new members to
                          the pack for Whitelist opportunities to drive and show
                          domination with WolfBoss.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="roadmap-item wide">
                      <img
                        src="/assets/04_roadmap/@1x/three.png"
                        srcSet="/assets/04_roadmap/@2x/three@2x.png 2x"
                        alt=""
                      />
                      <h4>Phase Three: Exploration</h4>
                      <p>
                        Set and prepare for the official mint launch of the
                        WolfBoss NFT collection with promotions, press &
                        partnerships.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div
                      className="roadmap-item wide"
                      style={{ marginLeft: "224px", marginRight: "136px" }}
                    >
                      <img
                        src="/assets/04_roadmap/@1x/four.png"
                        srcSet="/assets/04_roadmap/@2x/four@2x.png 2x"
                        alt=""
                      />
                      <h4>Phase Four: Expansion</h4>
                      <p>
                        Lead the pack into sellout with community events, special
                        giveaways & promotion saturation in the NFT digital space.
                      </p>
                    </div>
                    <div className="roadmap-item wide">
                      <img
                        src="/assets/04_roadmap/@1x/five.png"
                        srcSet="/assets/04_roadmap/@2x/five@2x.png 2x"
                        alt=""
                      />
                      <h4>Phase Five: Establishment</h4>
                      <p>
                        Becoming a WolfBoss has its advantages, with our plan to
                        Invest into a community members startup idea, securing a
                        fixed term dividend which will be divided amongst the
                        pack. Maintain and grow the community further and secure
                        our digital footprint in the metaverse by purchasing land
                        in the Sandbox for our virtual hangout space.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="roadmap-item wide">
                      <img
                        src="/assets/04_roadmap/@1x/six.png"
                        srcSet="/assets/04_roadmap/@2x/six@2x.png 2x"
                        alt=""
                      />
                      <h4>Phase Six: Final Mission</h4>
                      <p>
                        We introduce more members to the pack, evolve our
                        community to be even stronger and offer variations of
                        species/mutations to further grow our NFT eco-system. Use
                        our 3D ready assets for games, VR & movies to build the
                        WolfBoss brand and create global awareness with
                        partnerships/PR. Invest into additional community startups
                        and forever expand Web3 & crypto development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad once>
            <div className="fifth-screen">
              <img
                src="/assets/06_backgrounds/@1x/background_4.jpg"
                className="background-image mb-hd"
                style={{
                  width: "2150px",
                  top: "-18px",
                  left: "calc(50vw - 1019px)",
                  mixBlendMode: "lighten",
                }}
                alt=""
              />
              <img
                src="/assets/06_backgrounds/@1x/background_4_m.jpg"
                className="background-image mb-vb"
                style={{
                  width: "100vw",
                  top: "0px",
                  left: "0",
                  mixBlendMode: "lighten",
                  zIndex: "0",
                }}
                alt=""
              />

              <div className="fifth-screen__container container">
                <h1>Utility</h1>
                <div>
                  <div data-aos="fade">
                    <div>
                      <div></div>{" "}
                      <p>
                        Unique NFT deployed on Secured Ethereum Blockchain Smart
                        Contract
                      </p>
                    </div>
                    <div>
                      <div></div>{" "}
                      <p>Game Ready 3D Avatar (Mobile, VR, Nextgen, Movie)</p>
                    </div>
                    <div>
                      <div></div>{" "}
                      <p>
                        Investing Into Community Startups With Fixed Dividends &
                        Divided With Token Holders
                      </p>
                    </div>
                    <div>
                      <div></div>{" "}
                      <p>
                        Future Sandbox Virtual Hangout Space For Token Holders
                      </p>
                    </div>
                    <div>
                      <div></div>{" "}
                      <p>
                        Special Event Invitations For Community Pack Members /
                        Token Holders
                      </p>
                    </div>
                  </div>
                </div>

                <button className="b pink-button" onClick={handleShow}>
                    <div> Get Whitelisted</div>
                  </button>
                <div>
                  <div>
                    <div>
                      <img src="/assets/05_images/@2x/wolf_desk@2x.jpg" alt="" />
                    </div>
                    <div>
                      <h2>Become a member of the pack</h2>
                      <a
                        href="https://discord.gg/wolfboss"
                        rel="noreferrer"
                        target="_blank"
                        className="big-discord-button"
                      >
                        <div>
                          <img
                            src="/assets/00_icons/discord_w.svg"
                            style={{ width: "48px", height: "48px" }}
                            alt=""
                          />
                          <p>Join the Discord</p>
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad once>
            <div className="sixth-screen">
              <img
                src="/assets/06_backgrounds/@1x/background_5.png"
                style={{
                  zIndex: "-1",
                  width: "1920px",
                  top: "-18px",
                  left: "calc(50% - 960px)",
                }}
                className="background-image mb-hd"
                alt=""
              />
              <img
                src="/assets/06_backgrounds/@1x/background_5_m_1.png"
                style={{ zIndex: "-1", width: "360px", left: "0" }}
                className="background-image mb-vb"
                alt=""
              />
              <img
                src="/assets/06_backgrounds/@1x/background_5_m_2.png"
                style={{ zIndex: "-1", width: "360px", right: "0", top: "683px" }}
                className="background-image mb-vb"
                alt=""
              />

              <div className="sixth-screen__container container" id="team">
                <h1>Team</h1>
                <h6>WolfBoss team of professionals</h6>

                <div data-aos="fade-left">
                  <div>
                    <img
                      src="/assets/07_team/@1x/ash.jpg"
                      srcSet="/assets/07_team/@2x/ash@2x.jpg 2x"
                      alt=""
                    />
                    <h1>Ash H</h1>
                    <p>Founder & Lead Strategist</p>
                    <a
                        href="https://au.linkedin.com/in/ash-harling"
                        target="_blank" className="team_social_link"
                      >
                        <img
                          src="/assets/07_team/@1x/Linkedin.jpg"
                          width="30"
                          height="30"
                        />
                      </a>
                  </div>
                  <div>
                    <img
                      src="/assets/07_team/@1x/andrew.jpg"
                      srcSet="/assets/07_team/@2x/andrew@2x.jpg 2x"
                      alt=""
                    />
                    <h1>Andy H</h1>
                    <p>Marketing Guru</p>
                  </div>
                  <div>
                    <img src="/assets/07_team/@1x/maria.jpg" alt="" />
                    <h1>Maria N</h1>
                    <p>Artist</p>
                    <a
                        href="https://www.artstation.com/marianova"
                        target="_blank" className="team_social_link"
                      >
                        <img
                          src="/assets/07_team/@1x/Arstation.jpg"
                          width="30"
                          height="30"
                        />
                      </a>
                  </div>
                  <div>
                    <img
                      src="/assets/07_team/@1x/carlos.jpg"
                      srcSet="/assets/07_team/@2x/carlos@2x.jpg 2x"
                      alt=""
                    />
                    <h1>Carlos P</h1>
                    <p>Community Leader</p>
                      <a
                        href="https://www.linkedin.com/in/carlos-fr-pinheiro/"
                        target="_blank" className="team_social_link"
                      >
                        <img
                          src="/assets/07_team/@1x/Linkedin.jpg"
                          width="30"
                          height="30"
                        />
                      </a>
                  </div>
                  <div>
                    <img
                      src="/assets/07_team/@1x/sergey.jpg"
                      srcSet="/assets/07_team/@2x/sergey@2x.jpg 2x"
                      alt=""
                    />
                    <h1>Sergey K</h1>
                    <p>
                      Social Media Manager
                    </p>
                      <a
                        href="#"
                        target="_blank" className="team_social_link"
                      >
                        <img
                          src="/assets/07_team/@1x/Linkedin.jpg"
                          width="30"
                          height="30"
                        />
                      </a>
                  </div>
                  <div>
                    <img
                      src="/assets/07_team/@1x/baraka.jpg"
                      srcSet="/assets/07_team/@2x/baraka@2x.jpg 2x"
                      alt=""
                    />
                    <h1>Baraka C</h1>
                    <p>
                      Blockchain Developer
                    </p>
                  </div>
                </div>

                <div data-aos="fade-right" id="mint">
                  <div>
                    <h1>How to mint</h1>{" "}
                    
                    {showTimer?
                      <button className="pink-button" onClick={handleShow}>
                        <div> Mint NFT</div>
                      </button>:
                      <a href='#mint-wolfboss'>
                        <button className="pink-button" >
                          <div> Mint NFT</div>
                        </button>
                      </a>
                    }
                    
                  
                  </div>
                  <div id="video2-container">
                    <div
                      style={{
                        height: "100%",
                        overflow: "hidden",
                        boxSizing: "border-box",
                        borderRadius: "2rem",
                      }}
                    >
                      <img
                        src="/assets/05_images/@1x/video_2.jpg"
                        srcSet="/assets/05_images/@2x/video_2@2x.jpg 2x"
                        alt=""
                        width="100%"
                      />
                    </div>
                    <video poster="/assets/05_images/@1x/video_2.jpg" id="video2">
                      <source
                        src="/assets/videos/video-how-to-mint.mp4"
                        type="video/mp4"
                      ></source>
                    </video>
                    <button
                      className="pink-button-icon"
                      onClick={()=>runGuide()}
                    >
                      <div>
                        <img src="/assets/00_icons/play_f.svg" alt="" />
                        <div></div>
                      </div>
                    </button>
                    <h1>Watch guide</h1>
                  </div>
                </div>
              </div>
              <div className="bg"></div>
            </div>
          </LazyLoad>
          <LazyLoad once>
            <div className="seventh-screen">
              <img
                src="/assets/06_backgrounds/@1x/background_6.png"
                className="background-image"
                style={{
                  width: "1920px",
                  left: "calc(50% - 960px)",
                  zIndex: "-1",
                }}
                alt=""
              />

            <div
              className="seventh-screen__container container"
              id="faq"
              data-aos="fade"
            >
              <h1>FAQ</h1>
              <div>
                <div  id="disclosure-1" className="disclosure"  onClick={()=>{openDisclosure(1)}}>
                  <div className="disclosure__header">
                    <h1>WHEN WILL THE OFFICIAL WOLFBOSS LAUNCH TAKE PLACE?</h1>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path
                          d="M11.996 19.07c.57 0 1.04-.484 1.04-1.015v-4.649h4.554c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039h-4.555V6.68c0-.547-.469-1.016-1.039-1.016-.562 0-1.031.469-1.031 1.016v4.648H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h4.555v4.649c0 .53.469 1.015 1.031 1.015z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>minus</title>
                      <g
                        id="02_assets"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="00_logo"
                          transform="translate(-1619.000000, -110.000000)"
                        >
                          <g
                            id="minus"
                            transform="translate(1619.000000, 110.000000)"
                          >
                            <rect
                              id="frame"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            ></rect>
                            <path
                              d="M17.5898438,13.40625 C18.1367188,13.40625 18.6132812,12.9375 18.6132812,12.3671875 C18.6132812,11.8046875 18.1367188,11.328125 17.5898438,11.328125 L6.41015625,11.328125 C5.87890625,11.328125 5.38671875,11.8046875 5.38671875,12.3671875 C5.38671875,12.9375 5.87890625,13.40625 6.41015625,13.40625 L17.5898438,13.40625 Z"
                              id="shape"
                              fill="#E0E0FF"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="disclosure__body">
                    <p>
                    Wolfboss Mint Goes LIVE!
                    </p>
                    <p>
                    Presale: July 27th, 2022 @ 2:00PM UTC </p>
                    <p>Public Sale: July 28th, 2022 @ 2:00PM UTC </p>

                  </div>
                </div>
                <div id="disclosure-2" className="disclosure"  onClick={()=>{openDisclosure(2)}}>
                  <div className="disclosure__header">
                    <h1>HOW CAN I JOIN YOU?</h1>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path
                          d="M11.996 19.07c.57 0 1.04-.484 1.04-1.015v-4.649h4.554c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039h-4.555V6.68c0-.547-.469-1.016-1.039-1.016-.562 0-1.031.469-1.031 1.016v4.648H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h4.555v4.649c0 .53.469 1.015 1.031 1.015z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>minus</title>
                      <g
                        id="02_assets"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="00_logo"
                          transform="translate(-1619.000000, -110.000000)"
                        >
                          <g
                            id="minus"
                            transform="translate(1619.000000, 110.000000)"
                          >
                            <rect
                              id="frame"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            ></rect>
                            <path
                              d="M17.5898438,13.40625 C18.1367188,13.40625 18.6132812,12.9375 18.6132812,12.3671875 C18.6132812,11.8046875 18.1367188,11.328125 17.5898438,11.328125 L6.41015625,11.328125 C5.87890625,11.328125 5.38671875,11.8046875 5.38671875,12.3671875 C5.38671875,12.9375 5.87890625,13.40625 6.41015625,13.40625 L17.5898438,13.40625 Z"
                              id="shape"
                              fill="#E0E0FF"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="disclosure__body">
                    <p>
                      To join the wolfpack, simply follow us on social media and
                      join our Discord community{" "}
                      <a
                        href="https://discord.gg/wolfboss"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                    </p>
                  </div>
                </div>
                <div id="disclosure-3" className="disclosure"  onClick={()=>{openDisclosure(3)}}>
                  <div className="disclosure__header">
                    <h1> WHAT WILL BE THE PRICE OF WOLFBOSS NFT PER 1 MINT?</h1>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path
                          d="M11.996 19.07c.57 0 1.04-.484 1.04-1.015v-4.649h4.554c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039h-4.555V6.68c0-.547-.469-1.016-1.039-1.016-.562 0-1.031.469-1.031 1.016v4.648H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h4.555v4.649c0 .53.469 1.015 1.031 1.015z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>minus</title>
                      <g
                        id="02_assets"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="00_logo"
                          transform="translate(-1619.000000, -110.000000)"
                        >
                          <g
                            id="minus"
                            transform="translate(1619.000000, 110.000000)"
                          >
                            <rect
                              id="frame"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            ></rect>
                            <path
                              d="M17.5898438,13.40625 C18.1367188,13.40625 18.6132812,12.9375 18.6132812,12.3671875 C18.6132812,11.8046875 18.1367188,11.328125 17.5898438,11.328125 L6.41015625,11.328125 C5.87890625,11.328125 5.38671875,11.8046875 5.38671875,12.3671875 C5.38671875,12.9375 5.87890625,13.40625 6.41015625,13.40625 L17.5898438,13.40625 Z"
                              id="shape"
                              fill="#E0E0FF"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="disclosure__body">
                    <p>Per 1 Wolfboss NFT Mint </p>
                    <p> Presale Price: 0.08 ETH </p> 
                    <p>Public Sale Price: 0.1 ETH</p>
                  </div>
                </div>
                <div id="disclosure-4" className="disclosure"  onClick={()=>{openDisclosure(4)}}>
                  <div className="disclosure__header">
                    <h1>HOW DO I GET WHITELISTED FOR WOLFBOSS NFT?</h1>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path
                          d="M11.996 19.07c.57 0 1.04-.484 1.04-1.015v-4.649h4.554c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039h-4.555V6.68c0-.547-.469-1.016-1.039-1.016-.562 0-1.031.469-1.031 1.016v4.648H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h4.555v4.649c0 .53.469 1.015 1.031 1.015z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>minus</title>
                      <g
                        id="02_assets"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="00_logo"
                          transform="translate(-1619.000000, -110.000000)"
                        >
                          <g
                            id="minus"
                            transform="translate(1619.000000, 110.000000)"
                          >
                            <rect
                              id="frame"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            ></rect>
                            <path
                              d="M17.5898438,13.40625 C18.1367188,13.40625 18.6132812,12.9375 18.6132812,12.3671875 C18.6132812,11.8046875 18.1367188,11.328125 17.5898438,11.328125 L6.41015625,11.328125 C5.87890625,11.328125 5.38671875,11.8046875 5.38671875,12.3671875 C5.38671875,12.9375 5.87890625,13.40625 6.41015625,13.40625 L17.5898438,13.40625 Z"
                              id="shape"
                              fill="#E0E0FF"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="disclosure__body">
                    <p>
                      To get whitelisted for the WOLFBOSS collection, you can
                      register your interest{" "}
                    

                      <a
                        rel="noreferrer"
                        onClick={handleShow}
                        target="_blank"
                        style={{
                          color: "#ff5e00",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        here
                      </a>{" "}
                      through our online form and or join our Discord{" "}
                      <a
                        href="https://discord.gg/wolfboss"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>{" "}
                      for more information
                    </p>
                  </div>
                </div>
                <div id="disclosure-5" className="disclosure"  onClick={()=>{openDisclosure(5)}}>
                  <div className="disclosure__header">
                    <h1>HOW MANY WOLFBOSS NFTs CAN I MINT PER TRANSACTION?</h1>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path
                          d="M11.996 19.07c.57 0 1.04-.484 1.04-1.015v-4.649h4.554c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039h-4.555V6.68c0-.547-.469-1.016-1.039-1.016-.562 0-1.031.469-1.031 1.016v4.648H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h4.555v4.649c0 .53.469 1.015 1.031 1.015z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>minus</title>
                      <g
                        id="02_assets"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="00_logo"
                          transform="translate(-1619.000000, -110.000000)"
                        >
                          <g
                            id="minus"
                            transform="translate(1619.000000, 110.000000)"
                          >
                            <rect
                              id="frame"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            ></rect>
                            <path
                              d="M17.5898438,13.40625 C18.1367188,13.40625 18.6132812,12.9375 18.6132812,12.3671875 C18.6132812,11.8046875 18.1367188,11.328125 17.5898438,11.328125 L6.41015625,11.328125 C5.87890625,11.328125 5.38671875,11.8046875 5.38671875,12.3671875 C5.38671875,12.9375 5.87890625,13.40625 6.41015625,13.40625 L17.5898438,13.40625 Z"
                              id="shape"
                              fill="#E0E0FF"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="disclosure__body">
                    <p>
                    During Presale </p>
                      <br/>
                    <p>OG Role: Up to 6 per wallet</p>
                    <p>WL Role: Up to 4 per wallet</p>

                    <p>During Public Sale: </p>

                    <p>Up to 5 per wallet
                    </p>
                  </div>
                </div>
                <div id="disclosure-6" className="disclosure"  onClick={()=>{openDisclosure(6)}}>
                  <div className="disclosure__header">
                    <h1>HOW CAN I GET IN CONTACT WITH THE WOLFBOSS TEAM?</h1>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path
                          d="M11.996 19.07c.57 0 1.04-.484 1.04-1.015v-4.649h4.554c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039h-4.555V6.68c0-.547-.469-1.016-1.039-1.016-.562 0-1.031.469-1.031 1.016v4.648H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h4.555v4.649c0 .53.469 1.015 1.031 1.015z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>minus</title>
                      <g
                        id="02_assets"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="00_logo"
                          transform="translate(-1619.000000, -110.000000)"
                        >
                          <g
                            id="minus"
                            transform="translate(1619.000000, 110.000000)"
                          >
                            <rect
                              id="frame"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            ></rect>
                            <path
                              d="M17.5898438,13.40625 C18.1367188,13.40625 18.6132812,12.9375 18.6132812,12.3671875 C18.6132812,11.8046875 18.1367188,11.328125 17.5898438,11.328125 L6.41015625,11.328125 C5.87890625,11.328125 5.38671875,11.8046875 5.38671875,12.3671875 C5.38671875,12.9375 5.87890625,13.40625 6.41015625,13.40625 L17.5898438,13.40625 Z"
                              id="shape"
                              fill="#E0E0FF"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="disclosure__body">
                    <p>
                      If you have any further questions regarding the project,
                      you can contact our team members through{" "}
                      <a
                        href="https://discord.gg/wolfboss"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discord
                      </a>
                      ,{" "}
                      <a
                        href="https://twitter.com/wolfboss_nft"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://www.instagram.com/wolfboss_nft/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div id="disclosure-7" className="disclosure"  onClick={()=>{openDisclosure(7)}}>
                  <div className="disclosure__header">
                    <h1>WHAT IS THE SMART CONTRACT ADDRESS</h1>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path
                          d="M11.996 19.07c.57 0 1.04-.484 1.04-1.015v-4.649h4.554c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039h-4.555V6.68c0-.547-.469-1.016-1.039-1.016-.562 0-1.031.469-1.031 1.016v4.648H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h4.555v4.649c0 .53.469 1.015 1.031 1.015z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>minus</title>
                      <g
                        id="02_assets"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="00_logo"
                          transform="translate(-1619.000000, -110.000000)"
                        >
                          <g
                            id="minus"
                            transform="translate(1619.000000, 110.000000)"
                          >
                            <rect
                              id="frame"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            ></rect>
                            <path
                              d="M17.5898438,13.40625 C18.1367188,13.40625 18.6132812,12.9375 18.6132812,12.3671875 C18.6132812,11.8046875 18.1367188,11.328125 17.5898438,11.328125 L6.41015625,11.328125 C5.87890625,11.328125 5.38671875,11.8046875 5.38671875,12.3671875 C5.38671875,12.9375 5.87890625,13.40625 6.41015625,13.40625 L17.5898438,13.40625 Z"
                              id="shape"
                              fill="#E0E0FF"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="disclosure__body">
                    <p>0xdEb758B594926dE138Cd223B325EeaE6C493B6e4</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade">
                <div
                  className="card"
                  style={{
                    top: "-40px",
                    left: "258px",
                    transform: "rotate(2deg)",
                  }}
                >
                  <img
                    src="/assets/00_cards/@1x/10.jpg"
                    srcSet="/assets/00_cards/@2x/10@2x.jpg 2x"
                    alt=""
                  />

                  {/* <img src="/assets/03_cards/@1x/bored.jpg" alt=""  /> */}
                </div>
                <div
                  className="card"
                  style={{
                    top: "-50px",
                    left: "1px",
                    zIndex: "99",
                    transform: "rotate(-19deg)",
                  }}
                >
                  {/* <img src="/assets/03_cards/@1x/clever.jpg" alt="" /> */}

                  <img
                    src="/assets/00_cards/@1x/09.jpg"
                    srcSet="/assets/00_cards/@2x/09@2x.jpg 2x"
                    alt=""
                  />
                </div>
                <div
                  className="card"
                  style={{
                    top: "-58px",
                    left: "-1px",
                    zIndex: "98",
                    transform: "rotate(7deg)",
                  }}
                >
                  {/* <img src="/assets/03_cards/@1x/clever.jpg" alt="" /> */}
                  <img
                    src="/assets/00_cards/@1x/04.jpg"
                    srcSet="/assets/00_cards/@2x/04@2x.jpg 2x"
                    alt=""
                  />
                </div>

                <img
                  src="/assets/01_logo/@1x/wolf_boss_logo_orange.png"
                  srcSet="/assets/01_logo/@2x/wolf_boss_logo_orange@2x.png 2x"
                  className="background-image"
                  style={{ top: "-79px", right: "-62px" }}
                  alt=""
                />
                <div className="elem-ct">
                  <h1>Become a part of our community today</h1>
                  <div>
                    <a
                      href="https://twitter.com/wolfboss_nft"
                      target="_blank"
                      rel="noreferrer"
                      className="social-block twitter"
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M0 0h48v48H0z" />
                          <path
                            d="M16.56 40.252c15.088 0 23.344-12.512 23.344-23.344 0-.352 0-.704-.016-1.056a16.715 16.715 0 0 0 4.096-4.256 16.628 16.628 0 0 1-4.72 1.296 8.255 8.255 0 0 0 3.616-4.544 16.32 16.32 0 0 1-5.216 1.984A8.189 8.189 0 0 0 31.68 7.74c-4.528 0-8.208 3.68-8.208 8.208 0 .64.08 1.264.208 1.872-6.816-.336-12.864-3.616-16.912-8.576a8.206 8.206 0 0 0-1.104 4.128 8.227 8.227 0 0 0 3.648 6.832A8.299 8.299 0 0 1 5.6 19.18v.112a8.222 8.222 0 0 0 6.576 8.048 7.999 7.999 0 0 1-2.16.288c-.528 0-1.04-.048-1.536-.144a8.204 8.204 0 0 0 7.664 5.696A16.456 16.456 0 0 1 5.952 36.7c-.656 0-1.312-.032-1.952-.112a23.338 23.338 0 0 0 12.56 3.664"
                            fill="#FFF"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/wolfboss_nft/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-block instagram"
                    >
                      <svg
                        width="48px"
                        height="48px"
                        viewBox="0 0 48 48"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>instagram_w</title>
                        <g
                          id="02_assets"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="00_logo"
                            transform="translate(-1404.000000, -322.000000)"
                          >
                            <g
                              id="instagram_w"
                              transform="translate(1404.000000, 322.000000)"
                            >
                              <rect
                                id="frame"
                                x="0"
                                y="0"
                                width="48"
                                height="48"
                              ></rect>
                              <path
                                d="M25.3975134,4.00063896 C28.0727956,4.00338732 29.3373309,4.01553059 30.4100903,4.0471477 L30.6644946,4.05511486 C30.7904799,4.05929055 30.9151077,4.06375827 31.0404847,4.06853545 L31.2928615,4.07850756 C31.5899226,4.0906351 31.8987072,4.10451064 32.2459744,4.12035543 C34.3747412,4.21744955 35.8286126,4.5555721 37.10076,5.05001379 C38.4159368,5.56104803 39.5312886,6.24491457 40.6432267,7.35677327 C41.7550854,8.46871136 42.438952,9.58406323 42.9500656,10.89924 C43.4444279,12.1713874 43.7825504,13.6252588 43.8796446,15.7540256 C43.8954894,16.1012928 43.9093649,16.4100774 43.9214924,16.7071388 L43.9314646,16.959516 C43.9362417,17.0848932 43.9407095,17.2095214 43.9448851,17.3355071 L43.9528523,17.5899124 C43.9844694,18.6626768 43.9966127,19.9272257 43.999361,22.6025458 L43.999962,23.6287128 L43.999962,23.6287128 L44,24.0000397 C44,24.1263568 43.9999875,24.2501046 43.999962,24.3713612 L43.999361,25.3975134 C43.9966127,28.0727956 43.9844694,29.3373309 43.9528523,30.4100903 L43.9448851,30.6644946 C43.9407095,30.7904799 43.9362417,30.9151077 43.9314646,31.0404847 L43.9214924,31.2928615 C43.9093649,31.5899226 43.8954894,31.8987072 43.8796446,32.2459744 C43.7825504,34.3747412 43.4444279,35.8286126 42.9500656,37.10076 C42.438952,38.4159368 41.7550854,39.5312886 40.6432267,40.6432267 C39.5312886,41.7550854 38.4159368,42.438952 37.10076,42.9500656 C35.8286126,43.4444279 34.3747412,43.7825504 32.2459744,43.8796446 C31.8987072,43.8954894 31.5899226,43.9093649 31.2928615,43.9214924 L31.0404847,43.9314646 C30.9151077,43.9362417 30.7904799,43.9407095 30.6644946,43.9448851 L30.4100903,43.9528523 C29.3373309,43.9844694 28.0727956,43.9966127 25.3975134,43.999361 L24.3713612,43.999962 L24.3713612,43.999962 L24.0000397,44 C23.8737208,44 23.7499711,43.9999875 23.6287128,43.999962 L22.6025458,43.999361 C19.9272257,43.9966127 18.6626768,43.9844694 17.5899124,43.9528523 L17.3355071,43.9448851 C17.2095214,43.9407095 17.0848932,43.9362417 16.959516,43.9314646 L16.7071388,43.9214924 C16.4100774,43.9093649 16.1012928,43.8954894 15.7540256,43.8796446 C13.6252588,43.7825504 12.1713874,43.4444279 10.89924,42.9500656 C9.58406323,42.438952 8.46871136,41.7550854 7.35677327,40.6432267 C6.24491457,39.5312886 5.56104803,38.4159368 5.05001379,37.10076 C4.5555721,35.8286126 4.21744955,34.3747412 4.12035543,32.2459744 C4.10451064,31.8987072 4.0906351,31.5899226 4.07850756,31.2928615 L4.06853545,31.0404847 C4.06375827,30.9151077 4.05929055,30.7904799 4.05511486,30.6644946 L4.0471477,30.4100903 C4.01553059,29.3373309 4.00338732,28.0727956 4.00063896,25.3975134 L4.00063896,22.6025458 C4.00338732,19.9272257 4.01553059,18.6626768 4.0471477,17.5899124 L4.05511486,17.3355071 C4.05929055,17.2095214 4.06375827,17.0848932 4.06853545,16.959516 L4.07850756,16.7071388 C4.0906351,16.4100774 4.10451064,16.1012928 4.12035543,15.7540256 C4.21744955,13.6252588 4.5555721,12.1713874 5.05001379,10.89924 C5.56104803,9.58406323 6.24491457,8.46871136 7.35677327,7.35677327 C8.46871136,6.24491457 9.58406323,5.56104803 10.89924,5.05001379 C12.1713874,4.5555721 13.6252588,4.21744955 15.7540256,4.12035543 C16.1012928,4.10451064 16.4100774,4.0906351 16.7071388,4.07850756 L16.959516,4.06853545 C17.0848932,4.06375827 17.2095214,4.05929055 17.3355071,4.05511486 L17.5899124,4.0471477 C18.6626768,4.01553059 19.9272257,4.00338732 22.6025458,4.00063896 Z M25.0745619,7.60392966 L22.9255017,7.60392966 C19.6807593,7.60613744 18.4698448,7.61995971 17.2570451,7.66363829 L17.0054264,7.67310723 C16.6681183,7.68631646 16.3199827,7.70189348 15.9182837,7.72022126 C13.9683035,7.8091382 12.9093186,8.13495527 12.2045725,8.40885121 C11.271024,8.77166408 10.6047821,9.20505477 9.90495811,9.90495811 C9.20505477,10.6047821 8.77166408,11.271024 8.40885121,12.2045725 C8.13495527,12.9093186 7.8091382,13.9683035 7.72022126,15.9182837 C7.70189348,16.3199827 7.68631646,16.6681183 7.67310723,17.0054264 L7.66363829,17.2570451 C7.61995971,18.4698448 7.60613744,19.6807593 7.60392966,22.9255017 L7.60392966,25.0745619 C7.60613744,28.319257 7.61995971,29.5301593 7.66363829,30.7429559 L7.67310723,30.9945741 C7.68631646,31.3318817 7.70189348,31.6800173 7.72022126,32.0817163 C7.8091382,34.0316965 8.13495527,35.0906814 8.40885121,35.7954275 C8.77166408,36.728976 9.20513416,37.3952179 9.90495811,38.0950419 C10.6047821,38.7949452 11.271024,39.2283359 12.2045725,39.5911488 C12.9093186,39.8650447 13.9683035,40.1908618 15.9182837,40.2797787 C16.4203507,40.3026885 16.8387294,40.3213001 17.256895,40.3363617 L17.5084365,40.3449786 C18.6462684,40.3818916 19.9042522,40.3940148 22.925425,40.3960703 L25.0746397,40.3960703 C28.095775,40.3940148 29.3537776,40.3818916 30.4916001,40.3449786 L30.743139,40.3363617 C31.1612994,40.3213001 31.5796682,40.3026885 32.0817163,40.2797787 C34.0316965,40.1908618 35.0906814,39.8650447 35.7954275,39.5911488 C36.728976,39.2283359 37.3952179,38.7949452 38.0950419,38.0950419 C38.7949452,37.3952179 39.2283359,36.728976 39.5911488,35.7954275 C39.8650447,35.0906814 40.1908618,34.0316965 40.2797787,32.0817163 C40.2981065,31.6800173 40.3136835,31.3318817 40.3268928,30.9945741 L40.3363617,30.7429559 C40.3800403,29.5301593 40.3938626,28.319257 40.3960703,25.0745619 L40.3960703,22.9255017 C40.3938626,19.6807593 40.3800403,18.4698448 40.3363617,17.2570451 L40.3268928,17.0054264 C40.3136835,16.6681183 40.2981065,16.3199827 40.2797787,15.9182837 C40.1908618,13.9683035 39.8650447,12.9093186 39.5911488,12.2045725 C39.2283359,11.271024 38.7949452,10.6047821 38.0950419,9.90495811 C37.3952179,9.20505477 36.728976,8.77166408 35.7954275,8.40885121 C35.0906814,8.13495527 34.0316965,7.8091382 32.0817163,7.72022126 C31.6800173,7.70189348 31.3318817,7.68631646 30.9945741,7.67310723 L30.7429559,7.66363829 C29.5301593,7.61995971 28.319257,7.60613744 25.0745619,7.60392966 Z M24.0000397,13.7297362 C29.6721466,13.7297362 34.2702638,18.3278534 34.2702638,24.0000397 C34.2702638,29.6721466 29.6721466,34.2702638 24.0000397,34.2702638 C18.3278534,34.2702638 13.7297362,29.6721466 13.7297362,24.0000397 C13.7297362,18.3278534 18.3278534,13.7297362 24.0000397,13.7297362 Z M24.0000397,17.3333333 C20.3180845,17.3333333 17.3333333,20.3180845 17.3333333,24.0000397 C17.3333333,27.6819155 20.3180845,30.6666667 24.0000397,30.6666667 C27.6819155,30.6666667 30.6666667,27.6819155 30.6666667,24.0000397 C30.6666667,20.3180845 27.6819155,17.3333333 24.0000397,17.3333333 Z M34.6760268,10.9239304 C36.0015243,10.9239304 37.0760696,11.9984757 37.0760696,13.3239732 C37.0760696,14.6494708 36.0015243,15.7239367 34.6760268,15.7239367 C33.3506086,15.7239367 32.2760633,14.6494708 32.2760633,13.3239732 C32.2760633,11.9984757 33.3506086,10.9239304 34.6760268,10.9239304 Z"
                                id="shape"
                                fill="#FFFFFF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <a
                      href="https://discord.gg/wolfboss"
                      target="_blank"
                      rel="noreferrer"
                      className="social-block discord"
                    >
                      <svg
                        width="48px"
                        height="48px"
                        viewBox="0 0 48 48"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>discord_w</title>
                        <g
                          id="02_assets"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="00_logo"
                            transform="translate(-1286.000000, -322.000000)"
                          >
                            <g
                              id="discord_w"
                              transform="translate(1286.000000, 322.000000)"
                            >
                              <rect
                                id="frame"
                                x="0"
                                y="0"
                                width="48"
                                height="48"
                              ></rect>
                              <path
                                d="M37.8616893,11.2873551 C35.3122245,10.1175523 32.5783091,9.25569321 29.7198303,8.76207068 C29.667774,8.75254392 29.615774,8.77635181 29.5889571,8.82396871 C29.2373514,9.449327 28.8478867,10.265158 28.5751543,10.9063974 C25.5006755,10.4461157 22.4419713,10.4461157 19.4305348,10.9063974 C19.1577461,10.2509044 18.7541404,9.449327 18.4009573,8.82396871 C18.3741404,8.77794054 18.3221404,8.75413265 18.2700841,8.76207068 C15.4131828,9.25411574 12.6792673,10.1159749 10.1282251,11.2873551 C10.1061406,11.2968763 10.0872111,11.3127636 10.0746477,11.3333833 C4.88898583,19.0806507 3.46841629,26.6374956 4.16530022,34.1006504 C4.16845346,34.1371574 4.18894979,34.172087 4.21733007,34.1942842 C7.63868154,36.7068475 10.9528448,38.2321996 14.2054645,39.2432418 C14.2575208,39.2591291 14.3126757,39.2400869 14.3458025,39.1972136 C15.1152109,38.1465094 15.8010701,37.0386221 16.3891264,35.8735517 C16.4238306,35.8053264 16.3907039,35.7243686 16.3197743,35.6973827 C15.231887,35.2847067 14.1959997,34.7815518 13.199549,34.2101715 C13.1207321,34.1641433 13.1144223,34.0514109 13.1869293,33.9974391 C13.3966194,33.8403123 13.6063659,33.6768194 13.8065913,33.511749 C13.8428166,33.4816081 13.8932955,33.4752419 13.935887,33.4942842 C20.4821404,36.4830728 27.5692388,36.4830728 34.0382527,33.4942842 C34.0808443,33.4736645 34.1313232,33.4800307 34.169126,33.5101715 C34.3694077,33.6752419 34.5790978,33.8403123 34.7903654,33.9974391 C34.8628724,34.0514109 34.85814,34.1641433 34.7793231,34.2101715 C33.7828725,34.7926503 32.7469852,35.2847067 31.6575204,35.6958052 C31.5865908,35.7227912 31.5550415,35.8053264 31.5897458,35.8735517 C32.1904218,37.0369883 32.8762809,38.1448756 33.6314922,39.1956362 C33.6630415,39.2400869 33.7197739,39.2591291 33.7718302,39.2432418 C37.0402245,38.2321996 40.3543653,36.7068475 43.7757173,34.1942842 C43.8056891,34.172087 43.8246187,34.1387349 43.8277736,34.1022278 C44.6618018,25.4740027 42.4308159,17.9791296 37.9136893,11.3349608 C37.902647,11.3127636 37.8837738,11.2968763 37.8616893,11.2873551 Z M17.3667038,29.5563688 C15.3958307,29.5563688 13.771887,27.7469604 13.771887,25.5248196 C13.771887,23.3026788 15.3643377,21.4932704 17.3667038,21.4932704 C19.3847883,21.4932704 20.9930136,23.3185661 20.9614643,25.5248196 C20.9614643,27.7469604 19.3690137,29.5563688 17.3667038,29.5563688 Z M30.6579148,29.5563688 C28.6870979,29.5563688 27.0631543,27.7469604 27.0631543,25.5248196 C27.0631543,23.3026788 28.6555486,21.4932704 30.6579148,21.4932704 C32.6760556,21.4932704 34.2842246,23.3185661 34.2527316,25.5248196 C34.2527316,27.7469604 32.6760556,29.5563688 30.6579148,29.5563688 Z"
                                id="shape"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

              <div className="bg"></div>
            </div>
          </LazyLoad>
          <footer className="footer">
            <div className="footer__container container">
              <div className="footer__left">
                <a href="/">
                  {" "}
                  <img src="assets/01_logo/wolf_boss_logo.svg" alt="" />
                </a>
              </div>
              <div className="footer__right">
                <div>
                  <p>© 2022 WolfBoss, All rights reserved.</p>
                  <p className="privacy_policy_link"><a
                        href="/privacy-policy"
                        rel="noreferrer"
                        target="_blank"
                      >Privacy Policy</a></p>
                </div>
              </div>
            </div>
          </footer>
        </nav>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="modal-title-container">
              <img src={Point} className="modal-title-point" />
              <p className="modal-title">Enter the WOLFBOSS Whitelist Via</p>
            </div>
            <div className="modal-icons-container">
              <div className="modal-icon-container">
                <a
                  className="modal-link"
                  href="https://forms.gle/g8ofqjaBETkWgJtM9"
                  target="_blank"
                >
                  <img src={Sheet} className="modal-icon" />
                </a>
              </div>
              <p>OR</p>
              <div className="modal-icon-container">
                <a
                  className="modal-link"
                  href="https://www.premint.xyz/wolfboss/"
                  target="_blank"
                >
                  <img src={Premint} className="modal-icon" />
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

  );
}

export default HomeApp;
