import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact" 
export default function Paste(){
    const pasteOffer =[
        {   name: "Carbonare 450g",
            image: "img/karbonare.jpg",
            description: "Domaće tagliatelle, carbonare sos, slanina.",
            price: "775.00 RSD",
        },
        {   name: "Bologneze 450g",
            image: "img/bologneze.jpg",
            description: "Domaće tagliatelle, bologneze sos sa junetinom.",
            price: "780.00 RSD",
        },
        {   name: "Quattro formagi 430g",
            image: "img/quatro-pasta.jpg",
            description: "Domaće tagliatelle, sos od četiri vrste sira.",
            price: "805.00 RSD",
        },
        {   name: "Pasta u sosu od piletine i sušenog paradajza 470g",
            image: "img/pasta-piletina-suseni.jpg",
            description: "Domaće tagliatelle, pileći file 150g, sušeni paradajz.",
            price: "905.00 RSD",
        },
        {   name: "Pasta sa pršutom 470g",
            image: "img/pasta-prsuta.png",
            description: "Domaće tagliatelle, pršut 50g, dimljeni sir.",
            price: "1005.00 RSD",
        },
        {   name: "Pasta sa povrćem 450g (POSNO - opciono)",
            image: "img/pasta-povrce.jpg",
            description: "Domaće tagliatelle, šampinjoni, tikvice, paprika, pesto sos, marinada, maslinovo ulje. Posna varijanta ne sadrži pesto sos.",
            price: "780.00 RSD",
        },
        {   name: "Pikant tuna pasta 450g - (POSNO)",
            image: "img/tuna-pasta.jpg",
            description: "Domaće tagliatelle, tuna, pelat, beli luk, ljubičasti luk, chili sos, masline.",
            price: "795.00 RSD",
        },
        {   name: "Zapečena pasta piletina-gorgonzola",
            image: "img/piletina-gorgonzola.jpg",
            description: "Domaće tagliatelle, piletina 150g, gorgonzola, tvrdi sir.",
            price: "1085.00 RSD",
        },
        {   name: "Zapečena pasta tikvice-sir",
            image: "img/pasta-tikvice-sir.jpg",
            description: "Domaće tagliatelle, tikvice, šampinjoni, kačkavalj, feta. ",
            price: "845.00 RSD",
        },
        {   name: "Genovese 450g",
            image: "img/genoveze.jpg",
            description: "Domaće tagliatelle, piletina, tikvice, neutralna pavlaka, pesto sos, začini. ",
            price: "930.00 RSD",
        },
        {   name: "Orientale 450g",
            image: "img/orientale.jpg",
            description: "Domaće tagliatelle, pileći file, kikiriki, prženi susam, chili sos, soja sos.",
            price: "845.00 RSD",
        },
        {   name: "Pasta sa morksim plodovima 450g (POSNO)",
            image: "img/pasta-morski-plodovi.jpg",
            description: "Domaće tagliatelle, morski plodovi 150g, vino, marinada od belog luka, maslinovo ulje, limun, ruzmarin, čeri paradajz.",
            price: "1030.00 RSD",
        },
        {   name: "Krem-spanać pasta 450g",
            image: "img/krem-spanac-pasta.png",
            description: "Domaće tagliatelle, spanać, feta sir, beli luk i parmezan.",
            price: "765.00 RSD",
        },
        {   name: "Zapečena lazanjita",
            image: "img/lazanjite.jpg",
            description: "Domaće tagliatelle, lazanjita sos od junetine, začini, kombinacija sireva.",
            price: "875.00 RSD",
        },
        {   name: "Pasta Nera sa lignjama 450g (POSNO)",
            image: "img/pasta-lignje.jpg",
            description: "Domaće tagliatelle sa sipinim mastilom, lignje 150g, viono, marinada od belog luka, limun, začini.",
            price: "1030.00 RSD",
        },
    ]
    return(
        <div>
            <h1 className="title-meniPg">Paste</h1>
            <div className="meni-container">
                {pasteOffer.map((parts,index)=>(
                    <MeniSection key={index} parts={parts}/>
                    ))}
            </div>
            <div className="back-tag">
                <Link  to="/meni">Nazad</Link>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}