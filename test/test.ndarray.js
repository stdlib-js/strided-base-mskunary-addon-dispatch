/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable max-params */

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var Float64Array = require( '@stdlib/array-float64' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var isFloat32Array = require( '@stdlib/assert-is-float32array' );
var isFloat64Array = require( '@stdlib/assert-is-float64array' );
var isUint8Array = require( '@stdlib/assert-is-uint8array' );
var resolve = require( '@stdlib/strided-base-dtype-resolve-enum' );
var dispatch = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dispatch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dispatch( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dispatch( noop, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var f = dispatch( noop, noop );
	t.strictEqual( typeof f, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which throws an error if provided an offset argument for the first array which is not a nonnegative integer (typed arrays)', function test( t ) {
	var values;
	var f;
	var x;
	var y;
	var m;
	var i;

	f = dispatch( noop, noop );

	x = new Float64Array( 2 );
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function foo() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f( x.length, 'float64', x, 1, value, 'uint8', m, 1, 0, 'float64', y, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an offset argument for the mask array which is not a nonnegative integer (typed arrays)', function test( t ) {
	var values;
	var f;
	var x;
	var y;
	var m;
	var i;

	f = dispatch( noop, noop );

	x = new Float64Array( 2 );
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function foo() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f( x.length, 'float64', x, 1, 0, 'uint8', m, 1, value, 'float64', y, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an offset argument for the output array which is not a nonnegative integer (typed arrays)', function test( t ) {
	var values;
	var f;
	var x;
	var y;
	var m;
	var i;

	f = dispatch( noop, noop );

	x = new Float64Array( 2 );
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function foo() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f( x.length, 'float64', x, 1, 0, 'uint8', m, 1, 0, 'float64', y, 1, value );
		};
	}
});

tape( 'the function returns a function which dispatches to an addon function when provided typed arrays', function test( t ) {
	var f;
	var x;
	var y;
	var m;

	f = dispatch( addon, fallback );

	x = new Float64Array( 2 );
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	f( x.length, 'float64', x, 1, 0, 'uint8', m, 1, 0, 'float64', y, 1, 0 );

	t.end();

	function addon( N, dx, ax, sx, dm, am, sm, dy, ay, sy ) {
		t.ok( true, 'called addon' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, resolve( 'float64' ), 'returns expected value' );
		t.notEqual( ax, x, 'returns expected value' );
		t.strictEqual( ax.buffer, x.buffer, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
		t.strictEqual( dm, resolve( 'uint8' ), 'returns expected value' );
		t.notEqual( am, m, 'returns expected value' );
		t.strictEqual( am.buffer, m.buffer, 'returns expected value' );
		t.strictEqual( sm, 1, 'returns expected value' );
		t.strictEqual( dy, resolve( 'float64' ), 'returns expected value' );
		t.notEqual( ay, y, 'returns expected value' );
		t.strictEqual( ay.buffer, y.buffer, 'returns expected value' );
		t.strictEqual( sy, 1, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function supports complex number typed arrays (complex64)', function test( t ) {
	var f;
	var x;
	var y;
	var m;

	f = dispatch( addon, fallback );

	x = new Complex64Array( 2 );
	y = new Complex64Array( x.length );
	m = new Uint8Array( x.length );

	f( x.length, 'complex64', x, 1, 0, 'uint8', m, 1, 0, 'complex64', y, 1, 0 );

	t.end();

	function addon( N, dx, ax, sx, dm, am, sm, dy, ay, sy ) {
		t.ok( true, 'called addon' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, resolve( 'complex64' ), 'returns expected value' );
		t.strictEqual( isFloat32Array( ax ), true, 'returns expected value' );
		t.strictEqual( ax.buffer, x.buffer, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
		t.strictEqual( dm, resolve( 'uint8' ), 'returns expected value' );
		t.strictEqual( isUint8Array( am ), true, 'returns expected value' );
		t.strictEqual( am.buffer, m.buffer, 'returns expected value' );
		t.strictEqual( sm, 1, 'returns expected value' );
		t.strictEqual( dy, resolve( 'complex64' ), 'returns expected value' );
		t.strictEqual( isFloat32Array( ay ), true, 'returns expected value' );
		t.strictEqual( ay.buffer, y.buffer, 'returns expected value' );
		t.strictEqual( sy, 1, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function supports complex number typed arrays (complex128)', function test( t ) {
	var f;
	var x;
	var y;
	var m;

	f = dispatch( addon, fallback );

	x = new Complex128Array( 2 );
	y = new Complex128Array( x.length );
	m = new Uint8Array( x.length );

	f( x.length, 'complex128', x, 1, 0, 'uint8', m, 1, 0, 'complex128', y, 1, 0 );

	t.end();

	function addon( N, dx, ax, sx, dm, am, sm, dy, ay, sy ) {
		t.ok( true, 'called addon' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, resolve( 'complex128' ), 'returns expected value' );
		t.strictEqual( isFloat64Array( ax ), true, 'returns expected value' );
		t.strictEqual( ax.buffer, x.buffer, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
		t.strictEqual( isUint8Array( am ), true, 'returns expected value' );
		t.strictEqual( am.buffer, m.buffer, 'returns expected value' );
		t.strictEqual( sm, 1, 'returns expected value' );
		t.strictEqual( dy, resolve( 'complex128' ), 'returns expected value' );
		t.strictEqual( isFloat64Array( ay ), true, 'returns expected value' );
		t.strictEqual( ay.buffer, y.buffer, 'returns expected value' );
		t.strictEqual( sy, 1, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function returns a function which dispatches to a fallback function when not provided typed arrays (all)', function test( t ) {
	var f;
	var x;
	var y;
	var m;

	f = dispatch( addon, fallback );

	x = [ 0.0, 0.0 ];
	y = [ 0.0, 0.0 ];
	m = [ 0, 0 ];

	f( x.length, 'generic', x, 1, 0, 'generic', m, 1, 0, 'generic', y, 1, 0 );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback( N, dx, ax, sx, ox, dm, am, sm, om, dy, ay, sy, oy ) {
		t.ok( true, 'called fallback' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, 'generic', 'returns expected value' );
		t.strictEqual( ax, x, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
		t.strictEqual( ox, 0, 'returns expected value' );
		t.strictEqual( dm, 'generic', 'returns expected value' );
		t.strictEqual( am, m, 'returns expected value' );
		t.strictEqual( sm, 1, 'returns expected value' );
		t.strictEqual( om, 0, 'returns expected value' );
		t.strictEqual( dy, 'generic', 'returns expected value' );
		t.strictEqual( ay, y, 'returns expected value' );
		t.strictEqual( sy, 1, 'returns expected value' );
		t.strictEqual( oy, 0, 'returns expected value' );
	}
});

tape( 'the function returns a function which dispatches to a fallback function when not provided typed arrays (first array)', function test( t ) {
	var f;
	var x;
	var y;
	var m;

	f = dispatch( addon, fallback );

	x = [ 0.0, 0.0 ];
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	f( x.length, 'generic', x, 1, 0, 'uint8', m, 1, 0, 'float64', y, 1, 0 );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback( N, dx, ax, sx, ox, dm, am, sm, om, dy, ay, sy, oy ) {
		t.ok( true, 'called fallback' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, 'generic', 'returns expected value' );
		t.strictEqual( ax, x, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
		t.strictEqual( ox, 0, 'returns expected value' );
		t.strictEqual( dm, 'uint8', 'returns expected value' );
		t.strictEqual( am, m, 'returns expected value' );
		t.strictEqual( sm, 1, 'returns expected value' );
		t.strictEqual( om, 0, 'returns expected value' );
		t.strictEqual( dy, 'float64', 'returns expected value' );
		t.strictEqual( ay, y, 'returns expected value' );
		t.strictEqual( sy, 1, 'returns expected value' );
		t.strictEqual( oy, 0, 'returns expected value' );
	}
});

tape( 'the function returns a function which dispatches to a fallback function when not provided typed arrays (mask array)', function test( t ) {
	var f;
	var x;
	var y;
	var m;

	f = dispatch( addon, fallback );

	x = new Float64Array( 2 );
	y = new Float64Array( x.length );
	m = [ 0, 0 ];

	f( x.length, 'float64', x, 1, 0, 'generic', m, 1, 0, 'float64', y, 1, 0 );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback( N, dx, ax, sx, ox, dm, am, sm, om, dy, ay, sy, oy ) {
		t.ok( true, 'called fallback' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, 'float64', 'returns expected value' );
		t.strictEqual( ax, x, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
		t.strictEqual( ox, 0, 'returns expected value' );
		t.strictEqual( dm, 'generic', 'returns expected value' );
		t.strictEqual( am, m, 'returns expected value' );
		t.strictEqual( sm, 1, 'returns expected value' );
		t.strictEqual( om, 0, 'returns expected value' );
		t.strictEqual( dy, 'float64', 'returns expected value' );
		t.strictEqual( ay, y, 'returns expected value' );
		t.strictEqual( sy, 1, 'returns expected value' );
		t.strictEqual( oy, 0, 'returns expected value' );
	}
});

tape( 'the function returns a function which dispatches to a fallback function when not provided typed arrays (output array)', function test( t ) {
	var f;
	var x;
	var y;
	var m;

	f = dispatch( addon, fallback );

	x = new Float64Array( 2 );
	y = [ 0.0, 0.0 ];
	m = new Uint8Array( x.length );

	f( x.length, 'float64', x, 1, 0, 'uint8', m, 1, 0, 'generic', y, 1, 0 );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback( N, dx, ax, sx, ox, dm, am, sm, om, dy, ay, sy, oy ) {
		t.ok( true, 'called fallback' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, 'float64', 'returns expected value' );
		t.strictEqual( ax, x, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
		t.strictEqual( ox, 0, 'returns expected value' );
		t.strictEqual( dm, 'uint8', 'returns expected value' );
		t.strictEqual( am, m, 'returns expected value' );
		t.strictEqual( sm, 1, 'returns expected value' );
		t.strictEqual( om, 0, 'returns expected value' );
		t.strictEqual( dy, 'generic', 'returns expected value' );
		t.strictEqual( ay, y, 'returns expected value' );
		t.strictEqual( sy, 1, 'returns expected value' );
		t.strictEqual( oy, 0, 'returns expected value' );
	}
});

tape( 'the function returns a function which throws an error if unable to resolve a data type enumeration constant when provided typed arrays', function test( t ) {
	var f;
	var x;
	var y;
	var m;

	f = dispatch( addon, fallback );

	x = new Float64Array( 2 );
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	t.throws( fcn1, TypeError, 'throws an error' );
	t.throws( fcn2, TypeError, 'throws an error' );
	t.throws( fcn3, TypeError, 'throws an error' );
	t.throws( fcn4, TypeError, 'throws an error' );
	t.end();

	function fcn1() {
		f( x.length, 'beepboopfoobar', x, 1, 0, 'uint8', m, 1, 0, 'float64', y, 1, 0 );
	}

	function fcn2() {
		f( x.length, 'float64', x, 1, 0, 'uint8', m, 1, 0, 'beepboopfoobar', y, 1, 0 );
	}

	function fcn3() {
		f( x.length, 'beepboopfoobar', x, 1, 0, 'beepboopfoobar', m, 1, 0, 'beepboopfoobar', y, 1, 0 );
	}

	function fcn4() {
		f( x.length, 'float64', x, 1, 0, 'beepboopfoobar', m, 1, 0, 'float64', y, 1, 0 );
	}

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function returns a function which returns the output array (typed arrays; addon)', function test( t ) {
	var f;
	var x;
	var y;
	var z;
	var m;

	f = dispatch( noop, noop );

	x = new Float64Array( 2 );
	y = new Float64Array( x.length );
	m = new Uint8Array( x.length );

	z = f( x.length, 'float64', x, 1, 0, 'uint8', m, 1, 0, 'float64', y, 1, 0 );

	t.strictEqual( z, y, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which returns the output array (non-typed arrays; fallback)', function test( t ) {
	var f;
	var x;
	var y;
	var z;
	var m;

	f = dispatch( noop, noop );

	x = [ 0.0, 0.0 ];
	y = [ 0.0, 0.0 ];
	m = [ 0, 0 ];

	z = f( x.length, 'generic', x, 1, 0, 'generic', m, 1, 0, 'generic', y, 1, 0 );

	t.strictEqual( z, y, 'returns expected value' );
	t.end();
});
