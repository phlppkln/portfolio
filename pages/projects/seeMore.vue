<template>
  <div class="container">
    <h1>SeeMore</h1>
    <div class="h1-subtitle">
      Your Mobility Footprint - Awareness About Your Urban Paths and Habits
    </div>

    <div class="page-summary">
      <div class="page-summary-tldr">tl;dr</div>
      <p>
        SeeMore is a prototype that aims to motivate citizens of the Seestadt to
        spend more time in urban nature and experience new places and activities
        in their area. Expert Interviews, Cultural Probes, Design Games,
        Wireframes, Mockup tests, and Technology Probes revealed valuable
        information that was incorporated into a fully functional prototype.
      </p>
    </div>
    <p>
      Our urban mobility does not only influence our external lives and
      behavior, it also has consequences on our personal well-being. A lot of
      people, especially in cities, struggle to spend enough time outdoors or in
      nature. SeeMore motivates people to integrate urban nature and physical
      activity in their daily lives to help them to reduce their stress.
    </p>

    <p>
      Research shows that urban green spaces have a positive impact on people's
      mental and physical health. They help reduce stress and promote physical
      activity. Additionally, people tend to value a variety of green elements,
      such as trees, grass, and water. In general, urban green
      spaces can be classified into different categories, which we can leverage to find
      appropriate areas to incorporate projects.
      Finally, the research distinguishes between different levels of
      involvement in nature, including viewing, presence, and active
      participation.
    </p>

    <h3>Cultural Probe & Design Game</h3>
    <p>
      To understand how people perceive nature in the Seestadt, we conducted
      five cultural probes with participants. We asked them to take pictures
      of natural elements and create objects with plastilin. The results
      showed that people associate nature with plants and animals, but also
      that their perception is influenced by their living situation, such as
      having children or construction work in the area.
    </p>
 <p>
      In order to observe people's behavior by incorporating
      green spaces in their urban paths, we created a design game. Players had to visit different
      destinations and reduce stress by stopping at fictional green spaces.
      The game revealed that people mainly visit destinations and reduce stress
      by doing so. Only a minor group of players integrated stress reduction into
      their paths.
    </p>
    <div class="row image-gallery-container">
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg class="image" src="/img/seeMore/cp_facebook_post.jpg" />
      </div>
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg class="image" src="/img/seeMore/dg_box1.jpg" />
      </div>
<!--       <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seemore/dg_3d_printing.jpg"
        />
      </div>
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seemore/dg_map.png"
        />
      </div>
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seemore/dg_session.jpg"
        />
      </div> -->
    </div>

    
    <h2>The Prototype</h2>
    <p>
      In the next phase we built on the gathered data from the previous steps to
      build a prototype. SeeMore is an interactive system that aims to introduce
      Seestadt citizens to unknown urban green spaces and to allow them to try
      out new activities they can do there. It consists of two main parts for the
      users to interact with: the SeeExplorer, a hand held device with a
      touchscreen that is used to find the SeeCubes inside urban green spaces.
      The SeeCubes are little objects that the users have to find, in order to be
      led to new places inside of Seestadt’s urban green spaces. By activating
      a scanning process with the SeeExplorer, users prove they found a
      SeeCube. The SeeExplorer’s screen shows an activity, which was written by
      the previous user. Afterwards it is possible to change the location of the
      SeeCube and to define a new activity for the next user.
    </p>

    <p>
      We designed the SeeCube and the SeeExplorer through sketches,
      wireframes, and a high-fidelity prototype. UI and UX tests showed that the system
      needed clarity and guidance. Based on these insights, we improved the
      UI and functionality of the full-functionality prototype.
    </p>
    
    <div class="row image-gallery-container">
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seeMore/seeexplorer_start.png"
        />
      </div>
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seeMore/seeexplorer_home.png"
        />
      </div>
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seeMore/seeexplorer_map.png"
        />
      </div>
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seeMore/seeexplorer_activity.png"
        />
      </div>
    </div>

    <p>
      The SeeMore prototype looks playful and reflects its connection to urban nature.
      The UI and materials used to build the prototypes recall nature.
      The SeeExplorer consists of a Raspberry Pi and features a touchscreen display along with other relevant hardware.
      The SeeCubes are made of a light wood with a RFID tag.
    </p>
    
    <div class="row image-gallery-container">
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seeMore/seeexplorer1.jpg"
        />
      </div>
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/seeMore/seecube2.jpg"
        />
      </div>
    </div>

    <h3>Additional Material</h3>
    <div>
      <a class="text-link" href="/res/seeMore/manual_seemore.pdf" target="_blank">SeeMore Manual</a>
    </div>


    <h2>Used Tools and Software</h2>
    <p>
      Adobe Creative Cloud (Photoshop, Illustrator, InDesign, XD),
      HTML/CSS/Javascript, Pen+Paper, 3D-Printing (SketchUp), Latex, Figma
    </p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.image-gallery-container{
  display: flex;
  align-items: center;
}
.image{
  
  height: auto;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem $secondary;
  border: 0.3rem solid $primary;
}
.image-description{
  padding: 2rem;
}
</style>
