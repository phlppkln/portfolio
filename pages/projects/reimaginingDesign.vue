<template>
  <div class="container">
    <h1>Reimagining Design</h1>
    <div class="h1-subtitle">
      Exploring the Potential of the Infinite Canvas for the Design of
      Interactive Articles
    </div>

    <div class="page-summary">
      <div class="page-summary-tldr">tl;dr</div>
      <p>
        Reimagining Design is a master thesis that aims to explore the potential
        of the infinite canvas for the design of interactive articles. The
        project was awarded the "Different Brilliant" award at the 5.
        International Conference on Creative\Media/Technologies (IConCMT) at FH
        St. Pölten.
      </p>
    </div>

    <TheBaseProjectInfo
      role="Development, Design, Research"
      timeRange="2021-current"
    />
    <!--     <h2 v-if="language == 'en'">Abstract</h2>
    <h2 v-if="false">Kurzfassung</h2>
    <div class="slider-container" v-if="false">
      <div class="language-slider">
        <div class="slider-btn" @click="changeLanguage('en')">English</div>
        <div class="slider" @click="changeLanguage()">
          <div :class="{ 'slider-item': true, animate: animate }"></div>
        </div>
        <div class="slider-btn" @click="changeLanguage('de')">Deutsch</div>
      </div>
    </div> -->
    <div v-if="language == 'en'" class="abstract">
      <div class="abstract-header" @click="showAbstract()">
        <h2 style="
  padding-top: 0rem !important;">
          Abstract
          <i
            class="bi bi-arrow-right-square-fill"
            :class="{ abstractExtended: true, turnAround: abstractExtended }"
          ></i>
        </h2>
      </div>
      <div
        class="abstract-text"
        :class="{ abstractExtended: true, extendDown: abstractExtended }"
        v-if="abstractExtended"
      >
        <p>
          As digital technology continues to reshape communication and content
          consumption, collaboration and collective ideation have become
          fundamental to modern web technologies. Interactive articles aim to
          encourage active information exploration to foster knowledge creation.
          However, the integration of collaboration and tools like the infinite
          canvas remains unexplored in this context.
        </p>
        <p>
          This thesis investigates the opportunities and limitations of this
          area. It presents a exploration of the infinite canvas and examines
          its strengths and challenges for collaborative interactive articles.
          Through the design and implementation of an application built for
          Miro, a web-based platform utilizing the infinite canvas for creative
          collaboration, it investigates the design process for the infinite
          canvas. In a thinking-aloud user study, this thesis evaluates this
          application and its integration in this environment.
        </p>
        <p>
          This revealed that the infinite canvas offers an immersive virtual
          space, though collaborative artifact design introduces unique
          challenges. The distinction between shared and individual artifacts
          underscores the importance of considering the collaborative artifact
          space. Providing a clear user experience proved to be crucial,
          especially for inexperienced users. Tasks and input methods for
          end-users need to be kept simple.
        </p>

        <p>
          This thesis identifies two distinct user roles for the design of
          collaborative interactive articles: facilitators who guide group
          activities and participants who seek insights. It adopts the idea of
          Gamestorming as a framework for goal-driven collaboration to
          facilitate group work and provide engaging activities. Combined with
          semantic information present on an infinite canvas, this opens up
          further use cases.
        </p>
        <p>
          Moreover, information visualization techniques highlight possibilities
          to create engaging and interactive artifacts on the infinite canvas.
          In the context of visual analytics, the infinite canvas acts as a
          dynamic visual database, enabling direct interaction with data
          entities and relationships. Consequently, information visualizations
          can provide an overview of the infinite canvas and enhance the
          exploration of content.
        </p>
        <p>
          In the end, this thesis contributes to the collaborative and
          interactive potential of the infinite canvas, offering insights for
          the design of interactive articles and explorable visualizations.
        </p>
      </div>
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

    <p>
      New digital interfaces, such as the infinite canvas, constantly change the
      way we access information, communicate, and collaborate (McCloud, 2000).
      Thus, it is important to explore their possibilities for designing
      interactive content and data representations (Bret,2011; Hohman et al.,
      2020). This thesis, investigates the infinite canvas as a medium for
      collaborative and interactive articles with the following research
      questions:
    </p>

    <ul>
      <li>
        What possibilities does an infinite canvas provide for the design of
        interactive articles?
      </li>
      <li>
        What visualization and interaction techniques can facilitate
        communication, engagement, creativity, and collaboration on an infinite
        canvas?
      </li>
      <li>
        How to design for collaboration in interactive articles on an infinite
        canvas (i.e., through group activities)?
      </li>
    </ul>

    <p>
      To address the questions, this thesis adopts an human-centered design
      study approach (Sedlmair et al., 2012). It iteratively explores the
      possibilities of interactive articles on the infinite canvas to create
      engaging and collaborative experiences that resonate with users and
      effectively communicate information.
    </p>

    <p>
      To do so, a literature review of interactive articles and their use of
      collaboration built the foundation for the design of explorable
      interactive and collaborative content. As a next step, a deeper analysis
      of the infinite canvas and its approach to represent information has been
      conducted. To clearly articulate answers to the research questions, group
      activities that focus on insight generation and the formation of new ideas
      have been identified as the target domain. Next, the possibilities and
      limitations of Miro as an infinite canvas environment for creative
      collaboration have been investigated. Further insights into the infinite
      canvas to gather and extract information were achieved through the
      development and evaluation of an application for Miro. This application
      was evaluated in a thinking-aloud user study with semi-structured
      interviews. In the end, this thesis introduces a design of a refined
      application that uses more advanced interaction and collaboration features
      based on the insights from previous steps.
    </p>

    <h2>Conclusion</h2>
    <p>
      In contrast to static text, interactive environments allow the creation of
      intuitive representations that use visual patterns to address our natural
      cognition and perception (Johnson, 2021; Ware, 2020). The infinite canvas
      provides a flexible space that fosters engaging interactions. Participants
      can fully immerse themselves in the design space,becoming direct
      contributors to an interactive article’s content.
    </p>
    <p>
      However, infinite canvases may be less intuitive for some users,
      designers, and developers alike. By adhering to universally applicable
      Gestalt laws, content can be intuitively organized, making it easier to
      navigate and understand information. Techniques like collaborative
      annotations and spatial organization can support collaborative and
      creative thinking, enabling groups to work together, share insights, and
      generate new knowledge. Thus, we identified the importance of facilitators
      who set up the collaborative space and guide the group through the
      activities. Participants or collaborators, on the other hand, are
      individuals and part of a group that share a common goal with other
      participants and contribute their ideas and perspectives. Furthermore, in
      addition to collaboration in time and space as proposed by Heer et al.,
      2008, collaborators on an infinite canvas can also work on one shared
      artifact or on multiple individual artifacts.
    </p>
    <p>
      In the context of visual analytics, the infinite canvas acts as a visual
      database where users directly interact with data entities and
      relationships. In Miro, this data can be used for information
      visualizations which to provide deeper insights into the content on the
      infinite canvas. Early tests of a refined application, that combines
      semantic similarity (Pennington et al., 2014) of collaborators
      perspectives with Gamestorming (Gray et al., 2010) as a framework, show
      potential in facilitating more direct collaboration.
    </p>
    <div class="row image-gallery-container">
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg class="image" src="/img/projects/reimagining-design/app_flow.jpg" />
      </div>
      <div class="col-md-5 col-xl-6 col-sm-12">
        <NuxtImg
          class="image"
          src="/img/projects/reimagining-design/miro_va_system_updated.jpg"
        />
      </div>
    </div>
    <h2>Future Work</h2>
    <p>
      First tests of a refined application, built on the results from the
      previous steps, show promising results for building a semantic space from
      the data created from collaboration on the infinite canvas. Through
      clustering it is possible to explore this semantic space.
    </p>

    
    <div class="row image-gallery-container">
      <div class="col-md-5 col-xl-6 col-sm-12"><NuxtImg
      class="image"
      src="/img/projects/reimagining-design/refined_prototype_design_finished_notes.png"
    />
        </div>
    <div class="col-md-5 col-xl-5 col-sm-12 image-description">
      <p>Through annotating images in Miro participants create a semantic space.</p>
    </div>
      <div class="col-md-5 col-xl-6 col-sm-12"> <NuxtImg
      class="image"
      src="/img/projects/reimagining-design/refined_prototype_design_start_clustering.png"
    />
        </div>
    <div class="col-md-5 col-xl-5 col-sm-12 image-description">
      <p>These notes are then used to cluster images based on their semantic similarity. Participants have to find those clusters in groups or individually. This allows them to reflect upon the similarity between the images and find hidden patterns.</p>
    </div>
        <div class="col-md-5 col-xl-6 col-sm-12"><NuxtImg
      class="image"
      src="/img/projects/reimagining-design/refined_prototype_design_finished_clustering.png"
    /></div>
    
    <div class="col-md-5 col-xl-5 col-sm-12 image-description">
      <p>In the end, it is possible to explore the semantic space. For example, it is possible to show the first two words of the semantic space that no participant has entered. This allows them to further reflect on the similarity between the images.</p>
    </div>
    </div>
    
   
    

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

    <h2>Tools and Languages</h2>
    <ul>
      <li>Miro</li>
      <li>React | Next</li>
      <li>Typescript</li>
      <li>D3.js</li>
      <li>VS Code</li>
    </ul>

    <h2>Links and Resources</h2>
    <div class="row">
      <a
        href="https://repositum.tuwien.at/handle/20.500.12708/188311"
        target="_blank"
        >Download the thesis</a
      >
    </div>
    <div class="row">
      <a href="https://github.com/phlppkln/dig-deeper-v1" target="_blank"
        >GitHub Repository</a
      >
    </div>
    <h2>References</h2>
    <ul>
      <li>
        Bret, V. (2011). Explorable explanations. Retrieved April 27, 2022, from
        <a href="http://worrydream.com/ExplorableExplanations" target="_blank"
          >http://worrydream.com/ExplorableExplanations</a
        >
      </li>
      <li>
        Gray, D., Brown, S., & Macanufo, J. (2010). Gamestorming: A playbook for
        innovators, rulebreakers, and changemakers. O’Reilly Media, Inc.
      </li>
      <li>
        Heer, J., Van Ham, F., Carpendale, S., Weaver, C., & Isenberg, P.
        (2008). Creation and collaboration: Engaging new audiences for
        information visualization. In A. Kerren,J. T. Stasko, J.-D. Fekete, & C.
        North (Eds.), Information visualization (pp. 92–133). Springer Berlin
        Heidelberg.
        <a href="https://doi.org/10.1007/978-3-540-70956-5_5" target="_blank"
          >https://doi.org/10.1007/978-3-540-70956-5_5</a
        >
      </li>
      <li>
        Hohman, F., Conlen, M., Heer, J., & Chau, D. H. (2020). Communicating
        with Interactive Articles. Distill.
        <a href="https://doi.org/10.23915/distill.00028" target="_blank"
          >https://doi.org/10.23915/distill.00028</a
        >
      </li>
      <li>
        Johnson, J. (2021). Reading is unnatural. In Designing with the mind in
        mind (pp. 79–101). Elsevier.
        <a
          href="https://doi.org/10.1016/B978-0-12-818202-4.00006-4"
          target="_blank"
          >https://doi.org/10.1016/B978-0-12-818202-4.00006-4</a
        >
      </li>
      <li>
        McCloud, S. (2000). Reinventing comics. William Morrow Paperbacks.
      </li>
      <li>
        Pennington, J., Socher, R., & Manning, C. (2014). Glove: Global vectors
        for word representation. Proceedings of the 2014 Conference on Empirical
        Methods in Natural Language Processing (EMNLP), 1532–1543.
        <a href="https://doi.org/10.3115/v1/D14-1162" target="_blank"
          >https://doi.org/10.3115/v1/D14-1162</a
        >
      </li>
      <li>
        Sedlmair, M., Meyer, M., & Munzner, T. (2012). Design study methodology:
        Reflections from the trenches and the stacks. IEEE Transactions on
        Visualization and Computer Graphics, 18(12), 2431–2440.
        <a href="https://doi.org/10.1109/TVCG.2012.213" target="_blank"
          >https://doi.org/10.1109/TVCG.2012.213</a
        >
      </li>
      <li>
        Ware, C. (2020). Information visualization: Perception for design (4th
        ed.). Elsevier.
        <a
          href="https://doi.org/10.1016/B978-0-12-812875-6.00011-6"
          target="_blank"
          >https://doi.org/10.1016/B978-0-12-812875-6.00011-6</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const language = ref("en");
