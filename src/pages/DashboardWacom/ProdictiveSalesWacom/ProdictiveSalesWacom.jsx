import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './ProdictiveSalesWacom.css'
import RenderProdictiveSalesWacom from './RenderProdictiveSalesWacom';


const ProdictiveSalesWacom = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardWacom">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Prodictive Sales</h1>
            
            <div className="content">
               <RenderProdictiveSalesWacom />
            </div>
        </div>
        </div>
    )

}

export default ProdictiveSalesWacom;