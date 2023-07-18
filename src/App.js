// import EsignatureApp from "./projects/e-signature-app/e-signature.component"
// import Alert from './projects/alert app/alert-app.component';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import TemperatureController from './projects/temperature-controller/temperaturecontroller.component';
import LightAndDarkMode from './projects/light-and-dark-mode-app/light-and-dark-mode.component';
// import LikePhotoApp from './projects/like photo app/like-photo.component';
// import Testimonial from './projects/testimonial app/testimonial.component';
// import RandommizeColor from './projects/randomize-color app/randomize-color.component';

import { ThemeProvider } from './context/theme-context/theme-context';

function App() {
  return (
    <div className="App">
      {/* <EsignatureApp /> */}

      {/* <RandommizeColor /> */}
      
      {/* <LikePhotoApp /> */}

      {/* <Testimonial /> */}

      {/* <Alert /> */}
      
      {/* <TemperatureController /> */}
    <ThemeProvider>
      <LightAndDarkMode />
    </ThemeProvider>
      
    </div>
  );
}

export default App;
