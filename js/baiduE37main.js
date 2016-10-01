/**
 * Created by SPACEY on 2016/9/30.
 */
(function(){
    var component = createComponent($('#login-component'));
    component.show();
    addEvent($('#login-btn'),'click',function(){
        component.hide();
    })
})();