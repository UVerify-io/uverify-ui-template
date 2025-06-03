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