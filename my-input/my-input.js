// components/my-input/my-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type:String,
      value:"请输入内容"
    },
    borderBottom:{
      type:Boolean,
      value:false
    },
    // name属性好像没用，组件放表单里表单提交获取不到组件内的text-area
    name:{
      type:String,
      value:''
    },
    dataFile:{
      type:String,
      value:''
    },
    border:{
      type:Boolean,
      value:true
    },
    label:{
      type:String,
      value:''
    },
    labelWidth:{
      type:String,
      value:"160rpx"
    },
    labelAlign:{
      type:String,
      value:"left"
    },
    type:{
      type:String,
      value:'text-area'
    },
    height:{
      type:String,
      value:"100rpx"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:'',
    trueValue:'',
  },
  lifetimes: {
    attached() {
      // 获取页面栈
      const PAGES = getCurrentPages(); 
      // 获取当前页面
      this.currentPage = PAGES[PAGES.length - 1]; 
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    inputValue:function(e){
      let { value, cursor } = e.detail, { inputValue, trueValue } = this.data, { type, dataFile } = this.properties;
      if(type == 'password'){
        let len = value.length, trueValueArray = trueValue.split('');
        // 如果输入类型为密码框，则根据光标位置和输入长度获取输入的数字
        if(len < trueValue.length){
          trueValueArray.splice(cursor,1);
        }else{
          let val = value.split('')[cursor-1];
          trueValueArray.splice(cursor-1,0,val);
        }
        trueValue = trueValueArray.join('');
        inputValue = new Array(len).fill('*').join('');
        this.setData({inputValue,trueValue})
      }else{
        trueValue = value;
        this.setData({inputValue:value,trueValue})
      }
      // 设置当前页面要改变的值
      if(dataFile != ''){
        this.currentPage.setData({
          [this.properties.dataFile]:trueValue
        })
      }
      this.triggerEvent('onChange',{value:trueValue});
    },
    inputBlur:function(e){
      let { value } = e.detail;
      this.triggerEvent('onBlur',{value})
    }
  }
})
