import React from "react";
export function Footer() {
  return (
    <footer className="lg:bg-[url('/img/footer.png')] bg-[#0E204E] lg:bg-transparent w-full bg-cover lg:h-[500px] flex justify-center font-manrope lg:p-16 items-center">
      <div className="w-1/4 hidden lg:block">
        <h2 className="text-3xl text-white">Banana Island</h2>
        <p className="text-white">
          a community that gives you a taste of happiness, a place you’ll love
          to live and an opportunity to build a home.
        </p>
      </div>
      <div className="min-w-1/4 ml-[150px] hidden lg:block">
        <h2 className="text-lg font-playfair text-white">Follow up</h2>
        <p className="text-white w-3/4">
          Keep up with our newsletter to get updates about projects and offers
        </p>
        <form className="bg-white flex">
          <input type="email" placeholder="Email" className="w-3/4 p-2" />
          <button className="text-[#0E204E] hover:bg-[#000] w-1/4 p-2  border-white hover:text-white transition-colors duration-75">
            Subscribe
          </button>
        </form>
      </div>
      <div className="lg:hidden text-center">
        <h2 className="text-white font-manrope">Pinapple Island</h2>
        <p className="text-white font-manrope">
          © Copyright 2021 Glowdsgn. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
