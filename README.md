# mul
Mul is a simpler async component loader for with VueJS. The only dependency is on the Vue.component method and mul provides all the feature you need to load components asyncronously in any VueJS project.

The library can be used as a script include and as a  module. Our teams have integrated it into projects using build processes ( browserify and webpack ) and using the script tag directly.

The API is modeled after memcached and contains 2 core methods for getting and setting values:

mul.get - Used to retrieve a remove component.
mul.get( "name" ); --> implied url of "name.js"
mul.get( "name" , "url" );

mul.set - Used to populate mul's cache with a named component and trigger async callbacks.
mul.set( "name" , {... comp ...});

The api also provides a simplified method for global component registration that used Vue.component.

mul.component -> Registers component name globally, sets up async loading and loads when component name is used during render-time.

mul.component( "name" );

You can globally change the loading path by setting mul.root property.

mul.root = "/comps/";
mul.component( "name" );
//Will load "/comps/name.js" when <name></name> is used.

This is designed to be simple to use and easy to integrate into any VueJS project.

MIT Licensed - Feel free to rewrite, remix, and use any way you want.

Async or Bust!

Ted :)
