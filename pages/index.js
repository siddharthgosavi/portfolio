import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ScrollToTop from "../components/ScrollToTop";
import { About, Contact, Footer, Header, Home, Projects, Skills } from "../container";
import { toggleMenu } from "../AppContext/AppContext";

const delay = 1.5;

export default function RootHome() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = toggleMenu();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <div>
      {!loading ? (
        <Loader />
      ) : (
        <div className="portfolio">
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          {/* <Blogs /> */}
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
}
