<template>
  <DashboardCard title="Growth Patterns">
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Monthly Growth Rate</span>
        <span :class="[
          'font-medium',
          patterns.monthly_growth_rate >= 0 ? 'text-green-600' : 'text-red-600'
        ]">
          {{ formatPercentage(patterns.monthly_growth_rate) }}
        </span>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import { formatPercentage } from '@/utils/formatters'
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'GrowthPatternsCard',
  components: { DashboardCard },
  props: {
    patterns: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { formatPercentage }
  }
}
</script>