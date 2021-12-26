<template>
  <div v-bind="attrs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    inactiveClass: {
      type: String
    },
    activeClass: {
      type: String
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    active: false
  }),
  computed: {
    attrs() {
      const classes = this.active ? this.activeClass : this.inactiveClass;

      return { class: classes }
    }
  },
  mounted() {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.active = true;
          observer.disconnect();
        }
      });
    }, { rootMargin: "-100px", threshold: 0, ...this.config });

    io.observe(this.$el);
  }
}
</script>
