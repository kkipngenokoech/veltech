import Footer from "@/app/components/footer";
import VelTechNavbar from "@/app/components/navbar";
import Testimonials from "@/app/components/testimonials";
import { fetchWanderers } from "./api/service";
import WandererCard from "@/app/components/wanderer";
import { useRequireAuth } from "@/app/utils/requireLoggedIn";

export async function getServerSideProps() {
  const users = await fetchWanderers();
  return { props: { users } };
}

export default function Wanderers({ users }) {
  useRequireAuth();
  const testimonials = [
  {
    id: 1,
    text: "EverydayVisa has revolutionized the way I share my everyday moments with loved ones. It's intuitive, fun, and a must-have for anyone who wants to cherish memories.",
    name: "Sarah Johnson",
    position: "Family Storyteller",
    image: "https://source.unsplash.com/random/150x150/?portrait",
  },
  {
    id: 2,
    text: "Using EverydayVisa has been a game-changer for me. It's like having a visual diary of my life's adventures. Highly recommended for anyone who loves capturing moments.",
    name: "David Lee",
    position: "Adventure Seeker",
    image: "https://source.unsplash.com/random/150x150/?portrait",
  },
  {
    id: 3,
    text: "As a photography enthusiast, EverydayVisa has become my go-to platform for sharing my passion with a like-minded community. It's easy to use and offers a seamless experience.",
    name: "Emily Smith",
    position: "Photography Enthusiast",
    image: "https://source.unsplash.com/random/150x150/?portrait",
  },
  {
    id: 4,
    text: "I've been using EverydayVisa for a while now, and I'm impressed by its reliability and user-friendly interface. It's a fantastic way to turn everyday moments into lasting memories.",
    name: "Michael Brown",
    position: "Loyal User",
    image: "https://source.unsplash.com/random/150x150/?portrait",
  },
]

  return (
    <div className="pt-16">
      <div className="fixed top-0 left-0 w-full z-30">
        <VelTechNavbar />
      </div>
      <ListWanderers wanderers={users} />
      <TestimonialSection testimonials={testimonials} />
      <Footer />
    </div>
  );
}

function ListWanderers({ wanderers }) {
  return (
    <ul role="list" className="divide-y bg-beige divide-gray-100 p-8">
      {wanderers.map((wanderer) => (
        <WandererCard key={wanderer.id} wanderer={wanderer} />
      ))}
    </ul>
  );
}

function TestimonialSection({ testimonials }) {
  return (
    <div className="my-8 p-8">
      <h2 className="text-2xl font-bold mb-4">Experiences Echo</h2>
      <div className="flex flex-col sm:flex-row overflow-x-scroll scrollbar-hide">
        {testimonials.slice(0, 3).map((testimonial) => (
          <Testimonials key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
