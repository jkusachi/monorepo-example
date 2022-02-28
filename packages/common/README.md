# Common Package

Key ingredients for this package are

`composite: true`

This is because this common directory is meant to be included by other projects, in this case `packages/server` 

You can see the reference to this common project here

```
// packages/server/tsconfig.json
{
  ...
  "references": [{ "path": "../common" }]
}
```