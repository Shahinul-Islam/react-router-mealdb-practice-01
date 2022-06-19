// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Food from "./components/Food/Food";
import About from "./components/About/About";
import NotFound from "./components/Not Found/NotFound";
import SingleMeal from "./components/SingleMeal/SingleMeal";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/food" element={<Food></Food>}></Route>
        <Route path="/food/:mealId" element={<SingleMeal></SingleMeal>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
