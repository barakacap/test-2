function MainFooter(){
    return (
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
    )
}
export default MainFooter