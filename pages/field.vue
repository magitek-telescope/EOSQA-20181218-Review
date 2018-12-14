<template>
<div>
    <h2>Questions Field</h2>
    <div class="ui segment">              
        <div v-for="(question, index) in $store.state.questions" :key="question.question_key">
            <div class="ui comments">
                <div class="comment">
                    <a class="avatar">
                    <img src="/img/avatar1.png">
                    </a>
                    <div class="content">
                        <a href=""></a>
                        <a class="author">{{ question.pub_key }}</a>
                        <div class="metadata">
                            <div class="date">{{ question.time_stamp }}</div>
                            <div class="rating">
                                <i class="star icon"></i>
                                {{ question.point }} Point
                                <i class="eye icon"></i>
                                {{ question.view }} View
                                <i class="eye icon"></i>
                            </div>
                        </div>
                        <p>{{ question.question_key }}</p>
                        <div class="text">
                            <nuxt-link :to="`/questions/${index}`">{{ question.title }}</nuxt-link>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 
</template>

<script>


export default {

}
</script>