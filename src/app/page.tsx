import Header from "@/components/Header";
import MediumCard from "@/components/MediumCard";
import Nav from "@/components/Nav";
import Image from "next/image";
import accommodations from "./data";

async function getData() {
  const res = await fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon/tyranocif')
  const data = await res.json()
  return data
}

export default async function Home({}) {
  const data = await getData()
  console.log(accommodations)
  return (
    
    <div>
      {/* header */}
      <Header />
      <Nav/>
      {/* banner */}

      <main>
        <section className="max-w-7xl mx-auto h-4 flex flex-wrap gap-y-1 gap-x-8">
          {/* put some data from server for card informations - APIendpoint */}
          {accommodations.map((accomodation) => (
          <MediumCard img={accomodation.image} title={accomodation.name} price={accomodation.price} location={accomodation.location} />
          ))}
          {/* <MediumCard img={data.sprites.regular} title={data.name.fr} /> */}
        </section>
      </main>
      

    </div>
  )
}


