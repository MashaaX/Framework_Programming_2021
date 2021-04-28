import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div >
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      <div>
        <Navbar/>
        <Header/>
          <Switch>
            <Route exact path="/" component={BlogPost} />
            <Route path="/mahasiswa" component={Mahasiswa} />      
            <Route path="/about" component={About} />      
          </Switch>
        <Footer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
