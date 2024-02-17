import { useEffect, useState } from "react"
import "./styles.scss"
const Carousel = () => {
    const data = ["main1", "main2","main3"]
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length-1) {return setCurrentIndex(0)}
        return setCurrentIndex(currentIndex+1)
    }
    useEffect(()=> {
        const interval = setInterval(( )=> {carouselInfiniteScroll()}, 3000)
        return () => clearInterval(interval)})
    return (
        <div className=' carousel-container'>
            { data.map((item,index) => {
                return <img alt="hero-image" src={`/src/assets/${item}.jpg`} className=' carousel-item'
                        style={{transform: `translate(-${currentIndex * 100}%)`}}
                        key={index}></img>})
            }
        </div>
    )
}

export default Carousel