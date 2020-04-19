<template>
  <div class="info"  v-if="planet">
    <div class="info-planet">Planet</div>
    <div class="info-title">{{planet.englishName}}</div>
    <div class="info-numbers">
      <div class="info-numbers-moons">Moons: {{(planet.moons)? planet.moons.length : 0 }}</div>
      <div class="info-numbers-grav">Gravity: {{ planet.gravity}}m/s&sup2;</div>
    </div>

    <div>  {{bio[0]}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PlanetInfo',
  data: () => ({
    planet: null,
    bio: [
      'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.',
      'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.',
      'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. ',
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the \'Red Planet\'.',
      'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
      'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god\'s sickle.',
      'Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
      'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.',
      'Pluto was discovered by Clyde Tombaugh in 1930 as the ninth planet from the Sun. After 1992, its status as a planet was questioned following the discovery of several objects of similar size in the Kuiper belt. In 2005, Eris, a dwarf planet in the scattered disc which is 27% more massive than Pluto, was discovered.'
    ]
  }),
  beforeCreate () {
    axios
      .get('http://api.le-systeme-solaire.net/rest/bodies/mercure')
      .then(response => {
        this.planet = response.data
        this.loading = false
      })
      .catch(error => console.log(error))
  }
}
</script>
<style scoped lang="scss">
.info {
  color: white;
  text-align: left;
  padding: 0 20px 0 20px;
  font-weight: bold;
  &-planet {
    color: #a14913;
    text-transform: uppercase;
    font-size: 12px;
   }
  &-title {
    font-size: 24px;
  }
  &-numbers {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 20px;
    &-moons {
      padding-right: 20px;
    }
  }
}
</style>
