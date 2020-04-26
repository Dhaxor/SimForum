<template>
<div>
<toolbar></toolbar>
<router-view></router-view>
<appfooter></appfooter>

</div>

</template>


<script>
import toolbar from './Toolbar'
import appfooter from './AppFooter'
import Login from './login/Login'
export default {
    components:{
        toolbar,
        appfooter,
        Login

    }

}
</script>

<style>

</style>
