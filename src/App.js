
import './App.css';
import logo from '../src/assets/Images/logoNCC 1.png'
import boxImg1 from "../src/assets/Images/css-icon 1.png";
import boxImg2 from '../src/assets/Images/html-icon 1.png'
import boxImg3 from "../src/assets/Images/url-icon 1.png";
import SideBar from './components/SideBar';
import Overview from './components/Overview';
import BoxItem from './components/BoxItem';
import Footer from './components/Footer';

function App() {

  const LISTBOX = [
    {
      img: boxImg1,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      img: boxImg2,
      title: "Lorem ipsum dolor sit amet",
    },
    
    {
      img: boxImg3,
      title: "Lorem ipsum dolor sit amet",
    },
    
  ];
  return (
    <div className="App">
      <div className="container">
        <SideBar />
        <div className="content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Overview />

          <div className="list-box">
            {LISTBOX.map((item) => {
              return <BoxItem img={item.img} title={item.title} />;
            })}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
