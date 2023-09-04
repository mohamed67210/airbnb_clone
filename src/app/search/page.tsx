'use client' 
import Header from "@/components/Header"
import { log } from "console";
import { useSearchParams} from "next/navigation"
import { format } from "date-fns";

function Search() {
  const searchParams = useSearchParams();
  
  // console.log(searchParams)
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const formattedStartDate = format(new Date(startDate as string),"dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate as string),"dd MMMM yyyy");
  const range =`du ${formattedStartDate}-${formattedEndDate}`


  return (
    <div>
      <Header placeholder={`${searchParams.get('location')} | ${range} | ${searchParams.get('nbPersonne')} `}/>
      <main className="flex p-2">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm text-gray-600">Resultat : 185 Logements trouvé pour {searchParams.get('nbPersonne')} personnes {range}</p>
          <h1 className="text-lg font-bold mb-6">Logements a {searchParams.get('location')}</h1>
          <div className="">
            <ul className="hidden lg:inline-flex mb-5 space-x-3">
            <li className="button">Annulation flexible</li>
            <li className="button">Prix</li>
            <li className="button">Lit</li>
            <li className="button">Autres</li>
            </ul>
          </div>
        </section>
      </main>
      {/* <Nav/> */}
    </div>
  )
}

export default Search