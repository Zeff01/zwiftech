const images = ["a", "b", "c", "d", "e", "f", "y", "z", "i", 'j', "k", "l", "q", "r", "s"]
import Footer from "@/components/footer/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col py-8 gap-y-4 max-w-3xl">
                <h1 className="text-5xl font-bold self-center">Projects</h1>
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-row gap-x-2">
                        <h2 className="font-semibold text-4xl">Applete</h2>
                        <Image src={"/applete-icon.png"} width={40} height={40} alt="applete-logo" />
                    </div>
                    <h3 className="text-2xl w-full max-w-3xl">
                        Applete is a sport event booking app, and a court rental/reservation app for athletes and organizers. 
                        Available on Google Playstore and Apple Appstore.
                    </h3>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-2">   
                            <h4 className="font-bold text-xl">Player Features</h4>     
                            <div className="ps-4">
                                <p className="font-semibold text-lg">Current Features</p>
                                <ul className="list-disc ps-8">
                                    <li>Book sport events conveniently</li>
                                    <li>Search upcoming events nearby</li>
                                    <li>Join Teams</li>
                                    <li>Communicate directly with organizers</li>
                                    <li>Follow event organizers</li>
                                </ul>
                            </div>
                            <div className="ps-4">
                                <p className="font-semibold text-lg">Upcoming Features</p>
                                <ul className="list-disc ps-8">
                                    <li>Create Groups managed by players</li>
                                    <li>Follow players</li>
                                    <li>Post your own event experience</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">   
                            <h4 className="text-xl font-bold">Organizer Features</h4>     
                            <div className="ps-4">
                                <p className="text-lg font-semibold">Current Features</p>
                                <ul className="list-disc ps-8">
                                    <li>Create and manage sport events</li>
                                    <li>Communicate with players directly</li>
                                    <li>Dashboard for data analytics</li>
                                    <li>Court rental system</li>
                                    <li>Communicate with renters directly in app</li>
                                    <li>Subscribe to unlock ability to assign staffs</li>
                                </ul>
                            </div>
                            <div className="ps-4">
                                <p className="text-lg font-semibold">Upcoming Features</p>
                                <ul className="list-disc ps-8">
                                    <li>Notify nearby potential players of your event</li>
                                    <li>Boost your event presence</li>
                                    <li>Announcement feature: notify all of your event partipants updates regarding your event.</li>
                                    <li>Post and share your event pictures.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 flex flex-col gap-y-6">
                        <h4 className="font-bold text-3xl">App Previews</h4>
                        <section className="flex flex-row flex-wrap gap-2 max-w-2xl">
                            {
                                images.map(i => (
                                    <Image src={`/${i}.png`} width={400} height={900} alt={`img-${i}`} key={i} className="w-[120px]" />
                                ))
                            }
                        </section>
                    </div>
                    <Link className="text-custom-purple underline" href="/projects/applete/privacy-policy">Privacy Policy</Link>
                    <div className="flex flex-col gap-y-3">
                        <h4 className="font-semibold">Coming Soon On</h4>
                        <div className="flex flex-row gap-x-4">
                        {/* <Link href={"/"}> */}
                            <Image src={"/appstore.png"} width={100} height={100} alt="appstore-logo" className="w-[60px]" /> 
                        {/* </Link> */}
                
                        {/* <Link href={"/"}> */}
                            <Image src={"/playstore.png"} width={100} height={100} alt="appstore-logo" className="w-[60px]" />  
                        {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}