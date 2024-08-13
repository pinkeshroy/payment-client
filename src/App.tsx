import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { updateHeader } from "./redux/header/headerSlice";
import Header from "./components/header/Header";
import NotificationIcon from "./Icons/NotificationIcon";
import SplashPage from "./pages/SplashPage";
import useTheme from "./hooks/useTheme";
import PaymentComponent from "./payments/PaymentForm";
// import LogoIcon from "./Icons/LogoIcon";
// import LanguageButton from "./component/LanguageButton";
// import LeftArrow from "./Icons/LeftArrow";

const App: React.FC = () => {
  const headerState = useSelector((state: RootState) => state.header);
  const dispatch = useDispatch();
  
/* this is a mock testing functionality for header. Later this code should be removed from here */
useEffect(() => {
  const updateHeaderExample = () => {
    dispatch(updateHeader({
      heading :"Hi,Angelina *",
      headingPosition: "left",
      subTitle:"welcome back",
      // compOnLeft: <LeftArrow  />,
      compOnRight:<NotificationIcon/>
    }))}
  updateHeaderExample();
}, [dispatch]);  
const { applyTheme,} = useTheme();
useEffect(()=>{
 applyTheme();
},[applyTheme])

  return (
    <div>
      {headerState.showHeader && <Header {...headerState} />}
      <PaymentComponent/>
    </div>
  )
};
export default App;
