<template>
  <div class="photo-wrap">
    <div class="photo-wrap-column"
         v-for="(project, key) in projects" :key="key"
         @click="$router.push({ name: project.name })"
    >
      <div class="text-box">
        <div class="text-box-wrap">
          <p>{{ project.title }}</p>
          <p>{{ project.subtitle }}</p>
        </div>
      </div>
      <div class="photo-wrap-column-box"  v-if="project.img">
        <img
             :src="require('@/assets/images/samples/' + project.img)"
        />
      </div>
      <div class="photo-wrap-column-box-coming" v-else>
        <img
             :src="require('@/assets/images/samples/coming-soon.jpg')" >
      </div>
    </div >
  </div>
</template>

<script>
export default {
  name: 'projectsList',
  props: {
    projects: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
.photo-wrap {
  column-width: 250px;
  column-gap: 15px;
  max-width: 600px;
  margin: 50px auto;
  &-column {
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    border: 2px solid rgba(255, 255, 255, 0.2);;
    margin: 0 2px 15px;
    padding: 15px;
    transition: opacity .4s ease-in-out;
    display: inline-block;
    &-box {
       transition: .3s;
    & img {
        width: 100%;
        height: auto;
        margin-bottom: 5px;
        transition: .3s;
      }
      &-coming {
        & img {
          opacity: .2;
          width: 100%;
          height: auto;
          margin-bottom: 5px;
          transition: .3s;
        }
      }
    }
    &:hover {
      & img {
        opacity: 1;
        transform: scale(1.05);
        transform-origin: 50% 50%;
      }
      .text-box {
        opacity: 1;
      }
    }
}
}
.text-box {
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  background-color: rgba(250, 201, 33, .9);
  border-radius: 5px;
  opacity: 0;
  transition: .3s;
  height: 100px;
  padding: 10px;
  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
}
</style>
