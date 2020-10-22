# Documentation

The only default-exported function is [track](#track)

# API

## Constants

<dl>
<dt><a href="#defaultOptions">defaultOptions</a> : <code><a href="#Options">Options</a></code></dt>
<dd><p>Default tracking options</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#defaultCallback">defaultCallback(...result)</a> ⇒ <code>any</code></dt>
<dd><p>Example callback</p>
</dd>
<dt><a href="#track">track(data, callback, options)</a> ⇒ <code>Object</code></dt>
<dd><p>Main function</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Options">Options</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Callback">Callback</a> ⇒ <code>any</code></dt>
<dd></dd>
</dl>

<a name="defaultOptions"></a>

## defaultOptions : [<code>Options</code>](#Options)
Default tracking options

**Kind**: global constant  
<a name="defaultCallback"></a>

## defaultCallback(...result) ⇒ <code>any</code>
Example callback

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...result | <code>Array.&lt;Object&gt;</code> | Resulting objects starting from the outside |

<a name="track"></a>

## track(data, callback, options) ⇒ <code>Object</code>
Main function

**Kind**: global function  
**Returns**: <code>Object</code> - Tracked object  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Object that you want to track |
| callback | [<code>Callback</code>](#Callback) | Function that will be called on each object modification |
| options | [<code>Options</code>](#Options) | If you want to modify the function behaviour |

<a name="Options"></a>

## Options : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| onlyPlain | <code>boolean</code> | Recursively track only plain objects (default: `false`) |
| recursive | <code>boolean</code> | Recursive tracking (default: `true`) |

<a name="Callback"></a>

## Callback ⇒ <code>any</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| ...result | <code>Array.&lt;Object&gt;</code> | Resulting objects starting from the outside |

