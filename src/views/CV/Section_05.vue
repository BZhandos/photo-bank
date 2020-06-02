<template>
  <div class="section-box s5-wrap" id="section5">
    <div class="own-wrap">
       <p class="title">My projects</p>
      <div class="list-wrap">
        <projects-list
          :projects= ownProjects
        />
      </div>
    </div>
    <div class="inc-wrap">
      <p class="title">Enterprise</p>
      <projects-list
        :projects= incProjects
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section_05',
  data: () => ({
    ownProjects: [
      {
        title: 'Photo bank',
        subtitle: 'A lot of images with search function',
        name: 'PhotoBank',
        img: 'photo-bank.jpg'
      },
      {
        title: 'Speed Reading',
        subtitle: 'Fast and Furious',
        name: 'SpeedReading',
        img: 'reading.png'
      },
      {
        title: 'Vuex',
        subtitle: 'and Vulidate'
      },
      {
        title: 'Music',
        subtitle: 'Lets be Dj'
      }
    ],
    incProjects: [
      {
        title: 'atf24.kz',
        subtitle: 'Online banking',
        img: 'atf.jpg'
      },
      {
        title: 'technodom.kz',
        subtitle: 'Only main page'
      },
      {
        title: 'platiza.ru',
        subtitle: 'admin side and calulator'
      }
    ]
  }),
  methods: {
  }
  // API.sendPhoto(imageNotDone).then((response) => {
  //   if (response && response.success) {
  //     responseImageNotDone = response.data
  //   }
  // }
}
</script>

<style scoped lang="scss">
.s5-wrap
  {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.title {
  text-align: center;
}

</style>
