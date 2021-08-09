import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './ProdictiveSalesWesterDigital.css'
import RenderProdictiveSalesWesterDigital from './RenderProdictiveSalesWesterDigital';


const ProdictiveSalesWesterDigital = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardWesterDigital">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Prodictive Sales</h1>
            
            <div className="content">
               <RenderProdictiveSalesWesterDigital />
            </div>
        </div>
        </div>
    )

}

export default ProdictiveSalesWesterDigital;