import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './TimeSalesHDStore.css'
import RenderTimeSalesHDStore from './RenderTimeSalesHDStore';


const TimeSalesHDStore = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardHDStore">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Time Sales</h1>
            
            <div className="content">
               <RenderTimeSalesHDStore />
            </div>
        </div>
        </div>
    )

}

export default TimeSalesHDStore;