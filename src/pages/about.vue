<template>
    <div class="about">
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="300px" style="height:100%;"> <a-aside /> </el-aside>
            <el-container>
                <el-header>
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item> <el-checkbox v-model="formInline.reload">定时刷新</el-checkbox> </el-form-item>
                        <el-form-item label="查看行数"> <el-input v-model="formInline.line" placeholder="审批人"></el-input> </el-form-item>
                        <el-form-item label="间隔时间"> <el-input v-model="formInline.line" placeholder="审批人"></el-input> </el-form-item>
                    </el-form>
                </el-header>
                <el-main> <div v-html="logText"></div> </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AAside from '@/components/about/aside.vue'

@Component({
    components: { AAside }
})
export default class About extends Vue {
    tableData: any[] = Array(20).fill({
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    })

    formInline: any = {
        reload: false,
        line: 300
    }

    logText: string = `[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred while trying to proxy request /health/status from undefined to http://127.0.0.1:8484 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)\n[HPM] Error occurred`
}
</script>

<style lang="scss" scoped>
.about {
    height: 100vh;
}
</style>
