import { BrowserRouter as Router , Routes , Route  , Link} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Contact from "./contact";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {

  return (
    <div>
      <Provider store={store}>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/contact'>contact</Link>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
        </Provider>
    </div>
  );
}
export default App;

