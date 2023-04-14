
import 'aframe';

// import 'aframe-particle-system-component';
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
          <img id="nightsky" src='nightsky.png' alt='nightsky'/>

          <audio id="click-sound" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
          <img id="city" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" alt='city'/>
          <img id="city-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg" alt='city-thumb'/>
          <img id="cubes" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg" alt='cubes'/>
          <img id="cubes-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg" alt='cubes-thumb'/>
          <img id="sechelt" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" alt='sechelt' />
          <img id="sechelt-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg" alt='sechelt-thumb'/>
        </a-assets>
        <Entity id="floor" primitive="a-plane" rotation="-90 0 0" height="270" width="270" src="#animeGrass1"></Entity>
        <Entity id="floor2" primitive="a-plane" rotation="-90 0 0" height="80" width="80" position="150 1 0" src="#grasslands"></Entity>
        <Entity primitive="a-sky" height="3048" radius="120" src="#nightsky" theta-length="90" width="2048"/>
        <Entity primitive="a-camera" position="0 3 0">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
}

export default App;
