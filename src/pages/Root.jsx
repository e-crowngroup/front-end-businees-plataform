import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import DashboardLogitech from './DashboardLogitech/DashboardLogitech';
import DashboardCisco from './DashboardCisco/DashboardCisco'
import DashboardCreality from './DashboardCreality/DashboardCreality'
import DashboardHDStore from './DashboardHDStore/DashboardHDStore'
import DashboardHuion from './DashboardHuion/DashboardHuion'
import DashboardIOMegastore from './DashboardIOMegastore/DashboardIOMegastore'
import DashboardLacie from './DashboardLacie/DashboardLacie'
import DashboardMakerBot from './DashboardMakerBot/DashboardMakerBot'
import DashboardMaresia from './DashboardMaresia/DashboardMaresia'
import DashboardNvidia from './DashboardNvidia/DashboardNvidia'
import DashboardRainha from './DashboardRainha/DashboardRainha'
import DashboardSeagate from './DashboardSeagate/DashboardSeagate'
import DashboardTopper from './DashboardTopper/DashboardTopper'
import DashboardWacom from './DashboardWacom/DashboardWacom'
import DashboardWesterDigital from './DashboardWesterDigital/DashboardWesterDigital'



import TimeAccess from './Dashboard/TimeAccess/TimeAccess';
import CampaignOverview from './Dashboard/CampaignOverview/CampaignOverview';
import Demograpy from './Dashboard/Demography/Demography'
import SalesOverview from './Dashboard/SalesOverview/SalesOverview'
import TimeSales from './Dashboard/TimeSales/TimeSales'
import ProdictiveSales from './Dashboard/ProdictiveSales/ProdictiveSales'








import TimeAccessLogitech from './DashboardLogitech/TimeAccessLogitech/TimeAccessLogitech';
import CampaignOverviewLogitech from './DashboardLogitech/CampaignOverviewLogitech/CampaignOverviewLogitech';
import DemograpyLogitech from './DashboardLogitech/DemographyLogitech/DemographyLogitech'
import SalesOverviewLogitech from './DashboardLogitech/SalesOverviewLogitech/SalesOverviewLogitech'
import TimeSalesLogitech from './DashboardLogitech/TimeSalesLogitech/TimeSalesLogitech'
import ProdictiveSalesLogitech from './DashboardLogitech/ProdictiveSalesLogitech/ProdictiveSalesLogitech'




import TimeAccessCisco from './DashboardCisco/TimeAccessCisco/TimeAccessCisco';
import CampaignOverviewCisco from './DashboardCisco/CampaignOverviewCisco/CampaignOverviewCisco';
import DemograpyCisco from './DashboardCisco/DemographyCisco/DemographyCisco'
import SalesOverviewCisco from './DashboardCisco/SalesOverviewCisco/SalesOverviewCisco'
import TimeSalesCisco from './DashboardCisco/TimeSalesCisco/TimeSalesCisco'
import ProdictiveSalesCisco from './DashboardCisco/ProdictiveSalesCisco/ProdictiveSalesCisco'

import ProductSellingCisco from './DashboardCisco/ProductSellingCisco/ProductSellingCisco';



import TimeAccessCreality from './DashboardCreality/TimeAccessCreality/TimeAccessCreality';
import CampaignOverviewCreality from './DashboardCreality/CampaignOverviewCreality/CampaignOverviewCreality';
import DemograpyCreality from './DashboardCreality/DemographyCreality/DemographyCreality'
import SalesOverviewCreality from './DashboardCreality/SalesOverviewCreality/SalesOverviewCreality'
import TimeSalesCreality from './DashboardCreality/TimeSalesCreality/TimeSalesCreality'
import ProdictiveSalesCreality from './DashboardCreality/ProdictiveSalesCreality/ProdictiveSalesCreality'

import ProductSellingCreality from './DashboardCreality/ProductSellingCreality/ProductSellingCreality';


import TimeAccessHDStore from './DashboardHDStore/TimeAccessHDStore/TimeAccessHDStore';
import CampaignOverviewHDStore from './DashboardHDStore/CampaignOverviewHDStore/CampaignOverviewHDStore';
import DemograpyHDStore from './DashboardHDStore/DemographyHDStore/DemographyHDStore'
import SalesOverviewHDStore from './DashboardHDStore/SalesOverviewHDStore/SalesOverviewHDStore'
import TimeSalesHDStore from './DashboardHDStore/TimeSalesHDStore/TimeSalesHDStore'
import ProdictiveSalesHDStore from './DashboardHDStore/ProdictiveSalesHDStore/ProdictiveSalesHDStore'

