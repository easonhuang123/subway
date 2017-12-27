<template>
    <div class='map'>
        <router-link to='/' class='back'>
            <button>back</button>
        </router-link>
        <img class='img' src="../assets/map2.jpg" alt=""> 
    </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style lang="less">
.map{
    .back{
        display: block;
        button{
            font-size: .3rem;
            height: .8rem;
            border: .02rem #000 solid;
            border-radius: .2rem;
            background-color: #fff;
            padding: .2rem;
        }
    }
    .img{
        display: block;
        width: 100%;
        margin-top: 20%;
    }
}
</style>

