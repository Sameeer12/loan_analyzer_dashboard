<template>
  <DashboardCard title="Recent Trends">
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Application Volume</span>
        <span class="font-medium">{{ trends.application_volume }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Approval Rate</span>
        <span class="font-medium">{{ formatPercentage(trends.approval_rate) }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Avg Ticket Size</span>
        <span class="font-medium">{{ formatCurrency(trends.avg_ticket_size) }}</span>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import { formatCurrency, formatPercentage } from '@/utils/formatters'
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'RecentTrendsCard',
  components: { DashboardCard },
  props: {
    trends: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { formatCurrency, formatPercentage }
  }
}
</script>