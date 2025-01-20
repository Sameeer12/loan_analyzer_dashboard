<template>
  <div class="bg-white rounded-lg shadow p-6" :class="className">
    <!-- Render the title if provided -->
    <template v-if="title">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">{{ title }}</h2>
    </template>
    <!-- Allow custom title content through the named slot -->
    <slot name="title"></slot>
    <!-- Default slot for the card content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DashboardCard",
  props: {
    /**
     * Optional title for the card.
     */
    title: {
      type: String,
      default: "", // If no title is passed, the card will still render.
    },
    /**
     * Optional class names to apply custom styling.
     */
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
/* Add any additional custom styles here. For example: */
.bg-white {
  background-color: #ffffff;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
}
</style>
