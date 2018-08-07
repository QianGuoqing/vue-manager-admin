<template>
  <div class="basic-table">
    <a-card title="基础Table" class="card-wrapper">
      <a-table :columns="columns" :dataSource="data" bordered>
        <template slot="name" slot-scope="text">
          <a href="#">{{text}}</a>
        </template>
        <template slot="title" slot-scope="currentPageData">
          Header
        </template>
        <template slot="footer" slot-scope="currentPageData">
          Footer
        </template>
      </a-table>
    </a-card>
    <a-card title="基础Table" class="card-wrapper">
      <a-table :columns="columns1" :dataSource="data1" bordered>
        <template slot="name" slot-scope="text">
          <a href="#">{{text}}</a>
        </template>
        <template slot="action" slot-scope="text, record">
          <span>
            <a href="#">Action 一 {{record.name}}</a>
            <a-divider type="vertical" />
            <a href="#">Delete</a>
            <a-divider type="vertical" />
            <a href="#" class="ant-dropdown-link">
              More actions <a-icon type="down" />
            </a>
          </span>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script>
  const columns = [{
      title: 'Name',
      dataIndex: 'name',
      scopedSlots: { customRender: 'name' },
    }, {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];

    const data = [{
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    }]
    const renderContent = (value, row, index) => {
    const obj = {
        children: value,
        attrs: {},
      };
      if (index === 4) {
        obj.attrs.colSpan = 0;
      }
      return obj;
    };



    const data1 = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park',
    }, {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
    }];
  export default {
    name: 'BasicTable',
    data() {
      const columns1 = [{
        title: 'Name',
        dataIndex: 'name',
        customRender: (text, row, index) => {
          if (index < 4) {
            return <a href="#">{text}</a>;
          }
          return {
            children: <a href="#">{text}</a>,
            attrs: {
              colSpan: 5,
            },
          };
        },
      }, {
        title: 'Age',
        dataIndex: 'age',
        customRender: renderContent,
      }, {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {},
          };
          if (index === 2) {
            obj.attrs.rowSpan = 2;
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.attrs.rowSpan = 0;
          }
          if (index === 4) {
            obj.attrs.colSpan = 0;
          }
          return obj;
        },
      }, {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        customRender: renderContent,
      }, {
        title: 'Address',
        dataIndex: 'address',
        customRender: renderContent,
      }]
      return {
        data,
        columns,
        data1,
        columns1
      }
    }
  }
</script>

<style lang="stylus" scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}

  .basic-table
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>