# 🔌 UVerify CLI

This project aims to provide a command-line interface tool designed to help developers quickly scaffold new UVerify UI templates. It provides a simple way to generate the necessary files and configurations to get started with building custom user interfaces for UVerify.

## 🚀 Getting Started

To use the UVerify CLI, you can run the following command:

```bash
npx @uverify/cli init my-template
```
This command will create a new directory called `my-template` with all the necessary files and configurations to start building your custom UI.
You can then navigate into the newly created directory:

```bash
cd my-template
```
After that, you can install the dependencies and start the development server:

```bash
npm install
npm run dev
```

From here, you can start customizing your UI by following the instructions in the `README.md` file inside the `my-template` directory. Have fun building your custom UVerify UI! 🪄

## 📜 License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). For more details, see the [LICENSE](LICENSE) file.

The core components of UVerify, including `uverify-ui` and `uverify-backend`, are licensed under the [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html). However, this repository provides extension points for creating custom UI templates that are dynamically imported by the UVerify platform.

### Key Points:
- **Modifying the UVerify core (backend or UI)**: Requires compliance with AGPL-3.0.
- **Creating custom UI templates**: Does *not* require compliance with AGPL-3.0. These templates remain under the Apache License 2.0, allowing you to create and distribute proprietary or open-source extensions without restrictions.

In short, you can build custom UIs without worrying about AGPL-3.0 compliance, as long as you’re not modifying the UVerify core.


