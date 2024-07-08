import caleta1 from '../assets/imgs/caleta/caleta1.png'
import caleta1s from '../assets/imgs/caleta/caleta1-s.png'
import caleta2 from '../assets/imgs/caleta/caleta2.png'
import caleta2s from '../assets/imgs/caleta/caleta2-s.png'
import caleta3 from '../assets/imgs/caleta/caleta3.png'
import caleta3s from '../assets/imgs/caleta/caleta3-s.png'
import caleta4 from '../assets/imgs/caleta/caleta4.png'
import caleta4s from '../assets/imgs/caleta/caleta4-s.png'

import bosque1 from '../assets/imgs/bosque/bosque1.png'
import bosque2 from '../assets/imgs/bosque/bosque2.png'
import bosque3 from '../assets/imgs/bosque/bosque3.png'
import bosque4 from '../assets/imgs/bosque/bosque4.png'

import islas1 from '../assets/imgs/islas/islas1.png'
import islas2 from '../assets/imgs/islas/islas2.png'
import islas3 from '../assets/imgs/islas/islas3.png'
import islas4 from '../assets/imgs/islas/islas4.png'

export interface Caleta {
    img: string,
    preImg: string
    title: string,
    content: string
}

export const caletasData = [
    {
        img: caleta1,
        preImg: caleta1s,
        title: 'Joyas Costeras',
        content: 'Las caletas en Islay-Matarani, son joyas costeras que no solo destacan por su belleza natural, sino que también son fundamentales para la vida económica y cultural de la región. Estas pequeñas bahías, como la Caleta San José y la Caleta Honoratos, ofrecen un ambiente pintoresco y tranquilo donde las embarcaciones pesqueras encuentran resguardo y los pescadores locales realizan sus labores diarias de pesca artesanal. La actividad pesquera en las caletas es crucial para la economía local, proporcionando sustento a muchas familias y contribuyendo significativamente a la identidad económica de Islay-Matarani.',
    },
    {
        img: caleta2,
        preImg: caleta2s,
        title: 'Rica Biodiversidad',
        content: 'Además de su importancia económica, las caletas son lugares de gran biodiversidad marina. Sus aguas albergan una variada fauna que incluye desde peces y crustáceos hasta mamíferos marinos como lobos marinos y delfines. Esto no solo sustenta la pesca local, sino que también convierte a las caletas en destinos populares para ecoturistas y amantes de la naturaleza que buscan experiencias de observación de fauna marina en su hábitat natural.',
    },{
        img: caleta3,
        preImg: caleta3s,
        title: 'Relatos del Mar',
        content: 'Culturalmente, las caletas son puntos de encuentro social y comunitario. Aquí, los pescadores intercambian historias y conocimientos sobre el mar, mientras que las festividades locales y tradiciones celebran la conexión profunda de la comunidad con el océano. Este aspecto cultural se refleja en la gastronomía local, donde los productos del mar frescos de las caletas son la base de platos tradicionales que capturan el espíritu y la historia marítima de la región.',
    },{
        img: caleta4,
        preImg: caleta4s,
        title: 'Economía Sustentable',
        content: 'Las caletas también son importantes para la conservación y el manejo sostenible de los recursos marinos. Las comunidades locales están comprometidas con prácticas de pesca responsables y la preservación del entorno marino, asegurando que las generaciones futuras puedan disfrutar de los beneficios económicos y culturales que estas caletas proporcionan.',
    },
]

export interface Bosque {
    img: string,
    title: string,
    content: string
}

