import "./style.scss"
import { BsArrowRightCircle } from "react-icons/bs";

const Third = () => {
  return (
    <div className="third">
        <div className="center-line1"></div>
        <div className="over">
            <div className="mobile">
                <div className="title1">Lorem ipsum</div>
                <img alt="section-image" src="/content-image.jpg" />
            </div>
            <div className="content">
                <div className="title">Lorem ipsum</div>
                <div className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="button-title">
                    <div><h4>Lorem ipsum</h4></div>
                    <div><BsArrowRightCircle/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Third