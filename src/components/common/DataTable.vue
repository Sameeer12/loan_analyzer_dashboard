<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
      <tr>
        <!-- Dynamically render column headers -->
        <th
            v-for="column in columns"
            :key="column.key"
            :class="[
              'px-4 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-50',
              column.class || 'text-gray-500',
            ]"
        >
          {{ column.label }}
        </th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      <template v-if="data.length > 0">
        <tr v-for="(row, index) in data" :key="index">
          <!-- Render table cells -->
          <td
              v-for="column in columns"
              :key="column.key"
              :class="[
                'px-4 py-3 whitespace-nowrap text-sm',
                column.cellClass || 'text-gray-900',
              ]"
          >
            <template v-if="column.format">
              {{ column.format(row[column.key], row) }}
            </template>
            <template v-else>
              {{ row[column.key] }}
            </template>
          </td>
        </tr>
      </template>
      <template v-else>
        <!-- Display no data message -->
        <tr>
          <td
              :colspan="columns.length"
              class="px-4 py-6 text-center text-sm text-gray-500"
          >
            No data available.
          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    /**
     * Array of column definitions.
     * Each column object can have:
     * - key: The key in the data object to display.
     * - label: The header label for the column.
     * - format: (Optional) A function to format the cell value. Receives the cell value and the entire row.
     * - class: (Optional) Additional CSS classes for the header cell.
     * - cellClass: (Optional) Additional CSS classes for table cells.
     */
    columns: {
      type: Array,
      required: true,
    },
    /**
     * Array of data rows to display in the table.
     */
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any custom styles if needed */
.table-container {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px 16px;
  text-align: left;
}

.table th {
  background-color: #f9fafb;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
}

.table td {
  font-size: 0.875rem;
  color: #374151;
}
</style>
