<template>
  <div class="container">
    <h1>Online Self Assessment (OSA)</h1>
    <div class="information-container">
      The project language is German, thus the content of this page is in German
      as well.
    </div>
    <div class="page-summary">
      <div class="page-summary-tldr">tl;dr</div>
      <p>
        Im Rahmen meiner Tätigkeit als Studienassistent an der Technischen
        Universität Wien, habe ich ein innovatives Online Self Assessment (kurz
        OSA) entwickelt. Ziel des OSA ist es, studieninteressierte Personen
        durch interaktive Aufgaben und Informationsmaterialien in ihrer
        Studienentscheidung zu unterstützen.
      </p>
      <p>
        In einer ersten Phase wurde ein OSA für das Informatikstudium
        ausgearbeitet. Dieses wurde als verpflichtender Teil im
        Aufnahmeverfahren im Jahr 2024 erstmalig verwendet.
      </p>
    </div>

    <TheBaseProjectInfo
      role="Development, Design, Research"
      timeRange="2023-current"
    />
    <div class="row">
      <p>
        Das Online Self Assessment (kurz OSA) Angebot der Technischen
        Universität Wien ist eine Unterstützung bei der Studienwahl, welches
        bequem von zu Hause aus durchgeführt wird. Es soll Inhalte eines
        Studiums näherbringen und Personen dadurch in Ihrer Studienentscheidung
        beraten. Ziel des OSA ist es, eine Einschätzung der eigenen Interessen
        und Fähigkeiten zu ermöglichen, sowie zur Selbstreflexion anzuregen.
        Durch interaktive Aufgaben und Informationsmaterialien lernen
        Teilnehmer:innen Inhalte aus einem Studium kennen und können dadurch
        einen ersten Einblick in verschiedene Bereiche erhalten.
      </p>
      <p>
        Das Online Self Assessment ist jedoch nicht als Test zu verstehen, der
        vor dem Studienbeginn absolviert und bestanden werden muss. Stattdessen
        soll das OSA mehr Klarheit über Studien- und Berufsalltag vermitteln und
        so eine Möglichkeit bieten, Eignung und Begeisterung für das Studium und
        dessen Inhalte selbst besser einschätzen zu können.
      </p>
      <h2>Wie es funktioniert</h2>
      <p>
        Für das OSA ist keine fachliche Vorbereitung notwendig. Teilnehmer:innen
        wählen ein OSA für ein bestimmtes Studium aus um in diesem mehrere
        voneinander unabhängige Module bearbeiten zu können. Einige dieser
        Module stellen die Experimente dar, die jeweils aus folgenden drei
        Punkten bestehen:
      </p>

      <ul>
        <li>einer kurzen Einführung in einen Themenbereich des Studiums,</li>
        <li>
          interaktiv zu bearbeitenden Aufgabenstellungen aus diesem Bereich,
        </li>
        <li>als auch zu weiterführenden Informationen</li>
      </ul>

      <h2>Experimentierbeispiele</h2>
      <p>
        Die Experimentierbeispiele stellen den Hauptteil des OSA dar. Sie dienen
        dazu, die Bewerber:innen durch interaktive Aufgaben und weiterführende
        Informationen über Inhalte und Tätigkeiten im Studienalltag zu
        informieren.
      </p>
      <p>
        In unterschiedlichen Themenbereichen können Teilnehmer:innen eine einfache 
        Aufgaben bearbeiten. Diese sind so gestaltet, dass es immer möglich ist, diese abzuschließen.
        So wird nach einer mehrmaligen falschen Bearbeitung, die korrekte Lösung angezeigt.
      </p>
      <div class="row image-gallery-container">
        <div class="col-md-5 col-xl-6 col-sm-12">
          <NuxtImg class="image" src="/img/osa/sortieren_mit_system.png" />
        </div>
        <div class="col-md-5 col-xl-6 col-sm-12">
          <NuxtImg class="image" src="/img/osa/mit_sicherheit.png" />
        </div>
        <div class="col-md-5 col-xl-6 col-sm-12">
          <NuxtImg class="image" src="/img/osa/mit_sicherheit_assign1.png" />
        </div>
        <div class="col-md-5 col-xl-6 col-sm-12">
          <NuxtImg class="image" src="/img/osa/mit_sicherheit_assign2.png" />
        </div>
      </div>
      <h2>Tools and Languages</h2>
    <ul>
      <li>Vue.js</li>
      <li>Strapi</li>
      <li>Javascript</li>
      <li>D3.js</li>
      <li>Chart.js</li>
      <li>Figma</li>
      <li>VS Code</li>
    </ul>

    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.image-gallery-container{
  display: flex;
  align-items: center;
}
.image{
  width: 100%;
  height: auto;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem $secondary;
  border: 0.3rem solid $primary;
  padding: 0.5rem;
  background-color: white;
}
.image-description{
  padding: 2rem;
}</style>
