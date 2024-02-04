import Album from "@/app/components/album";
import Footer from "@/app/components/footer";
import VelTechNavbar from "@/app/components/navbar";

export default function Gallery() { 
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-30">
        <VelTechNavbar />
      </div>
      <div className="pt-16">

      <Album cards={cards} />
      </div>
      
      <Footer />
    </div>
  )
}

















