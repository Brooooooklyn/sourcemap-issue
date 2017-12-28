# sourcemap-issue
Report issue for https://github.com/getsentry/rust-sourcemap

run:

```bash
- yarn
- yarn start
```

to check result.

the sourcemap: [main.js.map](./fixtures/main.js.map) is build from create-react-app template

you can reproduce it from [project](./project)

```
- cd project
- yarn
- yarn build
```

and get sourcemap from `project/build/static/js/main.[hash].js.map`
