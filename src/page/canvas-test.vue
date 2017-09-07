<template>
    <div id="canvas_test">
        <div class="page-title">
            this is the canvas_test page
        </div>
        <button class="drawRect" @click="drawRect()">画个矩形</button>
        <div class="canvas-container">

            <canvas id="canvas" width="640px" height="360px"></canvas>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'canvasTest',
        methods: {
            drawRect () {
                let canvas = document.getElementById('canvas');
                if (canvas.getContext) {
                    let context = canvas.getContext('2d');
//                    画框
//                    context.fillStyle = 'rgb(255, 0, 0)';
//                    context.fillRect(20, 30, 64, 36);
//                    画文本
//                    context.fillText('nihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihao', 90, 30, 800)

//                    画线
                    /*context.lineWidth = 10;
                    context.strokeStyle = 'red';
//                    context.lineCap = 'butt';
//                    context.lineCap = 'round';
                    context.lineCap = 'square';
//                    context.beginPath();
                    context.moveTo(10, 10);
                    context.lineTo(150, 10);
                    context.stroke();

                    context.lineWidth = 10;
                    context.strokeStyle = 'blue';
//                    context.lineCap = 'butt';
//                    context.lineCap = 'round';
                    context.lineCap = 'square';
                    context.beginPath();
                    context.moveTo(10, 30);
                    context.lineTo(150, 30);
                    context.stroke();*/

//                    论 beginPath()
                    /*var ctx = canvas.getContext('2d');
                    ctx.beginPath();
                    ctx.moveTo(100.5,20.5);
                    ctx.lineTo(200.5,20.5);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.moveTo(100.5,40.5);
                    ctx.lineTo(200.5,40.5)
                    ctx.strokeStyle = '#f00';
                    ctx.stroke();*/

//                    画矩形框
                    /*context.lineWidth = 5;
                    context.strokeStyle = 'red';
                    context.beginPath();
//                    context.strokeRect(10, 10, 70, 40);
                    context.rect(10, 10, 70, 40);
                    context.stroke();*/

//                    画空心圆
                    context.lineWidth = 5;
                    context.strokeStyle = 'red';
                    context.beginPath();
                    context.arc(100, 100, 50, 0, 360*Math.PI/180, false);
                    context.stroke();

                }
            }
        }
    }
</script>

<style lang="scss" scoped="">
    #canvas_test {
        font-size: 14px;
    }
</style>

