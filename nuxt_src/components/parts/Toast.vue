<template>
  <div class="toast">
    <span class="check-icon" />
    <span class="text">
      ログインしました
    </span>
    <span class="close-btn" />
  </div>
</template>

<script>
const DEFAULT_OPT = {
  id: 'easy-toast-default',
  className: '',
  horizontalPosition: 'right',
  verticalPosition: 'top',
  parent: 'body',
  transition: 'fade',
  duration: 5000,
  message: '',
  closeable: false
}

export default {
  DEFAULT_OPT: DEFAULT_OPT,
  data() {
    return {
      queue: [],
      option: {},
      showing: false
    }
  },
  computed: {
    mergedOption: function () {
      return Object.assign({}, DEFAULT_OPT, this.option)
    },
    clazz: function () {
      let clazz = []
      const className = this.option.className
      const horizontalPosition = this.mergedOption.horizontalPosition
      const verticalPosition = this.mergedOption.verticalPosition
      const closeable = this.mergedOption.closeable
      if (className) {
        if (typeof className === 'string') {
          clazz.push(className)
        }
        if (Array.isArray(className)) {
          clazz = clazz.concat(className)
        }
      }
      if (horizontalPosition) {
        clazz.push(`et-${horizontalPosition}`)
      }
      if (closeable) {
        clazz.push('et-closeable')
      }
      if (verticalPosition) {
        clazz.push(`et-${verticalPosition}`)
      }
      return clazz.join(' ')
    }
  },
  watch: {
    queue: function () {
      const pending = this.queue.length
      if (pending === 0) {
        return
      }
      this.showing = true
      this.option = this.queue[0]
      if ((!this.option.mode || this.option.mode === 'override') && pending > 1) {
        clearTimeout(this.timeoutId)
        this.showing = false
        this.timeoutId = null
        this.timeoutId = setTimeout(() => this.queue.shift())
      } else {
        this.timeoutId = setTimeout(() => {
          this.showing = false
          this.timeoutId = null
          setTimeout(() => this.queue.shift())
        }, this.mergedOption.duration)
      }
    }
  },
  methods: {
    close: function () {
      this.showing = false
      this.queue.shift()
    }
  }
}
</script>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 230px;
    height: 60px;
    max-width: 90vw;
    background-color: white;
    border-radius: 4px;
    text-align: left;
    padding: 14px 16px;
    color: #444;
    box-sizing: border-box;
    box-shadow: 0 0 3px -2px rgba(0, 0, 0, 0.85), 0 6px 6px -6px rgba(0, 0, 0, 0.85);
    z-index: 1000;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      border-radius: 4px 0 0 4px;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: #46D664;
    }
  }

  .check-icon {
    flex: 0 0 auto;
    position: relative;
    display: inline-block;
    line-height: 70px;
    padding-top: 0.5em;
    width: 24px;
    height: 24px;
    background-color: #46D664;
    border-radius: 50%;

    &::after {
      content: "";
      border-left: 1.8px solid #fff;
      display: block;
      border-bottom: 1.8px solid #fff;
      width: 10px;
      height: 5px;
      transform: rotate(-47deg);
      position: absolute;
      left: 28%;
      top: 38%;
    }
  }
  .text {
    flex: 1 0 auto;
    padding-left: .5em;

  }
</style>
