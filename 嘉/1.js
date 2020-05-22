/**
 * Created by Administrator on 2020/5/19 0019.
 */
// (function () {
//     var div;
//     function addzheZhao() {
//         if(div){
//             div.style.display="bloc"
//         }else {
//             div=document.createElement("div");
//             div.className="zheZhao";
//             document.body.append(div);
//         }
//     }
//     window.zheZhao=addzheZhao;
// })();

//工厂模式
(function () {

    function msgFn(type,value) {
        if(this instanceof msgFn){
            var result=new this[type](value);
            return result;
        }else {
            return new msgFn(type,value)
        }
    }

    msgFn.prototype={
        email:function (value) {
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
                this.err="格式不正确，重新输入";
            }
        },
        phone:function (value) {
            var reg=/^1(3|4|5|7|8)\d{9}$/;
            if(!reg.test(value)){
                this.err="格式不正确，重新输入";
            }
        },
        id:function (value) {
            var reg=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            if(!reg.test(value)){
                this.err="格式不正确，重新输入";
            }
        }
    };

    window.msgFn=msgFn;
})();
