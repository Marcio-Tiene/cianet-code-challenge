import Main from './components/Main';
import MapProvider from './components/MapProvider';
import Header from './components/Header';
import AddressFormModal from './components/AddressFormModal';
import Footer from './components/Footer';

function App() {
  return (
    <Main>
      <Header />
      <MapProvider />
      <Footer />
      <AddressFormModal />
    </Main>
  );
}

export default App;
