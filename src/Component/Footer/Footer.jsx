import img from "../../assets/logo-BfNap0Pe.png";

export default function Footer() {
  return (
    <footer className="bg-white shadow-sm relative z-[55]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={img} className="h-8" alt="Recipe Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Recipe
            </span>
          </a>

          <p className="text-blue-700 font-bold text-2xl">Route</p>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2025 Mohamed Fawzy . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
