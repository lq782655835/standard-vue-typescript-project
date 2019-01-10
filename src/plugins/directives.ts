import Vue from 'vue'

const directives: any = {
    /**
     * 自动下滑到底部指令
     */
    autoscroll: {
        componentUpdated: function(el) {
            let scrollHeight = el.scrollHeight
            let clientHeight = el.clientHeight

            scrollHeight > clientHeight && (el.scrollTop = scrollHeight)
        }
    }
}

Object.keys(directives).map(t => {
    Vue.directive(t, directives[t])
})
