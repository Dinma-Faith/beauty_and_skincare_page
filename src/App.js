import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import ProductPage from "./components/ProductPage";
import Comment from "./components/Comment";
import Testimonials from "./components/Testimonials";
import Recommend from "./components/Recommend";

// import Test from "./components/Test";

function App() {
  return (
    <div className="bg-gray-400">
      <Nav />
      <Home />
      <About />
      <Testimonials />
      <Recommend />
      <ProductPage />
      <Comment />

    </div>
  );
}

export default App;
