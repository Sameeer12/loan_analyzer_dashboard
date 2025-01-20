<!--// src/components/common/SearchablePincode.vue-->
<template>
  <div class="relative">
    <label class="block text-sm font-medium text-gray-700 mb-1">Select Pincode</label>
    <div class="relative">
      <input
          type="text"
          v-model="searchQuery"
          @input="handleSearch"
          @focus="showDropdown = true"
          placeholder="Search pincode..."
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <div
          v-if="showDropdown && filteredPincodes.length > 0"
          class="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto"
      >
        <div
            v-for="pincode in filteredPincodes"
            :key="pincode"
            @click="selectPincode(pincode)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ pincode }}
        </div>
      </div>

      <!-- No results message -->
      <div
          v-if="showDropdown && searchQuery && filteredPincodes.length === 0"
          class="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg p-4 text-center text-gray-500"
      >
        No pincodes found
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { debounce } from '@/utils/helpers'

export default {
  name: 'SearchablePincode',
  props: {
    pincodes: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  emits: ['select'],

  setup(props, { emit }) {
    const searchQuery = ref('')
    const showDropdown = ref(false)
    const filteredPincodes = ref([])

    const handleSearch = debounce(() => {
      if (!searchQuery.value) {
        filteredPincodes.value = props.pincodes
        return
      }

      filteredPincodes.value = props.pincodes.filter(pincode =>
          pincode.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    }, 300)

    const selectPincode = (pincode) => {
      searchQuery.value = pincode
      showDropdown.value = false
      emit('select', pincode)
    }

    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        showDropdown.value = false
      }
    }

    // Initialize filtered pincodes when props change
    watch(() => props.pincodes, () => {
      if (!searchQuery.value) {
        filteredPincodes.value = props.pincodes
      } else {
        handleSearch()
      }
    }, { immediate: true })

    return {
      searchQuery,
      showDropdown,
      filteredPincodes,
      handleSearch,
      selectPincode
    }
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },

  unmounted() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>