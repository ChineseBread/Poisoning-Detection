/**
 * @description 中间飞线图
 */

import React from 'react';
import {FlylineData as config} from '@/config/mock.config'
import {FlylineChartEnhanced} from '@jiaminghi/data-view-react'
function Center() {
  return (
    <FlylineChartEnhanced config={config} style={{width: '100%', height: '100%'}}/>
  );
}

export default Center;