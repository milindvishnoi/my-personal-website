<template>
  <v-col cols="10">
    <v-form name="contactme" ref="Contact" v-model="valid" lazy-validation netlify>
      <div class="justify-center">
        <v-text-field
          name="firstName"
          v-model="firstName"
          :counter="30"
          :rules="firstNameRules"
          label="First Name *"
          required
          filled
        ></v-text-field>

        <v-text-field
          name="lastName"
          v-model="lastName"
          :counter="30"
          :rules="lastNameRules"
          label="Last Name *"
          required
          filled
        ></v-text-field>

        <v-text-field name="email" filled v-model="email" :rules="emailRules" label="E-mail *" required></v-text-field>

        <v-textarea name="message" v-model="message" :rules="messageRules" label="Message *" required filled></v-textarea>

        <div>
          <v-btn
            type="submit"
            block
            outlined
            full-width
            rounded
            outline
            :disabled="!valid"
            color="headings"
            class="mr-4"
          >Submit</v-btn>
        </div>
      </div>
    </v-form>
  </v-col>
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