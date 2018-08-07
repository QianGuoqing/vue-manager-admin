<template>
  <div class="advance-table">
    <a-card title="高级表格" class="card-wrapper">
      <a-table :columns="columns" :dataSource="data" bordered>
        <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record, index">
          <div>
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>{{text}}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <div class='editable-row-operations'>
            <span v-if="record.editable">
              <a @click="() => save(record.key)">Save</a>
              <a-popconfirm title='Sure to cancel?' @confirm="() => cancel(record.key)">
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="() => edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </a-table>
    </a-card>
    <a-card title="高级表格" class="card-wrapper">
      <a-table :columns="columns1" :dataSource="data1" :scroll="{ x: 1500, y: 300 }">
        <a slot="action" slot-scope="text" href="#">action</a>
      </a-table>
    </a-card>
  </div>
</template>

<script>
  const columns = [{
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' },
  }, {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    scopedSlots: { customRender: 'age' },
  }, {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    scopedSlots: { customRender: 'address' },
  }, {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  }]

  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    })
  }
  const columns1 = [
    { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
    { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
    { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
    { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
    { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
    { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
    { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
    { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      scopedSlots: { customRender: 'action' },
    },
  ];

  const data1 = [];
  for (let i = 0; i < 100; i++) {
    data1.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  export default {
    name: 'AdvanceTable',
    data () {
      this.cacheData = data.map(item => ({ ...item }))
      return {
        data,
        columns,
        data1,
        columns1
      }
    },
    methods: {
      handleChange (value, key, column) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target[column] = value
          this.data = newData
        }
      },
      edit (key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target.editable = true
          this.data = newData
        }
      },
      save (key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          delete target.editable
          this.data = newData
          this.cacheData = newData.map(item => ({ ...item }))
        }
      },
      cancel (key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
          delete target.editable
          this.data = newData
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .advance-table
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>