import Footer from "@/app/components/footer";
import VelTechNavbar from "@/app/components/navbar";
import Testimonials from "@/app/components/testimonials";
import { fetchWanderers } from "./api/users";




export async function getServerSideProps() {
  const users = await fetchWanderers();
  return { props: { users } };
}



export default function Wanderers({users}) {
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


function ListWanderers({ wanderers}) {
  return (
    <ul role="list" className="divide-y bg-beige divide-gray-100 p-8">
      {wanderers.map((wanderer) => (
        <li key={wanderer.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {wanderer.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {wanderer.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">12 albums</p>
             
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            
          </div>
        </li>
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
