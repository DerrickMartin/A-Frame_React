
 

import 'aframe';

import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

function App () { 
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt="ground texture"/>
          <img id="animeGrass1" src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/animeGrass1.jpeg?v=1681247445096" alt="dark anime grass texture"/>
          <img id="grasslands" src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/grassLand2.jpeg?v=1681318434684" alt="light grasslands"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" alt="sky texture"/>
        </a-assets>
        <Entity id="floor" primitive="a-plane" rotation="-90 0 0" height="120" width="120" src="#animeGrass1"></Entity>
        <Entity id="floor" primitive="a-plane" rotation="-90 0 0" height="80" width="80" position=" 50 2 0" src="#grasslands"></Entity>
      </Scene>
    );
}

export default App;
