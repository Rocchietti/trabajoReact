export const productos = [
        {
        id: 1,
        price: '$80000',
        title: 'ASUS NVIDIA TUF 1660 Ti ',
        description: 'Asus Tuf Gaming Nvidia Geforce Gtx 1660 Ti Evo Oc Edition Graphics Card Pcie 3.0 6Gb Gddr6 Hdmi 2.0B Displayport 1.4 Space-Grade Lubricant Compact Design Gpu Tweak Ii ',
        stock: 4,
        category: 'Placas de Video', 
        img: <img src="Placadevideo.png" alt="" />
        },
        {
        id: 2,
        price: '$20000',
        title: 'B450M Aorus',
        description: 'Motherboard AMD B450 AORUS con PWM digital híbrido, M.2 con protección térmica, LAN de juegos GIGABYTE con protección ESD de 25KV, diseño anti-azufre, listo para CEC 2019, RGB FUSION 2.0',
        stock: 9,
        category: 'Placas Madre', 
        img: <img src="Placamadre.png" alt="" />
        },
        {
        id: 3,
        price: '$10000',
        title: 'SSD 2TB ADATA M2 NVME',
        description: 'Con velocidades de lectura y escritura sostenidas de hasta 3500/3000 MB por segundo, iluminación RGB personalizable y una gran cantidad de características que mejoran el rendimiento, la unidad XPG SPECTRIX S40G no deja lugar a dudas para aquellos que buscan un rendimiento espectacular y una fiabilidad excepcional.',
        stock: 20,
        category: 'Disco de estado Solido', 
        img: <img src="Memoria.png" alt=""/>
        },
        {
        id: 4,
        price: '$1000',
        title: 'Monitor ASUS',
        description: 'Los monitores comerciales de ASUS cuentan con una cámara web integrada, una matriz de micrófonos y altavoces estéreo para videoconferencias y transmisión en vivo. Con un panel IPS para una visualización de gran angular, cada monitor ofrece imágenes increíblemente nítidas.',
        stock: 11,
        category: 'Monitores', 
        img: <img src="Monitor.jpg" alt=""/>     
        }
]
 export const unicoProducto = productos.find((producto) => producto.id === 3 )