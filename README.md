# Monorepo Template 🚀

Welcome to the Monorepo Template repository! This template is designed to help you get started quickly with a monorepo structure, enabling you to manage multiple packages or projects within a single repository.

## Features ✨

- **Scalable Monorepo Setup**: Easily manage multiple packages within a single repository.
- **Pre-configured Tools**: Includes configurations for building, linting, and testing packages across the repository.
- **Consistency**: Ensures consistent dependency management and development experience across packages.

## Getting Started 🛠️

### Prerequisites 📋

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v16 or higher recommended)

### Installation 📥

1. Clone the repository:

   ```sh
   git clone https://github.com/SebSV-GitHub/Monorepo-template.git
   cd Monorepo-template
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Scripts 📜

Here are some useful scripts for working with the monorepo:

- **Install Dependencies**: 💾
  
  ```sh
  npm install
  ```

- **Build All Packages**: 🏗️

  ```sh
  npm run build
  ```

- **Lint All Packages**: 🔍

  ```sh
  npm run lint
  ```

- **Run Tests**: ✅

  ```sh
  npm test
  ```

### Project Structure 🗂️

This template is organized as follows:

```
monorepo-template/
  ├── apps/
  │   ├── service/
  │   └── web/
  ├── packages/
  │   ├── package-a/
  │   └── package-b/
  ├── package.json
  └── package-lock.json
```

- **apps/**: 📝 Applications and services.
- **packages/**: 📦 Everything else, like libraries and tooling.
- **package.json**: 📃 The root package file for managing shared dependencies and scripts.

## Contributing 🤝

Contributions are welcome! Feel free to submit issues or pull requests to improve this template.

### How to Contribute 🛠️

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact 📬

If you have any questions or suggestions, feel free to reach out or open an issue.

Happy coding! 😄
