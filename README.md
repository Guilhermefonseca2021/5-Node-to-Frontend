# Node lessons to use in Front end too

## HTTP server on Esmodules

1-
```js
npm init -y
npm i -D http-server
```

add one script
2-
```js
"start": "npx http-server ."
```

npx garante que ele sempre vai olhar a minha node_modules vai ignorar o que tiver no global. to run the files just use:
3-
```js
npm start
```

primeira sacada do ecmascript modules é importar json. to use import and json use the (asset type.) like this:
```js
import config from "./config.json" assert { type: "json" };

```


<a href="https://www.youtube.com/watch?v=n0lNNu2qMcU&list=PLVQmnJOxIUz-qaHVVuEUHCfC6ZYJeExg_&index=2&t=1333s&ab_channel=ErickWendel">Content used. </a>
