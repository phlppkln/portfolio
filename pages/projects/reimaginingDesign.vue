<template>
  <div class="container">
    <h1>Reimagining Design</h1>
    <div class="subtitle">
      Exploring the Potential of the Infinite Canvas for the Design of
      Interactive Articles
    </div>

    <div class="page-summary">
      <div class="page-summary-tldr">tl;dr</div>
      <p>
        Reimagining Design is a master thesis that aims to explore the potential
        of the infinite canvas for the design of interactive articles. The
        project was awarded the "Different Brilliant" award at the 5.
        International Conference on Creative\Media/Technologies (IConCMT) at the
        FH St. Pölten.
      </p>
    </div>


      <h2 v-if="language == 'en'">Abstract</h2>
      <h2 v-if="language == 'de'">Kurzfassung</h2>
      <div class="slider-container">
        <div class="language-slider">
          <div class="slider-btn" @click="changeLanguage('en')">English</div>
          <div class="slider" @click="changeLanguage()">
            <div :class="{ 'slider-item': true, animate: animate }"></div>
          </div>
          <div class="slider-btn" @click="changeLanguage('de')">Deutsch</div>
        </div>
      </div>
    <div v-if="language == 'en'">
      <p>
        As digital technology continues to reshape communication and content
        consumption, collaboration and collective ideation have become
        fundamental to modern web technologies. Interactive articles aim to
        encourage active information exploration to foster knowledge creation.
        However, the integration of collaboration and tools like the infinite
        canvas remains unexplored in this context. This thesis investigates the
        opportunities and limitations of this area. It presents a exploration of
        the infinite canvas and examines its strengths and challenges for
        collaborative interactive articles. Through the design and
        implementation of an application built for Miro, a web-based platform
        utilizing the infinite canvas for creative collaboration, it
        investigates the design process for the infinite canvas. In a
        thinking-aloud user study, this thesis evaluates this application and
        its integration in this environment. This revealed that the infinite
        canvas offers an immersive virtual space, though collaborative artifact
        design introduces unique challenges. The distinction between shared and
        individual artifacts underscores the importance of considering the
        collaborative artifact space. Providing a clear user experience proved
        to be crucial, especially for inexperienced users. Tasks and input
        methods for end-users need to be kept simple. This thesis identifies two
        distinct user roles for the design of collaborative interactive
        articles: facilitators who guide group activities and participants who
        seek insights. It adopts the idea of Gamestorming as a framework for
        goal-driven collaboration to facilitate group work and provide engaging
        activities. Combined with semantic information present on an infinite
        canvas, this opens up further use cases. Moreover, information
        visualization techniques highlight possibilities to create engaging and
        interactive artifacts on the infinite canvas. In the context of visual
        analytics, the infinite canvas acts as a dynamic visual database,
        enabling direct interaction with data entities and relationships.
        Consequently, information visualizations can provide an overview of the
        infinite canvas and enhance the exploration of content. In the end, this
        thesis contributes to the collaborative and interactive potential of the
        infinite canvas, offering insights for the design of interactive
        articles and explorable visualizations.
      </p>
    </div>
    <div v-if="language == 'de'">
      <p>
        Mit der fortschreitenden Digitalisierung, welche Kommunikation und
        Konsum von Inhalten verändert, sind Kollaboration und kollektive
        Ideenfindung zu grundlegenden Elementen moderner Webtechnologien
        geworden. Während interaktive Artikel darauf abzielen, die aktive
        Erkundung von Informationen zu fördern, bleibt die Integration von
        Kollaboration und Anwendungen wie der unendlichen Leinwand in diesem
        Kontext noch weitgehend unerforscht.
      </p>
      <p>
        Diese Arbeit erforscht die Chancen und Grenzen dieses Bereichs. Sie
        präsentiert die unendliche Leinwand und untersucht ihre Stärken und
        Schwächen für kollaborative interaktive Artikel. Dafür wurde eine
        Anwendung in Miro, einer webbasierten unendlichen Leinwand für kreative
        Zusammenarbeit, gestaltet, wodurch Design und Implementierung einer
        solchen Anwendung untersucht wurde. In einer Thinking-Aloud User Studie
        wird diese Anwendung und ihre Integration in einer unendlichen Leinwand
        erprobt.
      </p>
      <p>
        Dadurch wurde verdeutlicht, dass die unendliche Leinwand einen
        immersiven virtuellen Raum bietet, während das kollaborative Design von
        Artefakten neue Herausforderungen mit sich bringt. Die Unterscheidung
        zwischen gemeinsam genutzten und individuellen Artefakten unterstreicht
        die Bedeutung der räumlichen Einbettung des kollaborativen Artefakts.
      </p>
      <p>
        Zusätzlich identifiziert diese Arbeit zwei unterschiedliche
        Benutzerrollen für das Design kollaborativer interaktiver Artikel:
        Moderator:innen, die Gruppenaktivitäten leiten, und Teilnehmer:innen,
        die Erkenntnisse suchen. Dafür wird das Konzept “Gamestorming” als
        Rahmen für zielgerichtete Zusammenarbeit verwendet, um ansprechende
        Gruppenaktivitäten anzubieten. In Verbindung mit semantischen
        Informationen auf einer unendlichen Leinwand ergeben sich dadurch neue
        Anwendungsmöglichkeiten.
      </p>
      <p>
        Darüber hinaus erlauben Methoden aus der Informationsvisualisierung die
        Erstellung ansprechender und interaktiver Artefakte. Im Kontext von
        Visual Analytics dient die unendliche Leinwand als dynamische visuelle
        Datenbank, die eine direkte Interaktion mit Datenentitäten und
        -beziehungen erlaubt. Infolgedessen können Informationsvisualisierungen
        eine Übersicht und die Erkundung der Inhalte einer unendlichen Leinwand
        ermöglichen.
      </p>
      <p>
        Letztendlich zeigt diese Arbeit, wie das Potenzial von interaktiven
        Artikeln und Visualisierungen auf der unendlichen Leinwand genutzt
        werden kann.
      </p>
    </div>

    <h2>Motivation</h2>
    <p>Motivation here</p>

    <h2>Research Approach</h2>
    <p>Research here</p>

    <h2>Dig Deeper</h2>
    Dig Deeper is a Miro application that has been developed as part of this
    project. It allows individuals in groups to work together.

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
            represent best-practice approaches to applied and artistic research
            projects in the field of media, design and media creation.
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const language = ref("en");
const animate = ref(false);

const changeLanguage = (languageClicked?: string) => {
  if (typeof languageClicked === "string") {
    if (languageClicked !== language.value) {
      language.value = languageClicked;
      animate.value = !animate.value;
    }
  } else {
    language.value = language.value == "en" ? "de" : "en";
    animate.value = !animate.value;
  }
};
</script>

<style scoped lang="scss">
.subtitle {
  font-style: italic;
  font-size: 1.5em;
  margin-bottom: 1em;
  margin-top: 0em;
}

.language-slider {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
}
.slider-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: larger;
}
.slider-btn {
  cursor: pointer;
  padding: 0.5em;
  border-radius: 1rem;
  border: 1px solid $secondary;
  font-weight: bolder;
  margin: 0.5em;

  &:hover {
    background-color: $secondary;
    color: $background;
  }
}

.slider {
  border: 0.2rem solid $secondary;
  width: 100%;
  height: 100%;
}
.slider-item {
  background-color: $primary;
  width: 50%;
  height: 2rem;
  transition: transform 0.5s ease;
}

.animate {
  transform: translateX(100%);
}
</style>