import ProductSellingHDStore from './DashboardHDStore/ProductSellingHDStore/ProductSellingHDStore';



import TimeAccessHuion from './DashboardHuion/TimeAccessHuion/TimeAccessHuion';
import CampaignOverviewHuion from './DashboardHuion/CampaignOverviewHuion/CampaignOverviewHuion';
import DemograpyHuion from './DashboardHuion/DemographyHuion/DemographyHuion'
import SalesOverviewHuion from './DashboardHuion/SalesOverviewHuion/SalesOverviewHuion'
import TimeSalesHuion from './DashboardHuion/TimeSalesHuion/TimeSalesHuion'
import ProdictiveSalesHuion from './DashboardHuion/ProdictiveSalesHuion/ProdictiveSalesHuion'

import ProductSellingHuion from './DashboardHuion/ProductSellingHuion/ProductSellingHuion';



import TimeAccessIOMegastore from './DashboardIOMegastore/TimeAccessIOMegastore/TimeAccessIOMegastore'
import CampaignOverviewIOMegastore from './DashboardIOMegastore/CampaignOverviewIOMegastore/CampaignOverviewIOMegastore';
import DemograpyIOMegastore from './DashboardIOMegastore/DemographyIOMegastore/DemographyIOMegastore'
import SalesOverviewIOMegastore from './DashboardIOMegastore/SalesOverviewIOMegastore/SalesOverviewIOMegastore'
import TimeSalesIOMegastore from './DashboardIOMegastore/TimeSalesIOMegastore/TimeSalesIOMegastore'
import ProdictiveSalesIOMegastore from './DashboardIOMegastore/ProdictiveSalesIOMegastore/ProdictiveSalesIOMegastore'

import ProductSellingIOMegastore from './DashboardIOMegastore/ProductSellingIOMegastore/ProductSellingIOMegastore';


import TimeAccessLacie from './DashboardLacie/TimeAccessLacie/TimeAccessLacie';
import CampaignOverviewLacie from './DashboardLacie/CampaignOverviewLacie/CampaignOverviewLacie';
import DemograpyLacie from './DashboardLacie/DemographyLacie/DemographyLacie'
import SalesOverviewLacie from './DashboardLacie/SalesOverviewLacie/SalesOverviewLacie'
import TimeSalesLacie from './DashboardLacie/TimeSalesLacie/TimeSalesLacie'
import ProdictiveSalesLacie from './DashboardLacie/ProdictiveSalesLacie/ProdictiveSalesLacie'

import ProductSellingLacie from './DashboardLacie/ProductSellingLacie/ProductSellingLacie';


import TimeAccessMakerBot from './DashboardMakerBot/TimeAccessMakerBot/TimeAccessMakerBot';
import CampaignOverviewMakerBot from './DashboardMakerBot/CampaignOverviewMakerBot/CampaignOverviewMakerBot';
import DemograpyMakerBot from './DashboardMakerBot/DemographyMakerBot/DemographyMakerBot'
import SalesOverviewMakerBot from './DashboardMakerBot/SalesOverviewMakerBot/SalesOverviewMakerBot'
import TimeSalesMakerBot from './DashboardMakerBot/TimeSalesMakerBot/TimeSalesMakerBot'
import ProdictiveSalesMakerBot from './DashboardMakerBot/ProdictiveSalesMakerBot/ProdictiveSalesMakerBot'

import ProductSellingMakerBot from './DashboardMakerBot/ProductSellingMakerBot/ProductSellingMakerBot';



import TimeAccessMaresia from './DashboardMaresia/TimeAccessMaresia/TimeAccessMaresia'
import CampaignOverviewMaresia from './DashboardMaresia/CampaignOverviewMaresia/CampaignOverviewMaresia';
import DemograpyMaresia from './DashboardMaresia/DemographyMaresia/DemographyMaresia'
import SalesOverviewMaresia from './DashboardMaresia/SalesOverviewMaresia/SalesOverviewMaresia'
import TimeSalesMaresia from './DashboardMaresia/TimeSalesMaresia/TimeSalesMaresia'
import ProdictiveSalesMaresia from './DashboardMaresia/ProdictiveSalesMaresia/ProdictiveSalesMaresia'

import ProductSellingMaresia from './DashboardMaresia/ProductSellingMaresia/ProductSellingMaresia';



