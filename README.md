# KingPin by Lema Elsherbiny

<p align=center>
  <img src="https://i.imgur.com/aijSCPA.png" alt='king pin logo' />
</p>

King Pin is a clone of asana.com that focuses on helping teams manage projects and task delegation across team members. Users can create new projects and assign tasks to members to a given project.

Live Link: https://king-pin-app.herokuapp.com/splash

## Technologies used
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>

- <a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=ffffff" /></a>
- <a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
- <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL" /></a>
- <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=333333" /></a>
- <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/-Redux-764ABC?logo=Redux" /></a>
- <a href=https://www.sqlalchemy.org/><img src=https://img.shields.io/badge/-SQLAlchemy-red /></a>


This is the starter for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```
3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Contact

### Lema El-Sherbiny

<a href="https://www.linkedin.com/in/lema-el-sherbiny-b41340193/"><img src="https://github.com/Simonvargas/Chimera/blob/main/readme-assets/logos/linkedin-logo.png?raw=true" height="28" align="middle" /></a>
<a href="https://angel.co/u/lema-el-sherbiny"><img src="https://github.com/Simonvargas/Chimera/blob/main/readme-assets/logos/angellist-logo.png?raw=true" height="28" align="middle" /></a>
<a href="https://github.com/lemlooma"><img src="https://github.com/Simonvargas/Chimera/blob/main/readme-assets/logos/github-logo.png?raw=true" height="38" align="middle" /></a>

lamasherb@gmail.com


## Special Thanks
* Fellow peers who have given me support and community: [Andrew](https://github.com/andru17urdna),[Pierre](https://github.com/TheGuilbotine), [Henry](https://github.com/hnrywltn), [Simon](https://github.com/Simonvargas), [Meagan](https://github.com/meagan13), [Nico](https://github.com/nicopierson), [John](https://github.com/Jomix-13), [Manna](https://github.com/makon57), and [Monte](https://github.com/theflaggship), [Kagen](https://github.com/KagenLH),[Michelle](https://github.com/michellekontoff)
* Mentors who have given me their time and effort: [Olivia](https://github.com/OByrnes), [Ed](https://github.com/edherm), and [Javier](https://github.com/javiermortiz) 
