/**
 * Kulus.Liang
 * 2020/09/30
 * @title  String 控件名
 * @placeholder String 默认提醒
 * @riderCommentList Array 下拉框内容
 * @modal Array 绑定数据keyname
 *  **/

Component({
	properties: {
    title:{
      type:String,
      title:''
    },
    placeholder:{
      type:String,
      title:''
    },
    riderCommentList:{
      type:Array,
      optionalTypes:[]
    },
    modal:{
      type:Array,
      optionalTypes:[],
      observer: function() {
        let detailValue = this.data.modal.filter(it => it).map(it => it.value)
        this.setData({
          selectedValue:detailValue
        })
      }
    },
    disabled:{
      type:Boolean,
      title:false
    }
	},
	data: {
    selectedValue:'',
    buttons: [
      {
          type: 'default',
          className: '',
          text: '取消',
          value: 0
      },
      {
          type: 'primary',
          className: '',
          text: '确认',
          value: 1
      }
    ],
    show:false
	},
	methods: {
    checkboxChange(e){
      let string = "riderCommentList["+e.target.dataset.index+"].selected"
      this.setData({
          [string]: !this.data.riderCommentList[e.target.dataset.index].selected
      })
      let detailData = this.data.riderCommentList.filter(it => it.selected).map(it => it)
      let detailValue = this.data.riderCommentList.filter(it => it.selected).map(it => it.value)
      console.log(detailValue)
      this.setData({
        modal:detailData,
        selectedValue:detailValue
      })
      this.triggerEvent('getModel', {data:detailData}, {})
    },
    openhalfScreenDialog(e) {
      if(this.data.disabled==false){
        this.setData({
          show: !this.data.show
      })
      }
    },
  }
})