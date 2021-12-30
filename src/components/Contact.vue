<script setup>

</script>

<template>
    <div class="contactForm">
        <label for="name">Your Name:</label>
            <input type="text" id="name" v-model="formValues.name" required/>
        <label for="email">Your Email:</label>
            <input type="email" id="email" v-model="formValues.email" required />
        <label for="reason"></label>
            <select id="reason" v-model="formValues.reason" required>
                <option value="">Please select:</option>
                <option value="work">We'd like to hire you for some work.</option>
                <option value="friend">I'm an old friend who wants to catch up.</option>
                <option value="advert">We'd like to discuss advertising opportunities on your website.</option>
                <option value="warranty">We are trying to reach you about your car's extended warranty.</option>
            </select>
            <textarea id="content" class="h-14" v-model="formValues.content" required></textarea>
    </div>

</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                formValues: {
                    name: '',
                    email: '',
                    reason: '',
                    content: ''
                }
            }
        }
    }
</script>