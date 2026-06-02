import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppProviders } from "./providers";
import {Suspense} from "react";
import Preloader from "../components/Preloader.tsx";

function App() {
    return (
        <AppProviders>
            <BrowserRouter>
                <Suspense fallback={<Preloader />}>
                    <AppRoutes />
                </Suspense>
            </BrowserRouter>
        </AppProviders>
    );
}

export default App;