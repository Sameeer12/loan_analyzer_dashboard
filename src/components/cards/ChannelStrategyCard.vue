<template>
  <DashboardCard title="Channel Strategy">
    <div class="space-y-4">
      <div v-for="(channel, index) in channels" :key="index" class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold text-lg">{{ channel.channel }}</h3>
        <div class="mt-2 space-y-2">
          <p><span class="text-gray-500">Target Audience:</span> {{ channel.target_audience }}</p>
          <p><span class="text-gray-500">Expected Reach:</span> {{ channel.expected_reach }}</p>
          <p><span class="text-gray-500">Cost Efficiency:</span> {{ channel.cost_efficiency }}</p>
          <p><span class="text-gray-500">Timeline:</span> {{ channel.implementation_timeline }}</p>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'ChannelStrategyCard',
  components: { DashboardCard },
  props: {
    channels: {
      type: Array,
      required: true
    }
  }
}
</script>