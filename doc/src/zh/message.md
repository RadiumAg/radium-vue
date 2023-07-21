# Message 全局提示

直接使用`radium-vue` 暴露的`RaMessage` 类进行创建。



#### 基础使用

使用`create`方法创建全局消息

:::demo
message/basic
:::





#### 快捷方式

使用`success`,`warning`,`error`,`info`方法创建对应的消息类型。

:::demo
message/point
:::



#### 增加可关闭

使用`success`,`warning`,`error`,`info`方法创建对应的消息类型。

:::demo
message/close
:::



#### 使用HTML片段

`raMessage`也可以传`html`标签,但是`html`有风险，使用需谨慎，容易被`XSS`攻击

:::demo
message/html
:::



#### 全局使用

已经将`raMessage`附加到`globalProperties`属性上，可以使用`this.ra_message$`进行调用。



#### Message Api

| 参数              | 说明                 | 类型      | 可选值                                   | 默认值 |
| :---------------- | :------------------- | --------- | :--------------------------------------- | ------ |
| message         | 消息文本             | string    | ——                                       | ——     |
| type            | 消息类型             | string    | 'success' \|'warning' \|'info' \|'error' | ——     |
| iconClass       | 自定义消息icon       | string    | ——                                       | ——     |
| duration        | 消息存在的时间       | number    | ——                                       | 3000   |
| showClose       | 是否显示关闭消息按钮 | boolean   | ——                                       | false  |
| offset          | 消息间隔距离         | number    | ——                                       | 20     |
| isUseHtmlString | 是否使用html进行显示 | boolean   | ——                                       | false  |
| onClose         | 消息关闭时回调       | ( )=>void | ——                                       | ——     |



