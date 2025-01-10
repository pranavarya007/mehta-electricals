import React from "react";
import { ChevronRight, Zap, Building2, Cable } from "lucide-react";
import Image from "next/image";

const WorkHighlights = () => {
  const highlights = [
    {
      title: "Electrical Infrastructure",
      description:
        "Specialized in high-voltage installations and power distribution systems",
      icon: Zap,
      image: "/images/mehtaElectrical/35.jpg",
    },
    {
      title: "EV Charging Projects",
      description:
        "Delivering solutions for major EV projects for commercial and residential developments",
      icon: Building2,
      image: "/images/mehtaElectrical/12.jpg",
    },
    {
      title: "Solar Solutions",
      description:
        "Expert implementation of solar power networks and grid connections",
      icon: Cable,
      image: "/images/mehtaElectrical/17.jpg",
    },
  ];

  return (
    <div className="bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900">
            Featured Work Highlights
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Delivering excellence in electrical infrastructure solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="relative group">
              <div className="relative h-64 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>

              <div className="relative mt-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-neutral-600">{item.description}</p>

                <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <span className="text-sm font-medium hover:cursor-pointer">
                    Learn more
                  </span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkHighlights;
