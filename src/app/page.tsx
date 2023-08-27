import Header from "@/components/Header";
import MediumCard from "@/components/MediumCard";
import Nav from "@/components/Nav";
import Image from "next/image";
import accommodations from "./data";
import LargeCard from "@/components/LargeCard";

export default async function Home({}) {
  return (
    
    <div>
      {/* header */}
      <Header />
      <Nav/>
      <main className="flex flex-col">
        {/* afficher les locations */}
        <section className="max-w-7xl mx-auto flex flex-wrap gap-y-1 gap-x-8 justify-center items-center">
          {accommodations.map((accomodation) => (
          <MediumCard img={accomodation.image} title={accomodation.name} price={accomodation.price} location={accomodation.location} />
          ))}
        </section>

        <LargeCard img="https://images.unsplash.com/photo-1586234004696-d70537fa5aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3008&q=80"
        description="Wishlists By Airbnb" title="The Greates Outdoors" button="Get Inspired"/>
      </main>
      

    </div>
  )
}


