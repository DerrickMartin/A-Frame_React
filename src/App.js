
 

import 'aframe';

import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

function App () { 
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt="ground texture"/>
          <img id="animeGrass1" src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt="dark anime grass texture"/>
          <img id="grasslands" src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt="light grasslands"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" alt="sky texture"/>
        </a-assets>
        <Entity id="floor" primitive="a-plane" rotation="-90 0 0" height="120" width="120" src="#animeGrass1"></Entity>
        <Entity id="floor" primitive="a-plane" rotation="-90 0 0" height="80" width="80" position=" 50 2 0" src="#grasslands"></Entity>
      </Scene>
    );
}

export default App;
