<template>
  <div class="card">
    <h1 class="center">Регистрация</h1>
    <hr />
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="170px"
    >
      <el-form-item label="Nickname" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        >
        </el-input>
      </el-form-item>

      <el-form-item
        label="Согласие на обработку персональных данных"
        prop="type"
      >
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Согласен" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">ЗАРЕГЕСТРИРОВАТЬСЯ <i class="el-icon-caret-right"></i></el-button>
        <p>
          Уже есть аккаунт?
          <router-link to="/login">Войти</router-link>
        </p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Введите пароль!"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Повторите пароль!"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Пароли не совпадают!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        email: "",
        pass: "",
        checkPass: "",
        type: [],
      },

      rules: {
        name: [
          {
            required: true,
            message: "Введите никнейм",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Длина должна быть более 2-х символов",
            trigger: "blur",
          },
        ],
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
          { validator: validatePass, trigger: "blur" },
          { min: 6, required: true, message: "Пароль должен быть более 5-ти символов" },
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur", required: true }],
        type: [
          {
            type: "array",
            required: true,
            message: "Необходимо дать согласие на обработку персональных данных",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
          message: 'Регистрация...',
          type: 'warning'
        });
        } else {
          return false;
        }
      });
    },
  },
};
</script>
