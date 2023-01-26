import React, {Fragment} from 'react';
import CenterDotMap from "@/components/Home/CenterDotMap";
import RiskWordCloud from "@/components/Home/RiskWordCloud";
import DemoLine from "@/components/Home/DemoLine";

function Home() {
  return (
    <Fragment>
      <div className='flex-col'></div>
      <div className='flex-center'>
        <CenterDotMap/>
        <div className='col-line-container'>
          <DemoLine/>
          <DemoLine/>
        </div>
      </div>
      <div className='flex-col'>
        <RiskWordCloud/>

      </div>
    </Fragment>
  );
}

export default Home