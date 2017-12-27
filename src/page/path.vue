<template>
    <div class='path'>
        <router-link to='/' class='back'>
            <button>back</button>
        </router-link>
        <div class='title'>
            离您最近的地铁站：深大站
        </div>
        <div>
            <div class='start path'>
                <span>始发站</span>
                <select name="" class="num">
                    <option value="1">一号线</option>
                    <option value="2">二号线</option>
                    <option value="3">三号线</option>
                </select>
                <select name="" class="station">
                    <option value="1">深大</option>
                    <option value="2">白石洲</option>
                    <option value="3">世界之窗</option>
                </select>
            </div>
            <div class='end path'>
                <span>终点站</span>
                <select name="" class="num">
                    <option value="1">一号线</option>
                    <option value="2">二号线</option>
                    <option value="3">三号线</option>
                </select>
                <select name="" class="station">
                    <option value="1">福田</option>
                    <option value="2">市民中心</option>
                    <option value="3">华强北</option>
                </select>
            </div>
        </div>
        <div class='btn__group'>
            <button class='map btn'>
                <router-link to='/map'>线路图查询</router-link>
            </button>
            <button class='plan_btn btn'>
                <router-link to='/plan'>线路规划查询</router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Path'
}
</script>

<style lang="less">
.path{
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
    .title{
        margin: 1rem 0 1rem;
        font-size: .3rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        border-top: .02rem rgb(134, 134, 134) solid;
        border-bottom: .02rem rgb(134, 134, 134) solid;
    }
    .path{
        margin:0 auto;
        width: 80%;
        font-size: .3rem;
        select{
            height: .8rem;
            padding: .2rem .2rem;
            border: .02rem rgb(134, 134, 134) solid;
            border-radius: .2rem;
            margin: 0 0 .5rem .5rem;
            font-size: .3rem;
            color: rgb(134, 134, 134);
        }
    }
    .btn__group{
        width: 80%;
        margin: 1rem auto;
        display: flex;
        .btn{
            width: 40%;
            font-size: .3rem;
            height: .8rem;
            border: .02rem #000 solid;
            border-radius: .2rem;
            background-color: #fff;
            padding: .2rem 0;
        }
        .plan_btn{
            margin-left: 20%;
        }
    }
}


</style>
