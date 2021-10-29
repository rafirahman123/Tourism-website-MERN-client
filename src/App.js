import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Blogs from './components/Blogs/Blogs';
import Review from './components/Review/Review';
import Login from './components/User/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/User/PrivateRoute/PrivateRoute';
import Manageorder from './components/Manageorder/Manageorder';
import AddPackage from './components/AddPackage/AddPackage';
import Myorder from './components/Myorder/Myorder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path="/review/:reviewId">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrder">
              <Manageorder></Manageorder>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <Myorder></Myorder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
