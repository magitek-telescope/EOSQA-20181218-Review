<template>
    <div>
        <h2>Answer Page</h2>
         <div>{{ $store.state.questions[$route.params.id].question_key }}</div>
         <div id="contents">
            <h2>Question</h2>
            <div class="ui comments">
                    <div class="comment">
                        <a class="avatar">
                        <img src="/img/avatar1.png">
                        </a>
                        <div class="content">
                        <a class="author">{{ $store.state.questions[$route.params.id].pub_key }}</a>
                        <div class="metadata">
                                <div class="date">{{ $store.state.questions[$route.params.id].time_stamp }}</div>
                                <div class="rating">
                                    <i class="star icon"></i>
                                    {{ $store.state.questions[$route.params.id].point }} Point 
                                    <i class="eye icon"></i>
                                    {{ $store.state.questions[$route.params.id].view }} View
                                </div>
                                </div>
                        <div class="text">
                            <div>{{ $store.state.questions[$route.params.id].title }}</div>
                            <div>{{ $store.state.questions[$route.params.id].body }}</div>
                        </div>
                        
                        </div>
                    </div>
            </div>
            <h2>Answer</h2>

            <div v-for="answer in $store.state.answers" :key="answer.answer_key">
                <div id="" v-if="answer.question_key -1 == $route.params.id">
                        <div class="ui comments">
                            <div class="comment">
                                <a class="avatar">
                                <img src="/img/avatar2.png">
                                </a>
                                <div class="content">
                                <a class="author">{{ answer.pub_key }}</a>
                                <div class="metadata">
                                    <div class="date">{{ answer.time_stamp }}</div>
                                    <div class="rating">
                                    <i class="star icon"></i>
                                    {{ answer.point }} Point
                                    
                                    </div>
                                </div>
                                <div class="text" >
                                    {{ answer.answer }}
                                </div>
                                <div class="actions">
                                    <a id="tippoint">Tip
                                        <p class="answer_key" style="display: none;">{{ answer.answer_key }}</p>
                                        <p class="point" style="display: none;">0</p>     
                                    </a>
                                </div>
                                </div>
                            </div>

                        </div>
                    <br>
                </div>
            </div>
            <div>
                <h2>Your Answer</h2>
                <p id="question_key" style="display: none">{{ $route.params.id }}</p>
                
                <div class="ui comments">
                    <form class="ui reply form">
                        <div class="field">
                            <textarea id="input_answer" cols="30" rows="10" ></textarea>
                        </div>
                        <div class="ui primary submit labeled icon button" id="add_answer">
                            <i class="icon edit"></i> Add Answer
                        </div>
                    </form>
                </div>
                
            </div>
        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
