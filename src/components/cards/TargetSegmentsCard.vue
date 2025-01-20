<template>
  <DashboardCard title="Target Segments">
    <div class="space-y-4">
      <div v-for="(segment, index) in segments" :key="index" class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold text-lg">{{ segment.segment }} - {{ segment.potential }} Potential</h3>
        <p class="text-gray-600 mt-2">{{ segment.marketing_approach }}</p>
        <div class="mt-3 grid grid-cols-2 gap-4">
          <div>
            <span class="text-sm text-gray-500">Expected Reach:</span>
            <p class="font-medium">{{ segment.expected_reach }}</p>
          </div>
          <div>
            <span class="text-sm text-gray-500">Success Probability:</span>
            <p class="font-medium">{{ (segment.success_probability * 100).toFixed(1) }}%</p>
          </div>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'TargetSegmentsCard',
  components: { DashboardCard },
  props: {
    segments: {
      type: Array,
      required: true
    }
  }
}
</script>