# Blog App with Sanity.io and Next.js

## Description

This project is a blog application built using Sanity.io as a headless CMS and Next.js with TypeScript. The purpose of this application is to provide a platform for creating and managing blog posts, with a focus on a seamless editing experience and high performance.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd blog-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up Sanity.io:

   - Create a new account on [Sanity.io](https://www.sanity.io) and create a new project.
   - Retrieve your project ID and dataset name.
   - Copy the `.env.local.example` file to `.env.local`:

     ```
     cp .env.local.example .env.local
     ```

   - Open the `.env.local` file and replace the placeholder values with your Sanity.io project ID and dataset name.

5. Start the development server:

   ```
   npm run dev
   ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the blog application.

## Usage

- The home page displays a list of blog posts.
- Clicking on a blog post title will take you to the respective blog post page.
- To create or edit blog posts, you need to log in as an administrator.
- Navigate to /studio to access the sanity dashboard, where it asks you to request for permission from admin.
- The editor provides a user-friendly interface for managing the content and formatting of blog posts.
- Changes made to blog posts are automatically saved and published to the website.

## Features

- Integration with Sanity.io as a headless CMS for managing blog content.
- User-friendly editing experience with a rich text editor for blog posts.
- Support for creating, editing, and deleting blog posts.
- Authentication system for administrators to log in and access editing capabilities.
- Next.js for server-side rendering and enhanced performance.
- TypeScript for type safety and improved development experience.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).
