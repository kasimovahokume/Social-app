import '../styles/reset.css'
import '../styles/global.css'
import SocialContainer from "../features/social/components/SocialContainer";
import { ThemeProvider } from "../shared/context/ThemeContext/ThemeContext";

function App() {


 return (
    <ThemeProvider>
      <SocialContainer />
    </ThemeProvider>
  );
}
export default App
