import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './CampaignOverviewHuion.css'
import RenderCampaignOverviewHuion from './RenderCampaignOverviewHuion';


const CampaignOverviewHuion = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
            
            
            <Link to="/dashboardHuion">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Campaign Overview</h1>
            
            <div className="content">
               <RenderCampaignOverviewHuion />
            </div>
        </div>
        </div>
    )

}

export default CampaignOverviewHuion;