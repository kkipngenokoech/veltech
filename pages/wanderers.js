import Footer from "@/app/components/footer";
import VelTechNavbar from "@/app/components/navbar";
import Testimonials from "@/app/components/testimonials";
import { fetchWanderers } from "./api/users";
import WandererCard from "@/app/components/wanderer";

export async function getServerSideProps() {
  const users = await fetchWanderers();
  return { props: { users } };
}

export default function Wanderers({ users }) {
  const testimonials = [
    {
      id: 1,
      text: "This is a great service. I highly recommend it.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 2,
      text: "I love using this service. It's easy to use and reliable.",
      name: "Jane Smith",
      position: "Manager, Company",
    },
    // Add more testimonials as needed
    {
      id: 1,
      text: "This is a great service. I highly recommend it.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 2,
      text: "I love using this service. It's easy to use and reliable.",
      name: "Jane Smith",
      position: "Manager, Company",
    },
    // Add more testimonials as needed
  ];
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
      <div className="flex overflow-x-scroll scrollbar-hide">
        {testimonials.slice(0, 3).map((testimonial) => (
          <Testimonials key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
