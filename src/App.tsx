import { Header } from './components/common/header';
import { CardComponent } from './components/joke/card';
import { Footer } from './components/common/footer';
import './styles/reset.css';
import './components/common/common.css';
import { Grid } from '@material-ui/core';

function App() {
  const title = 'GetClown';
  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        id="mainGrid"
      >
        <Header title={title} />
        <main>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <CardComponent />
          </Grid>
        </main>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
