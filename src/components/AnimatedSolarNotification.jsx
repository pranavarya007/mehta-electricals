import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, X } from "lucide-react";

const SolarNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 md:bg-size-200 animate-gradient-x"
        >
          <div className="mx-auto max-w-7xl py-2 sm:py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 sm:gap-x-6">
              <Sun className="h-4 sm:h-5 w-4 sm:w-5 text-white animate-pulse" />
              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-white text-center sm:text-left px-2">
                We are enlisted with PM Surya Ghar: Muft Bijli Yojana National
                Portal for processing rooftop solar PV application for
                subsidy-based applications.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolarNotification;
