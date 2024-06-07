<template>
  <div class="container">
    <div class="row">
      <h1>About Me</h1>
      <div class="h1-subtitle">Hi, I am Philipp.</div>
    </div>

    <div class="row">
      <div class="photo-container col-md-4" v-if="false">
        <NuxtImg class="image" src="/img/Photo.jpg" />
      </div>
      <div class="text-container col-md-12">
        <div class="text">
          <p>
            I am a graduate from TU Wien with a Master's degree in "Media and
            Human-Centered Computing". My interests revolve around the broad
            realm of Human-Computer Interaction (HCI) and the art of integrating
            digital technology into our lives, always with a human-centered
            approach at its core.
          </p>
          <p>
            I am passionate about about the interplay between design and human
            perception through technology, particularly by exploring novel ways
            to harness interactivity. My current focus lies on the possibilities
            that digital technology offers for collaboration and information
            visualization to enhance understanding and ignite our creativity.
          </p>
        </div>
      </div>
    </div>
    <p class="citation">
      Because after all, it's not just about functionality; it's about creating
      digital experiences that captivate us and invite exploration.
    </p>

    <div class="row education-work-container">
      <div class="col-md-6">
        <h2>Education</h2>
        <ul>
          <li class="li-main">
            Master study "Media- and Human-Centered-Computing"
          </li>
          <ul>
            <li>Technische Universität Wien (2019-2023)</li>
            <li style="list-style-type: none">
              <em>Passed with distinction</em>
            </li>
          </ul>
          <li class="li-main">
            Bachelor study "Media Informatics and Visual Computing"
          </li>
          <ul>
            <li>Technische Universität Wien (2013-2019)</li>
          </ul>
        </ul>
      </div>

      <div class="col-md-6">
        <h2>Work Experience</h2>
        <ul>
          <li class="li-main">Freelance Web Developer</li>
          <ul>
            <li>Technische Universität Wien (2024 - current)</li>
          </ul>
          <li class="li-main">
            Student employee in research and administration
          </li>
          <ul>
            <li>Technische Universität Wien (2020 - 2023)</li>
          </ul>
          <li class="li-main">Scientific employee for digitization</li>
          <ul>
            <li>Wiener Linien (2019 - 2020)</li>
          </ul>
          <li class="li-main">
            Tutor <em>"Interface and Interaction Design"</em>
          </li>
          <ul>
            <li>Technische Universität Wien (2019 - 2020)</li>
            <li>Technische Universität Wien (2018 - 2019)</li>
            <li>Technische Universität Wien (2017 - 2018)</li>
          </ul>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Awards</h2>
        <ul>
          <li>
            <a
              href="https://www.fhstp.ac.at/de/newsroom/news/internationale-fachtagung-zur-medientechnik"
              target="_blank"
              >5. International Conference on Creative\Media/Technologies
              (IConCMT)</a
            >
            2023 (German)
            <ul>
              <li>
                <strong>Different Brilliant:</strong> Award for theses that
                represent best-practice approaches to applied and artistic
                research projects in the field of media, design and media
                creation.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Tools and Languages</h2>
        <ul>
          <li>Vue.js | Nuxt</li>
          <li>React | Next</li>
          <li>Javascript | Typescript</li>
          <li>Figma</li>
          <li>Miro</li>
          <li>Adobe CC</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Interests</h2>
        <ul>
          <li>Human-Computer Interaction</li>
          <li>UI/UX Design</li>
          <li>Information Visualization</li>
          <li>Interaction Design</li>
          <li>E-Learning</li>
          <li>Web Development</li>
          <li>Digital Collaboration</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Contact</h2>
        <ul>
          <li>
            <i class="bi bi-envelope"></i>
            <a href="mailto:klein.philipp@posteo.at"> klein.philipp@posteo.at</a>
          </li>
          <li>
            <i class="bi bi-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/philipp-klein-5a98261b1/"
              target="_blank"
              > philippklein</a
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
}
.li-main {
  font-weight: bolder;
  margin-top: 1rem;
}
li {
  margin-top: 0.5rem;
  list-style-type: disc;
}
</style>
