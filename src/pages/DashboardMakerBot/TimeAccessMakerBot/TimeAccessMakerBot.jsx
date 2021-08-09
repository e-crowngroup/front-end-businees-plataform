import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './TimeAccessMakerBot.css'
import RenderTimeAccessMakerBot from './RenderTimeAccessMakerBot';


const TimeAccessMakerBot = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardMakerBot">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Time Access</h1>
            
            <div className="content">
               <RenderTimeAccessMakerBot />
            </div>
        </div>
        </div>
    )

}

export default TimeAccessMakerBot;