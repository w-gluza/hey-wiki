## About The Project
HeyWiki is a chatbot solution for Wikipedia editors.

### Working solution:
https://heywiki.herokuapp.com/

### Powered by IBM Watson:
https://www.ibm.com/products/watson-assistant



NodeJS formatter for IBM Watson assistant. 

## Installation
1. Clone the repository
   ```sh
   git clone https://github.com/w-gluza/hey-wiki
   ```
2. Install NPM packages for backend
   ```sh
   npm install
   ```
3. CD inside client directory

   ```sh
   cd client
   ```
4. Install NPM packages for backend
   ```sh
   npm install
   ```

## Running the project
1. Add .env file in /hey-wiki/ You will need following data, that you can find under Watson Assistan settings.
   ```sh
    PORT=5000
    WATSON_ASSISTANT_APIKEY=YOUR_PRIVATE_APIKEY
    WATSON_ASSISTANT_URL=YOUR_PRIVATE_URL
    WATSON_ASSISTANT_ID=YOUR_PRIVATE_ID
   ```
2. In the terminal run command:    
```sh
npm run dev
   ```
3. React App should open in: http://localhost:3000/


## License
Distributed under the MIT License.
