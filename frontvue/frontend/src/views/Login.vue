<template>
    <div class="m-5">
        <h2>Welcome to project1 !</h2>
        <h3>Please log in</h3>
        <LoginForm></LoginForm>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
    name:'Login',
    components:{
        LoginForm
    }
}
</script>