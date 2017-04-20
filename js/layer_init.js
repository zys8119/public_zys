/**
 * Created by 张云山 on 2017/3/9.
 */
var layer_fn = {
    datainit:function(data,initData){
        data = data || {};
        initData = initData || {};
        for(var i in data){
            initData[i] = data[i];
        };
        return initData;
    },
    iframe:function(src,data){
        src = src || "";
        data = data || {};
        layer.open(this.datainit(data,{
            type: 2,
            content: src,
            shadeClose:true
        }));
    },
    confirm:function(content,data){
        content = content || "";
        data = data || {};
        layer.open(this.datainit(data,{
            type: 1,
            content: content,
            shadeClose:true,
            closeBtn: 0,
            title:"信息",
            btn:["取消","确定"],
            area:["80%","auto"],
            skin:"layer_confirm"
        }));
    },
}