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
        <Card class="mb-4">
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
      <TabsContent value="Body">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-6">
            <div class="grid gap-3">
              <Label for="tabs-demo-current">Current password</Label>
              <Input id="tabs-demo-current" type="password" />
            </div>
            <div class="grid gap-3">
              <Label for="tabs-demo-new">New password</Label>
              <Input id="tabs-demo-new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>

<style lang="less" scoped></style>
