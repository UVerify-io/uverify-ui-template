# 🎨 UVerify UI Template

Welcome to the **UVerify UI Template** repository! This project provides a flexible templating system for building custom user interfaces for [UVerify](https://app.uverify.io). Whether you're creating a tailored experience for your users or extending the platform's functionality, this repository has you covered.

## 📂 Structure

This monorepo contains the following packages to help you get started:

- **`blueprint`**: An example implementation of the UVerify UI template interface. Use this as a reference or starting point for your own templates.
- **`core`**: The core UVerify UI template interface and types, providing the foundation for building custom templates.
- **`cli`**: A developer-friendly CLI tool for generating new UVerify UI templates quickly and easily.

## 🚀 Getting Started

Ready to create your own UVerify UI template? Follow these steps:

1. Use the CLI tool to generate a new template:
   ```zsh
   npx @uverify/cli init my-template
   ```

2. Navigate into the newly created directory:
   ```bash
   cd my-template
   ```

3. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```

4. Customize your UI by following the instructions in the `README.md` file inside the `my-template` directory.

## 📦 Registering Your Template

### Local development

Add a `file` entry to `additional-templates.json` in your `uverify-ui` checkout:

```json
[
  {
    "type": "file",
    "name": "MyTemplate",
    "path": "../my-template/src/Certificate.tsx"
  }
]
```

Then run `node config.js` in the `uverify-ui` directory to regenerate the template registry, and start the dev server.

### Publishing to app.uverify.io

To include your template in the standard deployment at [app.uverify.io](https://app.uverify.io):

1. Push your template to a public GitHub repository.
2. Open an **Add External Template** issue in [`uverify-ui`](https://github.com/UVerify-io/uverify-ui), providing the repository URL, the exact commit hash, and evidence that you have tested the template locally.
3. Once the security review is complete, a maintainer will open (or accept your) pull request adding a `repository` entry to `additional-templates.json`.

```json
[
  {
    "type": "repository",
    "name": "MyTemplate",
    "url": "https://github.com/your-org/my-template",
    "commit": "a3f1c2d4e5b6...",
    "path": "src/Certificate.tsx"
  }
]
```

The `commit` hash pins the exact revision used in the build, making the inclusion fully auditable.

## 🤝 Contributing

We welcome contributions of all kinds! Whether it's fixing bugs, adding new features, or improving documentation, your help is greatly appreciated. To contribute:

1. Open an issue to discuss your idea or report a bug.
2. Submit a pull request with your changes.

Let’s build something amazing together!

## 📜 License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). For more details, see the [LICENSE](LICENSE) file.

The core components of UVerify, including `uverify-ui` and `uverify-backend`, are licensed under the [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html). However, this repository provides extension points for creating custom UI templates that are dynamically imported by the UVerify platform.

### Key Points:
- **Modifying the UVerify core (backend or UI)**: Requires compliance with AGPL-3.0.
- **Creating custom UI templates**: Does *not* require compliance with AGPL-3.0. These templates remain under the Apache License 2.0, allowing you to create and distribute proprietary or open-source extensions without restrictions.

In short, you can build custom UIs without worrying about AGPL-3.0 compliance, as long as you’re not modifying the UVerify core.