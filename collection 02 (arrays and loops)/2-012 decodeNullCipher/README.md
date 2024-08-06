# `decodeNullCipher`

## Scenario

You have been receiving mysterious letters with strange messages written in a strange, secret code. Here's the last one you received:

```
wdet'mvlea zbxeqerny uthrdyfibnbgm jtlok srpeiaocnhv xyaoduw warbbomunts xyzozuard rczaarv'bsg dekxltlepnodreedw dwzacrcrnamnjtayo
```

After some time studying the messages, you've realised that they have been encoded using a primitive [null cipher](https://en.wikipedia.org/wiki/Null_cipher). If you discard **every other character** within the encoded message, it reveals the decoded message, e.g.:

1. Original message: "hxeplalmo"
2. Discard the 2nd, 4th, 6th, and 8th characters: `x`, `p`, `a`, `m`
3. This leaves `h`, `e`, `l`, `l`, `o`.

## Task

Write a function that takes a message encoded with the null cipher described above, and decodes it.

```js
decodeNullCipher('hxeplalmo') // returns "hello"
```

## Hints

- [string `split` method](https://devdocs.io/javascript/global_objects/string/split)