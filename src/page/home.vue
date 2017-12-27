<template>
    <div class='home'>
        <div class='bulletin'>
            <p>紧急公告：由于天气影响，竹子林站关闭A出口和B出口将在</p>
        </div>
        <img  class='logo' src="../assets/logo.jpg" alt="">
        <p class='current'>离您最近的地铁站：深大站<img src='../assets/location.jpg'></p>
        <div class='main'>
            <div class='main__box'><router-link to='/map'><img src="../assets/map.png" alt=""><span>地铁路线图</span></router-link></div>
            <div class='main__box'><router-link to='/path'><img src="../assets/path.png" alt=""><span>线路规划</span></router-link></div>
            <div class='main__box'><router-link to='/'><img src="../assets/train.jpg" alt=""><span>到站信息</span></router-link></div>
            <div class='main__box'><router-link to='/'><img src="../assets/last.jpg" alt=""><span>末班车信息查询</span></router-link></div>
            <div class='main__box'><router-link to='/'><img src="../assets/around.jpg" alt=""><span>周边</span></router-link></div>
            <div class='main__box'><router-link to='/'><img src="../assets/news.png" alt=""><span>地铁通知</span></router-link></div>
        </div>
    </div>
</template>

<style lang="less">
.home{
    .bulletin{
        background-color: #CCE6D6;
        height: .6rem;
        line-height: .6rem;
        p{
            margin: 0 .12rem;
            overflow: hidden;
            white-space: nowrap;
            font-size: .35rem;
        }
    }
    .logo{
        width: 100%;
    }
    .current{
        font-size: .4rem;
        text-align: center;
        img{
            display: inline-block;
            margin-left: .1rem;
            width: .5rem;
        }
    }
    .main{
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        .main__box{
            width: 30%;
            margin: .3rem auto;
            text-align: center;
            img{
                width: 2rem;
                height: 2rem;
            }
            span{
                display: block;
                font-size: .3rem;
            }
        }
    }
}

</style>
