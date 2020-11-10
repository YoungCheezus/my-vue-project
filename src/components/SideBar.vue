<template>
  <el-row>
    <el-col :span="6">
      <el-menu
        default-active="1"
        class="el-menu-vertical"
        background-color="#deb887"
        text-color="#000000"
        active-text-color="#ffd04b">
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="el-menu-item"
          active-class="active"
          :to="link.url">
          {{ link.title }} <i class="el-icon-right"></i>
        </router-link>
      </el-menu>
      <div class="search">
        <el-header height="40px"><h4>Поиск</h4></el-header>
        <div style="margin-top: 15px">
          <el-input
            placeholder="Please input"
            v-model="input"
            class="input-with-select">
            <el-select slot="prepend" placeholder="Select" value="1">
              <el-option label="Инструменталы" value="1"></el-option>
              <el-option label="Продюсеры" value="2"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="search">
        <el-header height="40px"><h4>Новости</h4></el-header>
        <el-collapse>
          <el-collapse-item title="ЛСП - Новый альбом">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sagittis quam malesuada, viverra eros vel, interdum est. Mauris
              cursus leo.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Новые сервисы">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              posuere libero eu augue dictum, eget imperdiet metus faucibus.
              Proin eu.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-col>
    <el-col :span="18">
      <router-view />
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Инструменталы", url: "/" },
      { title: "Чарт", url: "/beats" },
      { title: "Продюсеры", url: "/produsers" },
    ],
    input: "",
  }),
};
</script>
