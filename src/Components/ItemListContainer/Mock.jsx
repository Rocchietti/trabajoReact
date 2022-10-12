export const productos = [
        {
        id: '1',
        price: 85500,
        title: 'ASUS NVIDIA TUF 1660 Ti ',
        description: `Asus Tuf Gaming Nvidia Geforce Gtx 1660 Ti Evo Oc Edition Graphics Card Pcie 3.0 6Gb Gddr6 Hdmi 2.0B Displayport 1.4 Space-Grade Lubricant Compact Design Gpu Tweak Ii. The ASUS TUF Gaming GeForce® GTX 1660 Ti EVO stacks durability, compatibility, and performance to bring reliable 3D horsepower to the TUF Gaming ecosystem. Stand-out features include Auto-Extreme Technology, TUF compatibility testing, and two fans with space-grade lubricant and IP5X dust resistance. Dust is enemy number one for fans. It's easy to clean the blades, but taking the fan apart to remove dust that has made its way inside is not a simple task. Passing the IP5X certification means the housing is safe from nasty particulates, so you'll never need that deep clean. `,
        stock: 11,
        category: 'Placas de Video', 
        img: <img src='Placadevideo.png' alt="Placa ASUS NVIDIA TUF 1660 Ti" />
        },
        {
        id: '2',
        price: 21550,
        title: 'B450M Aorus',
        description: `Motherboard AMD B450 AORUS con PWM digital híbrido, M.2 con protección térmica, LAN de juegos GIGABYTE con protección ESD de 25KV, diseño anti-azufre, listo para CEC 2019, RGB FUSION 2.0. GIGABYTE motherboards are ready to support the latest AMD Ryzen™ 5000 Series Processors and are backwards compatible with AMD Ryzen™ 4000, 3000, 2000 and 1000 Series Processors. With a rich list of features on GIGABYTE motherboards such as Ultra Durable™ Armor for PCIe/ memory slots, USB Type-C™ interfaces on select boards, refined audio quality, high speed Ethernet, and the latest standard WIFI design on selected models, GIGABYTE motherboards are perfect for users looking to build the best AMD platform systems. GIGABYTE 400-series maximize your PC's potential with AMD StoreMI technology. StoreMI accelerates traditional storage devices to reduce boot times and enhance the overall user experience. This easy-to-use utility combines the speed of SSDs with the high capacity of HDDs into a single drive, enhances the read/write speeds of the device to match that of SSDs, bolsters data performance for incredible value, and transforms the everyday PC to a performance driven system. `,
        stock: 15,
        category: 'Placas Madre', 
        img: <img src="Placamadre.png" alt="Placa Madre B450M Aorus" />
        },
        {
        id: '3',
        price: 11999,
        title: 'SSD 2TB ADATA M2 NVME',
        description: `Con velocidades de lectura y escritura sostenidas de hasta 3500/3000 MB por segundo, iluminación RGB personalizable y una gran cantidad de características que mejoran el rendimiento, la unidad XPG SPECTRIX S40G no deja lugar a dudas para aquellos que buscan un rendimiento espectacular y una fiabilidad excepcional. Capacidad 2TB
        Factor de forma M.2 2280
        Flash NAND 3D NAND
        Dimensions (L x W x H) 80 x 22 x 8mm / 3,15 x 0,87 x 0,31"
        Peso 13,4g / 0,47oz
        Interfaz PCIe Gen3x4
        Rendimiento ( máx. )
        Lectura secuencial (máx*) : Hasta 3500MB/s
        Escritura secuencial (máx*) : Hasta 3000MB/s
        4 KB de IOPS de lectura aleatoria (máx.*) : Hasta 300K
        4 KB de IOPS de escritura aleatoria (máx.*) : Hasta 240K
        Temperatura de funcionamiento 0 a 70°C
        Temperatura de almacenamiento -40 a 85°C
        Terabytes escritos (TBW) (capacidad máxima*) 2560TB
        Resistencia a impactos 1500 G/0,5 ms
        MTBF 2.000.000 de horas`,
        stock: 20,
        category: 'Disco de estado Solido', 
        img: <img src="Memoria.png" alt="Disco Sólido 2.0 NVME"/>
        },
        {
        id: '4',
        price: 54899,
        title: 'Monitor ASUS',
        description: `The ASUS VP249QGR gaming display is built for victory in the professional gaming arena. With its Full HD IPS panel, 144Hz refresh rate with Adaptive-Sync (FreeSync™) and 1ms MPRT for super-smooth gaming visual, it blurs the line between what's virtual and what's real to draw you into truly immersive gaming worlds. It even includes gamer-centric features like ASUS GamePlus technologies to take your gaming experience to a whole new level. Up to 144Hz refresh rate with Adaptive-Sync (FreeSync™) technology and 1ms MPRT decimates lag and motion blur to give you the upper hand in first person shooters, racers, real-time strategy, and sports titles. This ultrafast refresh rate lets you play at the highest visual settings and lets you react instantly to what's onscreen — so you'll get that first strike in. ASUS Shadow Boost technology clarifies dark areas of the game world without overexposing brighter areas — improving overall viewing while also making it easier to spot enemies hidden in dark areas of the map.`,
        stock: 6,
        category: 'Monitores', 
        img: <img src="monitor.jpg" alt='Monitor ASUS 23,8" '/>     
        }
]
 export const unicoProducto = productos.find((producto) => producto.id === 3 )