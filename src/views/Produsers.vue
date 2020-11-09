<template>
  <div class="content">
    <el-col span="16">
      <el-col span="12" v-for="prod in produsers" :key="prod.index">
        <div class="card">
          <el-card :body-style="{ padding: '0px' }" class="center prod-card">
            <img :src="getImgUrl(prod.img)" class="image img" />
            <div style="padding: 14px">
              <span>{{ prod.name }}</span>
              <div class="bottom clearfix">
                <a :href="prod.link"><el-button type="info" size="small" round="true" class="button">Читать</el-button></a>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "Produsers",
  data: () => ({
    produsers: [
      { name: "Cheezus", img: "J4WEjyGdP-I.jpg", link: "#" },
      { name: "Scady", img: "scady.jpg", link: "#" },
      { name: "Scriptonite", img: "8NzkC1frNzE.jpg", link: "#" },
      { name: "Capella", img: "1_xSZGR3AtBLLJNnnta--wtQ.png", link: "#", },
    ],
  }),
  methods: {
    getImgUrl(pic) {
      return require("@/assets/img/" + pic);
    },
  },
};
</script>

