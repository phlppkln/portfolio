<template>
  <div class="">
    <div class="row">
        <div class="photo-container col-md-4">
          <div class="h1-subtitle">Hi, I am Philipp.</div>
          <NuxtImg class="image" src="/me.jpg" />
      </div>
      <div class="text-container col-md-8">
        <div class="text">
          <p>
            I a developer with a focus on building interactive data driven web interfaces.
            In my work I combine the two fields of design and coding to enable people
            to gain insights easier and faster. </p>
          <p>
            My goal is to write code for humans by building digital experiences
            that support people in ideation, exploration, and decision making. Thus,
            I completed a Masters's degree in Computer Science with a specialization in
            "Media and Human-Centered Computing" at TU Wien and worked in areas such as
            e-learning, cybersecurity, and interface design.
          </p>
          <p>
            When not working, you can find me exploring the great
            outdoors across all sorts of sports. But, I especially enjoy grabbing my bike
            and going off the beaten path.
          </p>
        </div>
      </div>
    </div>

    <div class="skills-container">
<!--       <div class="skills-element">
          <div class="skills-header"><h2>Education</h2></div>
          <p>MSc. "Media- and Human-Centered-Computing" and BSc. "Media Informatics and Visual Computing"</p>
          <p>Technische Universität Wien</p>
      </div> -->
      <div class="skills-element col-md-4">
          <div class="skills-header"><h2><i class="bi bi-diagram-3"></i> InfoVis</h2></div>
          <p>D3, Bokeh, Chart.js, Tableau, p5.js, Three.js</p>
      </div>
      <div class="skills-element col-md-4">
          <div class="skills-header"><h2><i class="bi bi-code-square"></i> Frontend</h2></div>
          <p>Vue/Nuxt, React/Next, HTML, CSS, Javascript, Typescript</p>
      </div>
      <div class="skills-element col-md-4">
          <div class="skills-header"><h2> <i class="bi bi-database"></i> Backend</h2></div>
          <p>Python, Node.js, Strapi, REST, GraphQL</p>
      </div>
      <div class="skills-element col-md-4">
          <div class="skills-header"><h2><i class="bi bi-search"></i> Design and Research</h2></div>
          <p>Design Thinking, UI/UX, Prototyping, Usability Testing, Interviews</p>
      </div>
      <div class="skills-element col-md-4">
          <div class="skills-header"><h2><i class="bi bi-pencil"></i> Tools</h2></div>
          <p>Git, VS Code, Figma, Miro, Jira, Adobe CC, Docker, ...</p>
      </div>
      <div class="skills-element col-md-4">
          <div class="skills-header"><h2><i class="bi bi-bookmark-check"></i> Interests</h2></div>
          <p>Human-Computer Interaction, UI/UX Design, Information Visualization, Interaction Design, Technology Supported Learning, Web Development / Design, (Digital) Collaboration</p>
      </div>
      
    </div>
      <div class="col-md-6">
        <h2>Contact</h2>
        <!-- https://formspree.io/library/contact/contact-me-form/ https://www.sgratzl.com/-->
        <ul>
          <li>
            <i class="bi bi-envelope"></i>
            <a href="mailto:klein.philipp@posteo.at">
              klein.philipp@posteo.at</a>
          </li>
          <li>
            <i class="bi bi-linkedin"></i>
            <a href="https://www.linkedin.com/in/philipp-klein-5a98261b1/" target="_blank">
              philippklein</a>
          </li>
          <li>
            <i class="bi bi-github"></i>
            <a href="https://github.com/phlppkln" target="_blank"> phlppkln</a>
          </li>
        </ul>
      </div>

  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">

.row {
  display: flex;
  flex-direction: row;
}

.photo-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  .image {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.skills-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: $background-darker;
  margin: 1rem;

  .skills-element{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 1rem;
    border: 1px solid $primary;
    
    .skills-header{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    h2{
      color: $header-on-primary ;
      padding-top: 0.5rem !important;
    }
  }
}
</style>
