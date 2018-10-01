webpackJsonp([22],{1180:function(e,n,r){var t=r(0),o=r(8),a=r(9).PageRenderer;a.__esModule&&(a=a.default);var l=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:r(1213)}},componentWillMount:function(){},render:function(){return t.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});l.__catalog_loader__=!0,e.exports=l},1213:function(e,n){e.exports="**Transforms** allow you to inject `propTypes` to the current cell. They work with both `header` and `cell` at a column definition. If a transform returns `children` prop, then the returned elements will override the render result. This allows you to implement functionality like inline editing.\n\nThe API looks like this:\n\n* `header.transforms = [(<label>, { column: <column>, columnIndex: <number>, property: <string> }) => ({... props ...})]`\n* `cell.transforms = [(<value>, { columnIndex: <number>, column: <object>, rowData: <object>, rowIndex: <number>, property: <string> }) => ({... props ...})]`\n\nTransforms are evaluated from left to right from general `props` to `header/cell.props` and finally `header/cell.transforms`. The values they return are merged. `style` prop is deep merged and `className`s are concatenated together. This means the rightmost value will win.\n\n`children` are an exception. The first encountered `children` returned from a `transform` will become the rendered value.\n"}});