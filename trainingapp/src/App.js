import './App.css';
import Card from "./components/Card";
import goods from "./data/goods.json";
import Login from "./components/Login";
import users from "./data/users.json";




function App() {
  return (
    <div className="App">
      {users.map((user) => (
        <Login id={user.id} userName={user.userName} isAutorized={user.isAutorized} ></Login>
      ))}
      {goods.map((card) => (
        <Card  newGood={card.newGood} title={card.title} description={card.description} imgLink = {card.imgLink} price = {card.price} addedToCart = {card.addedToCart} ></Card>
      ))}
    </div>
  );
}

export default App;
