import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} 

from "react-router-dom";
import {
  Card,Button, CardColumns, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody
} from "react-bootstrap";

export default function AuthExample(){
  return (
  <Router>
    <div>
      <AuthButton />

      <div className="container">
        <ul className="menu">
          <li><link exact to="/public">Home</link></li>
          <li><link exact to="/catalogue">Catalog</link></li>
          <li><link exact to="/about">About</link></li>
          <li><link exact to="/private">Checkout</link></li>
        </ul>
      </div>
    </div>
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>

        <Route path="/public">
          <PublicPage />
        </Route>

        <Route path="/catalogue">
          <Catalogue />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <PrivateRoute path="/private">
          <ProtectedPage />
        </PrivateRoute>

      </Switch>
    </div>
  </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({ location }) => fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ 
              pathname: "/login",
              state: { from: location }
            }}
          />
          )
        }
      />
  );
}

function Catalogue(){
  return <div className="catalogue">
    <h2>Catalogue</h2>
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/11/9/dfbd4971-f421-4374-a31d-433f3a8eb87f.jpg" />
    <Card.Header>
      <h5 align="center">Rp. 361.000,-</h5>
    </Card.Header>
    <Card.Body>
      <Card.Title>Essence of the Sun EOS 100ml</Card.Title>
      <Card.Text>
      HMNS Essence of the Sun
“What if we extract the sun?”
      </Card.Text>
    </Card.Body>
    <div align="center" className="top-element-formatting">
        <Button variant="primary">Buy </Button>   <span className="third-word-formatting"><Button variant="info">Cart </Button></span><br/><br></br>
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 weeks ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/11/9/a671edcc-ebd9-4958-a79d-b2b8802e7ee9.jpg" />
    <Card.Header>
      <h5 align="center">Rp. 374.000,-</h5>
    </Card.Header>
    <Card.Body>
      <Card.Title>HMNS Perfume - Farhampton 100ml</Card.Title>
      <Card.Text>
      Fragrance Group: Aromatic Fougere Fruity
“Farhampton is a soulmate.{' '}
      </Card.Text>
    </Card.Body>
    <div align="center" className="top-element-formatting">
        <Button variant="primary">Buy </Button>   <span className="third-word-formatting"><Button variant="info">Cart </Button></span><br/><br></br>
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 days ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/11/9/a6175840-74f3-41cf-bed7-65106e709a22.jpg" />
    <Card.Header>
      <h5 align="center">Rp. 350.000,-</h5>
    </Card.Header>
    <Card.Body>
      <Card.Title>HMNS Perfume - Alpha 100ml</Card.Title>
      <Card.Text>
      Fragrance Alpha, top notes citrus grass, middle and base notes cedar wood & green tea essence.
      </Card.Text>
    </Card.Body>
    <div align="center" className="top-element-formatting">
        <Button variant="primary">Buy </Button>   <span className="third-word-formatting"><Button variant="info">Cart </Button></span><br/><br></br>
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 weeks ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

<br></br>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/11/9/dfbd4971-f421-4374-a31d-433f3a8eb87f.jpg" />
    <Card.Header>
      <h5 align="center">Rp. 361.000,-</h5>
    </Card.Header>
    <Card.Body>
      <Card.Title>Essence of the Sun EOS 100ml</Card.Title>
      <Card.Text>
      HMNS Essence of the Sun
“What if we extract the sun?”
      </Card.Text>
    </Card.Body>
    <div align="center" className="top-element-formatting">
        <Button variant="primary">Buy </Button>   <span className="third-word-formatting"><Button variant="info">Cart </Button></span><br/><br></br>
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/11/9/a671edcc-ebd9-4958-a79d-b2b8802e7ee9.jpg" />
    <Card.Header>
      <h5 align="center">Rp. 361.000,-</h5>
    </Card.Header>
    <Card.Body>
      <Card.Title>HMNS Perfume - Farhampton 100ml</Card.Title>
      <Card.Text>
      Fragrance Group: Aromatic Fougere Fruity
“Farhampton is a soulmate.{' '}
      </Card.Text>
    </Card.Body>
    <div align="center" className="top-element-formatting">
        <Button variant="primary">Buy </Button>   <span className="third-word-formatting"><Button variant="info">Cart </Button></span><br/><br></br>
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/11/9/a6175840-74f3-41cf-bed7-65106e709a22.jpg" />
    <Card.Header>
      <h5 align="center">Rp. 361.000,-</h5>
    </Card.Header>
    <Card.Body>
      <Card.Title>HMNS Perfume - Alpha 100ml</Card.Title>
      <Card.Text>
      Fragrance Alpha, top notes citrus grass, middle and base notes cedar wood & green tea essence.
      </Card.Text>
    </Card.Body>
    <div align="center" className="top-element-formatting">
        <Button variant="primary">Buy </Button>   <span className="third-word-formatting"><Button variant="info">Cart </Button></span><br/><br></br>
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
}

function PublicPage(){
  return <h3>Public</h3>;
}

function ProtectedPage(){
  return <h3>Private</h3>;
}

function About(){
  return 
  <div>
    <h3> About </h3>
    <h3> Created By Rian Herlangga </h3>
    <h3> all rights reserved. </h3>
  </div>
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let {from} = location.state || {from: {pathname: "/"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };


 return (
   <div>
     <p>You must Log in to view the page at {from.pathname}</p>
     <button onClick={login}>Log In</button>
   </div>
 );

}