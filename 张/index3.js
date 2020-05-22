/**
 * Created by Administrator on 2020/5/20 0020.
 */
(function(){
    var jquery = function (select) {
    function _jQuery(select) {
        this.nodes=document.querySelectorAll(select);
        if(this.nodes.length){
        for(var i=0;i<this.nodes.length;i++){
            this[i]=this.nodes[i];
            }
        }else {
            this[0]=this.nodes;
        }
    }
    _jQuery.prototype.css=function (per,val) {
        
    };
    _jQuery.prototype.html=function () {

    };
    _jQuery.prototype.text=function () {

    };
    _jQuery.prototype.value=function () {

    };
    _jQuery.ajax=function () {
        
    };
    _jQuery.post=function () {
        
    };
    _jQuery.extend=function () {
        
    };
    return new _jQuery(select)
    };
    window.$=window.jQuery=jquery ;
})();
