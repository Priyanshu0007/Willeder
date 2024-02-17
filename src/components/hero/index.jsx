import Carousel from "../carousel"
import "./style.scss"

const Hero = () => {
  return (
    <div className="hero">
        <Carousel/>
        <div className="hero-logo">
            <img alt="logo" src="/src/assets/hero-logo.svg"/>
        </div>
        <div className="heading">
          Lorem ipsum dolor sit amet
        </div>
        <div className="sub-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="scroll">
          <div>scroll</div>
          <div></div>
        </div>
    </div>
  )
}

export default Hero