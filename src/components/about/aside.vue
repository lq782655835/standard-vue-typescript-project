<template>
    <el-menu unique-opened @open="open" @select="select" style="height: 100%;">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>hzabj-mind153.server.163.org
            </template>
            <el-submenu index="1-1">
                <template slot="title"
                    ><i class="el-icon-message"></i>文件夹1</template
                >
                <el-menu-item index="1-1-1"><i class="el-icon-document"></i>文件1</el-menu-item>
                <el-menu-item index="1-1-2"><i class="el-icon-document"></i>文件2</el-menu-item>
                <el-menu-item index="1-1-3"><i class="el-icon-document"></i>文件2</el-menu-item>
                <el-menu-item index="1-1-4"><i class="el-icon-document"></i>文件2</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title"
                ><i class="el-icon-menu"></i>hzabj-mind153.server.164.org
            </template>
            <el-submenu index="2-1">
                <template slot="title"
                    ><i class="el-icon-message"></i>文件夹1</template
                >
                <el-menu-item index="2-1-1"><i class="el-icon-document"></i>文件1</el-menu-item>
                <el-menu-item index="2-1-2"><i class="el-icon-document"></i>文件2</el-menu-item>
                <el-menu-item index="2-1-3"><i class="el-icon-document"></i>文件2</el-menu-item>
                <el-menu-item index="2-1-4"><i class="el-icon-document"></i>文件2</el-menu-item>
            </el-submenu>
            <el-submenu index="3-1">
                <template slot="title"
                    ><i class="el-icon-message"></i>文件夹1</template
                >
                <el-menu-item index="3-1-1"><i class="el-icon-document"></i>文件1</el-menu-item>
                <el-menu-item index="3-1-2"><i class="el-icon-document"></i>文件2</el-menu-item>
                <el-menu-item index="3-1-3"><i class="el-icon-document"></i>文件2</el-menu-item>
                <el-menu-item index="3-1-4"><i class="el-icon-document"></i>文件2</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {
    open(index: any, indexPath: any) {
        // 文件夹
        console.log('open', index, indexPath)
    }

    select(index: any, indexPath: any) {
        // 文件
        console.log('select', index, indexPath)
    }
}
</script>
