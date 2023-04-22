import "./App.css";
import Weather from "./Weather";
import "./Weather.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