import TimeAccessNvidia from './DashboardNvidia/TimeAccessNvidia/TimeAccessNvidia'
import CampaignOverviewNvidia from './DashboardNvidia/CampaignOverviewNvidia/CampaignOverviewNvidia';
import DemograpyNvidia from './DashboardNvidia/DemographyNvidia/DemographyNvidia'
import SalesOverviewNvidia from './DashboardNvidia/SalesOverviewNvidia/SalesOverviewNvidia'
import TimeSalesNvidia from './DashboardNvidia/TimeSalesNvidia/TimeSalesNvidia'
import ProdictiveSalesNvidia from './DashboardNvidia/ProdictiveSalesNvidia/ProdictiveSalesNvidia'

import ProductSellingNvidia from './DashboardNvidia/ProductSellingNvidia/ProductSellingNvidia';


import TimeAccessRainha from './DashboardRainha/TimeAccessRainha/TimeAccessRainha'
import CampaignOverviewRainha from './DashboardRainha/CampaignOverviewRainha/CampaignOverviewRainha';
import DemograpyRainha from './DashboardRainha/DemographyRainha/DemographyRainha'
import SalesOverviewRainha from './DashboardRainha/SalesOverviewRainha/SalesOverviewRainha'
import TimeSalesRainha from './DashboardRainha/TimeSalesRainha/TimeSalesRainha'
import ProdictiveSalesRainha from './DashboardRainha/ProdictiveSalesRainha/ProdictiveSalesRainha'

import ProductSellingRainha from './DashboardRainha/ProductSellingRainha/ProductSellingRainha';



import TimeAccessSeagate from './DashboardSeagate/TimeAccessSeagate/TimeAccessSeagate'
import CampaignOverviewSeagate from './DashboardSeagate/CampaignOverviewSeagate/CampaignOverviewSeagate';
import DemograpySeagate from './DashboardSeagate/DemographySeagate/DemographySeagate'
import SalesOverviewSeagate from './DashboardSeagate/SalesOverviewSeagate/SalesOverviewSeagate'
import TimeSalesSeagate from './DashboardSeagate/TimeSalesSeagate/TimeSalesSeagate'
import ProdictiveSalesSeagate from './DashboardSeagate/ProdictiveSalesSeagate/ProdictiveSalesSeagate'

import ProductSellingSeagate from './DashboardSeagate/ProductSellingSeagate/ProductSellingSeagate';


import TimeAccessTopper from './DashboardTopper/TimeAccessTopper/TimeAccessTopper'
import CampaignOverviewTopper from './DashboardTopper/CampaignOverviewTopper/CampaignOverviewTopper';
import DemograpyTopper from './DashboardTopper/DemographyTopper/DemographyTopper'
import SalesOverviewTopper from './DashboardTopper/SalesOverviewTopper/SalesOverviewTopper'
import TimeSalesTopper from './DashboardTopper/TimeSalesTopper/TimeSalesTopper'
import ProdictiveSalesTopper from './DashboardTopper/ProdictiveSalesTopper/ProdictiveSalesTopper'

import ProductSellingTopper from './DashboardTopper/ProductSellingTopper/ProductSellingTopper';



import TimeAccessWacom from './DashboardWacom/TimeAccessWacom/TimeAccessWacom'
import CampaignOverviewWacom from './DashboardWacom/CampaignOverviewWacom/CampaignOverviewWacom';
import DemograpyWacom from './DashboardWacom/DemographyWacom/DemographyWacom'
import SalesOverviewWacom from './DashboardWacom/SalesOverviewWacom/SalesOverviewWacom'
import TimeSalesWacom from './DashboardWacom/TimeSalesWacom/TimeSalesWacom'
import ProdictiveSalesWacom from './DashboardWacom/ProdictiveSalesWacom/ProdictiveSalesWacom'

import ProductSellingWacom from './DashboardWacom/ProductSellingWacom/ProductSellingWacom';



import TimeAccessWesterDigital from './DashboardWesterDigital/TimeAccessWesterDigital/TimeAccessWesterDigital'
import CampaignOverviewWesterDigital from './DashboardWesterDigital/CampaignOverviewWesterDigital/CampaignOverviewWesterDigital';
import DemograpyWesterDigital from './DashboardWesterDigital/DemographyWesterDigital/DemographyWesterDigital'
import SalesOverviewWesterDigital from './DashboardWesterDigital/SalesOverviewWesterDigital/SalesOverviewWesterDigital'
import TimeSalesWesterDigital from './DashboardWesterDigital/TimeSalesWesterDigital/TimeSalesWesterDigital'
import ProdictiveSalesWesterDigital from './DashboardWesterDigital/ProdictiveSalesWesterDigital/ProdictiveSalesWesterDigital'

