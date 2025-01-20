<template>
  <DashboardCard title="Implementation Phases">
    <div class="space-y-4">
      <div v-for="(phase, index) in phases" :key="index" class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold text-lg">{{ phase.phase }}</h3>
        <p class="text-gray-600">Duration: {{ phase.duration }}</p>
        <div class="mt-3">
          <h4 class="font-medium">Key Activities:</h4>
          <ul class="list-disc list-inside mt-2">
            <li v-for="(activity, idx) in phase.key_activities" :key="idx">
              {{ activity }}
            </li>
          </ul>
        </div>
        <div class="mt-3 grid grid-cols-2 gap-4">
          <div>
            <span class="text-sm text-gray-500">Expected Reach:</span>
            <p class="font-medium">{{ phase.expected_outcomes.reach }}</p>
          </div>
          <div>
            <span class="text-sm text-gray-500">Conversion Rate:</span>
            <p class="font-medium">{{ (phase.expected_outcomes.conversion * 100).toFixed(1) }}%</p>
          </div>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'ImplementationPhasesCard',
  components: { DashboardCard },
  props: {
    phases: {
      type: Array,
      required: true
    }
  }
}
</script>