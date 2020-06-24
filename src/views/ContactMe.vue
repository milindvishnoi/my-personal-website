<template>
  <div>
    <v-form method="post" @submit="submitMedthod" ref="form" v-model="valid" lazy-validation>
      <div class="justify-center">
        <v-text-field
          v-model="firstName"
          :counter="30"
          :rules="firstNameRules"
          label="First Name *"
          required
          filled
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          :counter="30"
          :rules="lastNameRules"
          label="Last Name *"
          required
          filled
        ></v-text-field>

        <v-text-field filled v-model="email" :rules="emailRules" label="E-mail *" required></v-text-field>

        <v-textarea      
          v-model="message"
          :rules="messageRules"
          label="Message *"
          required
          filled
        ></v-textarea>

        <v-btn width="120px" rounded outline :disabled="!valid" color="headings" class="mr-4">Submit</v-btn>
      </div>
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