module.exports = ["uniform vec2 uNumber;",
"uniform sampler2D uNumTex;",

"varying vec2 vUv;",

					   // x    y    z    w
"const vec4 t0 = vec4( 1./10. , 0. , 1. , 2. );",
					  // x      y       z        w
"const vec4 t1 = vec4( 1. , 1./6. , 1./12. , .1/12. );",

"const vec4 t2 = vec4( 13./12. , 13./12.-1. , 7./6. , 0. );",

"void main(){",


	"vec2 uvs = vUv;", // * t0.wz;

	"uvs *= t2.xz;",
	"uvs -= t2.yw;",

	"uvs *= t0.wz;",
	"vec4 o = vec4( uvs , uvs - t0.zy );",


	"vec2 tt = fract(o.xy*vec2(6.,6.));",
	"tt = abs( tt - .5 );",
	"tt.xy = smoothstep( 1. , .0 , tt.xy);",




	"vec4 c = floor( o * 6. ) + .5 ;",

	"c *= t1.yyyy;",


	"c *=  t0.xzxz;",

	"c +=  t0.xyxy * uNumber.xxyy;",

	// c = clamp( c , 0. , 1. );
	"c = fract(c);",

	// c += t1.wzwz*.0;

	"float d0 = texture2D( uNumTex , c.xy ).x;",
	"float d1 = texture2D( uNumTex , c.zw ).x;",

	"float m = step( 1. , uvs.x );", 

	// vec2 r = mix( o.xy , o.zw , m );

	"float pp = min( tt.x , tt.y );",

	// pp = max( max( tt0.x, tt0.y ) , pp ) ;


	"float rr = mix( d0 , d1 , m );",



	"vec3 col = mix( vec3(.1) , vec3( .1,1. , .1 ) , rr );",

	// gl_FragColor = vec4( vec3( r , min( tt.x , tt.y ) ,.0), 1. );

	"gl_FragColor = vec4( vec3( pp * col )*.8 , mix(.2,1.,rr) );",
"}"

].join("\n");