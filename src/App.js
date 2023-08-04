import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AboutUs from "./components/About/AboutUs";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "../src/global/main.css";
import Consultation from "./components/Consultation/Consultation";
import Review from "./components/Review/Review";
import Dating from "./components/Dating/Dating";
import Advices from "./components/Advices/Advices";
import Aafia from "./components/Aafia";
import ConReview from "./components/Consultation/ConReview";
import CodeVerification from "./components/Auth/CodeVerification";
import CompleteProfileInfo from "./components/Auth/CompleteProfileInfo";
import RedirectPage from "./components/Auth/RedirectPage";
import { useEffect } from "react";
import { API } from "./data/config";
import UseAxiosGet from "./hooks/useAxiosGet";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store/auth";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  console.log(isLoggedIn);

  const { data: specializations } = UseAxiosGet(API.static.GET_SPECIALIZATIONS);
  useEffect(() => {
    if (!specializations) return;
    dispatch(authAction.replaceSpecializations(specializations.data));
  }, [specializations, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RedirectPage />}></Route>
        {!isLoggedIn && <Route path="/AboutUs" element={<AboutUs />}></Route>}
        {!isLoggedIn && <Route path="/Login" element={<Login />}></Route>}
        {!isLoggedIn && <Route path="/Register" element={<Register />}></Route>}
        {!isLoggedIn && (
          <Route
            path="/CodeVerification"
            element={<CodeVerification />}
          ></Route>
        )}
        {!isLoggedIn && (
          <Route
            path="/CompleteProfileInfo"
            element={<CompleteProfileInfo />}
          ></Route>
        )}
        {isLoggedIn && (
          <Route path="/Aafia" element={<Aafia />}>
            <Route path="Home" element={<Home />}></Route>
            <Route path="Consultation" element={<Consultation />}></Route>
            <Route path="ConReview/:id" element={<ConReview />}></Route>
            <Route path="Review" element={<Review />}></Route>
            <Route path="Dating" element={<Dating />}></Route>
            <Route path="Advices" element={<Advices />}></Route>
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
