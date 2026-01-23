<script lang="ts" setup>
import color from 'color'
import { find, map } from 'lodash-es'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'

interface HttpMethodOption {
  value: HttpMethod
  color: string
  bgColor?: string
}

const selectMethod = ref<HttpMethod>('GET')
const httpOptions: HttpMethodOption[] = [
  {
    value: 'GET',
    color: '#1EC79D'
  },
  {
    value: 'POST',
    color: '#FF6600'
  },
  {
    value: 'PUT',
    color: '#4167F0'
  },
  {
    value: 'DELETE',
    color: '#E63415'
  },
  {
    value: 'OPTIONS',
    color: '#409EFF'
  }
]

const httpSelectOptions = computed(() => {
  return map(httpOptions, (item: HttpMethodOption) => {
    return {
      ...item,
      bgColor: color(item.color).alpha(0.3).lighten(0.5).string()
    } as HttpMethodOption
  })
})

const highSelect = computed(() => {
  return find(httpSelectOptions.value, (i: HttpMethodOption) => i.value === selectMethod.value)
})
</script>

<template>
  <div class="flex flex-row gap-2 px-4">
    <InputGroup>
      <InputGroupAddon class="ml-0! border-0! pl-1!">
        <Select v-model="selectMethod">
          <SelectTrigger
            class="h-7! border-0!"
            :style="{
              color: highSelect?.color,
              backgroundColor: highSelect?.bgColor
            }"
          >
            <SelectValue size="sm" class="h-6! text-xs font-bold" />
          </SelectTrigger>
          <SelectContent class="max-h-60 min-w-24">
            <SelectItem
              v-for="(o, i) in httpSelectOptions"
              :key="i"
              :value="o.value"
              :style="{
                color: `${o.color}`
              }"
            >
              <span class="text-xs font-bold">{{ o.value }}</span>
            </SelectItem>
          </SelectContent>
        </Select>
      </InputGroupAddon>
      <InputGroupInput />
    </InputGroup>

    <Button>
      <Icon icon="lucide:send" :size="16" />
      发送
    </Button>

    <Button variant="outline" size="icon">
      <Icon icon="lucide:save" :size="16" />
    </Button>
  </div>
</template>

<style lang="less" scoped></style>
