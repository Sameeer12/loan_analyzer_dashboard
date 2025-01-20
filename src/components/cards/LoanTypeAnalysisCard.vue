<template>
  <DashboardCard title="Loan Type Analysis">
    <DataTable
        :columns="columns"
        :data="tableData"
    />
  </DashboardCard>
</template>

<script>
import { computed } from 'vue'
import { formatPercentage } from '@/utils/formatters'
import { objectToTableData } from '@/utils/helpers'
import DashboardCard from '../common/DashboardCard.vue'
import DataTable from '../common/DataTable.vue'

export default {
  name: 'LoanTypeAnalysisCard',
  components: { DashboardCard, DataTable },
  props: {
    loanTypes: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const columns = [
      { key: 'name', label: 'Loan Type' },
      {
        key: 'approval_rate',
        label: 'Approval Rate',
        format: formatPercentage
      },
      {
        key: 'share_change',
        label: 'Share Change',
        format: formatPercentage
      }
    ]

    const tableData = computed(() => objectToTableData(props.loanTypes))

    return {
      columns,
      tableData
    }
  }
}
</script>
