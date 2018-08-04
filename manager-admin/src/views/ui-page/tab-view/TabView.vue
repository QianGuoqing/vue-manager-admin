<template>
  <div class="tab-view">
    <a-card title="Tab页标签" class="card-wrapper">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </a-card>
    <a-card title="Tab页带图标签" class="card-wrapper">
      <a-tabs defaultActiveKey="2">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="apple" />
            Tab 1
          </span>
          Tab 1
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="android" />
            Tab 2
          </span>
          Tab 2
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <a-card title="带操作的Tab" class="card-wrapper">
      <a-tabs
        v-model="activeKey"
        type="editable-card"
        @edit="onEdit">
        <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
          {{pane.content}}
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script>
  export default {
    name: 'TabView',
    data () {
      const panes = [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1', closable: false },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      ]
      return {
        activeKey: panes[0].key,
        panes,
        newTabIndex: 0,
      }
    },
    methods: {
      callback (key) {
        console.log(key)
      },
      onEdit (targetKey, action) {
        this[action](targetKey)
      },
      add () {
        const panes = this.panes
        const activeKey = `newTab${this.newTabIndex++}`
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey })
        this.panes = panes
        this.activeKey = activeKey
      },
      remove (targetKey) {
        let activeKey = this.activeKey
        let lastIndex
        this.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1
          }
        })
        const panes = this.panes.filter(pane => pane.key !== targetKey)
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key
        }
        this.panes = panes
        this.activeKey = activeKey
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .tab-view
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>