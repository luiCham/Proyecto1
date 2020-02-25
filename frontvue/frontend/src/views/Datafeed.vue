<template>
    <div>
        <h3> You are inside!</h3>
    </div>
</template>
<script>
export default {
    name: 'Datafeed',
    mounted(){
        this.axios.get('https://localhost:3000/allData')
        .then((res)=>{
            this.datos=res.data;
        })
    },
    data(){
        return{
            datos: []
        }
    }
}
</script>