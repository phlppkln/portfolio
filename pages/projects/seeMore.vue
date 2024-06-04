<template>
  <div class="container">
    <h1>SeeMore</h1>
    <div class="h1-subtitle">
      Your Mobility Footprint - Awareness About Your Urban Paths and Habits
    </div>

    <div class="page-summary">
      <div class="page-summary-tldr">tl;dr</div>
      <p>
        We created a prototype that aims to motivate citizens of the Seestadt to
        spend more time in urban nature and experience new places and activities
        in their area. Through Expert Interviews, Cultural Probes, Design Games,
        Wireframes, Mockup tests, and Technology Probes we gathered information
        to build a fully functional prototype. It consisted of a handheld
        device, called SeeExplorer, and multiple SeeCubes. Users locate the
        hidden SeeCubes with the SeeExplorer. Afterwards, they can hide them in
        public urban green spaces again and provide activities for the next
        user.
      </p>
    </div>
    <p>
      As a first step in our Design Thinking process we gathered ideas and
      approaches for an overview of the topic. Here we realized that our project
      should revolve around the integration of urban green spaces in people's
      mobility. Our research showed that mobility does not only influence our
      external lifes and behavior, it also has consequences on our personal
      well-being. A lot of people, especially in cities, struggle to spend
      enough time outdoors or in nature. SeeMore motivates people to integrate
      urban nature and physical activity in their daily lifes and help them
      become less stressed.
    </p>
    <p>
      Our overall goal became to improve city residents mental and physical
      well-being by:
    </p>
    <ul>
      <li>motivating people to spend time in urban nature</li>
      <li>promoting physical activity on people's daily paths</li>
      <li>helping people explore unknown green places</li>
      <li>find areas where new urban green elements could be beneficial</li>
    </ul>

    <h2>Literature Review and Expert Interviews</h2>
    <p>
      A review of related literature gave us a broad overview and a better
      understanding of important areas. We searched in various online scientific
      databases and focused on the classification of urban nature and the
      effects of urban green spaces on peoples well-being.
    </p>

    <p>The core findings were:</p>

    <ul>
      <li>
        Urban green spaces are beneficial for mental and physical health. They
        provide stress reduction and promote physical activity.
      </li>
      <li>
        People value a variety of green elements. Although this is very
        subjective, most people prefer similar natural elements, like trees,
        grass, water, etc.
      </li>
      <li>
        Urban green spaces can be classified into categories. These categories
        can help us to find appropriate areas that we can include in the future
        phases of the prototype.
      </li>
      <li>
        Research distinguishes between different involvements in nature: viewing
        nature, being in the presence of nearby nature, and active participation
        and involvement with nature.
      </li>
    </ul>
    <p>
      With this knowledge we conducted interviews with experts on urban
      mobility, design, urban public places, and the Seestadt. This gave us a
      better understanding of the context and how our project can contribute to
      people's mobility and lives.
    </p>

    <h3>Cultural Probe</h3>
    <p>
      Afterwards we conducted five cultural probes with participants from the
      Seestadt. The main goal was to get qualitative data on people's perception
      of urban green spaces in the Seestadt and their associations with nature.
      The cultural probe consisted of a Polaroid camera and a notebook, where
      participants had to take notes for their chosen motifs. To integrate a
      playful element we also included plastilin and a box to safely store the
      crafted objects.
    </p>
    <p>
      One task of participants was to use the Polaroid camera to capture
      pictures of natural elements in public places in the Seestadt. They were
      asked to take notes on their intentions, why they took a picture. The
      other task was more open and focused on the role of nature in peoples
      daily lives. Participants were instructed to use the plastilin to create
      objects of things they associate with nature in general. After
      participants handed back the cultural probe we also conducted short
      debrief interviews with them.
    </p>

    <p>
      Overall the cultural probes revealed a lot of interesting points. In
      general people connect plants and animals with nature. But the living
      situation plays a major role on the perception of nature. For example
      participants with little children often associate urban green spaces with
      playgrounds or activities with their children. We also got the impression
      that, due to construction work, a lot of people are unsure about the
      future of green spaces in the Seestadt.
    </p>

    <div class="image-grid">
        <UCarousel
          v-slot="{ item }"
          :items="carouselImagesCulturalProbe"
          :ui="{
            item: 'basis-full',
            container: 'rounded-lg',
          }"
          :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: '-left-12',
          }"
          :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: '-right-12',
          }"
          arrows
          class="mx-auto w-1/4"
        >
        <img :src="item" class="image" draggable="false">
      </UCarousel>
    </div>

    <h3>Design Game</h3>
    <p>
      To find patterns in user behavior in a playful way, we created "BusyCity",
      a board game that focuses on the urban paths and stress reduction measures
      of people. Players had to visit different destinations throughout the
      game. But with every movement they accumulated stress that could only be
      reduced by stopping at fictional green spaces on the map. Players had to
      integrate those in their game paths and argue what activities or things
      reduced their stress level. Action cards were used to include competition.
      The major goal was to learn how people handle stress and how they reduce
      it. The playful element of a game should help them to open up and reveal
      information through their personal playing style.
    </p>

    <p>
      The game consisted of a special map that is inspired by the Seestadt. In
      the end BusyCity included 5 different action cards and 50 destination
      cards. Each destination card featured a short story to give players a more
      realistic setting. The 3D-printed player figures held the stress rings,
      which were accumulated in the game.
    </p>

    <p>
      In the end, the game results suggested that people choose different
      activities to reduce stress. Some prefer to do physical exercise while
      others try to relax with various entertainment measures, like listening to
      music. But most had a destination focused mindset and accumulated stress
      on their paths and reduced it when it was already apparent. Only a minor
      group tried to include stress reduction in their paths.
    </p>

    <div class="image-grid">
        <UCarousel
          v-slot="{ item }"
          :items="carouselImagesDesignGame"
          :ui="{
            item: 'basis-full',
            container: 'rounded-lg',
          }"
          :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: '-left-12',
          }"
          :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: '-right-12',
          }"
          arrows
          class="mx-auto w-1/4"
        >
        <img :src="item" class="w-full" draggable="false">
      </UCarousel>
    </div>

    <h3>Scenarios</h3>
    <p>
      As a next step, we created personas of Seestadt citizens who were
      introduced in various scenarios. Through such fictional stories it was
      possible to create narratives to think about different contexts.
    </p>

    <div class="image-grid">
      <div class="row">
        <div class="col-md-6">
          <NuxtImg class="image" src="/img/seeMore/persona1_b.jpg" />
        </div>
        <div class="col-md-6">
          <NuxtImg class="image" src="/img/seeMore/persona2.jpg" />
        </div>
        <div class="col-md-6">
          <NuxtImg class="image" src="/img/seeMore/persona3.jpg" />
        </div>
      </div>
    </div>

    <h3>Narrative Poster</h3>
    <p>
      To summarize everything we gather thus far, we created a narrative poster.
    </p>

    <div class="image-grid">
      <div class="row">
        <div class="col">
          <NuxtImg class="image" src="/img/seeMore/narrative_poster.jpg" />
        </div>
      </div>
    </div>

    <h2>Prototype</h2>
    <p>
      In the next phase we built on the gathered data from the previous steps to
      build a prototype. These led us towards developing a prototype aimed to
      reduce people’s daily stress, motivating them to spend more time outdoor
      and to share their favorite places and activities with other people. While
      doing so, people can also discover all the new places and new activities
      that are suggested by others.
    </p>

    <p>
      The prototype of SeeMore is an interactive system that aims to introduce
      Seestadt citizens to unknown urban green spaces and to allow them to try
      out new activities they can do there. SeeMore consists of two main parts
      for the users to interact with. The so called SeeExplorer is a hand held
      device with a touchscreen that is used to find the SeeCubes inside urban
      green spaces.
    </p>

    <p>
      The SeeCubes are simple and little objects that the users have to find, in
      order to be led to new places inside of Seestadt’s urban green spaces.
      When users manage to find a SeeCube, through the use of the SeeExplorer,
      they have to activate a scanning process by placing the SeeCube close to
      the SeeExplorer, in order to prove they found it. When the users
      successfully scanned a SeeCube, the SeeExplorer’s screen shows an
      activity, which was written by the previous user. Afterwards it is
      possible to change the location of the SeeCube and to define a new
      activity for the next user.
    </p>

    <h3>Sketches, Wireframes, Mockup</h3>
    <p>
      One of the main features of our system is the SeeCube, an object that the
      users hide and look for in the Seestadt. Sketches helped us to understand
      if and how our future users could approach this task and what possible
      hiding places exist in the Seestadt.
    </p>

    <div class="image-grid">
      <div class="row"></div>
    </div>

    <p>
      The SeeExplorer is a small mobile device that is used to locate the
      SeeCubes and interact with them. When a user finds a SeeCube with the help
      of a SeeExplorer, they have to establish a connection with the SeeCube.
      The SeeExplorer then shows the activity to the user who can complete it.
      Afterwards, the user can change the position of the SeeCube and define a
      new activity.
    </p>
    <p>
      Through wireframes we designed hierarchies, annotations and other
      information, displayed on the SeeExplorer. We organized all our wireframes
      in a storyboard, in order to better visualize the flow of the user
      journey. After we finished the wireframe we tested the flow of wireframes
      with some potential future users.
    </p>

    <div class="image-grid">IMAGES HERE</div>

    <p>
      After including the feedback from the wireframe tests, we created first
      mockups of the SeeExplorer’s interface. A clickable high-fidelity mockup
      allowed us to have a realistic perspective on the final work.
    </p>
    <div class="image-grid">IMAGES HERE</div>
    <p>
      We tested these mockups with five participants that were not part of the
      wireframe tests to prevent possible biases. The test consisted of free
      exploration of the mockup while thinking out loud. In the end, the users
      answered questions about the general experience. During this phase we
      decided to embrace a certain look and feel in order to reflect the idea of
      a friendly system related to nature and relaxation.
    </p>
    <h3>Technology Probe</h3>
    <p>
      Technology probes have three goals: understanding the needs and desires of
      users in a real-world setting, fieldtesting the technology, and inspiring
      users and researchers to think about new technologies.
    </p>
    <p>
      The main goal of our technology probe is to test the user interface (UI)
      interactions and the hardware functionality needed to create a new
      activity in the system. This spans the scanning of a SeeCube over doing an
      activity to writing and saving a new activity. Our conducted technology
      probe aims to answer the following questions:
    </p>
    <ul>
      <li>Can users recognize the SeeCube as part of the system?</li>
      <li>Does scanning of the SeeCube work fast and reliably?</li>
      <li>
        Do the users understand the system, or do they encounter any
        difficulties?
      </li>
      <li>
        How do users interact with the SeeExplorer and the SeeCubes (e.g. how do
        they hold the devices when scanning a SeeCube or when writing a new
        activity)?
      </li>
      <li>
        Are users comfortable while handling the SeeExplorer and while
        interacting with the whole system?
      </li>
    </ul>
    <div class="image-grid">IMAGES HERE</div>
    <p>
      The results showed that there is a lack of clear instructions on what the
      users needs to do on certain views and how to proceed to the next view.
      While building the technology probe we realized that we are able to reduce
      the technology inside the SeeCubes to a minimum. This also allows us to
      make them more flexible. As next a next step we improved the UI and the
      prototype functionality based on the insights gained from the technology
      probe.
    </p>
    <h3>The Prototype</h3>
    <p>
      Like mentioned, the look and feel of SeeMore aims to show its playful
      connection to urban nature. The colors, fonts, and shapes of the UI were
      intentionally chosen to reflect this connection. The materials, used to
      build the physical prototypes of the SeeExplorer and the SeeCubes, recall
      nature as well.
    </p>
    <h4>SeeExplorer</h4>
    <p>
      The SeeExplorer’s cover is made of a solid cardboard and it is covered
      with a wooden tape, to maintain visual and tactile consistency with the
      SeeCubes.
    </p>
    <div class="image-grid">IMAGES HERE</div>
    <h4>SeeCubes</h4>
    <p>
      The SeeCubes are made of a light wood and feature rounded corners,
      recalling nature and maintaining consistency with the rounded shape of
      font and buttons of the SeeExplorer's UI. This allows them to fit into the
      natural environment of the Seestadt. But it also enabling them to be seen
      by the users without getting noticed too much by people that are not
      looking for them.
    </p>
    <div class="image-grid">IMAGES HERE</div>
    <h3>Additional Material</h3>
    <p>
      At the end of the course we presented the prototype to citizens of the
      Seestadt, the lecturer, and to the students from the other groups.
      Initially it was planned that the presentation would be held in the
      aspern.mobil LAB in the Seestadt but due to the COVID-19 situation it was
      held online. We therefore made a presentation (German) and a short video
      to show the prototype in a real world setting.
    </p>

    <div class="image-grid">VIDEO HERE</div>

    <h2>Used Tools and Software</h2>
    <p>
      Adobe Creative Cloud (Photoshop, Illustrator, InDesign, XD),
      HTML/CSS/Javascript, Pen+Paper, 3D-Printing (SketchUp), Latex, Figma
    </p>
  </div>
</template>

<script setup lang="ts">
const carouselImagesDesignGame = [
  "/img/seeMore/dg_box2.jpg",
  "/img/seeMore/dg_action_card.png",
  "/img/seeMore/dg_3d_printing.jpg",
  "/img/seeMore/dg_destination_card.png",
  "/img/seeMore/dg_figures.jpg",
  "/img/seeMore/dg_session.jpg",
];

const carouselImagesCulturalProbe = [
    "/img/seeMore/cp_figures1.png",
    "/img/seeMore/cp_figure2.png",
    "/img/seeMore/cp_facebook_post.jpg",
    "/img/seeMore/cp_photo1.png",
    "/img/seeMore/cp_drawing.png",
    "/img/seeMore/cp_photo2.png",
    ]

</script>

<style scoped lang="scss">
.image {
  width: 100%;
  height: auto;
}
</style>
