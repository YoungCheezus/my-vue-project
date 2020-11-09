<template>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple-dark">
        <div class="logo">
          <span><a href="/">BeatSales</a></span>
          <p class="logo-text">Выбери бит себе по вкусу!</p>
        </div>
      </div>
     </el-col>
    <el-col :span="14"><div class="grid-content bg-purple-dark"></div></el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple-dark">
        <div class="nav-menu">
          <el-dropdown>
            <el-button type="primary">
              <i class="el-icon-menu"></i>
              <span>USER ID</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <router-link
                v-for="link in links"
                :key="link.url"
                active-class="active"
                :to="link.url">
                <el-dropdown-item><i :class="link.icon"></i> <el-badge :value="link.badge">{{ link.tittle }}</el-badge></el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>     
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    links: [
      { tittle: "Профиль", url: "/profile", icon: "el-icon-user" },
      { tittle: "Сообщения", url: "/messages", icon: "el-icon-chat-dot-round", badge: '12' },
      { tittle: "Настройки", url: "/settings", icon: "el-icon-setting" },
      { tittle: "Выйти", url: "/login", icon: "el-icon-close" },
    ],
  }),
};
</script>
