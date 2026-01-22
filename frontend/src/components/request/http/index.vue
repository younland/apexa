<script setup lang="ts">
  import color from 'color'
  import { find } from 'lodash-es'

  type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'

  interface HttpMethodOption {
    value: HttpMethod
    color: string
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

  const highColor = computed(() => {
    const found = find(httpOptions, (o: HttpMethodOption) => o.value === selectMethod.value)
    if (!found) return

    return {
      color: found.color,
      backgroundColor: color(found.color).alpha(0.3).lighten(0.5).string()
    }
  })
</script>

<template>
  <div class="request-http h-full w-full px-4 py-2">
    <div class="flex flex-row gap-2">
      <InputGroup>
        <InputGroupAddon class="ml-0! border-0! pl-0!">
          <Select v-model="selectMethod">
            <SelectTrigger
              class="border-0!"
              :style="{
                color: highColor?.color,
                backgroundColor: highColor?.backgroundColor
              }"
            >
              <SelectValue size="sm" />
            </SelectTrigger>
            <SelectContent class="w-18">
              <SelectItem
                v-for="(o, i) in httpOptions"
                :key="i"
                :value="o.value"
                :style="{
                  color: `${o.color}`
                }"
              >
                {{ o.value }}
              </SelectItem>
            </SelectContent>
          </Select>
        </InputGroupAddon>
        <InputGroupInput />
      </InputGroup>

      <Button>
        <icon icon="lucide:send" :size="16" />
        发送
      </Button>

      <Button variant="outline" size="icon">
        <icon icon="lucide:save" :size="16" />
      </Button>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
