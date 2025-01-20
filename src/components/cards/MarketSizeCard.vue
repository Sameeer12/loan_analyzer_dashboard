<template>
  <DashboardCard title="Market Size">
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Total Applications</span>
        <span class="font-medium">{{ metrics.total_applications }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Total Customers</span>
        <span class="font-medium">{{ metrics.total_customers }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Total Approved Value</span>
        <span class="font-medium">{{ formatCurrency(metrics.total_approved_value) }}</span>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import { formatCurrency } from '@/utils/formatters'
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'MarketSizeCard',
  components: { DashboardCard },
  props: {
    metrics: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { formatCurrency }
  }
}
</script>