export const bosqueData = [
    {
        img: bosque1,
        title: 'Desafío a la Gravedad',
        content: 'Los bosques de piedras en Islay-Matarani, son un fenómeno geológico notable que atrae a exploradores y científicos por igual. Estas formaciones peculiares se encuentran en un entorno árido y desértico, donde las rocas han sido esculpidas por millones de años de erosión eólica y climática. El resultado son estructuras rocosas talladas en formas caprichosas, algunas con pilas de piedras equilibradas que desafían la gravedad.',
    },
    {
        img: bosque2,
        title: 'Ecosistema Unico',
        content: 'Este paisaje surrealista no solo es impresionante visualmente, sino que también alberga una biodiversidad sorprendente adaptada a las condiciones extremas. Entre las grietas y fisuras de las rocas, crecen plantas resilientes que han desarrollado mecanismos para sobrevivir en suelos escasos y rocosos. Asimismo, diversas especies de animales han encontrado refugio en este entorno, adaptándose a la vida entre las piedras y contribuyendo a un ecosistema único.',
    },{
        img: bosque3,
        title: 'Tesoro Cultural',
        content: 'Los bosques de piedras son también un tesoro cultural y arqueológico, ya que algunas formaciones han sido utilizadas históricamente por las antiguas culturas precolombinas para propósitos ceremoniales y religiosos. Estos sitios no solo son testimonios de la historia humana en la región, sino que también representan un importante patrimonio natural que debe ser protegido y conservado para las generaciones futuras.',
    },{
        img: bosque4,
        title: 'Un Bosque Inolvidable',
        content: 'Para los visitantes y turistas, explorar los bosques de piedras ofrece una experiencia fascinante y educativa. Las rutas de senderismo permiten adentrarse en laberintos de piedra, descubrir formaciones únicas y disfrutar de vistas panorámicas del paisaje desértico que rodea la zona. Además, la tranquilidad y la belleza austera del lugar ofrecen un contraste único con la vida urbana, proporcionando un escape ideal para quienes buscan conexión con la naturaleza y contemplación de la grandeza geológica.',
    },
]

export interface Isla {
    img: string,
    title: string,
    content: string,
    contentS?: string
}

export const islasData = [
    {
        img: islas3,
        title: 'Albizuri',
        content: "A media milla al Sur Este de la caleta de Islay, frente al puerto de Matarani se destacan cuatro islotes conocidos como Albizuri. Blanca de 43 metros de altura, la Leona de 25 metros, Nisbet o los ahogados de 28 metros e Infiernillos",
        contentS: "Con su exuberante belleza y rica biodiversidad, las islas Albizuri se han convertido en un punto de referencia turística imperdible en Islay. Sus impresionantes paisajes, cristalinas aguas y su diversa fauna marina le brindan al visitante una experiencia única."
    },
    {
        img: islas2,
        title: 'Avifauna',
        content: 'En cuanto a la avifauna, las Islas Albizuri son un importante punto de anidación para numerosas especies de aves marinas. Entre las más notables se encuentran los piqueros, pelícanos y gaviotas, que utilizan las rocosas costas y acantilados de las islas para establecer sus colonias. Las aves migratorias también encuentran en estas islas un lugar de descanso durante sus largos viajes. ',
    },{
        img: islas1,
        title: 'Fauna Marina',
        content: 'Las islas están rodeadas por aguas ricas en nutrientes debido a la corriente de Humboldt, lo que favorece la abundancia de vida marina. Entre los mamíferos marinos más comunes se encuentran lobos marinos y delfines, que a menudo son vistos en sus alrededores. Además, las islas son hogar de diversas especies de peces y crustáceos, que no solo son fundamentales para el ecosistema local, sino que también sustentan la economía pesquera de la región.',
    },{
        img: islas4,
        title: 'En Kayak, el Mar es Diferente',
        content: 'Los paseos en lancha y kayak en Albizuri, ofrecen una manera emocionante y envolvente de explorar la rica biodiversidad y los impresionantes paisajes costeros de la región. Navegar en lancha permite a los visitantes recorrer las aguas cristalinas del Pacífico, acercarse a las islas y observar de cerca la fauna marina, como lobos marinos, delfines y una variedad de aves. Para los más aventureros, el kayak brinda una experiencia más íntima y activa, permitiendo remar entre caletas escondidas, formaciones rocosas y playas desiertas.',
    },
]