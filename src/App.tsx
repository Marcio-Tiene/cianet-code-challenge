import Main from './components/Main';
import MapProvider from './components/MapProvider';
import Header from './Header';

function App() {
  return (
    <Main>
      <Header />
      <MapProvider personMarker={[-27.588416, -48.50641]} />
    </Main>
  );
}

export default App;
