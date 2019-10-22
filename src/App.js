import React from 'react';
import './App.css';
import 'tachyons';
import NavigationBar from './components/NavigationBar/NavigationBar'
import DesktopImage from './components/DesktopImage/DesktopImage'
import ImageText from './components/ImageText/ImageText'
import Survey from './components/Survey/Survey'

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <DesktopImage/>
    <div style ={{display:'flex', justifyContent:'space-between',marginRight:'120px'}}>
      <ImageText/>
      <Survey/>
    </div>
    <div style ={{height:'1000px'}}/>
    </div>
  );
}

export default App;
