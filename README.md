  <h3 align="center">Applicant Management - Laract CRUD</h3>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About

## Installation

Make sure you have environment setup properly. You will need PHP8.1, composer and Node.js.

<div>
<h3>Applicant Management - Laract CRUD</h3>
<p align="justify">Meet Applicant Management – the all-in-one solution to streamline operations, boost productivity, and keep your team aligned, wherever they are.</p>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This Project is built with :

-   [![ReactJs][React.js]][React-url]
-   [![Laravel][LaravelB]][Laravel-url]
-   [![MySQL DB][MySQL]][MySQL-url]
-   [![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow the instruction below to install the project locally.

### Installation

Follow the steps below for installation of this project.

1. Clone the repo.
    ```sh
    git clone https://github.com/sodaAPI/edii-codetest-laract-crud.git
    ```
2. Install NPM packages in ./edii-codetest/client-side/
    ```sh
    npm install
    ```
3. Install Composer Package in ./edii-codetest/.
    ```js
    composer install
    ```
4. Set The Encryption Key in ./edii-codetest/.
    ```js
    php artisan key:generate --ansi
    ```
5. Migrate database in ./edii-codetest/.
    ```js
    php artisan migrate
    ```
6. Setting your .env in ./edii-codetest/.env.

```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=shop_db
DB_USERNAME=root
DB_PASSWORD=
```

7. Run your MySQL server (i'm using XAMPP).
8. Start Front-End in ./edii-codetest/-client-side folder
    ```js
    npm start
    ```
9. Start Back-End in ./edii-codetest folder.
    ```js
    php artisan serve
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React_Js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[LaravelB]: https://img.shields.io/badge/Laravel-20232A?style=for-the-badge&logo=laravel&logoColor=FFFFF
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-20232A?style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4
[MySQL]: https://img.shields.io/badge/MySQL-20232A?style=for-the-badge&logo=mysql&logoColor=4479A1
[TailwindCSS-url]: https://tailwindcss.com/
[MySQL-url]: https://www.mysql.com/
[React-url]: https://reactjs.org/
[Laravel-url]: https://laravel.com/
