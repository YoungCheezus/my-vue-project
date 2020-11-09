<template>
<el-col :span="20">
  <div class="content">
    <template>
      <el-carousel :interval="9000" arrow="always" height="350px">
        <el-carousel-item v-for="item in beats" :key="item.id">
          <el-col :span="12">
            <img :src="getImgUrl(item.img)" class="image carousel-img" />
          </el-col>
          <el-col :span="12">
            <div class="carousel-text">
              <h2> {{ item.name }} </h2>
              <hr>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum ut turpis vitae malesuada. Mauris congue et massa ac molestie. Curabitur tincidunt tempus magna et pellentesque. Morbi at tortor at lorem convallis posuere. Aliquam lacinia a dui bibendum efficitur. Etiam lobortis libero sit amet turpis laoreet, at facilisis tellus fringilla.
              </span>
              <el-button class="carousel-btn" size="small">Слушать</el-button>
            </div>
          </el-col>
          
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
  </el-col>
</template>

<script>
export default {
  data: () => ({
    beats: [
      {id: 1,name: 'CyberCrime', img: 'CyberCrime.jpg'},
      {id: 2,name: 'Moon', img: '8NzkC1frNzE.jpg'},
      {id: 3,name: 'Night', img: '_zXh4oWrPsY.jpg'},
      {id: 4,name: 'Karma', img: '149067-5.jpg'},
      {id: 5,name: 'Black Rose', img: 'BlackRose.jpg'},
      {id: 6,name: 'Flex', img: 'unnamed.jpg'},
      {id: 7,name: 'Party', img: 'party.jpg'},
      {id: 8,name: 'Balensiaga', img: 'Balensiaga.jpg'},
      ],
  }),
  methods: {
    getImgUrl(pic) {
      return require("@/assets/img/" + pic);
    },
  },
};
</script>


