<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Recursos
    
    .BGIMG04.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema3/img01.svg")
        .col-lg-7
          p.text-white.mb-0 Una vez realizado el recorrido por el mantenimiento de la gestión del riesgo, así como la notificación del evento se presenta en este apartado lo que compete a los recursos.
    
    p Colombia a nivel mundial posee una de las tasas más altas en cuanto a ocurrencias de eventos peligrosos ocasionados por fenómenos naturales, situación que se ve en constante aumento debido a su relación directa con el crecimiento poblacional y económico del país (Fondo Mundial para la Reducción y Recuperación de Desastres, 2006). 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10.BGR04.p-4
        LineaTiempoB.color-primario(:datos="datosLineaTiempoB")

    p El Fondo Nacional de Gestión del Riesgo de Desastres cuenta con mecanismos de financiación con subcuentas específicas que son los principales componentes del sistema nacional, como lo son:

    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center
          .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop')
              .BGR05.p-4
                .h4.text-center.mt-5 Conocimiento del riesgo
          .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img07.svg' alt='AvatarTop')
              .BGR05.p-4
                .h4.text-center.mt-5 Reducción del riesgo
          .col-lg-4.col-md-6.col-8.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
              .BGR05.p-4
                .h4.text-center.mt-5 Manejo de desastres
          .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img09.svg' alt='AvatarTop')
              .BGR05.p-4
                .h4.text-center.mt-5 Recuperación
          .col-lg-4.col-md-6.col-8
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
              .BGR05.p-4
                .h4.text-center.mt-5 Protección financiera

    p Por lo anteriormente descrito, el gobierno colombiano definió la Política Nacional de la Gestión del Riesgo (PNGRD) a través de la Ley 1523 de 2012, 

    .BGIMG01.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Esta ley se presenta como una estrategia para abordar desde el nivel nacional al territorial, temas de planificación y ordenamiento territorial en cuanto a desarrollo, la inclusión del riesgo en la planificación e inversión pública, y la consolidación de fuentes de financiación ante los desastres, en conclusión, una estructura con bases sólidas para afrontar las consecuencias de los eventos naturales.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img11.svg")
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Gracias a esto el Fondo Nacional de Gestión de Riesgo de Desastres funciona con fines de interés público para suplir cualquier necesidad producto de una situación de emergencia o desastre, con recursos provenientes de las administraciones departamentales y municipales, instituciones que construyen sus propios fondos para apoyar el financiamiento de la gestión del riesgo en su territorio.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img12.svg") 
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Lo anterior hace referencia al artículo 38 de la Ley 1523 de 2012, que establece que todos los proyectos de inversión pública que puedan tener incidencia en las dinámicas del territorio a nivel nacional, regional o local, deben tener dentro de su composición un análisis del de riesgo de desastre que cuente con un nivel de detalle directamente proporcional a la naturaleza y complejidad de dicho proyecto.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img13.svg") 
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Este análisis debe contar con los criterios de seguridad necesarios de acuerdo con su contexto, así como su incorporación desde la primera fase de diseño y formulación, lo anterior con el fin de prevenir futuras condiciones de riesgo que puedan ocasionarse como efectos de la instalación y operación de estos proyectos de inversión pública en todo el territorio nacional.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img14.svg") 
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Otro de los puntos claves debe ser el alineamiento de estos planes, programas y proyectos con los lineamientos del Plan Municipal o Departamental de Riesgo de Desastres del área donde opera.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img15.svg") 
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 De acuerdo a lo anterior y en concordancia con lo estipulado en el artículo 3 del Decreto 1547 del año 1984, artículo que fue modificado por el artículo 70 del Decreto 919 de 1989, el Fondo Nacional de la Gestión de Riesgo de Desastres se establece como un fideicomiso de tipo estatal con origen legal constituido como patrimonio autónomo.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img16.svg") 

    p Los objetivos del FNGRD son:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .BGR01C.p-4
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/tema3/img17.svg')
          .h4.text-center Negociar
        .BGR01C.p-4
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/tema3/img18.svg')
          .h4.text-center Obtener
        .BGR01C.p-4
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/tema3/img19.svg')
          .h4.text-center Recaudar
        .BGR01C.p-4
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/tema3/img20.svg')
          .h4.text-center Administrar
        .BGR01C.p-4
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/tema3/img21.svg')
          .h4.text-center Invertir
        .BGR01C.p-4
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/tema3/img22.svg')
          .h4.text-center Gestionar instrumentos de protección financiera
        .BGR01C.p-4
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/tema3/img23.svg')
          .h4.text-center Distribuir los recursos necesarios

    p Los objetivos anteriormente descritos tienen el fin de contribuir con la implementación de la política de Gestión del Riesgo.

    .BGIMG03.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 En estos objetivos están incluidos los procesos de gestión conocimiento del riesgo, la reducción del riesgo y el manejo de Desastres, esto mediante la implementación de la protección financiera, a través de instrumentos y mecanismos financieros de retención intencional o transferencia del riesgo que se establecen en forma ex ante con el fin de acceder de manera ex post a recursos económicos oportunos para la atención de emergencias y la recuperación.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img24.png")
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 A nivel nacional, Colombia consolida la estrategia financiera con el fin de cubrir los gastos fiscales incurridos en el manejo de los desastres generados por la ocurrencia de los fenómenos naturales.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img25.svg")
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 Esta evaluación y gestión del riesgo fiscal enfocada al riesgo de desastres se origina en la Ley 448 de 1998, la cual estipula que las entidades deben incluir dentro de su presupuesto recursos que otorguen una cobertura en caso de la ocurrencia de las obligaciones contingentes.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img26.svg")
        .row.justify-content-around.align-items-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 El Gobierno Colombiano al reconocer la relevancia que tiene la mitigación de estos eventos peligrosos ha abordado diferentes acciones para incorporar  la gestión del riesgo de desastres como un componente principal en sus políticas y programas.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img27.svg")

    p Las instituciones públicas con el objetivo de fortalecer la gestión de las obligaciones contingentes debido a la materialización de un evento peligroso ha señalado tres principales objetivos de política prioritarios, los cuales apoyan el objetivo general de lograr y mantener la estabilidad macroeconómica y equilibrio fiscal del país:

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img28.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.p-4
            .h4.ms-5 Identificación
            p.ms-5.mb-0 Identificación y entendimiento del riesgo fiscal debido a la ocurrencia de desastres.
      .col-lg-10.mb-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img29.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.p-4
            .h4.ms-5 Gestión financiera
            p.ms-5.mb-0 Gestión financiera del riesgo de desastres, la cual incluye la implementación de innovadores instrumentos financieros.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.p-4
            .h4.ms-5 Aseguramiento
            p.ms-5.mb-0 Aseguramiento del riesgo catastrófico de los activos públicos.

    p Algunos de los actores que se encuentran colaborando con la implementación de la Política Nacional de Gestión del Riesgo de Desastres son:

    .row.justify-content-center.mb-4
      .col-lg.col-6.mb-xl-0.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BGR03A.p-3
              .h4 MHCP
              p Ministerio de Hacienda y Crédito Público.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img31.svg')})`}")
      .col-lg.col-6.mb-xl-0.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BGR03A.p-3
              .h4 CCE
              p La Agencia Nacional de Contratación Pública Colombia Compra Eficiente.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img32.svg')})`}")
      .col-lg.col-6.mb-xl-0.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BGR03A.p-3
              .h4 ANI
              p La Agencia Nacional de Infraestructura.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img33.svg')})`}")
      .col-lg.col-6.mb-xl-0.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BGR03A.p-3
              .h4 SGC
              p El Servicio Geológico Colombiano.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img34.svg')})`}")
      .col-lg.col-6.mb-xl-0.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BGR03A.p-3
              .h4 UNGRD
              p La Unidad Nacional de Gestión del Riesgo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img35.svg')})`}")

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-secundario.img-inv.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img36.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El gobierno colombiano tiene como propósito fortalecer la gestión de los riesgos financieros ocasionados por los eventos peligrosos o desastres mediante el Programa de Financiamiento del Riesgo de Desastres y Aseguramiento del Banco Mundial (DRFIP), que se encuentra soportado, desde el punto de vista de técnico y financiero, por la Secretaría de Estado para Asuntos Económicos (SECO) y por la Programa Global para la Reducción del Riesgo de Desastres y la Recuperación (GFDRR) (Fondo Mundial para la Reducción y Recuperación de Desastres, 2006).      

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Criterios de manejo y solicitudes
    
    p De acuerdo con el capítulo anterior podemos concluir que el Fondo Nacional para la Gestión del Riesgo de Desastre se establece como una sociedad de economía mixta nacional y tipo indirecto, el cual se encuentra bajo el régimen de la Empresa Industrial y Comercial del Estado, además de encontrarse ligado al Ministerio de Hacienda y Crédito Público, y vigilado por la Superintendencia Financiera de Colombia y con control fiscal reglamentado por la Contraloría General de la República (Unidad Nacional para la Gestión del Riesgo de Desastres, 2022).
    p Según el artículo artículo 2 del Decreto 1547 de 1984, modificado por el Decreto Ley 919 de 1989 los criterios de manejo del Fondo Nacional para la Gestión del Riesgo de Desastre son:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img37.svg' alt='AvatarTop')
          .BGR01D.p-4
            p.text-center.mt-5.mb-0 Brindar apoyo económico necesario para la atención de desastres. En cuanto a los servicios básicos y líneas de vida para el correcto funcionamiento de los medios de vida y ayuda alimentaria y medicina.
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img38.svg' alt='AvatarTop')
          .BGR01D.p-4
            p.text-center.mt-5.mb-0 Realizar un control de los efectos y daños ocasionados por la materialización de los desastres en el territorio nacional, así como en la aparición y propagación de epidemias.
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img39.svg' alt='AvatarTop')
          .BGR01D.p-4
            p.text-center.mt-5.mb-0 Durante la fase de rehabilitación y reconstrucción mantener las actividades de servicios básicos como el saneamiento ambiental, garantizando el desarrollo de la comunidad afectada.
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img40.svg' alt='AvatarTop')
          .BGR01D.p-4
            p.text-center.mt-5.mb-0 Financiamiento de la instalación y operación de acciones planificadas en la fase de preparación para la respuesta, como también de los sistemas y equipos de información para prevención, diagnóstico y atención de desastres como lo son los Sistemas de Alerta Temprana (SAT), especialmente la red nacional sismográfica.
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img41.svg' alt='AvatarTop')
          .BGR01D.p-4
            p.text-center.mt-5.mb-0 Tomar medidas para prevenir los desastres o para atenuar sus efectos en caso de su materialización.

    p De igual manera, es necesario aclarar que las fuentes de recursos del Fondo Nacional para la Gestión del Riesgo de Desastre son: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/tema3/img42.svg')
        h4.text-center.text-white Presupuesto General de la Nación
        p.text-center.text-white.mb-0 Todos aquellos recursos que pertenecen a la Nación.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/tema3/img43.svg')
        h4.text-center.text-white Convenios
        p.text-center.text-white.mb-0 Aportes de terceros para la gestión del riesgo de desastres.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/tema3/img44.svg')
        h4.text-center.text-white Regalías
        p.text-center.text-white.mb-0 Todo el dinero producto del desarrollo territorial de la Nación.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/tema3/img45.svg')
        h4.text-center.text-white Rendimientos
        p.text-center.text-white.mb-0 Todos aquellos rendimientos financieros generados por recursos.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/tema3/img46.svg')
        h4.text-center.text-white Donaciones
        p.text-center.text-white.mb-0 Recursos y/o bienes contribuidos por terceros o entidades no gubernamentales.
    
    .row.justify-content-center.mb-4
      .col-lg-8.cajon.color-primario.p-4
        p La ley 80 de 1993 dispone las reglas y principios que rigen los contratos de las entidades estatales encargadas de la gestión del riesgo de desastre, los cuales son mediante la modalidad de: licitación pública, concurso de méritos, contratación directa, selección abreviada y mínima cuantía.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
    datosLineaTiempoB: [
      {
        titulo: 'Decreto 1547 de 1948',
        texto:
          'En 1948 fue creado el Fondo Nacional de Calamidades mediante el Decreto 1547 de 1948, este comenzó a funcionar como una cuenta especial de la Nación, es decir, con independencia patrimonial, administrativa, contable y estadística, cuyo objetivo principal es el interés público y la asistencia social.',
        icono: require('@/assets/curso/tema3/img02.svg'),
      },
      {
        titulo: 'Decreto 2378 de 1997',
        texto:
          'Debido al Decreto 2378 de 1997 se instituyó el presupuesto del Fondo Nacional de Calamidades y además se establece que el FNC puede recibir, administrar e invertir los aportes realizados por personas naturales o jurídicas, así como de las instituciones públicas o privadas, con el fin de invertirlos en la adopción de medidas de reducción del riesgo de desastres, contribuyendo con la consolidación de procesos de conocimiento y manejo de desastres.',
        icono: require('@/assets/curso/tema3/img03.svg'),
      },
      {
        titulo: 'Ley 358 de 1997',
        texto:
          'Esta estructura de financiera cuenta con restricciones legales e institucionales específicas, al igual que toma en cuenta las normas y reglas de carácter fiscal que regulan el actuar a nivel regional y local, como es el caso de la Ley 358 de 1997, la cual establece el sistema de semáforos, consistente en medidas cuantitativas que restringen el endeudamiento de la entidad territorial a su capacidad de pago.',
        icono: require('@/assets/curso/tema3/img04.svg'),
      },
      {
        titulo: 'Ley 1523 de 2012',
        texto:
          'De acuerdo la Ley 1523 de 2012 el Fondo Nacional de Calamidades pasa a llamarse Fondo Nacional para la Gestión del Riesgo de Desastres, e instaura que el esquema financiero del SNGRD cuente con un esquema financiero consistente y coherente con su estructura, donde se lleve a cabo un manejo adecuado de los recursos por parte de los actores e instituciones que conforman dicho sistema y cumplen con los objetivos de los procesos de gestión del riesgo de desastres.',
        icono: require('@/assets/curso/tema3/img05.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
