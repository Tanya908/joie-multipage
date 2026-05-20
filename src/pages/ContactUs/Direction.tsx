import MapBox from "../../components/map/MapBox.tsx";

type ScheduleProps = {
    day: string,
    time:string,
    id: number,
}

const schedule:ScheduleProps[] = [
    { day: "Mon–Thu:", time: "8:00 AM – 5:00 PM", id:1 },
    { day: "Fri:", time: "8:00 AM – 2:00 PM", id:2 },
    { day: "Sat:", time: "9:00 AM – 1:00 PM (select dates only)", id:3 },
    { day: "Sun:", time: "Closed", id:4 },
];

const Direction = () => {
    return (
       <section className="mt-20">
           <div className="bg-[var(--color-light-red)] rounded-t-[40px] pt-14 pb-12 lg:pt-20 lg:pb-20 px-6 md:px-10
                           grid md:grid-cols-2 md:items-start md:gap-10"
           >
               <div className="grid lg:grid-cols-[140px_1fr] xl:grid-cols-[260px_1fr] lg:items-start lg:gap-8">
                   <h4 className="text-h4-dec">Showtimes (hours):</h4>
                   <div className="grid gap-y-3">
                       {schedule.map((item) => (
                           <div key={item.id} className="grid grid-cols-[100px_1fr] gap-x-4">
                                <span className="text-p2 text-[var(--color-black)]">{item.day}</span>
                                <span className="text-p2 text-[var(--color-black)]">{item.time}</span>
                           </div>
                       ))}
                   </div>
               </div>

               <div className="mt-8 md:mt-0">
                   <h4 className="text-h4-dec ">Directions & parking</h4>
                   <p className="text-h4 text-[var(--color-black)] w-full max-w-2xl">We’re in the heart of Ramsey near [landmark]. Free parking on-site and stroller-friendly entrance.</p>
               </div>
           </div>

           <div className="w-full h-[516px]">
               <MapBox className="rounded-b-[40px]"/>
           </div>
       </section>
    )
}
export default Direction
