# my-input
微信小程序输入框，用来解决input标签占位符闪动，以及切换input键盘收缩又弹起。tx不改，我们就自己写一个。

支持属性：
#placeholder 占位符

#borderBottom 底部边框 1rpx #f6f6f6

#dataFile 输入值承接的字段，通过getCurrentPages()方法获取组件所在页面实例，内置了方法可以直接设置当前页面的dataFile值，不需要在当前页面接收值再setData,如果不需要这功能可以不传，用bind:onChange 方法接收值

#label 左侧标签名

#labelWidth 标签宽度 默认160rpx

#labelAlign 标签对齐方式，默认左对齐left

#type 仅支持text-area 和 password 不传默认为text-area

#height 输入框高度 默认100rpx
