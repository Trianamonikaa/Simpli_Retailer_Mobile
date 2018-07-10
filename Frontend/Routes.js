import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Penjualan from './Penjualan'
import HalamanPenjualan from './HalamanPenjualan'
import App from './App'

const Routes  = ()=>(
    <Router>
      <Scene key = "root" >
         <Scene key = "home" component = {Penjualan} title = "Penjualan" initial = {true} />
         <Scene key = "about" component = {HalamanPenjualan} title = "About" />
      </Scene>
   </Router>
)

export default Routes