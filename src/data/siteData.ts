export const OWNER_DATA = {
  name: "Jaime Rodríguez V",
  title: "Lic. en Informática",
  role: "Especialista en Soporte Técnico, Redes y Soluciones Informáticas",
  tagline: "Soluciones tecnológicas profesionales para empresas y particulares.",
  location: "Ciudad de México, México",
  phoneRaw: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525529512849",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+52 55 2951 2849",
  email: process.env.NEXT_PUBLIC_EMAIL || "jimmy_copi@hotmail.com",
  whatsappMessage: "Hola Jaime, me interesa solicitar información sobre tus servicios.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jaimerodriguez-it.com",
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
};

export const EXPERIENCE_INSTITUTIONS = [
  {
    name: "OPTEC",
    role: "Líder de Soporte Técnico",
    description: "Dirección de operaciones de soporte técnico empresarial, gestión de infraestructura crítica, mantenimiento preventivo/correctivo y atención especializada a clientes corporativos.",
    highlight: true,
  },
  {
    name: "INEGI",
    role: "Especialista en Soporte e Infraestructura",
    description: "Soporte operativo, administración de equipos de cómputo, aseguramiento de conectividad y resguardo íntegro de bases de datos estadísticas.",
    highlight: false,
  },
  {
    name: "SEGOB",
    role: "Consultor y Soporte Técnico Institucional",
    description: "Atención técnica de alta disponibilidad, configuración de redes seguras y continuidad operativa en entornos gubernamentales críticos.",
    highlight: false,
  },
  {
    name: "INEA",
    role: "Administración de Sistemas y Soporte",
    description: "Mantenimiento de infraestructura tecnológica, soporte a usuarios y optimización de herramientas administrativas y de datos.",
    highlight: false,
  },
  {
    name: "REPSS / Seguro Popular",
    role: "Especialista en Bases de Datos y Soporte IT",
    description: "Gestión y depuración de bases de datos (SQL Server, Access, Visual FoxPro), automatización de reportes y soporte técnico integral.",
    highlight: false,
  },
];

export const WHY_CHOOSE_ME = [
  { title: "Experiencia Comprobada", description: "Trayectoria sólida liderando áreas de soporte en OPTEC e instituciones clave como INEGI, SEGOB, INEA y REPSS.", icon: "Award" },
  { title: "Atención Personalizada", description: "Diagnóstico preciso adaptado a la escala y presupuesto de cada empresa, despacho o usuario particular.", icon: "UserCheck" },
  { title: "Soluciones Rápidas", description: "Respuesta ágil orientada a minimizar tiempos de inactividad y restablecer la productividad de inmediato.", icon: "Zap" },
  { title: "Soporte Presencial y Remoto", description: "Cobertura en toda la Ciudad de México y asistencia remota inmediata de alcance nacional.", icon: "Globe" },
  { title: "Profesionalismo", description: "Licenciado en Informática con estándares corporativos de documentación, orden y cumplimiento.", icon: "Briefcase" },
  { title: "Seguridad de la Información", description: "Protocolos estrictos de confidencialidad, respaldo y protección contra pérdida o filtración de datos.", icon: "ShieldCheck" },
];

