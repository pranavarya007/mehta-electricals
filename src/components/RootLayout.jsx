"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import clsx from "clsx";
import Offices from "./Offices";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import { HiSearch } from "react-icons/hi";

// Website content mapping for search
const websiteContent = {
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
};

const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {


// handling white logo error 
 const pathname = usePathname();
 const isHomePage = pathname === "/";


  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);

  // Mock search data - Replace this with your actual data or API call
  const mockData = [
    { id: 1, title: "Electrical Services", url: "/services/electrical" },
    { id: 2, title: "Communication Solutions", url: "/services/communication" },
    { id: 3, title: "Network Installation", url: "/services/network" },
    { id: 4, title: "Security Systems", url: "/services/security" },
    { id: 5, title: "Smart Home Automation", url: "/services/automation" },
  ];

  // Enhanced search function that searches through actual content
  const performSearch = (query) => {
    setIsSearching(true);
    const searchTerm = query.toLowerCase().trim();

    // Search through website content
    const results = Object.entries(websiteContent)
      .map(([key, page]) => {
        const titleMatch = page.title.toLowerCase().includes(searchTerm);
        const contentMatch = page.content.toLowerCase().includes(searchTerm);
        const keywordMatch = page.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm)
        );

        if (titleMatch || contentMatch || keywordMatch) {
          // Find the matching context
          const contextIndex = page.content.toLowerCase().indexOf(searchTerm);
          let context = page.content;
          if (contextIndex !== -1) {
            // Get a substring of content around the match
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
            relevance: titleMatch ? 3 : keywordMatch ? 2 : 1, // Simple relevance scoring
          };
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => b.relevance - a.relevance);

    setTimeout(() => {
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      performSearch(searchQuery);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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
  };

  // Highlight matching text in search results
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

  return (
    <>
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"} aria-label="Home">
            <Logo
              className={clsx(
                "hover:scale-105",
                isHomePage || invert
                  ? "text-white hover:text-white"
                  : "text-neutral-950 hover:text-neutral-950"
              )}
            >
              Mehta Electrical & Communication
            </Logo>
          </Link>
          <div className="flex items-center gap-x-8">
            <Link
              href={"/process"}
              aria-label="Services"
              className={clsx(
                "hover:scale-105",
                isHomePage || invert
                  ? "text-white hover:text-white"
                  : "text-neutral-950 hover:text-neutral-950"
              )}
            >
              Services
            </Link>
            <Link
              href={"/work"}
              aria-label="Services"
              className={clsx(
                "hover:scale-105",
                isHomePage || invert
                  ? "text-white hover:text-white"
                  : "text-neutral-950 hover:text-neutral-950"
              )}
            >
              Work & Clients
            </Link>

            <Link
              className={clsx(
                "hover:scale-105", "bg-transparent",
                isHomePage || invert
                  ? "text-white hover:text-white"
                  : "text-neutral-950 hover:text-neutral-950"
              )}
              href={"/contact"}
            >
              <p>Contact us</p>
            </Link>

            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-white/90 transition-colors duration-200"
              aria-label="Search"
            >
              <HiSearch className="h-5 w-5" />
            </button>

            <button
              ref={toggleRef}
              type="button"
              onClick={onToggle}
              aria-expanded={expanded.toString()}
              aria-controls={panelId}
              className={clsx(
                "group -m-2.5 rounded-full p-2.5 transition",
                invert ? "hover:bg-white/10" : "hover:bg-neutral-950/50"
              )}
              aria-label="Toggle navigation"
            >
              <Icon
                className={clsx(
                  "h-6 w-6",
                  invert
                    ? "fill-white group-hover:fill-neutral-200"
                    : "fill-white group-hover:fill-white"
                )}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Enhanced Search Modal with Improved Results */}
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
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

              {/* Improved Search Results Section */}
              <div className="border-t border-gray-100">
                {searchQuery && (
                  <div className="px-6 py-4">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-sm text-gray-500">
                        Press Enter to search
                      </p>
                      <button
                        onClick={handleSearch}
                        className="inline-flex items-center rounded-lg bg-neutral-950 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors duration-200"
                      >
                        Search
                      </button>
                    </div>

                    {/* Loading State */}
                    {isSearching && (
                      <div className="py-8 text-center">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neutral-950 border-r-transparent"></div>
                        <p className="mt-2 text-sm text-gray-500">
                          Searching...
                        </p>
                      </div>
                    )}

                    {/* Enhanced Results List */}
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
                              <span className="font-medium text-neutral-950">
                                {highlightMatch(result.title, searchQuery)}
                              </span>
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
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Rest of the code remains the same...
const NavigationRow = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="mt-px font-display text-4xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">Our Work</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  );
};

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? "true" : undefined}
          inert={expanded ? "" : undefined}
        >
          {/* Header */}
          <Header
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              );
            }}
          />
        </div>
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : "0.5rem" }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : "true"}
          inert={expanded ? undefined : ""}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={IoMdClose}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  );
                }}
              />
            </div>
            {/* Navigation */}
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our offices
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <main className="w-full flex-auto">{children}</main>
          {/* Footer */}
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
