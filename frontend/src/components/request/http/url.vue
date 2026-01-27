<script lang="ts" setup>
import type { HttpOptions, HttpType } from '@/lib/color'
import { find } from 'lodash-es'
import { CollectionsService } from '#/apexa/service'

const select = ref<HttpType>('GET')
const httpOptions: HttpOptions[] = transformHttpOptions()

const highSelect = computed(() => {
  return find(httpOptions, (i: HttpOptions) => i.value === select.value)
})

const send = async () => {
  const res = await CollectionsService.OpenCollection()
}
</script>

<template>
  <div class="flex flex-row gap-2 px-4">
    <InputGroup>
      <InputGroupAddon class="ml-0! border-0! pl-1!">
        <Select v-model="select">
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
              v-for="(o, i) in httpOptions"
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

    <Button @click="send">
      <Icon icon="lucide:send" :size="16" />
      发送
    </Button>

    <Button variant="outline" size="icon">
      <Icon icon="lucide:save" :size="16" />
    </Button>
  </div>
</template>

<style lang="less" scoped></style>
