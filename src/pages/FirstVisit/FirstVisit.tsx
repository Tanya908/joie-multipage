import Hero from "./Hero.tsx";
import FindUs from "../../components/map/FindUs.tsx";
import mapBackgroundBlue from "../../assets/map/mapBackgroundBlue.svg";
import Start from "./Start.tsx";
import Welcome from "./Welcome.tsx";
import ParentPresence from "./ParentPresence.tsx";

const FirstVisit = () => {
    return (
        <>
            <Hero/>
            <Start/>
            <Welcome/>
            <ParentPresence/>
            <FindUs background={mapBackgroundBlue} />
        </>
    )
}
export default FirstVisit