import ProductSellingWesterDigital from './DashboardWesterDigital/ProductSellingWesterDigital/ProductSellingWesterDigital';








const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        
        <RoutesPrivate exact path="/" component={Home} />
        <RoutesPrivate exact path="/dashboard" component={Dashboard} />

        <RoutesPrivate exact path="/dashboardCisco" component={DashboardCisco} />
        <RoutesPrivate exact path="/dashboardCreality" component={DashboardCreality} />
        <RoutesPrivate exact path="/dashboardHDStore" component={DashboardHDStore} />
        <RoutesPrivate exact path="/dashboardHuion" component={DashboardHuion} />
        <RoutesPrivate exact path="/dashboardIOMegastore" component={DashboardIOMegastore} />
        <RoutesPrivate exact path="/dashboardLacie" component={DashboardLacie} />
        <RoutesPrivate exact path="/dashboardLogitech" component={DashboardLogitech} />
        <RoutesPrivate exact path="/dashboardMakerBot" component={DashboardMakerBot} />
        <RoutesPrivate exact path="/dashboardMaresia" component={DashboardMaresia} />
        <RoutesPrivate exact path="/dashboardNvidia" component={DashboardNvidia} />
        <RoutesPrivate exact path="/dashboardRainha" component={DashboardRainha} />
        <RoutesPrivate exact path="/dashboardSeagate" component={DashboardSeagate} />
        <RoutesPrivate exact path="/dashboardTopper" component={DashboardTopper} />
        <RoutesPrivate exact path="/dashboardWacom" component={DashboardWacom} />
        <RoutesPrivate exact path="/dashboardWesterDigital" component={DashboardWesterDigital} />
        
       
       
       
   
        
        <RoutesPrivate exact path="/timeAccess" component={TimeAccess} />
        <RoutesPrivate exact path="/campaignOverview" component={CampaignOverview} />
        <RoutesPrivate exact path="/demography" component={Demograpy} />
        <RoutesPrivate exact path="/salesOverview" component={SalesOverview} />
        <RoutesPrivate exact path="/timeSales" component={TimeSales} />
        <RoutesPrivate exact path="/prodictiveSales" component={ProdictiveSales} />
       
       
        
        <RoutesPrivate exact path="/timeAccessLogitech" component={TimeAccessLogitech} />
        <RoutesPrivate exact path="/campaignOverviewLogitech" component={CampaignOverviewLogitech} />
        <RoutesPrivate exact path="/demographyLogitech" component={DemograpyLogitech} />
        <RoutesPrivate exact path="/salesOverviewLogitech" component={SalesOverviewLogitech} />
        <RoutesPrivate exact path="/timeSalesLogitech" component={TimeSalesLogitech} />
        <RoutesPrivate exact path="/prodictiveSalesLogitech" component={ProdictiveSalesLogitech} />





        <RoutesPrivate exact path="/timeAccessCisco" component={TimeAccessCisco} />
        <RoutesPrivate exact path="/campaignOverviewCisco" component={CampaignOverviewCisco} />
        <RoutesPrivate exact path="/demographyCisco" component={DemograpyCisco} />
        <RoutesPrivate exact path="/salesOverviewCisco" component={SalesOverviewCisco} />
        <RoutesPrivate exact path="/timeSalesCisco" component={TimeSalesCisco} />
        <RoutesPrivate exact path="/prodictiveSalesCisco" component={ProdictiveSalesCisco} />
  
        <RoutesPrivate exact path="/productSellingCisco " component={ProductSellingCisco } />



        <RoutesPrivate exact path="/timeAccessCreality" component={TimeAccessCreality} />
        <RoutesPrivate exact path="/campaignOverviewCreality" component={CampaignOverviewCreality} />
        <RoutesPrivate exact path="/demographyCreality" component={DemograpyCreality} />
        <RoutesPrivate exact path="/salesOverviewCreality" component={SalesOverviewCreality} />
        <RoutesPrivate exact path="/timeSalesCreality" component={TimeSalesCreality} />
        <RoutesPrivate exact path="/prodictiveSalesCreality" component={ProdictiveSalesCreality} />
       
        <RoutesPrivate exact path="/productSellingCreality " component={ProductSellingCreality } />




        <RoutesPrivate exact path="/timeAccessHDStore" component={TimeAccessHDStore} />
        <RoutesPrivate exact path="/campaignOverviewHDStore" component={CampaignOverviewHDStore} />
        <RoutesPrivate exact path="/demographyHDStore" component={DemograpyHDStore} />
        <RoutesPrivate exact path="/salesOverviewHDStore" component={SalesOverviewHDStore} />
        <RoutesPrivate exact path="/timeSalesHDStore" component={TimeSalesHDStore} />
        <RoutesPrivate exact path="/prodictiveSalesHDStore" component={ProdictiveSalesHDStore} />
    
        <RoutesPrivate exact path="/productSellingHDStore " component={ProductSellingHDStore } />



        <RoutesPrivate exact path="/timeAccessHuion" component={TimeAccessHuion} />
        <RoutesPrivate exact path="/campaignOverviewHuion" component={CampaignOverviewHuion} />
        <RoutesPrivate exact path="/demographyHuion" component={DemograpyHuion} />
        <RoutesPrivate exact path="/salesOverviewHuion" component={SalesOverviewHuion} />
        <RoutesPrivate exact path="/timeSalesHuion" component={TimeSalesHuion} />
        <RoutesPrivate exact path="/prodictiveSalesHuion" component={ProdictiveSalesHuion} />
   
        <RoutesPrivate exact path="/productSellingHuion " component={ProductSellingHuion } />




        <RoutesPrivate exact path="/timeAccessIOMegastore" component={TimeAccessIOMegastore} />
        <RoutesPrivate exact path="/campaignOverviewIOMegastore" component={CampaignOverviewIOMegastore} />
        <RoutesPrivate exact path="/demographyIOMegastore" component={DemograpyIOMegastore} />
        <RoutesPrivate exact path="/salesOverviewIOMegastore" component={SalesOverviewIOMegastore} />
        <RoutesPrivate exact path="/timeSalesIOMegastore" component={TimeSalesIOMegastore} />
        <RoutesPrivate exact path="/prodictiveSalesIOMegastore" component={ProdictiveSalesIOMegastore} />
     
        <RoutesPrivate exact path="/productSellingIOMegastore" component={ProductSellingIOMegastore} />




        <RoutesPrivate exact path="/timeAccessLacie" component={TimeAccessLacie} />
        <RoutesPrivate exact path="/campaignOverviewLacie" component={CampaignOverviewLacie} />
        <RoutesPrivate exact path="/demographyLacie" component={DemograpyLacie} />
        <RoutesPrivate exact path="/salesOverviewLacie" component={SalesOverviewLacie} />
        <RoutesPrivate exact path="/timeSalesLacie" component={TimeSalesLacie} />
        <RoutesPrivate exact path="/prodictiveSalesLacie" component={ProdictiveSalesLacie} />

        <RoutesPrivate exact path="/productSellingLacie" component={ProductSellingLacie} />




        <RoutesPrivate exact path="/timeAccessMakerBot" component={TimeAccessMakerBot} />
        <RoutesPrivate exact path="/campaignOverviewMakerBot" component={CampaignOverviewMakerBot} />
        <RoutesPrivate exact path="/demographyMakerBot" component={DemograpyMakerBot} />
        <RoutesPrivate exact path="/salesOverviewMakerBot" component={SalesOverviewMakerBot} />
        <RoutesPrivate exact path="/timeSalesMakerBot" component={TimeSalesMakerBot} />
        <RoutesPrivate exact path="/prodictiveSalesMakerBot" component={ProdictiveSalesMakerBot} />
   
        <RoutesPrivate exact path="/productSellingMakerBot" component={ProductSellingMakerBot} />



        <RoutesPrivate exact path="/timeAccessMaresia" component={TimeAccessMaresia} />
        <RoutesPrivate exact path="/campaignOverviewMaresia" component={CampaignOverviewMaresia} />
        <RoutesPrivate exact path="/demographyMaresia" component={DemograpyMaresia} />
        <RoutesPrivate exact path="/salesOverviewMaresia" component={SalesOverviewMaresia} />
        <RoutesPrivate exact path="/timeSalesMaresia" component={TimeSalesMaresia} />
        <RoutesPrivate exact path="/prodictiveSalesMaresia" component={ProdictiveSalesMaresia} />
     
        <RoutesPrivate exact path="/productSellingMaresia" component={ProductSellingMaresia} />



        <RoutesPrivate exact path="/timeAccessNvidia" component={TimeAccessNvidia} />
        <RoutesPrivate exact path="/campaignOverviewNvidia" component={CampaignOverviewNvidia} />
        <RoutesPrivate exact path="/demographyNvidia" component={DemograpyNvidia} />
        <RoutesPrivate exact path="/salesOverviewNvidia" component={SalesOverviewNvidia} />
        <RoutesPrivate exact path="/timeSalesNvidia" component={TimeSalesNvidia} />
        <RoutesPrivate exact path="/prodictiveSalesNvidia" component={ProdictiveSalesNvidia} />

        <RoutesPrivate exact path="/productSellingNvidia" component={ProductSellingNvidia} />



        <RoutesPrivate exact path="/timeAccessRainha" component={TimeAccessRainha} />
        <RoutesPrivate exact path="/campaignOverviewRainha" component={CampaignOverviewRainha} />
        <RoutesPrivate exact path="/demographyRainha" component={DemograpyRainha} />
        <RoutesPrivate exact path="/salesOverviewRainha" component={SalesOverviewRainha} />
        <RoutesPrivate exact path="/timeSalesRainha" component={TimeSalesRainha} />
        <RoutesPrivate exact path="/prodictiveSalesRainha" component={ProdictiveSalesRainha} />
     
        <RoutesPrivate exact path="/productSellingRainha" component={ProductSellingRainha} />




        <RoutesPrivate exact path="/timeAccessSeagate" component={TimeAccessSeagate} />
        <RoutesPrivate exact path="/campaignOverviewSeagate" component={CampaignOverviewSeagate} />
        <RoutesPrivate exact path="/demographySeagate" component={DemograpySeagate} />
        <RoutesPrivate exact path="/salesOverviewSeagate" component={SalesOverviewSeagate} />
        <RoutesPrivate exact path="/timeSalesSeagate" component={TimeSalesSeagate} />
        <RoutesPrivate exact path="/prodictiveSalesSeagate" component={ProdictiveSalesSeagate} />

        <RoutesPrivate exact path="/productSellingSeagate" component={ProductSellingSeagate} />



        <RoutesPrivate exact path="/timeAccessTopper" component={TimeAccessTopper} />
        <RoutesPrivate exact path="/campaignOverviewTopper" component={CampaignOverviewTopper} />
        <RoutesPrivate exact path="/demographyTopper" component={DemograpyTopper} />
        <RoutesPrivate exact path="/salesOverviewTopper" component={SalesOverviewTopper} />
        <RoutesPrivate exact path="/timeSalesTopper" component={TimeSalesTopper} />
        <RoutesPrivate exact path="/prodictiveSalesTopper" component={ProdictiveSalesTopper} />
      
        <RoutesPrivate exact path="/productSellingTopper" component={ProductSellingTopper} />



        <RoutesPrivate exact path="/timeAccessWacom" component={TimeAccessWacom} />
        <RoutesPrivate exact path="/campaignOverviewWacom" component={CampaignOverviewWacom} />
        <RoutesPrivate exact path="/demographyWacom" component={DemograpyWacom} />
        <RoutesPrivate exact path="/salesOverviewWacom" component={SalesOverviewWacom} />
        <RoutesPrivate exact path="/timeSalesWacom" component={TimeSalesWacom} />
        <RoutesPrivate exact path="/prodictiveSalesWacom" component={ProdictiveSalesWacom} />
    
        <RoutesPrivate exact path="/productSellingWacom" component={ProductSellingWacom} />




        <RoutesPrivate exact path="/timeAccessWesterDigital" component={TimeAccessWesterDigital} />
        <RoutesPrivate exact path="/campaignOverviewWesterDigital" component={CampaignOverviewWesterDigital} />
        <RoutesPrivate exact path="/demographyWesterDigital" component={DemograpyWesterDigital} />
        <RoutesPrivate exact path="/salesOverviewWesterDigital" component={SalesOverviewWesterDigital} />
        <RoutesPrivate exact path="/timeSalesWesterDigital" component={TimeSalesWesterDigital} />
        <RoutesPrivate exact path="/prodictiveSalesWesterDigital" component={ProdictiveSalesWesterDigital} />
   
        <RoutesPrivate exact path="/productSellinWesterDigital" component={ProductSellingWesterDigital} />

      
      

      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
