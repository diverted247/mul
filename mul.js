/*!
 * mul.js v0.5
 * (c) 2017 Ted Patrick
 * Released under the MIT License.
 */
var mul = {};

//default path to load modules
mul.root = "";
mul.modules = {};
mul.callbacks = {};

mul.component = function( name , url ){
    var compName = name;
    if( url == undefined ){
        url = name + ".js";
    }
    return Vue.component( compName , function( resolve ){
        mul.get( name , url , resolve );
    });
};

mul.get = function( name , url , callback ){
    //modules exists & loaded
    if( mul.modules[name] && mul.modules[name].loaded == true ){
        callback( mul.modules[name].module );
        return;
    }
    //setup loading
    if( callback ){
        if( mul.callbacks[name] == undefined ){
            mul.callbacks[name] = [];
        }
        mul.callbacks[name].push( callback );
    }

    var tag = document.createElement( "script" );
    tag.setAttribute( "type" , "text/javascript" );
    tag.setAttribute( "src" , mul.root + url );
    document.getElementsByTagName( "head" )[0].appendChild( tag );
};

mul.set = function( name , mod ){
    mul.modules[name] = { 
        module: mod ,
        loaded: true
    };
    if( mul.callbacks[name] ){
        var len = mul.callbacks[name].length;
        var i;
        for( i = 0; i < len; i++ ){
            mul.callbacks[name][i]( mod );
        }
    }
};
if( typeof module !== "undefined" && module.exports ){
    module.exports = mul;
}
window.mul = mul;
