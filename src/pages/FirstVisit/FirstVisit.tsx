import Hero from "./Hero.tsx";
import FindUs from "../../components/map/FindUs.tsx";
import mapBackgroundBlue from "../../assets/map/mapBackgroundBlue.svg";
import Start from "./Start.tsx";

const FirstVisit = () => {
    return (
        <>
            <Hero/>
            <Start/>
            <FindUs background={mapBackgroundBlue} />
        </>
    )
}
export default FirstVisit
