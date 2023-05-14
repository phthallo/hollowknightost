import Title from './title_white.png';
import Background from './menu_voidheart.png';
import ImageFadeIn from "react-image-fade-in";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App" style = {{ backgroundImage: `url(${Background})`, backgroundSize: 'cover',}}>
      <header className="App-header">
        <ImageFadeIn style = {{ width: "30%", height: "30%" }} src={Title} opacityTransition={1} className="App-title" alt="title" />
        <div className="icons" style = {{color: "rgba(254, 253, 255, 0.75)",}}>
          <FontAwesomeIcon icon={faPlay}/>
        </div>
      </header>
    </div>
  );
}

export default App;
