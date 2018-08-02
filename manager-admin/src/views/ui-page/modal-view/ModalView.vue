<template>
  <div class="modal-view">
    <a-card title="基础模态框" class="card-wrapper">
      <a-button type="primary" @click="() => setModal1Visible(true)">距离顶部20px</a-button>
      <a-modal
        title="距离顶部20px"
        style="top: 20px;"
        :visible="modal1Visible"
        @ok="() => setModal1Visible(false)"
        @cancel="() => setModal1Visible(false)"
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </a-modal>
      <br /><br />
      <a-button type="primary" @click="() => modal2Visible = true">水平垂直居中</a-button>
      <a-modal
        title="水平垂直居中"
        wrapClassName="vertical-center-modal"
        v-model="modal2Visible"
        @ok="() => modal2Visible = false"
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </a-modal>
      </a-card>
      <a-card title="信息确认框" class="card-wrapper">
        <a-button @click="info">Info</a-button>
        <a-button @click="success">Success</a-button>
        <a-button @click="error">Error</a-button>
        <a-button @click="warning">Warning</a-button>
      </a-card>
  </div>
</template>

<script>
  export default {
    name: 'ModalView',
    data() {
      return {
        modal1Visible: false,
        modal2Visible: false,
      }
    },
    methods: {
      setModal1Visible(modal1Visible) {
        this.modal1Visible = modal1Visible;
      },
      info() {
        const h = this.$createElement
        this.$info({
          title: 'This is a notification message',
          content: h('div',{}, [
            h('p', 'some messages...some messages...'),
            h('p', 'some messages...some messages...'),
          ]),
          onOk() {},
        });
      },

      success() {
        this.$success({
          title: 'This is a success message',
          content: (  // JSX support
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
        });
      },

      error() {
        this.$error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
      },

      warning() {
        this.$warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .vertical-center-modal {
    text-align: center;
    white-space: nowrap;
  }

  .vertical-center-modal:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
  }

  .vertical-center-modal .ant-modal {
    display: inline-block;
    vertical-align: middle;
    top: 0;
    text-align: left;
  }

  .modal-view
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>