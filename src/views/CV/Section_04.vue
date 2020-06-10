<template>
  <div class="section-box s4-wrap" id="section4">
    <div class="s4-wrap-dev">
      <default-description
        title="Developer Skills"
        subtitle="Great understanding of Sketch App, Adobe Experience Design and Adobe Photoshop.
          Expert of making Responsive Site and using Bootstrap.
          Understanding of mobile apps. Solid experience to work in a team. Understanding
          of VueJS, Vuex, AWS (Amplify, Route 53), CI/CD."
      />
      <div class="s4-wrap-dev-skillbar" v-for="(skill, index) in devSkills" :key="index">
        <div class="skillbar-info">
          <p class="subtitle">{{ skill.name }}</p>
          <p class="subtitle">{{ skill.percentage }}%</p>
        </div>
        <div class="skillbar-bg">
          <div class="custom-skillbar" :style="{'width': skill.percentage + '%'}"></div>
        </div>
      </div>
    </div>
    <div class="s4-wrap-lang">
      <default-description
        title="Language Skills"
        subtitle="Passed IELTS in school years (2013) 5.5 points, since I am still working on it.
        Russian and Kazakh languages is native."
      />
      <div class="s4-wrap-lang-wrap">
        <div  class="s4-wrap-lang-wrap-box" v-for="(skill, index) in langSkills" :key="index">
          <div class="s4-wrap-lang-wrap-box-cirlce">
            <p>{{skill.name}}</p>
            <p>{{skill.percentage}}%</p>
          </div>
          <svg
            width="150"
            height="150"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="57"
              stroke="url(#paint0_linear)"
              stroke-width="6"
              :stroke-dasharray="circlePercent(skill.percentage)"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="0"
                x2="108.796"
                y2="129.419"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FAC921" />
                <stop offset="1" stop-color="#FAC921" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Section_04',
  data: () => ({
    devSkills: [
      {
        name: 'Vue.js',
        percentage: 75
      },
      {
        name: 'HTML',
        percentage: 85
      },
      {
        name: 'CSS',
        percentage: 85
      },
      {
        name: 'JAVASCRIPT',
        percentage: 80
      },
      {
        name: 'SKETCH APP AND ADOBE PHOTOSHOP',
        percentage: 80
      },
      {
        name: 'VERSION CONTROL SYSTEM',
        percentage: 90
      }
    ],
    langSkills: [
      {
        name: 'English',
        percentage: 75
      },
      {
        name: 'Russian',
        percentage: 90
      },
      {
        name: 'Kazakh',
        percentage: 95
      }
    ]
  }),
  methods: {
    circlePercent (value) {
      const R = 2 * 57 * Math.PI
      const roundPercent = (value * 100) / 100
      const roundDraw = (roundPercent * R) / 100
      return roundDraw + " 999";
    }
  }
}
</script>

<style scoped lang="scss">
.s4-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 10px;
  &-separator {
    border-left: 2px solid  #FAC921;
    padding-left: 10px;
  }
  &-dev {
    width: 100%;
    max-width: 500px;
    &-skillbar {
      padding-left: 12px;
    }
  }
  &-lang {
    width: 100%;
    max-width: 700px;
    &-wrap {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 20px;
      &-box {
        position: relative;
        margin-bottom: 10px;
        &-cirlce {
          position: absolute;
          left: 0;
          right: 0;
          top: 45px;
          margin-left: auto;
          margin-right: auto;
          width: 150px;
        }
      }
    }
  }
}
.skillbar {
  &-info {
    display: flex;
    justify-content: space-between;
  }
  &-bg {
    width: 100%;
    height: 10px;
    overflow: hidden;
    background: #292929;
    border-radius: 2px;
    margin-bottom: 10px;
  }
}
.custom-skillbar {
  background-color: #FAC921;
  height: 10px;
}
</style>
