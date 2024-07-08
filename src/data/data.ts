import caleta1 from '../assets/imgs/caleta/caleta1.png'
import caleta2 from '../assets/imgs/caleta/caleta2.png'
import caleta3 from '../assets/imgs/caleta/caleta3.png'
import caleta4 from '../assets/imgs/caleta/caleta4.png'

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
    title: string,
    content: string
}

export const caletasData = [
    {
        img: caleta1,
        title: 'Title',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur libero, nemo, nulla iure qui iusto vitae commodi tempora ipsam adipisci laborum recusandae eum doloremque? Consequatur facere ex exercitationem qui.',
    },
    {
        img: caleta2,
        title: 'Title',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur libero, nemo, nulla iure qui iusto vitae commodi tempora ipsam adipisci laborum recusandae eum doloremque? Consequatur facere ex exercitationem qui.',
    },{
        img: caleta3,
        title: 'Title',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur libero, nemo, nulla iure qui iusto vitae commodi tempora ipsam adipisci laborum recusandae eum doloremque? Consequatur facere ex exercitationem qui.',
    },{
        img: caleta4,
        title: 'sdasdasd',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur libero, nemo, nulla iure qui iusto vitae commodi tempora ipsam adipisci laborum recusandae eum doloremque? Consequatur facere ex exercitationem qui.',
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
        title: 'Title',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur libero, nemo, nulla iure qui iusto vitae commodi tempora ipsam adipisci laborum recusandae eum doloremque? Consequatur facere ex exercitationem qui.',
    },
    {
        img: bosque2,
        title: 'Title',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur libero, nemo, nulla iure qui iusto vitae commodi tempora ipsam adipisci laborum recusandae eum doloremque? Consequatur facere ex exercitationem qui.',
    },{
        img: bosque3,
        title: 'Title',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur libero, nemo, nulla iure qui iusto vitae commodi tempora ipsam adipisci laborum recusandae eum doloremque? Consequatur facere ex exercitationem qui.',
    },{
        img: bosque4,
        title: 'Title',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur libero, nemo, nulla iure qui iusto vitae commodi tempora ipsam adipisci laborum recusandae eum doloremque? Consequatur facere ex exercitationem qui.',
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