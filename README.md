# mul
Mul is a simpler async component loader for with VueJS. The only dependency is on the Vue.component method and mul provides all the feature you need to load components asyncronously in any VueJS project.

The library can be used as a script include and as a  module. Our teams have integrated it into projects using build processes ( browserify and webpack ) and using the script tag directly.

Example useage:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
  <script src="https://unpkg.com/vue@2.4.2/dist/vue.min.js"></script>
  <script src="../mul.js"></script>
</head>
<body>
  <div id="app">
    <toolbar>{{title}}</toolbar>
    <loginform :title="title"></loginform>
  </div>
  <script>

    mul.root = "comps/";
    mul.component( "toolbar" );
    mul.component( "loginform" );

    new Vue({
      el: '#app',
      data: {
        title: 'Async Vue.js'
      }
    })
  </script>
</body>
</html>
```

The API is modeled after memcached and contains 2 core methods for getting and setting values:

mul.get - Used to retrieve a remove component.
```javascript
mul.get( "name" ); // implied url of "name.js"
mul.get( "name" , "url" );
```

mul.set - Used to populate mul's cache with a named component and trigger async callbacks.
```javascript
mul.set( "name" , { template:"" } );
```

The api also provides a simplified method for global component registration that used Vue.component.

mul.component -> Registers component name globally, sets up async loading and loads when component name is used during render-time.
```javascript
mul.component( "name" );
```
You can globally change the loading path by setting mul.root property.
```javascript
mul.root = "/comps/";
mul.component( "name" );
// This will load "/comps/name.js" when <name></name> is used.
```
Mul is designed to be simple to use and easy to integrate into any VueJS project.

Async or Bust!

Ted :)
