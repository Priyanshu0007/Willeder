import "./style.scss"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-button">
            <div>Home</div>
            <div>Page 1</div>
            <div>Page 2</div>
        </div>
        <div className="divider"><hr/></div>
        <div className="social">
            <div><img alt="facebook" src="/src/assets/facebook.svg"/></div>
            <div><img alt="twitter" src="/src/assets/twitter.svg"/></div>
            <div><img alt="instagram" src="/src/assets/instagram.svg"/></div>
            <div><img alt="tiktok" src="/src/assets/tiktok.svg"/></div>
        </div>
        <div className="copywrite">© Logo, Inc.</div>
    </div>
  )
}

export default Footer