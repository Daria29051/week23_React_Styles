import {useState} from 'react';
import rates from "./data/rates.json"
import  "./Rate.scss"

function Rate () {
const   [isSelected, setSelected] = useState(false);
const handleChange = (index) => {
    setSelected((prevState) => {    
      const updatedSelection = Array.from(prevState);
      let [selectedItem, ...otherPart] = [updatedSelection[index], ...updatedSelection];
      for (let item of otherPart) {
        setSelected(false);
      }
      updatedSelection[index] = !updatedSelection[index];
      console.log(updatedSelection);
      return updatedSelection;
    });
  }

    return ( 
<div className="rates-container"> {
    rates.map((rate, index) =>(
        <div className={`rate` + (isSelected[index] ? " selected" : "")} key={index} onClick={() => handleChange(index)}>
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