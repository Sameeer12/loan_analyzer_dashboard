<template>
  <div class="p-6">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Market Analysis Dashboard</h1>

      <!-- Search Controls -->
      <div class="mt-6 flex gap-4 items-end max-w-xl">
        <SearchablePincode
            :pincodes="pincodes"
            @select="handlePincodeSelect"
            class="flex-1"
        />

        <button
            @click="fetchAnalysis"
            :disabled="!selectedPincode || loading"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <span v-if="loading">Loading...</span>
          <span v-else>Analyze</span>
        </button>
      </div>
    </header>

    <!-- Loading State -->
    <LoadingSpinner v-if="loading" />

    <!-- Error State -->
    <div
        v-else-if="error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    >
      {{ error }}
    </div>

    <!-- Dashboard Content -->
    <div v-else-if="analysisData" class="space-y-8">
      <!-- Market Analysis Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Market Analysis</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MarketSizeCard
              :metrics="analysisData.market_analysis.market_size.current_metrics"
          />

          <RecentTrendsCard
              :trends="analysisData.market_analysis.market_size.recent_trends"
          />

          <GrowthPatternsCard
              :patterns="analysisData.market_analysis.growth_patterns"
          />

          <LoanTypeAnalysisCard
              :loan-types="analysisData.market_analysis.growth_patterns.loan_type_growth"
              class="col-span-1 md:col-span-2 lg:col-span-2"
          />

          <SegmentAnalysisCard
              :segments="analysisData.market_analysis.segment_opportunities.segment_metrics"
              class="col-span-1 md:col-span-2 lg:col-span-2"
          />

          <RiskAssessmentCard
              :risk-data="analysisData.market_analysis.risk_assessment"
              class="col-span-1 md:col-span-2 lg:col-span-1"
          />
        </div>
      </section>

      <!-- Strategy Recommendations Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Strategy Recommendations</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TargetSegmentsCard
              :segments="analysisData.strategy_recommendations.target_segments"
          />
          <ChannelStrategyCard
              :channels="analysisData.strategy_recommendations.channel_strategy"
          />
          <ProductRecommendationsCard
              :products="analysisData.strategy_recommendations.product_recommendations"
          />
        </div>
      </section>

      <!-- Risk Mitigation Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Risk Mitigation Strategy</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RiskMitigationCard
              :risks="analysisData.strategy_recommendations.risk_mitigation"
              class="col-span-1 md:col-span-2 lg:col-span-1"
          />
        </div>
      </section>

      <!-- Implementation Plan Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Implementation Plan</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImplementationPhasesCard
              :phases="analysisData.strategy_recommendations.implementation_plan.phases"
          />
          <SuccessMetricsCard
              :metrics="analysisData.strategy_recommendations.implementation_plan.success_metrics"
          />
        </div>
      </section>
    </div>

    <!-- No Data State -->
    <div v-else class="text-center text-gray-500 mt-8">
      Please select a pincode to view analysis
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { fetchPincodes, fetchAnalysis } from '@/utils/api'

// Common Components
import SearchablePincode from './common/SearchablePincode.vue'
import LoadingSpinner from './common/LoadingSpinner.vue'

// Market Analysis Cards
import MarketSizeCard from './cards/MarketSizeCard.vue'
import RecentTrendsCard from './cards/RecentTrendsCard.vue'
import GrowthPatternsCard from './cards/GrowthPatternsCard.vue'
import LoanTypeAnalysisCard from './cards/LoanTypeAnalysisCard.vue'
import SegmentAnalysisCard from './cards/SegmentAnalysisCard.vue'
import RiskAssessmentCard from './cards/RiskAssessmentCard.vue'

// Strategy Recommendation Cards
import TargetSegmentsCard from '@/components/cards/TargetSegmentsCard.vue'
import ChannelStrategyCard from '@/components/cards/ChannelStrategyCard.vue'
import ProductRecommendationsCard from '@/components/cards/ProductRecommendationsCard.vue'
import RiskMitigationCard from '@/components/cards/RiskMitigationCard.vue'
import ImplementationPhasesCard from '@/components/cards/ImplementationPhasesCard.vue'
import SuccessMetricsCard from '@/components/cards/SuccessMetricsCard.vue'

export default {
  name: 'Dashboard',
  components: {
    // Common Components
    SearchablePincode,
    LoadingSpinner,

    // Market Analysis Cards
    MarketSizeCard,
    RecentTrendsCard,
    GrowthPatternsCard,
    LoanTypeAnalysisCard,
    SegmentAnalysisCard,
    RiskAssessmentCard,

    // Strategy Recommendation Cards
    TargetSegmentsCard,
    ChannelStrategyCard,
    ProductRecommendationsCard,
    RiskMitigationCard,
    ImplementationPhasesCard,
    SuccessMetricsCard
  },
  setup() {
    const pincodes = ref([])
    const selectedPincode = ref(null)
    const loading = ref(false)
    const error = ref(null)
    const analysisData = ref(null)

    const loadPincodes = async () => {
      try {
        loading.value = true
        const response = await fetchPincodes()
        pincodes.value = response.data.map(item => item.pincode)
        console.log('Loaded pincodes:', pincodes.value)
      } catch (err) {
        error.value = 'Failed to load pincodes. Please try again later.'
        console.error('Error loading pincodes:', err)
      } finally {
        loading.value = false
      }
    }

    const handlePincodeSelect = (pincode) => {
      selectedPincode.value = pincode
      analysisData.value = null
    }

    const fetchAnalysisData = async () => {
      if (!selectedPincode.value) return

      try {
        loading.value = true
        error.value = null
        const response = await fetchAnalysis(selectedPincode.value)
        analysisData.value = response
        console.log('Analysis data:', analysisData.value)
      } catch (err) {
        error.value = 'Failed to fetch analysis data. Please try again later.'
        console.error('Error fetching analysis:', err)
        analysisData.value = null
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      loadPincodes()
    })

    return {
      pincodes,
      selectedPincode,
      loading,
      error,
      analysisData,
      handlePincodeSelect,
      fetchAnalysis: fetchAnalysisData
    }
  }
}
</script>