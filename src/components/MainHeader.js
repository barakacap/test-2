import React, { useState ,useEffect} from "react";
import TwitterConvTrkr from "react-twitter-conversion-tracker";
import { Button, Modal } from "react-bootstrap";
import Premint from "../assets/Premint.svg";
import Sheet from "../assets/Google Form V2.png";
import Point from "../assets/Point.svg";
function MainHeader(){
    useEffect(() => {
        TwitterConvTrkr.init("o8f2i");
      }, []);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    TwitterConvTrkr.pageView(); 
    setShow(true)
    };
    return (
        <header className="header">
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
                <a href="/#features">Features</a>
              </li>
              <li className="header__left__links__item">
                <a href="/#roadmap">Roadmap</a>
              </li>
              <li className="header__left__links__item">
                <a href="/#team">Team</a>
              </li>
              <li className="header__left__links__item">
                <a href="/#mint">How to mint</a>
              </li>
              <li className="header__left__links__item">
                {" "}
                <a href="/#faq">FAQ</a>{" "}
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
            </div>
           
              <button className="pink-button" onClick={handleShow}>
                <div> Mint NFT</div>
              </button>
           
          </div>
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
        </header>
        
    )
}
export default MainHeader;