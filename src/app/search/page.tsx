import Header from "@/components/Header"
import Nav from "@/components/Nav"

function Search() {
  return (
    <div>
      <Header/>
      <main className="flex p-2">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm text-gray-600">Resultat : 185 Logements trouvé pour 2 personnes du 2 oaut au 15 oaut</p>
          <h1 className="text-lg font-bold mb-6">Logements a Barcelone</h1>
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