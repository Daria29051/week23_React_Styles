import rates from "./data/rates.json"
import  "./Rate.scss"

function Rate () {

    return ( 
<div className="rates-container"> {
    rates.map((rate, index) =>(
        <div className={`rate` + (rate.isSelected ? " selected" : "")} key={index}>
           <div className={`rate-part `+ `rate__title-container `+ `rate-title`+ rate.id}>
            <h1 className="text rate__title-text">{rate.title}</h1>
           </div>
           <div  className={`rate-part `+ `rate__price-container `+ `rate-price`+ rate.id}>
            <p className="text rate__price-text"> руб. <span className="rate__price-bold">{rate.price}</span> / мес</p>
           </div>

           <div  className="rate-part rate__speed-container">
            <p className="text rate__speed-text"> до {rate.speed} Мбит/сек</p>
           </div>

           <div  className="rate-part rate__traffic-container">
            <p className="text rate__traffic-text"> {rate.traffic} </p>
           </div>
        </div>

    ))
}
    
</div>


);
}

export default Rate ;