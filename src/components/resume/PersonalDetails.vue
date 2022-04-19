<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
import Input from "@/components/forms/Input.vue";
import Label from "@/components/forms/Label.vue";
import UploadPhoto from "@/components/forms/UploadPhoto.vue";
const jtTooltip = `Add a title like <span class="text-emerald-500">‘Web Developer’</span> or <span class="text-emerald-500">‘DevOps Engineer’</span> that quickly describes your overall experience or the type of role you're applying to`;

const inputChangedHandler = (name, value) => console.log(name, value);

</script>

<template>
  <div class="mt-8">
    <SectionTitle initial-value="Personal Details" />
  <div class="flex gap-x-10 mb-8">
    <div class="flex-1">
      <Label name="jobTitle" text="Job Title" :tooltip="jtTooltip" />
      <Input
        type="text"
        name="jobTitle"
        initial-value="Web Developer"
        @update="inputChangedHandler"
      />
    </div>
    <div class="flex-1">
      <UploadPhoto />
    </div>
  </div>
  <div class="flex gap-x-10 my-8">
    <div class="flex-1">
      <Label name="firstname" text="First Name" />
      <Input
        type="text"
        name="firstName"
        initial-value="Muhammed"
        @update="inputChangedHandler"
      />
    </div>
    <div class="flex-1">
      <Label name="lastname" text="Last Name" />
      <Input
        type="text"
        placeholder="e.g. Developer"
        name="lastname"
        initial-value="Tepe"
        @update="inputChangedHandler"
      />
    </div>
  </div>
  <div class="flex gap-x-10 my-8">
    <div class="flex-1">
      <Label name="email" text="Email" />
      <Input
        type="email"
        name="email"
        initial-value="mtepe@example.com"
        @update="inputChangedHandler"
      />
    </div>
    <div class="flex-1">
      <Label name="phone" text="Phone" />
      <Input
        type="phone"
        name="phone"
        initial-value="+90 (552) 6988080"
        @update="inputChangedHandler"
      />
    </div>
  </div>
  </div>
</template>

<style scoped>
</style>
