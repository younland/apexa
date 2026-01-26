<script lang="ts" setup>
const tabsList: string[] = [
  'Body',
  'Cookie',
  'Header',
  // '控制台',
  '实际请求'
]

const demo = ref<string>(`{
    "code": 0,
    "message": "success",
    "data": [1, 2, 3],
    "data1": [1, 2, 3],
    "data2": [1, 2, 3]
  }`)
</script>

<template>
  <div class="h-full pt-4">
    <Tabs class="h-full" default-value="Body">
      <TabsList class="http-tabs bg-transparent">
        <TabsTrigger
          v-for="tab in tabsList"
          :class="
            cn(
              'rounded-none border-x-0 border-t-0',
              'data-[state=active]:border-primary data-[state=active]:text-primary mx-1 data-[state=active]:border-b-2 data-[state=active]:shadow-none',
              'text-muted-foreground font-thin'
            )
          "
          :value="tab"
        >
          {{ tab }}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Body" class="h-[calc(100%-200px)]">
        <CodeEditor class="overflow-hidden" :value="demo" readonly />
      </TabsContent>
      <TabsContent value="Cookie">
        <EmptyComming />
      </TabsContent>
      <TabsContent value="Header">
        <EmptyComming />
      </TabsContent>
      <TabsContent value="实际请求">
        <EmptyComming />
      </TabsContent>
    </Tabs>
  </div>
</template>

<style lang="less" scoped></style>
