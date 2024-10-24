var _open = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function(method, url) {
    let _onreadystatechange = this.onreadystatechange;
    let that = this;

    that.addEventListener('readystatechange', function() {
        if (this.readyState === 4) {
            console.log('hook response', this.responseText);

            // 如果想修改返回值，可以在这里修改
            // let  response = that.responseText
            // Object.defineProperty(that, 'responseText', {
            //     value: response
            // })
        }
        // call the original onreadystatechange
        _onreadystatechange && _onreadystatechange.apply(this, arguments)
    });

    // when readyState change, call the original onreadystatechange
    Object.defineProperty(this, "onreadystatechange", {
        get() {
            return _onreadystatechange
        },
        set(onreadystatechangeCallback) {
            _onreadystatechange = onreadystatechangeCallback
        }
    })

    return _open.apply(this, arguments);
};