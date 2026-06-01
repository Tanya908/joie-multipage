import Hero from "./Hero.tsx";
import FindUs from "../../components/map/FindUs.tsx";
import Start from "./Start.tsx";
import Welcome from "./Welcome.tsx";
import ParentPresence from "./ParentPresence.tsx";
import Exam from "./Exam.tsx";
import LetsConnect from "../../components/LetsConnect.tsx";

const FirstVisit = () => {
    return (
        <>
            <Hero/>
            <Start/>
            <Welcome/>
            <Exam/>
            <ParentPresence/>
            <LetsConnect
                title="Ready to schedule?"
                description="We can’t wait to meet you and your child — whether it's their first visit or a new dental home, we’ll make it easy, transparent, and joyful."
            />
            <FindUs theme="blue"/>
        </>
    )
}
export default FirstVisit
