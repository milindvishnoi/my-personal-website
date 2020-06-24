<template>
  <div class="justify-center items-center">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="firstName"
        :counter="30"
        :rules="firstNameRules"
        label="First Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :counter="30"
        :rules="lastNameRules"
        label="Last Name"
        required
      ></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-text-field v-model="message" :rules="messageRules" label="Message" required></v-text-field>

      <v-btn rounded outline :disabled="!valid" color="nav" class="mr-4">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    firstName: "",
    firstNameRules: [
      v => !!v || "First Name is required",
      v => (v && v.length <= 30) || "Name must be less than 10 characters"
    ],
    lastName: "",
    lastNameRules: [
      v => !!v || "Last Name is required",
      v => (v && v.length <= 30) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [v => !!v || "Please enter your message."]
  })
};
</script>

<style lang="scss" scoped>
</style>