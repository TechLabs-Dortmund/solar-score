1. **Project Title:** The title of the project, including a description which states the motivation/problem of the project and the developed solution.
2. **How to Setup and Run:** The respective commands to install and run the project
3. **Examples:** A brief overview on how to use the main functionalities of your project (does not have to be code)
4. **Roadmap:** The general outline of what you want to do in what order. Please keep this up to date, so that we can follow what you are and will be doing.
5. **Authors:** Please add all of you and link your respective GitHub profile and other information if you want to. This part if completely up to you.
6. If you are done filling out the information below, please **delete this TODO Section** to keep your project readme clean for other people to get to know more about your project.

# SolarScore

In times of rising energy prices and the danger of cilmate change we want to achieve that solar plant owners get the most out of their solar plant.Based on the weather forecast for the next days SolarScore predicts the solar plant's power output so that the owner can plan when to for example charge her/his electric vehicle and it is avoided that energy is not used directly. 

## How to Setup and Run

In order to setup the project, please proceed as follows:

## set up maprequest

with the help of maprequest the coordinates are requested for a specific adress.Please register at https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register and copy your personal API key in an .env file.


## frontend
 
install node.js and run the following commands from the website folder:

```bash
  npm install
```

```bash
  npm run build
```

```bash
  npm start
```
## backend

run the following commands from the interface folder:

```bash
  npm manage.py makemigrations
```
```bash
  npm manage.py migrate --run-syncdb
```
```bash
  npm manage.py runserver
```
## Examples

You can see a brief overview of how to use the main functionality below

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

  
## Roadmap

- Additional browser support
- Add more integrations

  
## Authors

- [@Katharina](https://github.com/KatWeid)
- [@Niklas](https://github.com/WeitzelN)
- [@Inka](https://github.com/JuaKaliKubwa)
- [@Marian](https://github.com/Kallonaut)
- [@Denise](https://github.com/DeniseGrunert)
