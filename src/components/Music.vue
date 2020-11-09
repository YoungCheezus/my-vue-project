<template>
  <el-table :data="music" style=" width: 80%; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);">
    <el-table-column
      prop="executor"
      label="Автор"
      width="180"
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
    <el-table-column prop="name" label="Название" width="180">
    </el-table-column>
    <el-table-column
      prop="genre"
      label="Жанр"
      width="100"
      column-key="genre"
      :filters="[
        { text: 'Trap', value: 'Trap' },
        { text: 'Pop', value: 'Pop' },
        { text: 'Old School', value: 'Old School' },
        { text: 'Dark', value: 'Dark' },
      ]"
      :filter-method="filterHandler">
    </el-table-column>
    <el-table-column prop="date_relise" label="Дата релиза" sortable>
    </el-table-column>
    <el-table-column prop="price" label="Цена,$" width="100" sortable>
    </el-table-column>
    <el-table-column prop="rating" label="Рейтинг" width="100" sortable>
    </el-table-column>
  </el-table>
</template>

            

