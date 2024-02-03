import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 mt-10">
      <div className="container mx-auto space-y-2">
        <div className="flex justify-start items-center">
          <img src="/images/logo.svg" alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="flex justify-start items-center">
          <p className="text-sm max-w-md ">
            Explore the beauty of everyday moments with EverydayVisa – your
            canvas for shared stories and unforgettable visual journeys,
            Capturing the essence of life's adventures, one shared photo at a
            time."
          </p>
        </div>
        <div className="flex justify-start items-center space-x-4">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">EverydayVisa</h3>
            <p className="mt-2 text-sm">1234 Street, City, State, Country</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
