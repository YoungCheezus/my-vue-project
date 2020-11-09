<template>
  <div class="card">
    <h1 class="center">Вход</h1>
    <hr />
    <el-form :model="Form" :rules="rules" ref="ruleForm" label-width="170px">
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="Form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="Form.pass" autocomplete="off">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >ВОЙТИ <i class="el-icon-caret-right"></i
        ></el-button>
        <p>
          Нет аккаунта?
          <router-link to="/register">Регистрация</router-link>
        </p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Form: {
        email: "",
        pass: "",
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "Введите E-Mail",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Введите корректный E-mail",
            trigger: ["blur", "change"],
          },
        ],
        pass: [
          { required: true, trigger: "blur" },
          { min: 6, message: "Пароль должен быть более 5-ти символов" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "Вход в систему :)",
            type: "success",
          });
          this.$router.push("/");
        } else {
          this.$message.error("E-Mail или пароль не найдены :(");
          return false;
        }
      });
    },
  },
};
</script>
