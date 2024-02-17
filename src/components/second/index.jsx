import "./style.scss"

const Second = () => {
    const data = ["main3", "main2","main1"]
  return (
    <div className="second">
        <div className="center-line">
            <div className="heading2">
                <div>Lorem</div>
                <div>subtitle</div>
            </div>
        </div>
        <div className="images">
            {data.map((item,index)=>(
                <div key={index} className="image">
                    <img alt={item} src={`/src/assets/${item}.jpg`} />
                    <div className="index1">{`0${1+index}`}</div>
                    <div className="heading1">Lorem ipsum dolor sit</div>
                    <div className="sub-heading1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Second