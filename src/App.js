import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Geolocation from './components/Geolocation';

function App() {
  return (
    <div className="App">
      <Geolocation/>

<footer>
      <p>Author: Ramon Aquino<br/>
      <a href="mailto:rivan.ac92@gmail.com">rivan.ac92@gmail.com</a></p>
      <time dateTime="2021-09-04">Sept 2021 </time>
    </footer>
    </div>
  );
}

export default App;
