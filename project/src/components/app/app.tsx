import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type filmInfo = {
  title: string,
  genre: string;
  year: number;
}

function App(filmInfoProps: filmInfo): JSX.Element {
  return (
    <WelcomeScreen filmInfo={ filmInfoProps } />
  );
}

export default App;
