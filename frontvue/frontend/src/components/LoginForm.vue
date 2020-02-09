<template>
    <div class="m-5 p-5" align="left">
        <form @Submit.prevent="Submitting">
            <b-form-label>Email: </b-form-label>
            <b-form-input class="mb-3" type="email" placeholder="someone@example.com" v-model="email" ></b-form-input>
            <b-form-label>Password: </b-form-label>
            <b-form-input class="mb-3" type="password" placeholder="pass" v-model="password"></b-form-input>
            <b-button block type="Submit" variant="success" @click="Submitting">Log in!</b-button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            email:'',
            password:'',
            pruebita:{
                'p1':"alo",
                'p2':"ola"
            }
        }
    },
    methods:{
        Submitting(){
            this.axios.post('/login',{'this.email': this.password})
           .then((res)=>{
                console.log(res);
           })
           .catch((e)=>{
               console.log(e);
           });
        }
    }
}
</script>