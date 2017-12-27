<template>
    <div>
        <div class='plan'>
            <span class='plan__title'>地铁1号线 —— 地铁2号线</span>
            <span class='tag'>时间最短</span>
            <div class='ge'></div>
            <div class='line'>
                <span>约30分钟</span>
                <span>9个站</span>
                <span>5元</span>
            </div>
            <div class='line'>
               <span>换乘一次</span>
                <span>换乘站：车公庙</span> 
            </div>
        </div>
        <div class='plan'>
            <span class='plan__title'>地铁1号线 —— 地铁2号线</span>
            <span class='tag'>时间最短</span>
            <div class='ge'></div>
            <div class='line'>
                <span>约30分钟</span>
                <span>9个站</span>
                <span>5元</span>
            </div>
            <div class='line'>
               <span>换乘一次</span>
                <span>换乘站：车公庙</span> 
            </div>
        </div>
        <div class='plan'>
            <span class='plan__title'>地铁1号线 —— 地铁2号线</span>
            <span class='tag'>时间最短</span>
            <div class='ge'></div>
            <div class='line'>
                <span>约30分钟</span>
                <span>9个站</span>
                <span>5元</span>
            </div>
            <div class='line'>
               <span>换乘一次</span>
                <span>换乘站：车公庙</span> 
            </div>
        </div>
        <div class='plan'>
            <span class='plan__title'>地铁1号线 —— 地铁2号线</span>
            <span class='tag'>时间最短</span>
            <div class='ge'></div>
            <div class='line'>
                <span>约30分钟</span>
                <span>9个站</span>
                <span>5元</span>
            </div>
            <div class='line'>
               <span>换乘一次</span>
                <span>换乘站：车公庙</span> 
            </div>
        </div>
        <div class='plan'>
            <span class='plan__title'>地铁1号线 —— 地铁2号线</span>
            <span class='tag'>时间最短</span>
            <div class='ge'></div>
            <div class='line'>
                <span>约30分钟</span>
                <span>9个站</span>
                <span>5元</span>
            </div>
            <div class='line'>
               <span>换乘一次</span>
                <span>换乘站：车公庙</span> 
            </div>
        </div>
        <div class='plan'>
            <span class='plan__title'>地铁1号线 —— 地铁2号线</span>
            <span class='tag'>时间最短</span>
            <div class='ge'></div>
            <div class='line'>
                <span>约30分钟</span>
                <span>9个站</span>
                <span>5元</span>
            </div>
            <div class='line'>
               <span>换乘一次</span>
                <span>换乘站：车公庙</span> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'plan'
}
</script>

<style lang="less">
.plan{
    position: relative;
    margin: 0.4rem;
    padding-bottom: .2rem;
    box-shadow: 0 2px 8px 0 rgba(102, 113, 119, 0.6);
    border-radius: .3rem;
    background-color: rgb(250, 250, 250);
    .plan__title{
        display: inline-block;
        font-size: .3rem;
        padding:0 .4rem;
    }
    .tag{
        float: right;
        width: 1.2rem;
        text-align: center;
        height: .4rem;
        background-color: #31c27c;
        border-bottom-left-radius: .2rem;
        color: #fff;
        font-size: .25rem;
    }
    .ge{
        background-color: #e4e4e4;
        margin: .2rem .4rem 0 ;
        height: .04rem;
    }
    .line{
        margin:.1rem .4rem .4rem;
        height: .5rem;
        line-height: .5rem;
        span{
            font-size: .3rem;
            margin-right:.2rem ;
        }
    }
}
</style>

