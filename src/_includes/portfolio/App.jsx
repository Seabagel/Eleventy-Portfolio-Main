// import logo from './logo.svg';
import "./styles/app.css";
import Main from "./Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
// always add mobile.css after everything
import "./styles/mobile.css"
import "./styles/article.css"

export default function App() {
  return (
    <>
      <Header
        backgroundUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
        }
      />
      <Main />
      <Footer />
    </>
  );
}
