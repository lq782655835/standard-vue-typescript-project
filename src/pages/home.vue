<template>
    <div class="home">
        <el-table :data="tableData" border @row-click="goToNext" style="width: 100%">
            <el-table-column prop="name" label="Job名称" width="500"> </el-table-column>
            <el-table-column
                prop="tag"
                label="状态"
                width="200"
                :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
            >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{ scope.row.tag }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="时间" width="200"> </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="这是一个嵌入的页面" :visible.sync="dialogVisible" width="80%" height="80%">
            <iframe src="https://www.163.com" style="width: 100%;height: 60vh;" />
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
    tableData: any = [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
        },
        {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            tag: '公司'
        },
        {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            tag: '家'
        },
        {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            tag: '公司'
        }
    ]

    dialogVisible: boolean = false

    handleClick(row: any) {
        // console.log('goto next', row)
        this.dialogVisible = true
    }

    goToNext() {
        this.$router.push('/about')
    }
}
</script>
