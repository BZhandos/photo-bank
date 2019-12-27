<template>
    <div class="dropdown-wrap">
        <select @input="updateValue($event.target.value)">
            <option v-for="(value, index) in labelOptions" :key="index"
                    :value=value.id
                    >
                {{value.name}}</option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    labelOptions: {
      type: [String, Array],
      default: null
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="scss">
.dropdown-wrap {
    & select {
        outline: 0;
        width: 320px;
        overflow: hidden;
        height: 39px;
        border: 1px solid #ccc;
        text-indent: 12px;
        border-radius: 3px;
        margin-bottom: 15px;
    }
}
</style>
