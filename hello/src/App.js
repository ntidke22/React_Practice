import './App.css';
import Greet from './Greet';
import Fo from './Component/Fo';
import {Welcome} from './Component/Welcome';
import Count from './Component/Count';
import ParentComp from './Component/MethodAsProp/ParentComp';
import UserGreet from './Component/MethodAsProp/Conditionalrendering/UserGreet';
import Mapping from './ListRendering/Mapping';
import Drugs from './ListRendering/Drugs';
import FormHandler from './Formhandling/FormHandler';
import Correct from './Hooks/Correct';


function App() {
  return (
    <div className="App">
   <Drugs/>
    </div>
  );
}

export default App;
