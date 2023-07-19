import AddToCartButton from "./Button";
import AddToCartForm from "./AddForm";
import  "./Card.css"


export default function Card(props) {
	const {title, price, description, imgLink, addedToCart, newGood} = props;
	let actionItem;
	if (addedToCart) {
		actionItem = <AddToCartForm addedToCart={addedToCart} />;
	} else {
		actionItem = <AddToCartButton />;
	}
   
	return (
		<div className="card">
			<div className="card-body"> 
				<img className="card-img" src={imgLink} alt={title}/>
				<h4 className="card-title">{title} </h4>
                {newGood && <p className="card-new">{newGood}</p>}
				<p className="card-text">{description}</p>
			</div>
			<div className="card-footer">
				<span className="card-price">{price} euro</span>
				<div>{actionItem}</div>
			</div>
		</div>
	);
}