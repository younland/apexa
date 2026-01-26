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
  <div class="h-full">
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
        <CodeEditor class="flex-1" :value="demo" readonly />
      </TabsContent>
      <TabsContent value="Cookie">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-6">
            <div class="grid gap-3">
              <Label for="tabs-demo-name">Name</Label>
              <Input id="tabs-demo-name" default-value="Pedro Duarte" />
            </div>
            <div class="grid gap-3">
              <Label for="tabs-demo-username">Username</Label>
              <Input id="tabs-demo-username" default-value="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>

<style lang="less" scoped></style>
