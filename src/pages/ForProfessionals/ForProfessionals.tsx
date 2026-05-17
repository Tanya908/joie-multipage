import Hero from "./Hero.tsx";
import Form from "./Form.tsx";
import Refer from "./Refer.tsx";
import LetsConnect from "../../components/LetsConnect.tsx";

const ForProfessionals = () => {
    return (
       <>
            <Hero/>
            <Form/>
            <Refer/>
           <LetsConnect
            title="Questions? Let’s connect"
            description="We’d love to speak with you, learn about your practice, or answer any questions about our referral process."
           />
       </>
    )
}
export default ForProfessionals
