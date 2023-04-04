/*
import 'aframe';
import './App.css';

import {Entity, Scene} from 'aframe-react';
import React from 'react';
require('aframe');

/*
joystick controlling
const AFRAME = window.AFRAME;

  AFRAME.registerComponent('thumbstick-logging',{
    init: function () {
      this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    },
    logThumbstick: function (evt) {
      if (evt.detail.y > 0.95) { console.log("DOWN"); }
      if (evt.detail.y < -0.95) { console.log("UP"); }
      if (evt.detail.x < -0.95) { console.log("LEFT"); }
      if (evt.detail.x > 0.95) { console.log("RIGHT"); }
    }
  });
*/
/*
const App = () => {
  
  const AFRAME = Window.AFRAME
  AFRAME.registerComponent('thumbstick-logging',{
    init: function () {
      this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    },
    logThumbstick: function (evt) {
      if (evt.detail.y > 0.95) { console.log("DOWN"); }
      if (evt.detail.y < -0.95) { console.log("UP"); }
      if (evt.detail.x < -0.95) { console.log("LEFT"); }
      if (evt.detail.x > 0.95) { console.log("RIGHT"); }
    }

*/
/*

  });

    return (

    <div className='Ninja_Arena'>
     <Scene>
      <a-assets>
        <img id="chuunin_floor"
        src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/chunin_floor.png?v=1680032695456" 
        crossorigin="anonymous" 
        alt="chuunin Floor" />
        <img id="chuunin_wall"
        src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/gray-concrete-ceramix-vinyl-tile-crx-508v-64_400.jpg.webp?v=1680031812870" 
        crossorigin="anonymous" 
        alt="Chuunin Walls"/>
        <video id="ninja_amv" autoplay loop="true" src="https://cdn.glitch.me/c76a4fd7-d4e0-495b-a83b-9db94de330a2/ninja_amv.mp4?v=1680243344757"></video>
      </a-assets>
        <Entity id="floor" primitive="a-plane" rotation="-90 0 0" height="120" width="120" src="#chuunin_floor"/>
        <Entity id="ceiling" primitive="a-plane" rotation="90 0 0" height="120" width="120" src="#chuunin_floor" position="0, 35, 0"/>
        <Entity primitive="a-plane" rotation="0 0 0" height=".8" width="1.3" color="#000" position="0, 2.6 -2.3"/>
        <Entity primitive="a-light" type="ambient" color="#abbfbb" />
        <Entity primitive="a-light" type="point" intensity="1.5" position="2 4 4"/>
        <Entity text={{value: 'Welcome to Ninja Arena!', align: "center", color: "#FFC650", width:"2.5", height:"2.5"}} position={{x: 0, y:2.7, z: -2.29}}/>
        <Entity text={{value: 'Skills coming soon!', align: "center", color: "#FFC650", width:"2.5", height:"2.5"}} position={{x: 0, y:2.5, z: -2.29}}/>
        <Entity id="leftWall"
          geometry={{primitive: 'box', width: 120, height:45, depth: 1}}
          position={{x: -60, y: 13, z: 0}}
          rotation={{x:0, y:90, z:0}}
          material={{src:"#chuunin_wall"}}/>
        <Entity id="rightWall"
          geometry={{primitive: 'box', width: 120, height:45, depth: 1}}
          position={{x:60, y:13, z:0}}
          rotation={{x:0, y:90, z:0}}
          material={{src:"#chuunin_wall"}}/>
        <Entity id="backWall"
          geometry={{primitive: 'box', width: 120, height:45, depth: 1}}
          position={{x:0, y: 13, z:60}}
          rotation={{x:0, y:0, z:0}}
          material={{src:"#chuunin_wall"}}/>
        <Entity id="FrontWall"
          geometry={{primitive: 'box', width: 120, height:45, depth: 1}}
          position={{x:0, y: 13, z:-60}}
          rotation={{x:0, y:0, z:0}}
          material={{color:"#804000"}}/>
        <a-video src="#ninja_amv" width="24" height="11" position="-17 27 -59.2"></a-video>
        <a-video src="#ninja_amv" width="24" height="11" position="-17 12.5 -59.2"></a-video>
        <a-video src="#ninja_amv" width="24" height="11" position="17 27 -59.2"></a-video>
        <a-video src="#ninja_amv" width="24" height="11" position="17 12.5 -59.2"></a-video>
        <Entity id="leftPlatform"
          geometry={{primitive: 'box', width: 111, height:.5, depth: 6.8}}
          position={{x: -59, y: 10.8, z: -10.5}}
          rotation={{x:0, y: 90, z:0}}
          material={{color:"#4d0000"}}/>
        <Entity id="leftPlatformRail"
          geometry={{primitive: 'box', width: 111, height:3, depth: .7}}
          position={{x: -56, y: 12.5, z: -10.5}}
          rotation={{x:0, y:90, z:0}}
          material={{color:"#190000"}}/>
        <Entity id="rightPlatform"
          geometry={{primitive: 'box', width: 111, height:.5, depth: 6.8}}
          position={{x: 59, y: 10.8, z: -10.5}}
          rotation={{x:0, y: 90, z:0}}
          material={{color:"#4d0000"}}/>
        <Entity id="rightPlatformRail"
          geometry={{primitive: 'box', width: 111, height:3, depth: .7}}
          position={{x: 56, y: 12.5, z: -10.5}}
          rotation={{x:0, y:90, z:0}}
          material={{color:"#190000"}}/>
        <Entity id="cylinderright"
          geometry={{primitive: 'cylinder', radius:2.5, height: 16}}
          position={{x:58.2, y: 2.75, z: 13}}
          material={{src:"#chuunin_wall"}}/>
        <Entity id="cylinderleft"
          geometry={{primitive: 'cylinder', radius:2.5, height: 16}}
          position={{x:-58.2, y: 2.75, z: 13}}
          material={{src:"#chuunin_wall"}}/>
        <Entity primitive="a-camera" position={{x:0, y: 3, z: -1}} />
        <Entity id="leftHand"  hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></Entity>
        <Entity id="rightHand"  hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"></Entity>

     </Scene>
     </div>
  )
};

export default App;
*/