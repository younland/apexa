<script lang="ts" setup>
const tabsList: string[] = ['Params', 'Body', 'Headers', 'Cookies']
</script>

<template>
  <div class="h-full">
    <Tabs class="h-full" default-value="Params">
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
      <TabsContent value="Params">
        <EmptyComming />
      </TabsContent>
      <TabsContent value="Body">
        <EmptyComming />
      </TabsContent>
      <TabsContent value="Headers">
        <EmptyComming />
      </TabsContent>
      <TabsContent value="Cookies">
        <EmptyComming />
      </TabsContent>
    </Tabs>
  </div>
</template>

<style lang="less" scoped></style>
