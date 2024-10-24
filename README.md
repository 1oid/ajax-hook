# ajax-hook
ajax hook

## Example

```html
<!-- must first load hook.js -->
<script src="hook.js"></script>
<script>
    const xhr = new XMLHttpRequest()
    // set method and url
    xhr.open("GET", "http://www.httpbin.org/get")
    // set onreadystatechange callback function
    xhr.onreadystatechange = function () {
        // readyState is 4 when the response is ready
        if( xhr.readyState === 4 ) {
            // output the response
            console.log("get response", xhr.responseText)
        }
    }
    xhr.send()
</script>
```