import {chosenTheme} from './theme.js'; // {chosenTheme} is an object with properties {colors, fonts, fontSizes, fontWeights, lineHeights, letterSpacings, space, breakpoints, shadows, radii, sizes, borders, zIndices, transitions, transitionDurations, transitionTimingFunctions,
import './App.css';
import Home from './Containers/home.js';

function App() {
  return (
    <div className="App">

      <div>
        <Home theme={chosenTheme}/>
      </div>
    </div>
  );
}

export default App;
