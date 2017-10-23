<template>
    <div class="container-fluid">
        <Carousel         
            v-model="index"
            :autoplay="setting.autoplay"
            :autoplay-speed="setting.autoplaySpeed"
            :dots="setting.dots"
            :trigger="setting.trigger"
            :arrow="setting.arrow"
            :style="itemHeight">
            <CarouselItem>
                <div :style="{height:itemHeight}" class="carousel-i carousel-1"></div>
            </CarouselItem>
            <CarouselItem>
                <div :style="{height:itemHeight}" class="carousel-i carousel-2"></div>
            </CarouselItem>
            <CarouselItem>
                <div :style="{height:itemHeight}" class="carousel-i carousel-3"></div>
            </CarouselItem>
            <CarouselItem>
                <div :style="{height:itemHeight}" class="carousel-i carousel-4"></div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
    export default {
        // 全画面 -62
        data () {
            return {
                index: 0,
                itemHeight:(window.innerHeight - 110) + 'px',
                setting: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: 'inside',
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        },

        mounted (){
            const that = this
            window.onresize = () =>{
                that.itemHeight = (window.innerHeight - 110) + 'px';
            }
        }
    }
</script>

<style> 
    .carousel-i {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .carousel-1 {
        background-image: url(../../assets/images/b-01.jpg);
    }

    .carousel-2 {
        background-image: url(../../assets/images/b-02.jpg);
    }

    .carousel-3 {
        background-image: url(../../assets/images/b-03.jpg);
    }

    .carousel-4 {
        background-image: url(../../assets/images/b-04.jpg);
    }
</style>