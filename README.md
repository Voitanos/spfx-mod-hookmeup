# Microsoft 365 SPFx Yeoman Generator Mod - SPFx Mod Hook Me Up!

> Convert React Class Components to Functional Components

This [NPX](https://docs.npmjs.com/cli/v10/commands/npx) command that will modify the SharePoint Framework (SPFx) React web part template to use React functional components (ie: React Hooks).

The [Microsoft 365 SPFx Yeoman Generator](https://www.npmjs.com/package/@microsoft/generator-sharepoint) is used to create new SPFx projects & various component types, including web parts, extensions, Adaptive Card Extensions (ACEs), and library components.

When creating an SPFx web part, developers can choose from a few different options, including using React as the desired web framework. The SPFx generator creates a single React component, but it's a class component. The React team introduced React Hooks in React v16.8. The React team considers class components as legacy & not recommended.

However, even though the SPFx has supported React v16.8+ since SPFx v1.9.1, the SPFx generator still creates a class component, meaning developers must manually convert every new React web part after adding it to their project.

> Learn how to convert a new SPFx React component in a web part from this article: **[How to use React Hooks with the SharePoint Framework (SPFx)
](https://www.voitanos.io/blog/how-to-use-react-hooks-with-sharepoint-framework-spfx-projects/)** & associated video **[YouTube](https://youtu.be/EzI-k5lqIng)**.

**But, using this "SPFx Mod HookMeUp" using this NPX command, you can now update your SPFx template to always create a React functional component!**

## Usage

After installing the [Microsoft 365 SPFx Yeoman Generator](https://www.npmjs.com/package/@microsoft/generator-sharepoint), run the following command:

```console
npx @voitanos/spfx-mod-hookmeup
```

This will replace the default template file that contains a class component in the generator with one that will create a function component every time you run the generator!

> NOTE: You'll need to re-run the **Hook Me Up** mod if you update, upgrade, or reinstall the Microsoft 365 SPFx Yeoman Generator.

## Supported Versions

This mod will work with any [Microsoft 365 SPFx Yeoman Generator](https://www.npmjs.com/package/@microsoft/generator-sharepoint) version from v1.9.1 to the latest release. The latest version will always work with the `@latest` version of the generator. If you're using an older version of the generator, make sure you use the matching version of the mod.

For example, if you're currently using SPFx v1.9.1, use the same version of the mod:

```console
npx @voitanos/spfx-mod-hookmeup@1.9.1
```
