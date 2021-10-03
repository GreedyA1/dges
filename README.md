# Dges

to format all

```
nx format:write --all
```

to generate lib

```
 npx nx g @nrwl/angular:lib ui/skills-chop
```

to generate ngrx defaults in module in lib.

```
ng g @nrwl/angular:ngrx skills --module=libs/store/skills/firebase/src/lib/store-skills-firebase.module.ts --directory +state --defaults --facade
```

generate dependancy graph

```
 nx dep-graph
```
