<script setup lang="ts">
import { PlusIcon, Search } from 'lucide-vue-next'

interface NavItem {
  title: string
  url: string
  icon: string
}

const navMain = [
  {
    title: 'Dashboard',
    url: '#',
    icon: ''
  },
  {
    title: 'Lifecycle',
    url: '#',
    icon: ''
  },
  {
    title: 'Analytics',
    url: '#',
    icon: 'IconChartBar'
  },
  {
    title: 'Projects',
    url: '#',
    icon: 'IconFolder'
  },
  {
    title: 'Team',
    url: '#',
    icon: 'IconUsers'
  }
] as NavItem[]
</script>

<template>
  <Sidebar class="py-4">
    <SidebarHeader>
      <div class="flex flex-row gap-2">
        <InputGroup>
          <InputGroupInput />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <Button size="icon">
          <PlusIcon />
        </Button>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <!-- <SidebarGroupLabel>Group1</SidebarGroupLabel> -->
        <SidebarGroupContent>
          <SidebarMenu>
            <template v-for="value in navMain">
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a href="#">
                    <!-- <Home /> -->
                    <span>{{ value.title }}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </template>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter />
    <SidebarRail />
  </Sidebar>
</template>
