export default {
  global: {
    componenteFormativo: 'Protocolo de respuesta',
    descripcionCurso:
      'En este componente formativo podrá interiorizar el análisis y evaluación del riesgo considerando los criterios de seguridad y los manuales de operación, como también los criterios de manejo de los recursos destinados a la Gestión del Riesgo de Desastres. Así mismo, logrará entender los mecanismos de notificación de los eventos de riesgo de desastres y los sistemas de alerta temprana, que tienen  como objetivo salvaguardar la integridad física de las comunidades mediante alarmas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Criterios de seguridad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manual de operaciones',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Notificación del evento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Alertas y alarmas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Evaluación de daños',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Titulo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Criterios de manejo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Solicitudes',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2020). Sistemas de Alerta Temprana como elementos para la gestión del riesgo de desastres. Bogotá D.C, Colombia. Recuperado el 25 de septiembre de 2022 de',
      tipo: 'Página WEB',
      link:
        'http://portal.gestiondelriesgo.gov.co/Paginas/Noticias/2020/Sistemas-de-Alerta-Temprana-como-elementos-para-la-gestion-del-riesgo-de-desastres.aspx',
    },
    {
      tema: 'Criterios de seguridad',
      referencia:
        'Oficina de Naciones Unidas para la Reducción del Riesgo de Desastres. (2014). Guía para la aplicación de criterios en la identificación de acciones claves para la planificación de la reducción del riesgo de desastres (RRD) en América Latina y el Caribe. Recuperado el 27 de septiembre de 2022, de',
      tipo: 'Documento',
      link:
        'https://www.undrr.org/es/publication/guia-para-la-aplicacion-de-criterios-en-la-identificacion-de-acciones-claves-para-la',
    },
    {
      tema: 'Manual de operaciones',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2013). Estandarización de la ayuda humanitaria de Colombia. Bogotá D. C, Colombia. Recuperado el 27 de septiembre de 2022, de',
      tipo: 'Documento',
      link:
        'https://portal.gestiondelriesgo.gov.co/Documents/Manuales/Manual_de_Estandarizacion_AHE_de_Colombia.pdf',
    },
    {
      tema: 'Alertas y alarmas',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2016). Guia para la implementación de Sistemas de alerta temprana. Bogotá D. C, Colombia. Recuperado el 27 de septiembre de 2022, de',
      tipo: 'Documento',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/18505/VOL-9-GUIA-PARA-LA-IMPLEMENTACION-DE%20SISTEMAS-DE-ALETA-TEMPRANA.pdf?sequence=18',
    },
  ],
  glosario: [
    {
      termino: 'Alarmas',
      significado:
        'instrumento o dispositivo que emite una señal de advertencia audible, visual o de otra forma sobre un evento peligroso.',
    },
    {
      termino: 'Alertas',
      significado:
        'período previo a la ocurrencia de un desastre, declarado con el fin de tomar precauciones generales, para evitar la existencia de posibles afectaciones por un desastre y/o emergencias.',
    },
    {
      termino: 'Evento',
      significado:
        'fenómeno - natural, socio-natural o tecnológico - que actúa como el detonante de los efectos adversos sobre las vidas humanas, la salud y/o la infraestructura económica y social y ambiental de un territorio.',
    },
    {
      termino: 'Manejo de desastres',
      significado:
        'proceso de la gestión del riesgo compuesto por la preparación para la respuesta a emergencias, la preparación para la recuperación posdesastre, la ejecución de dicha respuesta y la ejecución de la respectiva recuperación, entiéndase: rehabilitación y recuperación.',
    },
    {
      termino: 'Preparación',
      significado:
        'medidas y acciones para organizar oportuna y eficazmente la respuesta y la recuperación (rehabilitación y reconstrucción) con el fin de reducir al mínimo la pérdida de vidas humanas y otros daños.',
    },
    {
      termino: 'Reconstrucción',
      significado:
        'se caracteriza por las acciones que se realizan con el fin de reparar la infraestructura afectada y restaurar el sistema de producción con miras a revitalizar la economía y lograr alcanzar o superar el nivel de desarrollo previo al desastre.',
    },
    {
      termino: 'Rehabilitación',
      significado:
        'periodo de transición en el cual se restablecen los servicios y líneas vitales indispensables para la comunidad.',
    },
    {
      termino: 'Respuesta',
      significado:
        'acciones llevadas a cabo ante un evento adverso y que tienen por objeto salvar vidas, reducir el sufrimiento humano y disminuir pérdidas.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de un sistema, comunidad o sociedad expuestos a una amenaza para resistir, absorber, adaptarse y recuperarse de sus efectos de manera oportuna y eficaz, lo que incluye la preservación y la restauración de sus estructuras y funciones básicas.',
    },
    {
      termino: 'Sistemas de alerta temprana',
      significado:
        'sistema integrado de vigilancia, previsión y predicción de riesgos, evaluación de riesgos de desastres, comunicación y preparación, sistemas y procesos que permiten a las personas, comunidades, gobiernos, empresas y otros, tomar medidas oportunas para reducir los riesgos de desastres ante la manifestación de un evento amenazante.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco Mundial. (2012). Análisis de la gestión del riesgo de desastres en Colombia: un aporte para la construcción de políticas públicas. Bogotá D.C, Colombia. Recuperado el 25 de septiembre de 2022, de',
      link:
        'http://gestiondelriesgo.gov.co/sigpad/archivos/gestiondelriesgoweb.pdf',
    },
    {
      referencia:
        'Congreso de la República. (24 de abril de 2012). Ley 1523 de 2012. Colombia. Recuperado el 12 de agosto de 2022, de',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1523_2012.html',
    },
    {
      referencia:
        'Fondo Mundial para la Reducción y Recuperación de Desastres. (2006). Colombia: Estrategia de política de gestión financiera pública ante el riesgo de desastres por fenómenos de la naturaleza.  Bogotá D. C, Colombia. Recuperado el 30 de septiembre de 2022, de',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/19875/GestionFinancieraRiesgoDesastresColombia%28WorldBank_2014%29.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). Evaluación de Daños y Necesidades Ambientales - EDANA. Bogotá D. C, Colombia. Recuperado el 29 de septiembre de 2022, de',
      link:
        'https://www.minambiente.gov.co/cambio-climatico-y-gestion-del-riesgo/evaluacion-de-danos-y-necesidades-ambientales',
    },
    {
      referencia:
        'Oficina de Naciones Unidas para la Reducción del Riesgo de Desastres. (2014). Guía para la aplicación de criterios en la identificación de acciones claves para la planificación de la reducción del riesgo de desastres (RRD) en América Latina y el Caribe. Recuperado el 27 de septiembre de 2022, de',
      link:
        'https://www.undrr.org/es/publication/guia-para-la-aplicacion-de-criterios-en-la-identificacion-de-acciones-claves-para-la',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2013). Estandarización de la ayuda humanitaria de Colombia. Bogotá D. C, Colombia. Recuperado el 27 de septiembre de 2022, de',
      link:
        'https://portal.gestiondelriesgo.gov.co/Documents/Manuales/Manual_de_Estandarizacion_AHE_de_Colombia.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2022). Fondo Nacional de Gestión del Riesgo de Desastres. Bogotá D. C, Colombia. Recuperado el 01 de octubre de 2022, de',
      link:
        'https://portal.gestiondelriesgo.gov.co/Paginas/Fondo-Nacional-de-Calamidades.aspx',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2016). Guia para la implementación de Sistemas de alerta temprana. Bogotá D. C, Colombia. Recuperado el 27 de septiembre de 2022, de',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/18505/VOL-9-GUIA-PARA-LA-IMPLEMENTACION-DE%20SISTEMAS-DE-ALETA-TEMPRANA.pdf?sequence=18',
    },
    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (2013). Plan Nacional de Gestión del Riesgo de Desastres 2013-2025 "Una Estrategia de Desarrollo". Recuperado el 25 de agosto de 2022, de',
      link:
        'http://docs.wixstatic.com/ugd/a02d6e_1eff708014424892a113344def36a25c.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2021). Recuperación post desastre para la resiliencia urbana. Recuperado el 25 de septiembre de 2022, de',
      link: 'https://www.youtube.com/watch?v=_a0-AVz_Mh4',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2020). Sistemas de Alerta Temprana como elementos para la gestión del riesgo de desastres. Bogotá D.C, Colombia. Recuperado el 25 de septiembre de 2022 de',
      link:
        'http://portal.gestiondelriesgo.gov.co/Paginas/Noticias/2020/Sistemas-de-Alerta-Temprana-como-elementos-para-la-gestion-del-riesgo-de-desastres.aspx',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
