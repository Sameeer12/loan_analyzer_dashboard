<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
      <tr>
        <th
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
        >
          {{ column.label }}
        </th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="(row, index) in data" :key="index">
        <td
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-3 whitespace-nowrap text-sm text-gray-900"
        >
          <template v-if="column.format">
            {{ column.format(row[column.key]) }}
          </template>
          <template v-else>
            {{ row[column.key] }}
          </template>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
}
</script>