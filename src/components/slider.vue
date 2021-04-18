<template>
    <div id="content" style="flex:1; padding:20px;">
        <Breadcrumb style="margin:10px;">
                    <BreadcrumbItem to="/home/MainPage">Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>

                    <BreadcrumbItem>Slider</BreadcrumbItem>
                </Breadcrumb>
        <h1>Slider</h1>
        <Carousel v-model="value1" loop autoplay >
        <CarouselItem>
            <div class="demo-carousel"><img src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"></div>
        </CarouselItem>
    </Carousel>
        
    </div>
</template>
<script>
export default {
        data () {
            return {
                value1: 1,
                percent: 1
            }
        }
    }
</script>
<style scoped>
Carousel{
    text-align: center;
}
</style>