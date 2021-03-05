import logo from "./logo.svg";
import "./App.css";
import MyApp from "./components/MyApp";
import Kitten from "./components/Kitten";

function App() {
  return (
    <div>
      <MyApp />
      <Kitten
        name="white cat"
        source="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        email="wcat@kitty.se"
        phone="010101"
      />
      <Kitten
        name="Black cat"
        source="https://images.pexels.com/photos/3699269/pexels-photo-3699269.jpeg"
        email="bcat@kitty.se"
        phone="02220101"
      />
      <Kitten
        name="yellow eyes cat"
        source="https://images.pexels.com/photos/1482951/pexels-photo-1482951.jpeg"
        email="yeyecat@kitty.se"
        phone="0101dsds01"
      />
    </div>
  );
}

export default App;
