"use client";
import Link from "next/link";
import { useState } from "react";
import { X, Search, ChevronDown, ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ChartNoAxesGantt } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServiceOpen(false);
    setIsAccessoriesOpen(false);
  };
  const toggleService = () => setIsServiceOpen(!isServiceOpen);
  const toggleAccessories = () => {
    setIsAccessoriesOpen(!isAccessoriesOpen);
    setIsServiceOpen(false);
  };

  const serviceItems = [
    { name: "Repairing of luggage", href: "/services/repairing-of-luggage" },
    { name: "Wholesale parts", href: "/services/wholesale-parts" },
    { name: "Custom covers", href: "/services/custom-covers" },
    { name: "Dress alterations", href: "/services/dress-alterations" },
  ];

  const searchItems = [...serviceItems];

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    const foundItem = searchItems.find((item) =>
      item.name.toLowerCase().includes(query)
    );
    if (foundItem) {
      router.push(foundItem.href);
      setSearchQuery("");
      setIsOpen(false); // close mobile menu if open
    } else {
      alert("No matching service or accessory found.");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Logo} alt="Logo" width={60} height={60} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link href="/gallery" className="text-gray-800 hover:text-blue-600">
              Gallery
            </Link>
            {/* Service Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <button className="flex items-center cursor-pointer text-gray-800 hover:text-blue-600">
                Service List <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {isServiceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg shadow-lg rounded-md py-2 z-50"
                  >
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/support" className="text-gray-800 hover:text-blue-600">
              Support
            </Link>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or accessories..."
                className="pl-10 pr-4 py-1 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={18}
              />
            </form>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-8 pr-2 py-1 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 sm:w-40"
              />
              <Search
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={16}
              />
            </form>
            <button
              aria-label="Open Nav Menu"
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X size={34} color="red" />
              ) : (
                <ChartNoAxesGantt size={34} color="skyblue" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg backdrop-blur-lg absolute top-16 left-0 right-0 min-h-screen z-40"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {!isServiceOpen && !isAccessoriesOpen && (
              <div className="flex flex-col items-center space-y-20 py-20">
                <Link
                  href="/"
                  className="text-gray-800 text-4xl hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-800 text-4xl hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  className="text-gray-800 text-4xl hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
                <button
                  onClick={toggleService}
                  className="text-gray-800 text-4xl hover:text-blue-600 flex items-center justify-center w-full"
                >
                  Service List{" "}
                  <ChevronDown
                    size={16}
                    className={`ml-1 ${isServiceOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {/* <button
                  onClick={toggleAccessories}
                  className="text-gray-800 text-4xl hover:text-blue-600 flex items-center justify-center w-full"
                >
                  Accessories{" "}
                  <ChevronDown
                    size={16}
                    className={`ml-1 ${isAccessoriesOpen ? "rotate-180" : ""}`}
                  />
                </button> */}
                <Link
                  href="/support"
                  className="text-gray-800 text-4xl hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Support
                </Link>
              </div>
            )}
            {isServiceOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center space-y-6 py-8"
              >
                <button
                  onClick={() => setIsServiceOpen(false)}
                  className="flex items-center text-gray-800 text-3xl w-full pl-4 mb-4"
                >
                  <ChevronLeft size={36} className="mr-2" color="skyblue" />{" "}
                  Back
                </button>
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 text-3xl w-full text-justify ms-20 py-5"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
            {isAccessoriesOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center space-y-6 py-8"
              >
                <button
                  onClick={() => setIsAccessoriesOpen(false)}
                  className="flex items-center text-gray-800 text-3xl w-full pl-4 mb-4"
                >
                  <ChevronLeft size={36} className="mr-2" color="skyblue" />{" "}
                  Back
                </button>
                {/* {accessoriesItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 text-3xl w-full text-justify ms-20 py-1"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))} */}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
