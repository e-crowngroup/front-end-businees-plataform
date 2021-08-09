import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './ProdictiveSalesCreality.css'
import RenderProdictiveSalesCreality from './RenderProdictiveSalesCreality';


const ProdictiveSalesCreality = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardCreality">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Prodictive Sales</h1>
            
            <div className="content">
               <RenderProdictiveSalesCreality />
            </div>
        </div>
        </div>
    )

}

export default ProdictiveSalesCreality;