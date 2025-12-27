import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rabbitPedia from "./../assets/rabbitPedia.png";

const menuData = {
  About: [
    "What is Rabbit?",
    "Rabbit Breeds",
    "Average Lifespan",
    "Male vs Female",
    "Indoor vs Outdoor",
    "Myths vs Facts",
  ],
  Diseases: [
    "Digestive Diseases",
    "Skin Diseases",
    "Dental Problems",
    "Eye & Ear Diseases",
    "Viral Diseases",
    "Parasites",
  ],
  Symptoms: ["Not Eating", "Loose Stool", "Head Tilt", "Fur Loss", "Sneezing"],
  Diet: [
    "Daily Diet",
    "Safe Foods",
    "Dangerous Foods",
    "Hay Importance",
    "Water Intake",
    "Baby Rabbit Diet",
    "Sick Rabbit Diet",
  ],
  Lifestyle: [
    "Housing",
    "Cleaning Routine",
    "Exercise Time",
    "Sleep Cycle",
    "Bonding & Handling",
    "Seasonal Care",
  ],
  Emergency: ["When to Visit Vet", "First Aid", "Emergency Signs"],
  Vaccination: [
    "Vaccination Schedule",
    "Deworming",
    "Health Checkups",
    "Choosing a Vet",
  ],
  FAQ: ["Contact Us"],
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-gray-200 shadow-emerald-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <motion.img
            src={rabbitPedia}
            alt="Rabbitpedia"
            className="w-12 h-20 object-contain"
            drag
            dragConstraints={{
                left:-40,
                top:-5,
                right:1000,
                bottom:500
            }}
          />
          <span className="text-2xl font-extrabold tracking-widest bg-linear-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            abbitpedia
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-3 font-semibold">
          {Object.keys(menuData).map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer
                  ${
                    menu === "About"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-black/1000 hover:bg-green-50 hover:text-green-600"
                  }`}
              >
                {menu}
              </button>

              {/* DROPDOWN */}
              <AnimatePresence>
                {openMenu === menu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl rounded-xl p-3"
                  >
                    <ul className="space-y-1">
                      {menuData[menu].map((item, i) => (
                        <li
                          key={i}
                          className="px-3 py-2 rounded-md cursor-pointer text-gray-700 hover:bg-black hover:text-white transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden">
          <i className="ri-menu-3-line text-3xl cursor-pointer"></i>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
