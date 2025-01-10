"use client";
import { useEffect, useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

// Website content mapping for search including blogs
export const websiteContent = {
  home: {
    path: "/",
    title: "Home",
    content:
      "Mehta Electrical & Communication - Leading provider of electrical and communication solutions",
    keywords: ["home", "electrical", "communication", "solutions", "provider"],
  },
  about: {
    path: "/about",
    title: "About Us",
    content:
      "Learn about our history, mission, and commitment to excellence in electrical and communication services",
    keywords: ["about", "history", "mission", "company", "team"],
  },
  services: {
    path: "/services",
    title: "Our Services",
    content:
      "Comprehensive electrical services including installation, maintenance, and repairs. Communication solutions including network setup and maintenance.",
    keywords: [
      "services",
      "electrical",
      "installation",
      "maintenance",
      "repairs",
      "network",
    ],
  },
  electrical: {
    path: "/process",
    title: "How we work",
    content:
      "Professional electrical services including wiring, installation, maintenance, repairs, and upgrades for residential and commercial properties.",
    keywords: [
      "electrical",
      "wiring",
      "installation",
      "maintenance",
      "repairs",
    ],
  },
  communication: {
    path: "/services/communication",
    title: "Communication Services",
    content:
      "Advanced communication solutions including network installation, fiber optics, telephone systems, and data infrastructure.",
    keywords: ["communication", "network", "fiber optics", "telephone", "data"],
  },
  contact: {
    path: "/contact",
    title: "Contact Us",
    content:
      "Get in touch with us for your electrical and communication needs. Request a quote or schedule a consultation.",
    keywords: ["contact", "quote", "consultation", "support", "help"],
  },
  // Blog Posts
  blog1: {
    path: "/blog/transformers",
    title: "Transformers",
    content:
      "Discover the essential role of transformers in electrical systems. Learn how they enable efficient power distribution, voltage regulation, and safety across residential, commercial, and industrial applications. Explore the various types of transformers and their specific uses, from step-up and step-down transformers to isolation and distribution transformers.",
    keywords: [
      "Transformers",
      "Electrical systems",
      "Power distribution",
      "Voltage regulation",
      "Step-up transformers",
      "Step-down transformers",
      "Isolation transformers",
      "Distribution transformers",
      "Industrial applications",
    ],
    type: "blog",
  },
  blog2: {
    path: "/blog/ht-lt-panels",
    title: "Guide to HT and LT Panels",
    content:
      "Understand the critical role of HT (High Tension) and LT (Low Tension) panels in electrical distribution. Learn how these panels ensure efficient power management for industrial, commercial, and residential applications. Explore their features, types, and the importance of proper installation and maintenance.",
    keywords: [
      "HT panels",
      "LT panels",
      "High Tension panels",
      "Low Tension panels",
      "electrical distribution",
      "power management",
      "industrial applications",
      "commercial applications",
      "residential power solutions",
    ],
    type: "blog",
  },
  blog3: {
    path: "/blog/solar",
    title: "Solar Panels: Harnessing Renewable Energy",
    content:
      "Explore the benefits of solar panels for sustainable energy solutions. Understand how solar panels convert sunlight into electricity, their role in reducing energy costs, and their contribution to a greener future. Learn about the types of panels and key factors in choosing the right solar solution.",
    keywords: [
      "solar panels",
      "renewable energy",
      "sustainable power",
      "solar energy",
      "energy efficiency",
      "green energy",
      "solar solutions",
      "cost-effective energy",
    ],
    type: "blog",
  },
  blog4: {
    path: "/blog/electronic-meters",
    title: "Electronic Meters: Precision in Energy Monitoring",
    content:
      "Discover how electronic meters revolutionize energy monitoring and billing. Learn about their accuracy, real-time data capabilities, and role in optimizing energy usage for residential, commercial, and industrial setups.",
    keywords: [
      "electronic meters",
      "energy monitoring",
      "smart meters",
      "energy efficiency",
      "accurate billing",
      "real-time data",
      "industrial energy solutions",
      "residential energy solutions",
    ],
    type: "blog",
  },
  blog5: {
    path: "/blog/cable-joining-kits",
    title: "Cable Joining Kits: Ensuring Reliable Connections",
    content:
      "Learn how cable joining kits ensure robust and durable connections in electrical systems. Explore their applications in power transmission, their role in maintaining safety, and tips for proper usage in industrial and residential setups.",
    keywords: [
      "cable joining kits",
      "electrical connections",
      "power transmission",
      "durable connections",
      "industrial electrical systems",
      "residential power solutions",
      "safety in electrical systems",
      "power reliability",
    ],
    type: "blog",
  },
  blog6: {
    path: "/blog/sitc",
    title: "SITC: A Complete Electrical Service Solution",
    content:
      "Explore the process of Supply Installation Testing & Commissioning (SITC) for electrical systems. Understand how SITC ensures efficient, safe, and reliable implementation of electrical projects for residential, commercial, and industrial applications.",
    keywords: [
      "SITC",
      "Supply Installation Testing & Commissioning",
      "electrical projects",
      "power system efficiency",
      "electrical system safety",
      "residential electrical services",
      "commercial electrical services",
      "industrial electrical services",
    ],
    type: "blog",
  },
};

export const SearchModal = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const searchInputRef = useRef(null);
  const searchDebounceRef = useRef(null);

  const performSearch = (query) => {
    setIsSearching(true);
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const results = Object.entries(websiteContent)
      .filter(([_, page]) => {
        if (activeFilter === "blogs" && page.type !== "blog") return false;
        if (activeFilter === "pages" && page.type === "blog") return false;
        return true;
      })
      .map(([key, page]) => {
        const titleMatch = page.title.toLowerCase().includes(searchTerm);
        const contentMatch = page.content.toLowerCase().includes(searchTerm);
        const keywordMatch = page.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm)
        );

        if (titleMatch || contentMatch || keywordMatch) {
          const contextIndex = page.content.toLowerCase().indexOf(searchTerm);
          let context = page.content;
          if (contextIndex !== -1) {
            const start = Math.max(0, contextIndex - 50);
            const end = Math.min(
              page.content.length,
              contextIndex + searchTerm.length + 50
            );
            context = "..." + page.content.slice(start, end) + "...";
          }

          return {
            id: key,
            title: page.title,
            path: page.path,
            context: context,
            type: page.type || "page",
            relevance: titleMatch ? 3 : keywordMatch ? 2 : 1,
          };
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => b.relevance - a.relevance);

    setSearchResults(results);
    setIsSearching(false);
  };

  // Handle real-time search with debouncing
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Clear previous timeout
    if (searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current);
    }

    // Set new timeout for debouncing
    searchDebounceRef.current = setTimeout(() => {
      performSearch(query);
    }, 300); // 300ms delay
  };

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
    return () => {
      if (searchDebounceRef.current) {
        clearTimeout(searchDebounceRef.current);
      }
    };
  }, [searchOpen]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      performSearch(searchQuery);
    }
  }, [activeFilter]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setActiveFilter("all");
  };

  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-100 text-neutral-950">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleResultClick = (path) => {
    window.location.href = path;
    closeSearch();
  };

  return (
    <>
      <button
        onClick={() => setSearchOpen(true)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-white/90 transition-colors duration-200"
        aria-label="Search"
      >
        <HiSearch className="h-5 w-5" />
      </button>

      {searchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
              onClick={closeSearch}
            />

            <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all w-full max-w-2xl">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center">
                  <HiSearch className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  placeholder="Search anything..."
                  className="block w-full pl-12 pr-12 py-6 text-lg text-neutral-950 placeholder:text-gray-400 border-0 focus:ring-0 focus:outline-none"
                />

                <button
                  onClick={closeSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <IoMdClose className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="border-t border-gray-100 px-6 py-2">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      activeFilter === "all"
                        ? "bg-neutral-950 text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveFilter("pages")}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      activeFilter === "pages"
                        ? "bg-neutral-950 text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Pages
                  </button>
                  <button
                    onClick={() => setActiveFilter("blogs")}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      activeFilter === "blogs"
                        ? "bg-neutral-950 text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Blog Posts
                  </button>
                </div>
              </div>

              {/* Search Results Section */}
              <div className="border-t border-gray-100">
                <div className="px-6 py-4">
                  {/* Loading State */}
                  {isSearching && (
                    <div className="py-4 text-center">
                      <div className="inline-block h-6 w-6 animate-spin rounded-full border-3 border-solid border-neutral-950 border-r-transparent"></div>
                    </div>
                  )}

                  {/* Results List */}
                  {!isSearching && searchResults.length > 0 && (
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-gray-500">
                        Found {searchResults.length} results
                      </p>
                      {searchResults.map((result) => (
                        <button
                          key={result.id}
                          onClick={() => handleResultClick(result.path)}
                          className="block w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-neutral-950">
                                {highlightMatch(result.title, searchQuery)}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                {result.type === "blog" ? "Blog Post" : "Page"}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500">
                              {highlightMatch(result.context, searchQuery)}
                            </span>
                            <span className="text-sm text-blue-600">
                              {result.path}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* No Results State */}
                  {!isSearching &&
                    searchResults.length === 0 &&
                    searchQuery && (
                      <div className="py-8 text-center">
                        <p className="text-gray-500">
                          No results found for &quot;{searchQuery}&quot;
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          Try searching with different keywords
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
