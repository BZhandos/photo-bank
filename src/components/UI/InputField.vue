<template>
    <div class="input">
        <input @input="updateValue($event.target.value)"
               placeholder=" "
               :type= labelType
               class="input-box"
               :class="{error: labelValid}"
               :style="{width: labelWidth + 'px'}"
        />
        <label  class="input-label">{{labelName}}</label>
        <transition name="errorLabel">
            <p class="input-required" v-if="labelValid">{{labelError}}</p>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    labelName: {
      type: String,
      default: 'Give a name to the label'
    },
    labelRequired: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: '320'
    },
    labelType: {
      type: String,
      default: 'text'
    },
    labelValid: {
      type: Boolean,
      default: false
    },
    labelError: {
      type: String,
      default: 'Please, fill this label'
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
.input {
    box-sizing: border-box;
    margin-bottom: 15px;
    position: relative;
    &-box {
        border-radius: 3px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding: 12px 20px;
        outline: none;
    }
    & input {
        &:not(:placeholder-shown) ~ label {
            top: -7px;
            font-size: 10px;
            color: #5264AE;
            background-color: #fff;
            padding: 0 5px;
            border-radius: 2px;
        }
        &:focus ~ label {
            top: -7px;
            font-size: 10px;
            color: #5264AE;
            background-color: #fff;
            padding: 0 5px;
            border-radius: 2px;
        }
    }
    &-label {
        color: #999;
        font-size: 12px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 20px;
        top: 12px;
        transition:0.2s ease all;
        -moz-transition:0.2s ease all;
        -webkit-transition:0.2s ease all;
    }
    &-required {
        line-height: 0;
        font-size: 12px;
        padding-bottom: 10px;
        color: red;
    }
}
.error {
    border: 1px solid palevioletred;
}
.errorLabel-leave-active {
    animation: labelOut 0.2s ease-out forwards;
}
.errorLabel-enter-active {
    animation: labelEnter 0.5s ease-out forwards;
}
@keyframes labelEnter {
    from {
        transform: translateX(50px);
    }
    to {
        transform: translateX(0);
    }
}@keyframes labelOut {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(10px);
    }
}
</style>
