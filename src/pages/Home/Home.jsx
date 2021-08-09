import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import './Home.css';


const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      
      <div className="container">
           <div className="btn-home">
      
          <AiOutlineCloseSquare className="btn-exit" onClick={() => setToken(null)} />
          </div>
      

     <div className="content">
       <div className="title">
      <h2>Business Plataform | Brands</h2>
      </div>
      

       <div className="box-container">
            <div className="box-logo ">
            <a href="https://e-crowngroup.com.br/"><img className="ecrown" src="./img/new/ECrown.png" alt="" /></a>

            </div>
            <div className="box-logo">
              <Link to="/dashboardMaresia"><img className="maresia" src="./img/new/Maresia.png" alt="" /></Link>

            </div>
            <div className="box-logo">
            <Link to="/dashboardIOMegastore"><img className="iomega" src="./img/new/IoMega-White.png" alt="" /></Link>

            </div>
            <div className="box-logo">
            <Link href="/dashboardWacom"><img className="wacom" src="./img/new/wacom.png" alt="" /></Link>

            </div>
        
       </div>
       <div className="box-container">
            <div className="box-logo" >
            <Link to="/dashboardLogitech"><img className="logitech" src="./img/new/logitech.png" alt="" /></Link>
            </div>
            <div className="box-logo ">
            <Link to="/dashboardCisco"><img className="cisco" src="./img/new/cisco.png" alt="" /></Link>
            </div>
            <div className="box-logo" >
            <Link to="/dashboardHuion"><img className="huion" src="./img/new/huion.png" alt="" /></Link>
            </div>
            <div className="box-logo creality">
            <Link to="/dashboardCreality"><img className="" src="./img/new/Crea_edited.png" alt="" /></Link>
            </div>
        
       </div>
       <div className="box-container">
            <div className="box-logo">
            <Link to="/dashboardTopper"><img className="topper" src="./img/new/topper.png" alt="" /></Link>
            </div>
            <div className="box-logo">
            <Link to="/dashboardMakerBot"><img className="makerbot"  src="./img/new/makerbot.png" alt="" /></Link> 
            </div>
            <div className="box-logo">
            <Link to="/dashboardHDStore"><img className="hdstore"  src="./img/new/hdstore.png" alt="" /></Link>
            </div>
            <div className="box-logo ">
            <Link to="/dashboardSeagate"><img className="seagate"  src="./img/new/Gate_edited.png" alt="" /></Link>
            </div>
        
       </div>
       <div className="box-container">
            <div className="box-logo">
            <Link to="/dashboardRainha"><img className="rainha" src="./img/new/rainha.png" alt="" /></Link>
            </div>
            <div className="box-logo">
            <Link to="/dashboardWesterDigital"><img className="wd-digital" src="./img/new/wd-digital.png" alt="" /></Link>
            </div>
            <div className="box-logo ">
            <Link to="/dashboardLacie"><img className="lacie" src="./img/new/lacie.png" alt="" /></Link>
            </div>
            <div className="box-logo">
            <Link to="/dashboardNvidia"><img className="nvidia" src="./img/new/nvidialogo.png" alt="" /></Link>
            </div>
        
       </div> 
     </div>
      </div>
    </div>
  );
};

export default PagesHome;
