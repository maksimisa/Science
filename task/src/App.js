import React from 'react';
import { Link} from 'react-router-dom';


function App() {
  return (
      <div className="content p-40">
        <div className="d-flex align-center">
          <h3>Сборник статей о космосе.</h3>
        </div>
        <Link to="/news">
        <div className="d-flex align-center p-30">
          <h4>Перейти на главную.</h4>
        </div>
        </Link>
        <div className="d-flex align-center">
          <h5>2022г.</h5>
        </div>
      </div>
  );
}
export default App;
