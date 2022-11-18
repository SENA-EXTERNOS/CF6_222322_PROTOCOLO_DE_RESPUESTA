<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Le damos la bienvenida al componente formativo “#[b Protocolo de respuesta]” bajo el cual se describirán los contenidos a trabajar en el desarrollo del resultado de aprendizaje llamado, ejecutar acciones en caso de desastres o situaciones de peligro inminente de acuerdo con Estrategia de Respuesta a Emergencias ERE en el marco de la competencia atender incidentes según protocolos y normativa. El componente se divide en tres apartados, en el primero se hace mención al mantenimiento a partir de los criterios de seguridad y manual de operaciones. En un segundo momento se hace mención a la notificación del evento dede las alertas, alarmas y evaluación de daños. El componente finaliza con los recursos haciendo referencia a los criterios de manejo y las respectivas solicitudes. Lo invitamos a iniciar este recorrido observando el video de introducción del componente formativo.
      .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/intro/img01.svg")

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
