<template>
  <div class="container">
    <div class="row">
      <div class="h1-subtitle">Hi, I am Philipp.</div>
    </div>

    <div class="row">
      <div class="photo-container col-md-4" v-if="false">
        <NuxtImg class="image" src="/img/Photo.jpg" />
      </div>
      <div class="text-container col-md-12">
        <div class="text">
          <p>
            Raised in Burgenland, Austria, I completed my Masters's
            degree in Computer Science at the Technical University of Vienna (TU
            Wien) in 2023. During my studies, I developed a passion for science
            and design. As a result, I graduated with a specialization in "Media and Human-Centered Computing". 
            At the TU Wien, I also created an innovative self-assessment tool to support
            students in their study decision, which was introduced as a
            compulsory part of the admission process for all prospective
            computer science students in 2024.
          </p>
          <p>
            In my work, I focus on Human-Computer Interaction and enjoy
            finding new ways to integrate the digital world into our lives. I
            have developed skills in design and code, and have worked on
            projects that aim to support people in ideation and decision making 
            through self-reflection and information visualization.
          </p>
          <p>
            When not working, you can find me exploring the great
            outdoors across all sorts of sports. But, I especially enjoy grabbing my bike and camera to discover 
            new connections between places on the lesser-traveled paths.
          </p>
          <p>
            I especially enjoy designing all kinds of interfaces and flat and minimalistic interfaces. However, other principles 
          </p>
        </div>
      </div>
    </div>

    <div class="row education-work-container fadein5s-cubic-bezier">
      <div class="col-md-6">
      <h2>some hard facts:</h2>
        <ul>
          <li class="li-main">
            Master degree in "Media- and Human-Centered-Computing" and bachelor
            degree in "Media Informatics and Visual Computing"
          </li>
          <ul>
            <li>Technische Universität Wien</li>
          </ul>
        </ul>
        <ul>
          <li class="li-main">
            Student Assistant for Research and Administration
          </li>
          <ul>
            <li>Technische Universität Wien</li>
          </ul>
        </ul>
        <!-- 
          <ul>
            <li class="li-main">
              Awards
            </li>            
            <ul>
              <li>
                <strong>Different Brilliant:</strong> Award for theses that
                represent best-practice approaches to applied and artistic
                research projects in the field of media, design and media
                creation @ IConCMT 2023
              </li>
            </ul>    
          </ul> -->
      </div>
      <div class="col-md-6">
        <h2>my main tech stack:</h2>
        <ul>
          <li>Vue | Nuxt</li>
          <li>React | Next</li>
          <li>Javascript | Typescript</li>
          <li>D3.js, Chart.js, p5.js, Three.js, ...</li>
          <li>Python</li>
          <li>Figma, Miro, Adobe CC, Git, VS Code, Slack, ...</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>my interest stack:</h2>
        <ul>
          <li>Human-Computer Interaction</li>
          <li>UI/UX Design</li>
          <li>Information Visualization</li>
          <li>Interaction Design</li>
          <li>Technology Supported Learning</li>
          <li>Web Development / Design</li>
          <li>(Digital) Collaboration</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>let's have a chat:</h2>
        <ul>
          <li>
            <i class="bi bi-envelope"></i>
            <a href="mailto:klein.philipp@posteo.at">
              klein.philipp@posteo.at</a
            >
          </li>
          <li>
            <i class="bi bi-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/philipp-klein-5a98261b1/"
              target="_blank"
            >
              philippklein</a
            >
          </li>
          <li>
            <i class="bi bi-github"></i>
            <a href="https://github.com/phlppkln" target="_blank"> phlppkln</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  @include fadein1s-cubic-bezier;
  margin-top: 10%;
}
.photo-container {
  position: relative;
  z-index: 1;
}
.text-container {
  position: relative;
  background-color: rgba(
    8,
    100,
    94,
    0.852
  ); /* semi-transparent white background */
  border-radius: 0rem;
  z-index: 2;
  .text {
    p {
      color: white;
    }
  }
}

p {
  margin-top: 2rem !important;
  font-size: 1.5em !important;
}

.citation {
  font-style: italic;
  font-size: 1.3rem !important;
  text-align: right;
  margin: 2rem;
  margin-bottom: 4rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid black;
}

.education-work-container {
  margin-top: 12rem;
  margin-bottom: 2rem;
  width: 100%;
}
.li-main {
  font-weight: bolder;
  margin-top: 1rem;
}
li {
  margin-top: 0.5rem;
  list-style-type: square;

  &::marker {
    color: $primary;
  }
}

.fadein5s-cubic-bezier {
  @include fadein5s-cubic-bezier;
}
</style>
