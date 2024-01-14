import { Background } from "./Background";
import { Table } from "./Table";
import { Modal } from "./Modal";
import { initJuno } from "@junobuild/core";
import { Auth } from "./Auth";
import { useEffect } from "react";
import Home from "./componets/Home";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Swap from "./componets/Swap";
import Lend from "./componets/Lend";
import Navbar from "./Navabar";
import MainPage from "./componets/MainPage";
import Stake from "./componets/Stake";


function App() {
 
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "psf7q-ryaaa-aaaal-admya-cai",
      }))();
  }, []);

  return (
    <>
    
    

     
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<div className="isolate bg-white">
        <main>

          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl pt-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Elevate Your Assets by Swaping, Staking, and Borrowing with
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Ekeza built on{" "}
                  <a
                    href="https://icp.org"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    ICP
                  </a>
                  .
                </p>

                <Auth>
                  <Home/>
                </Auth>
              </div>
            </div>
            <Background />
          </div>
        </main>
      </div>

        } />
        <Route path="/stake" element={<Stake />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </Router>
      
    
    
    </>
   
  );
}

export default App;
