<template>
    <div id="contactContainer" class="w-2/3 mx-auto">
        <div class="bg-orange-500 text-white rounded-t-lg text-center">
            <h1 class="heading">Like what you see?</h1>
            <h1 class="heading">Let's connect!</h1>
        </div>
        <form class="contactForm bg-black border-orange-500 border border-double text-white flex-col p-4 rounded-b-lg" @submit="submitForm()">
            <p class="italic text-sm">All fields are required!<span class="text-red-700 align-super">*</span></p>
            <div class="my-3">
                <label for="name" class="font-semibold">Your Name:</label>
                <input type="text" id="name" class="invalid:border-pink-500 valid:border-cyan-500 focus:border-orange-700 border-slate-500 rounded-lg border-2 bg-slate-200 mx-3" v-model="formValues.name" required/>
            </div>
            <div class="my-3">
                <label for="email" class="font-semibold">Your Email:</label>
                <input type="email" id="email" class="invalid:border-pink-500 valid:border-cyan-500 focus:border-orange-700 border-slate-500 rounded-lg border-2 bg-slate-200 mx-3" v-model="formValues.email" required />
            </div>
            <label for="reason" class="font-semibold">Reason for Message:</label>
            <br>
                <select id="reason" class="invalid:border-pink-500 valid:border-cyan-500 focus:border-orange-700 border-slate-500 rounded-lg border-2 bg-slate-200 text-black my-3 w-full md:w-2/3" v-model="formValues.reason" required>
                    <option value="">Please select:</option>
                    <option value="work">We'd like to hire you for some work.</option>
                    <option value="friend">I'm an old friend who wants to catch up.</option>
                    <option value="advert">We'd like to discuss advertising opportunities on your website.</option>
                    <option value="warranty">We are trying to reach you about your car's extended warranty.</option>
                </select>
                <br>
                <textarea id="content" class="h-32 w-full bg-slate-200 border-slate-500 rounded-lg border-2" v-model="formValues.content" required></textarea>
                <br>
                <button type="submit" id="submitButton" class="rounded-full bg-orange-500 mx-auto text-white p-2.5">Reach Out!</button>
        </form>
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
                },
                
            }
        },
        methods: {
            submitForm(event) {
                event.preventDefault();
                console.log("Form values", this.formValues);
            }
        }
    };
</script>