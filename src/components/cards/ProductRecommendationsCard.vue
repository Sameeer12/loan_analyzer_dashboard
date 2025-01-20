<template>
  <DashboardCard title="Product Recommendations">
    <div class="space-y-4">
      <div v-for="(product, index) in products" :key="index" class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold text-lg">{{ product.product }}</h3>
        <p class="text-gray-600">Target: {{ product.target_segment }}</p>
        <p class="text-gray-600">{{ product.optimal_pricing }}</p>
        <div class="mt-3">
          <h4 class="font-medium">Unique Selling Points:</h4>
          <ul class="list-disc list-inside mt-2">
            <li v-for="(point, idx) in product.unique_selling_points" :key="idx">
              {{ point }}
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
  name: 'ProductRecommendationsCard',
  components: { DashboardCard },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
