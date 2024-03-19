import type { Metadata } from "next"
import SideNav from "@/components/SideNav"
import SideContent from "@/wrappers/SideContent"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Resume from "@/components/Resume"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Review from "@/components/Review"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { ApiResponse } from "@/utils/schema"


export const metadata: Metadata = {
  title: "John doe",
  description: "I develop 3D visuals, user interfaces and web applications",
};


export default async function page() {
  let url = process.env.API

  if (!url) return console.error("Invalid Request")

  let response: Response = await fetch(url, { cache: "force-cache" })
  let Data: ApiResponse = await response.json()
  let User = Data.user
  let socials = User.social_handles

  return (
    <>
      <SideNav />
      <SideContent>
        <Hero name={User.about.name} socials={socials} />
        <About data={User.about} email={User.email} />
        <Resume skills={User.skills} />
        <Services services={User.services} />
        <Portfolio projects={User.projects} />
        <Review testimonials={User.testimonials} />
        <Contact />
        <Footer socials={socials} />
      </SideContent>
    </>
  )
}