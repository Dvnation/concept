import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Checks } from './check';
// import { Bibler } from './reserve';
import { Resizer } from './resizer';
import { Start } from './start';
import { ChapterPage } from './ChapterPage';
import { Verse } from './verse';
import { Kjv } from './kjvNew';
  // import { Router } from 'react-native-router-flux';
  // import { Scene } from 'react-native-router-flux';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
// alert("come");
/* <>
  <Router>
    <Scene key="root">
      <Scene key="home" component={Start} title="home">

      </Scene>

      <Scene key = "Chapter" component={ChapterPage} title="chapter">

      </Scene>
    </Scene>
  </Router> */

return(

  <View id = "ghfh" style={styles.container}>
        {/* <Checks/> */}
        <Start/>
        {/* <Kjv/> */}
        
        {/* <ChapterPage/> */}
        {/* <Resizer/> */}

  {/* <Text> dgd forhrh Open up App.js to start working on your app go and buy fsdgdgxsfhshffx!</Text> */}
  {/* <StatusBar style="auto" /> */}
</View>


)


  // useEffect(() => {
  //   const handleScreenWidthChange = () => {
  //     setWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleScreenWidthChange);

  //   return () => {
  //     window.removeEventListener('resize', handleScreenWidthChange);
  //   };
  // }, []);

  // return width >= 1200 ? <Bibler /> : <Resizer />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
