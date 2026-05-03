import Hero from "./Hero.tsx";
import FindUs from "../../components/map/FindUs.tsx";
import mapBackgroundBlue from "../../assets/map/mapBackgroundBlue.svg";
const FirstVisit = () => {
    return (
        <>
            <Hero/>
            <FindUs background={mapBackgroundBlue} />
        </>
    )
}
export default FirstVisit
