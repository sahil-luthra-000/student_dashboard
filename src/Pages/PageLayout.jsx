import { ReactNode } from "react";
// import { useAppSelector } from "src/state/store/store";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const PageLayout = ({ children }) => {
  //   const state = useAppSelector((state) => state);
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default PageLayout;