export const SERVICES_LIST = [
  { title: "Soporte Técnico", description: "Diagnóstico y resolución integral de fallas de hardware y software para empresas y hogares.", icon: "Wrench", tag: "Core" },
  { title: "Redes y Telecomunicaciones", description: "Diseño, cableado estructurado, configuración de routers, switches y optimización de redes LAN/WiFi.", icon: "Network", tag: "Infraestructura" },
  { title: "Configuración de Equipos", description: "Puesta a punto de estaciones de trabajo, servidores, impresoras en red y políticas de seguridad.", icon: "MonitorCog", tag: "Corporativo" },
  { title: "Bases de Datos", description: "Diseño, normalización, migración, depuración y optimización de rendimiento de bases de datos.", icon: "Database", tag: "Datos" },
  { title: "SQL Server", description: "Administración de instancias, consultas complejas, respaldos automatizados y planes de mantenimiento.", icon: "Server", tag: "Enterprise" },
  { title: "Access", description: "Desarrollo, mantenimiento y migración de sistemas administrativos construidos en Microsoft Access.", icon: "TableProperties", tag: "Gestión" },
  { title: "Visual FoxPro", description: "Soporte especializado, mantenimiento de sistemas legados y extracción/migración de tablas DBF.", icon: "Code2", tag: "Especializado" },
  { title: "Automatización con Excel", description: "Macros VBA, Power Query, dashboards ejecutivos y automatización de reportes repetitivos.", icon: "FileSpreadsheet", tag: "Productividad" },
  { title: "Recuperación de Datos", description: "Rescate profesional de información en discos duros dañados, memorias USB y particiones corruptas.", icon: "HardDriveDownload", tag: "Crítico" },
  { title: "Consultoría Tecnológica", description: "Asesoría estratégica en adquisición de equipo, renovación tecnológica y arquitectura IT.", icon: "Lightbulb", tag: "Estrategia" },
  { title: "Mantenimiento de Computadoras", description: "Mantenimiento preventivo y correctivo profundo para prolongar la vida útil y velocidad de tus equipos.", icon: "Cpu", tag: "Preventivo" },
  { title: "Soporte Remoto", description: "Asistencia técnica segura en tiempo real para resolver incidencias sin esperar traslados.", icon: "Headset", tag: "Inmediato" },
  { title: "Capacitación Tecnológica", description: "Entrenamiento práctico para equipos de trabajo en herramientas ofimáticas, Excel avanzado y seguridad.", icon: "GraduationCap", tag: "Formación" },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: "Modernización de Red Corporativa LAN/WiFi",
    category: "Infraestructura de Redes",
    client: "Sector Empresarial CDMX",
    description: "Segmentación de red mediante VLANs, balanceo de carga, optimización de cobertura WiFi empresarial y eliminación de cuellos de botella para 80+ estaciones.",
    metrics: "+65% velocidad interna | 99.9% estabilidad",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    tags: ["Redes LAN/WiFi", "Switching", "Seguridad Perimetral"],
  },
  {
    title: "Migración y Optimización SQL Server & FoxPro",
    category: "Bases de Datos Empresariales",
    client: "Sector Salud y Administración",
    description: "Extracción segura de información histórica desde Visual FoxPro hacia SQL Server con integridad referencial y generación de vistas optimizadas.",
    metrics: "1.2M registros migrados sin pérdida",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80",
    tags: ["SQL Server", "Visual FoxPro", "ETL"],
  },
  {
    title: "Sistema Automatizado de Reportes Ejecutivos",
    category: "Soluciones en Excel & Automatización",
    client: "Operaciones y Logística",
    description: "Consolidación automática de múltiples fuentes de datos mediante macros VBA y Power Query, reduciendo horas de captura manual a un solo clic.",
    metrics: "De 6 horas semanales a 45 segundos",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    tags: ["Excel Avanzado", "Macros VBA", "Automatización"],
  },
  {
    title: "Rescate Crítico de Información Contable",
    category: "Recuperación de Información",
    client: "Despacho Contable",
    description: "Recuperación íntegra de bases de datos de Access y archivos fiscales desde unidad de almacenamiento con sectores dañados e implementación de respaldos.",
    metrics: "98.7% de archivos críticos recuperados",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    tags: ["Recuperación de Datos", "Backups", "Access"],
  },
];

export const TESTIMONIALS = [
  { name: "Carlos Mendoza", role: "Director Administrativo", company: "Grupo Logístico del Centro", content: "Jaime reestructuró toda nuestra red de oficinas y estabilizó nuestros servidores. Su experiencia en entornos corporativos se nota desde el primer diagnóstico." },
  { name: "Lic. Patricia Herrera", role: "Socia Directora", company: "Consultores Fiscales Asociados", content: "Perdimos acceso a una base de datos crítica y Jaime logró recuperar prácticamente el 100% de la información en tiempo récord. Total confiabilidad y discreción." },
  { name: "Ing. Roberto Salinas", role: "Gerente de Operaciones", company: "Manufacturas Técnicas MX", content: "Nos desarrolló una automatización en Excel conectada a SQL Server que ahorra más de 15 horas mensuales a nuestro equipo administrativo." },
  { name: "Dra. Mariana Vázquez", role: "Coordinadora Clínica", company: "Unidad Médica Integral", content: "Excelente atención. Mantiene todos nuestros equipos en óptimas condiciones con mantenimiento preventivo y soporte remoto inmediato cuando surge cualquier duda." },
  { name: "Fernando Ortiz", role: "Gerente General", company: "Distribuidora Comercial Valle", content: "Teníamos un sistema antiguo en Visual FoxPro que nadie sabía mantener. Jaime no solo lo estabilizó, sino que nos ayudó a migrar los datos sin detener operaciones." },
  { name: "Laura Jiménez", role: "Jefa de Recursos Humanos", company: "Servicios Corporativos Reforma", content: "La capacitación en Excel avanzado que impartió a nuestro personal elevó muchísimo la productividad del área. Claro, paciente y 100% práctico." },
];

export const FAQS = [
  { question: "¿Ofrecen soporte técnico presencial en toda la Ciudad de México?", answer: "Sí, brindamos atención presencial en todas las alcaldías de la Ciudad de México y zona metropolitana, además de soporte remoto inmediato a nivel nacional." },
  { question: "¿Trabajan tanto con empresas como con clientes particulares?", answer: "Sí. Atendemos desde PyMEs, despachos e instituciones que requieren pólizas o proyectos de infraestructura, hasta usuarios particulares que necesitan reparación, optimización o recuperación de datos." },
  { question: "¿Pueden dar soporte o migrar sistemas antiguos en Visual FoxPro o Access?", answer: "Sí, contamos con amplia experiencia manteniendo sistemas legados en Visual FoxPro y Microsoft Access, así como migrando sus bases de datos hacia plataformas modernas como SQL Server." },
  { question: "¿Cómo se garantiza la confidencialidad de la información?", answer: "Aplicamos protocolos estrictos de seguridad informática y confidencialidad profesional respaldados por años de experiencia en instituciones gubernamentales y corporativas." },
];