const animate = ref(false);
const abstractExtended = ref(false);

const showAbstract = () => {
  animate.value = !animate.value;
  abstractExtended.value = !abstractExtended.value;
};

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

const abstractItem = [
  {
    label: "Abstract",
    icon: "i-bi-information-circle",
    defaultOpen: false,
    slot: "abstract",
  },
];
</script>

<style scoped lang="scss">
.abstract {
  margin-bottom: 2rem;
  background-color: var(--primary-color);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem var(--secondary-color);
  p {
    color: white;
  }
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
  border: 1px solid var(--secondary-color);
  font-weight: bolder;
  margin: 0.5em;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--background-color);
  }
}

.slider {
  border: 0.2rem solid var(--secondary-color);
  width: 100%;
  height: 100%;
}
.slider-item {
  background-color: var(--primary-color);
  width: 50%;
  height: 2rem;
  transition: transform 0.5s ease;
}

.animate {
  transform: translateX(100%);
}

.abstract-header {
  cursor: pointer;
  h2 {
    color: var(--background-color) !important;
  }
  &:hover {
    background-color: var(--primary-color);
    h2 {
      text-decoration: underline var(--secondary-color) 0.5rem;
    }
  }
}

.extendDown {
  animation: showAbstract 0.5s linear;

  @keyframes showAbstract {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
}

.turnAround {
  animation: turnAround 0.5s linear;

  @keyframes turnAround {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
}

.image-gallery-container{
  display: flex;
  align-items: center;
}
.image{
  width: 100%;
  height: auto;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem var(--secondary-color);
  border: 0.3rem solid var(--primary-color);
}
.image-description{
  padding: 2rem;
}

</style>
