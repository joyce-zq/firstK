/**
 * Created by Administrator on 2020/5/20.
 */
(function () {
    function dataAp(java,changeKey) {
        var newArr=[];
        for(var i=0;i<java.length;i++){
            var obj={};
            for(var key in changeKey){
                obj[key]=java[i][changeKey[key]]
            }
            newArr.push(obj);
        }
        return newArr
    }
    window.dataAp= dataAp;
})();