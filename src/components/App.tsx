import Main from "../pages/Main";
import { SettingProps } from "../props/SettingProps";

type AppProps = {
    settings: SettingProps
}

 const App = ( {settings}: AppProps) => {
  return (
    <Main settings = {settings}></Main>
  );
}

export default App;
