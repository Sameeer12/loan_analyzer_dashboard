<template>
  <DashboardCard title="Risk Mitigation">
    <div class="space-y-4">
      <div v-for="(risk, index) in risks" :key="index" class="p-4 bg-gray-50 rounded-lg">
        <!-- Risk Header -->
        <div class="flex items-center justify-between">
          <h3 class="font-semibold text-lg">{{ risk.risk_type }}</h3>
          <span
              :class="{
              'px-2 py-1 rounded text-sm font-medium': true,
              'bg-red-100 text-red-800': risk.severity === 'High',
              'bg-yellow-100 text-yellow-800': risk.severity === 'Medium',
              'bg-green-100 text-green-800': risk.severity === 'Low'
            }"
          >
            {{ risk.severity }}
          </span>
        </div>

        <!-- Mitigation Strategy -->
        <p class="mt-2 text-gray-600">{{ risk.mitigation_strategy }}</p>

        <!-- Action Items -->
        <div class="mt-3">
          <h4 class="font-medium text-gray-700">Action Items:</h4>
          <ul class="mt-2 space-y-2">
            <li
                v-for="(item, idx) in risk.action_items"
                :key="idx"
                class="flex items-start gap-2"
            >
              <span class="mt-1 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span class="text-gray-600">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'RiskMitigationCard',
  components: { DashboardCard },
  props: {
    risks: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>