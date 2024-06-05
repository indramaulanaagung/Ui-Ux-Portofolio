import FifthPage from "./FifthPage/FifthPage";
import FirstPage from "./FirstPage/FirstPage";
import Footer from "./Footer/Footer";
import LastPage from "./LastPage/LastPage";
import Nav from "./Nav";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import CardLayout from "./component/Card";
import Head from "next/head";
import { ThemeProvider } from "../Darkmode/ThemeContext";


export default function Home() {
  return (
    <>
      <ThemeProvider>
        <Head>
          <title>Indra Maulana</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="">
          <div>
            <Nav />
          </div>
          <div className="relative">
            <FirstPage />
          </div>
          <div className="absolute top-[620px]">
            <CardLayout />
          </div>
          <div className="relative ">
            <SecondPage />
          </div>
          <div className="relative">
            <ThirdPage />
          </div>
          <div className="relative">
            <FifthPage />
          </div>
          <div className="relative">
            <LastPage />
          </div>
          <div className="relative">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
