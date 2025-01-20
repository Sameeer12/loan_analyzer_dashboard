<template>
  <div class="bg-white rounded-lg shadow p-6" :class="className">
    <h2 class="text-xl font-semibold mb-4 text-gray-800">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>