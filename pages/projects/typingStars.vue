<template>
  <div>
    <h1>Typing Stars</h1>
    <div class="h1-subtitle">
      Measuring the Impact of Fault Tolerance on User Performance and Typing
      Behaviour in a Serious Game
    </div>
    <div class="page-summary">
      <div class="page-summary-tldr">tl;dr</div>
      <p>
        "Typing Stars" is an Android game designed to study the impact of fault
        tolerance on typing behavior. This game allows errors in typing to varying degrees, aiming 
        to see how different fault tolerances affect
        typing speed, accuracy, and user satisfaction. A user study involving 92
        games and over 51,000 keystrokes found that participants typed faster
        but with more errors in the easy mode with higher fault tolerance, while
        typing more accurately but slower in the hard mode. Despite enjoying the
        challenge of hard mode, users felt more satisfied with their performance
        in easy mode. 
      </p>
    </div>
    <div>
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
          Gamification refers to the usage of game elements to enhance user
          motivation and engagement. Serious games are a similar approach but
          they are full-fledged games rather than using individual elements.
          Unlike normal entertainment games, they have an underlying purpose and
          follow a serious goal. For example, typing games on smartphones are a
          popular approach to improve typing skills. But they often implement
          features that restrict natural typing behavior of players. It is
          common that such games prohibit players from entering erroneous
          characters, although text entry on smart-phones usually is error-prone
          and inaccurate.
        </p>
        <p>
          As part of this project the Android game “Typing Stars”, was designed
          and developed. “Typing Stars” allows faulty input through integration
          of fault tolerance. Measurements of speed, error rates, and efficiency
          allow the detection of effects of fault tolerance on users' typing
          behavior. A user study collected these metrics to detect possible
          changes in typing behavior with various fault tolerances. Participants
          played the game in two game modes, easy and hard which were
          characterized by the amount of erroneous characters in the entered
          text. Additionally, participants answered a questionnaire to gather
          information on perceived typing performance.
        </p>
        <p>
          In total participants played 92 games and performed 51,603 keystrokes.
          On average participants achieved a higher score and games lasted
          longer in easy mode. In contrast to these results, participants rated
          their perceived general satisfaction and gaming fun higher in hard
          games. The overall results suggest that the integration of fault
          tolerance increases the amount of entered text since all speed metrics
          were higher in easy games. Participants also entered more completely
          correct words in easy mode, while having a better “keystrokes per
          character” metric. Errorrates indicate that participants adapted their
          typing behavior to the present fault tolerance. More errors have been
          corrected in hard games while inputs in easy games contained more
          uncorrected errors. This leads to the assumption that the integration
          of a high fault tolerance increases typing speed and the number of
          erroneous characters. In contrast, a low fault tolerance results in
          lower input speed since the entered words are more carefully
          corrected.
        </p>
      </div>
      <div v-if="language == 'de'">
        <p>
          Gamification soll Nutzer durch den Einsatz von Spielelementen
          motivieren. Serious Games sind ein ähnliches Konzept, welche aber
          vollwertige Spiele, anstatt den Einsatz einzelner Elemente,
          darstellen. Im Gegensatz zu reinen Unterhaltungsspielen verfolgen
          diese immer ein ernsthaftes Ziel. Beispielsweise versuchen
          Smartphonespiele mit Texteingabe die Tippfähigkeiten von Nutzern zu
          verbessern. Doch viele dieser Spiele implementieren Mechaniken, welche
          das normale Eingabeverhalten beschränken. Oft wird die Eingabe von
          fehlerhaften Buchstaben verhindert, obwohl Texteingabe auf Smartphones
          fehleranfällig und ungenau ist.
        </p>
        <p>
          Im Rahmen dieses Projekts wurde das Android Spiel “Typing Stars”
          entworfen und entwickelt. “Typing Stars” erlaubt fehlerhafte Eingaben
          in Form von Fehlertoleranz. Messwerte von Geschwindigkeit, Fehlerraten
          und Effizienz erfassen dabei die Auswirkungen von Fehlertoleranz auf
          das Tippverhalten. Diese wurden in einer User Studie gesammelt um
          mögliche Veränderungen des Tippverhaltens festzustellen.
          Teilnehmer:innen der Studie absolvierten Spiele in zwei verschiedenen
          Modi, leicht und schwierig. Diese unterschieden sich nur durch die im
          Spiel erlaubte Fehlertoleranz. Zusätzlich beantworteten die
          Teilnehmer:innen einen Fragebogen, welcher subjektive Informationen
          zum wahrgenommenen Eingabeverhaltens sammelte.
        </p>
        <p>
          Insgesamt spielten Teilnehmer:innen 92 Spiele, in denen sie 51.603
          Tastenanschläge ausführten. Im Durchschnitt haben Teilnehmer:innen im
          leichten Spielmodus mehr Punkte erreicht und länger in einem Spiel
          verbracht. Im Gegensatz dazu wurde von Studienteilnehmer:innen
          angegeben, dass ihre allgemeine Zufriedenheit und Spielspaß in
          schwierigen Spielen höher war. Die Ergebnisse der Studiezeigen auch,
          dass die Integration von Fehlertoleranz zu mehr Tastenanschlägen
          führt, da alle Geschwindigkeitsmetriken in leichten Spielen höher
          waren. Es wurden im Durchschnitt weniger Tastenanschläge pro Buchstabe
          in leichten Spielen benötigt und Teilnehmer:innen haben im leichten
          Modus mehr komplett richtige Wörter eingegeben, als im schwierigen
          Modus. Die Fehlerraten zeigen, dass Spieler:innen ihr Eingabeverhalten
          an die Fehlertoleranz anpassten, da in schwierigen Spielen mehr Fehler
          ausgebessert wurden. Im Gegensatz dazu waren wesentlich mehr
          unkorrigierte Fehler in leichten Spielen vorhanden. Das führt zu der
          Annahme, dass Eingabegeschwindigkeit und Anzahl der fehlerhaften
          Buchstaben steigen, wenn eine hohe Fehlertoleranz integriert wird. Im
          Gegensatz dazu führt eine niedrige Fehlertoleranz zu einer geringeren
          Eingabegeschwindigkeit, da die Eingaben gewissenhafter korrigiert
          werden.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-sm-6">
        <NuxtImg
          class="image"
          src="/img/typing-stars/ts_game.png"
          alt="Typing Stars Game"
        />
      </div>
      <div class="col-md-4 col-sm-6">
        <NuxtImg
          class="image"
          src="/img/typing-stars/ts_main.png"
          alt="Typing Stars Main Menu"
        />
      </div>
      <div class="col-md-4 col-sm-6">
        <NuxtImg
          class="image"
          src="/img/typing-stars/ts_achievements.png"
          alt="Typing Stars Achievements"
        />
      </div>
    </div>

    <h2>Used Tools and Software</h2>
    <p>
      Android Studio, Google Play Services, Java, REST+JSON, Pen+Paper, JASP
      (User Tests Analysis)
    </p>
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
.image {
  width: 100%;
  height: auto;
  margin: 2rem;
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
