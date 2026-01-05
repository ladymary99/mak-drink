import Banner from "../components/Banner";
import ContactCard from "../components/ContactCard";
import ReservationSection from "../components/ReservationSection";
import GalleryPage from "../components/GalleryPage"; 


export default function Home() {
  return (
    <>
      <section id="home">
        <Banner />
      </section>

      <section id="gallery">
        <GalleryPage />
      </section>

      <section id="reservations">
        <ReservationSection />
      </section>

      <section id="contact">
        <ContactCard />
      </section>
    </>
  );
}
