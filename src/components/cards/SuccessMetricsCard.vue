<template>
  <DashboardCard title="Success Metrics">
    <div class="space-y-4">
      <div class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold text-lg">Customer Acquisition</h3>
        <div class="mt-2">
          <p><span class="text-gray-500">Target:</span> {{ metrics.customer_acquisition.target }}</p>
          <p><span class="text-gray-500">Timeline:</span> {{ metrics.customer_acquisition.timeline }}</p>
        </div>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold text-lg">Conversion Rate</h3>
        <div class="mt-2">
          <p><span class="text-gray-500">Target:</span> {{ (metrics.conversion_rate.target * 100).toFixed(1) }}%</p>
          <p><span class="text-gray-500">Timeline:</span> {{ metrics.conversion_rate.timeline }}</p>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'SuccessMetricsCard',
  components: { DashboardCard },
  props: {
    metrics: {
      type: Object,
      required: true
    }
  }
}
</script>