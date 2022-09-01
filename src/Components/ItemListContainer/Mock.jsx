import placa from '../IMG/Placadevideo.png'
import placaMadre from '../IMG/Placamadre.png'
import memory from '../IMG/Memoria.png'

export const productos = [
        {
        id: 1,
        price: '$80000',
        title: 'ASUS NVIDIA TUF 1660 Ti ',
        description: 'Asus Tuf Gaming Nvidia Geforce Gtx 1660 Ti Evo Oc Edition Graphics Card Pcie 3.0 6Gb Gddr6 Hdmi 2.0B Displayport 1.4 Space-Grade Lubricant Compact Design Gpu Tweak Ii ',
        stock: 4,
        category: 'Placas de video', 
        img: <img src={placa} alt="" srcset="" /> 
        },
        {
        id: 2,
        price: '$20000',
        title: 'B450M Aorus',
        description: 'Motherboard AMD B450 AORUS con PWM digital híbrido, M.2 con protección térmica, LAN de juegos GIGABYTE con protección ESD de 25KV, diseño anti-azufre, listo para CEC 2019, RGB FUSION 2.0',
        stock: 9,
        category: 'Placas Madre', 
        img: <img src={placaMadre} alt="" srcSet="" />    
        },
        {
        id: 3,
        price: '$10000',
        title: 'SSD 2TB ADATA M2 NVME',
        description: 'Con velocidades de lectura y escritura sostenidas de hasta 3500/3000 MB por segundo, iluminación RGB personalizable y una gran cantidad de características que mejoran el rendimiento, la unidad XPG SPECTRIX S40G no deja lugar a dudas para aquellos que buscan un rendimiento espectacular y una fiabilidad excepcional.',
        stock: 20,
        category: 'Discos de estado solido', 
        img: <img src={memory} alt="" srcset="" />    
        }
]