<template>
  <div class="content">
    <el-button-group>
      <el-button v-for="genre in genres" @click="filteredMusic(genre.name)" :value="genre.id" :key="genre.id">
        {{ genre.name}}
      </el-button>
    </el-button-group>
    <el-table
      :data="music"
      style=" width: 95%; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);">
      <el-table-column
        prop="executor"
        label="Автор"
        width="160"
        column-key="executor"
        :filters="[
          { text: 'Cheezus', value: 'Cheezus' },
          { text: 'Slava Marlow', value: 'Slava Marlow' },
          { text: 'Scriptonite', value: 'Scriptonite' },
          { text: 'Scady', value: 'Scady' },
          { text: 'CVPELLV', value: 'CVPELLV' },
        ]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="name" label="Название" width="160">
      </el-table-column>
      <el-table-column
        prop="genre"
        label="Жанр"
        width="150"
        column-key="genre"
        :filters="[
          { text: 'Trap', value: 'Trap' },
          { text: 'Pop', value: 'Pop' },
          { text: 'Old School', value: 'Old School' },
          { text: 'Dark', value: 'Dark' },
        ]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        prop="date_relise"
        label="Дата релиза"
        sortable
        width="150">
      </el-table-column>
      <el-table-column prop="price" label="Цена,$" width="120" sortable>
      </el-table-column>
      <el-table-column prop="rating" label="Рейтинг" width="120" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      music: [
        {
          executor: "Cheezus",
          name: "CyberCrime",
          genre: "Trap",
          date_relise: "2017-01-02",
          rating: 7.3,
          price: 300,
        },
        {
          executor: "Slava Marlow",
          name: "Cadilac",
          genre: "Pop",
          date_relise: "2020-05-03",
          rating: 8.7,
          price: 200,
        },
        {
          executor: "Scriptonite",
          name: "Priton",
          genre: "Dark",
          date_relise: "2019-07-03",
          rating: 8,
          price: 400,
        },
        {
          executor: "Cheezus",
          name: "Black Rose",
          genre: "Trap",
          date_relise: "2016-01-02",
          rating: 9.7,
          price: 350,
        },
        {
          executor: "Scady",
          name: "Flex",
          genre: "Trap",
          date_relise: "2020-01-02",
          rating: 9.4,
          price: 250,
        },
        {
          executor: "CVPELLV",
          name: "Sun",
          genre: "Old school",
          date_relise: "2017-05-03",
          rating: 9.4,
          price: 320,
        },
        {
          executor: "Slava Marlow",
          name: "El Problema",
          genre: "Dark",
          date_relise: "2019-08-10",
          rating: 9.4,
          price: 390,
        },
      ],
      genres: [
        { name: 'Все жанры'},
        { name: 'Trap'},
        { name: 'Pop'},
        { name: 'Old school'},
        { name: 'Dark'},
      ],   
      filtMusic: 0,
      selectedGenre:0
    };
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    filteredMusic(name) {
      if (this.filtMusic == 0) {
        this.filtMusic = this.music
      } else {
        this.music = this.filtMusic
      }
      this.selectedGenre = name
      if (name == 'Все жанры') {
        this.music = this.filtMusic
      } else {
        this.music = this.music.filter((value) => {
          return value.genre == this.selectedGenre;
        })
      }
  },
}
};
</script>
