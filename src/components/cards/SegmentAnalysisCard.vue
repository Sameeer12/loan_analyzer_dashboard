<template>
  <DashboardCard title="Segment Analysis">
    <DataTable
        :columns="columns"
        :data="tableData"
    />
  </DashboardCard>
</template>

<script>
import { computed } from 'vue'
import { formatCurrency, formatPercentage } from '@/utils/formatters'
import { objectToTableData } from '@/utils/helpers'
import DashboardCard from '../common/DashboardCard.vue'
import DataTable from '../common/DataTable.vue'

export default {
  name: 'SegmentAnalysisCard',
  components: { DashboardCard, DataTable },
  props: {
    segments: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const columns = [
      { key: 'name', label: 'Segment' },
      { key: 'size', label: 'Size' },
      {
        key: 'approval_rate',
        label: 'Approval Rate',
        format: formatPercentage
      },
      {
        key: 'avg_loan_amount',
        label: 'Avg Loan Amount',
        format: formatCurrency
      },
      {
        key: 'potential_score',
        label: 'Potential Score',
        format: value => formatPercentage(value)
      }
    ]

    const tableData = computed(() => objectToTableData(props.segments))

    return {
      columns,
      tableData
    }
  }
}
</script>
