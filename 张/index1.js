/**
 * Created by Administrator on 2020/5/20.
 */
(function () {
    function check(emailArr,Sec) {
        var result=[];
        for(var i=0;i<emailArr.length;i++){
            if(emailArr[i].indexOf(Sec)>=0){
                result.push(emailArr[i]);
            }
        }
        return result;
    }
    window.check=check;
})();