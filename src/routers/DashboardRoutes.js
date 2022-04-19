import { Navbar } from "../components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/hero/HeroScreen";


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">

                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    {/**son argumentos opcionales  */}
                    <Route path="/search" element={<SearchScreen />} />
                    {/* son obligatorios los argunmentos del hero*/}
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />

                </Routes>

            </div>
        </>
    )
};
