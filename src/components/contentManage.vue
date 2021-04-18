<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
    .paragraph{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction:column;
        margin:100px;
    }
    body{
        overflow: visible;
    }
</style>

<template>
    <div>
        <Breadcrumb style="margin:30px;">
            <BreadcrumbItem to="/home/MainPage">Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>

            <BreadcrumbItem>Manage People</BreadcrumbItem>
        </Breadcrumb>
        <Timeline style="margin:20px;">
            <TimelineItem>
                <p class="time">1976年</p>
                <p class="content">Apple I 问世</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">1984年</p>
                <p class="content">发布 Macintosh</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2007年</p>
                <p class="content">发布 iPhone</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2010年</p>
                <p class="content">发布 iPad</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世</p>
            </TimelineItem>
        </Timeline>

        <div class=paragraph>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, aliquam et consequatur aliquid excepturi, consequuntur non, voluptas iste ipsa quam provident illo doloribus distinctio at illum repellendus nobis animi modi obcaecati! Eos maxime adipisci iure ipsa esse molestiae voluptates sequi.
            </p>

            <h2>Lorem, ipsum dolor.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit?m dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, aliquam et consequatur aliquid excepturi, consequuntur non, voluptas iste ipsa quam provident illo doloribus distinctio at illum repellendus nobis animi modi obcaecati! Eos maxime adipisci iure ipsa esse molestiae voluptates sequi.m dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, aliquam et consequatur aliquid excepturi, consequuntur non, voluptas iste ipsa quam provident illo doloribus distinctio at illum repellendus nobis animi modi obcaecati! Eos maxime adipisci iure ipsa esse molestiae voluptates sequi.
            </p>

            <h2>Lorem, ipsum dolor.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit?m dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, aliquam et consequatur aliquid excepturi, consequuntur non, voluptas iste ipsa quam provident illo doloribus distinctio at illum repellendus nobis animi modi obcaecati! Eos maxime adipisci iure ipsa esse molestiae voluptates sequi.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit?m dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, aliquam et consequatur aliquid excepturi, consequuntur non, voluptas iste ipsa quam provident illo doloribus distinctio at illum repellendus nobis animi modi obcaecati! Eos maxime adipisci iure ipsa esse molestiae voluptates sequi.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit?m dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, aliquam et consequatur aliquid excepturi, consequuntur non, voluptas iste ipsa quam provident illo doloribus distinctio at illum repellendus nobis animi modi obcaecati! Eos maxime adipisci iure ipsa esse molestiae voluptates sequi.m dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, aliquam et consequatur aliquid excepturi, consequuntur non, voluptas iste ipsa quam provident illo doloribus distinctio at illum repellendus nobis animi modi obcaecati! Eos maxime adipisci iure ipsa esse molestiae voluptates sequi.m dolor sit amet consectetur adipisicing elit. Soluta repellat pariatur dolore ullam consectetur excepturi vitae laborum, ipsum nostrum sint ad blanditiis ea eaque quod id vel omnis tempora velit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, aliquam et consequatur aliquid excepturi, consequuntur non, voluptas iste ipsa quam provident illo doloribus distinctio at illum repellendus nobis animi modi obcaecati! Eos maxime adipisci iure ipsa esse molestiae voluptates sequi.
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        }
    }
</script>