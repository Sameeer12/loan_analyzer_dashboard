<template>
  <DashboardCard title="Risk Assessment">
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Loan Type Concentration</span>
        <span class="font-medium">
          {{ formatPercentage(riskData.concentration_risk.loan_type_concentration) }}
        </span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Occupation Concentration</span>
        <span class="font-medium">
          {{ formatPercentage(riskData.concentration_risk.occupation_concentration) }}
        </span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-600">Volatility</span>
        <span class="font-medium">
          {{ formatPercentage(riskData.volatility) }}
        </span>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import { formatPercentage } from '@/utils/formatters'
import DashboardCard from '../common/DashboardCard.vue'

export default {
  name: 'RiskAssessmentCard',
  components: { DashboardCard },
  props: {
    riskData: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { formatPercentage }
  }
}
</script>