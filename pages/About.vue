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
            I am a designer and developer with a Master degree in Media and
            Human-Centered Computing, specializing in human-centered design. My
            expertise lies in human-computer interaction, information
            visualization, and interactive web environments, with a focus on
            human-centered design.
          </p>
          <p>
            My work is driven by a commitment to solving real-world problems
            through technology, enhancing user engagement and fostering insight
            generation, collaboration, and creativity. I have a strong
            background in designing and developing innovative, interactive, and
            data-driven digital environments that incorporate exploration and
            self-reflection to support human abilities through technology by
            transforming complex ideas into intuitive, impactful products.
          </p>
        </div>
      </div>
    </div>

    <div class="row education-work-container fadein5s-cubic-bezier">
      <!--<div class="col-md-6">
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
          </ul> 
      </div>-->
      <div class="col-md-6">
        <h1>my tech stack</h1>
        <h2>languages:</h2>
        <ul>
          <li>HTML, CSS</li>
          <li>Javascript | Typescript</li>
          <li>Python</li>
        </ul>

        <h2>main tools & frameworks:</h2>
        <ul>
          <li>Vue / React</li>
          <li>Strapi</li>
          <li>Bokeh</li>
          <li>Bootstrap, Material UI</li>
          <li>D3.js, Chart.js, p5.js, Three.js, ...</li>
        </ul>

      </div>
      <div class="col-md-6">
        <h1>my interests</h1>
        <ul>
          <li>Human-Computer Interaction</li>
          <li>UI/UX Design</li>
          <li>Information Visualization</li>
          <li>Interaction Design</li>
          <li>Technology Supported Learning</li>
          <li>Web Development / Design</li>
          <li>(Digital) Collaboration</li>
          <li>Human-AI Interaction</li>
        </ul>
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
              philippklein <i class="bi bi-box-arrow-up-right"></i
            ></a>
          </li>
          <li>
            <i class="bi bi-github"></i>
            <a href="https://github.com/phlppkln" target="_blank">
              phlppkln <i class="bi bi-box-arrow-up-right"></i
            ></a>
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
  margin-top: 5%;
}
.photo-container {
  position: relative;
  z-index: 1;
}
.text-container {
  position: relative;
  background-color: var(--secondary-color);
  border-radius: 0rem;
  z-index: 2;
  .text {
    p {
      color: var(--background-color);
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
    color: var(--primary-color);
  }
}

.fadein5s-cubic-bezier {
  @include fadein5s-cubic-bezier;
}
</style>
