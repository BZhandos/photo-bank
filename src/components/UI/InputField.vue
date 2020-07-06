<template>
    <div class="input">
        <input @input="updateValue($event.target.value)"
               placeholder=" "
               :type= labelType
               class="input-wrap"
               :class="{error: labelValid}"
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
    display: block;
    box-sizing: border-box;
    margin: 15px;
    position: relative;
    &-wrap {
      max-width: 100%;
      width: 100%;
      font-weight: 400;
      color: #000000;
      font-size: 17px;
      line-height: 22px;
      border: none;
      border-radius: 3px;
      padding: 30px 16px 12px;
      transition: 0.3s ease font-size, top;
    }
    &-label {
      font-size: 17px;
      line-height: 22px;
      color: black;
      transition: 0.3s ease font-size, top;
      position: absolute;
      left: 16px;
      top: 20px;
      padding-right: 16px;
      pointer-events: none;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: calc(100% - 80px);
    }
    &-required {
        line-height: 0;
        font-size: 12px;
        padding-bottom: 10px;
        color: red;
    }
}
.input {
  &-wrap {
    &:not(:placeholder-shown) ~ label {
      font-size: 14px;
      line-height: 15px;
      transition: 0.3s ease font-size, top;
      top: 12px;
      color: #19639A;
    }
    &:focus {
      & + .input-label {
        font-size: 14px;
        line-height: 15px;
        transition: 0.3s ease font-size, top;
        top: 12px;
        color: #19639A;
      }
    }
  }
}

.input-wrap.input-wrap--filled {
  .input-wrap__label {
    font-size: 14px;
    line-height: 15px;
    transition: 0.3s ease font-size, top;
    top: 12px;
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
