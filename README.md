# Mereb Person Project

## Steps to follow to run the API or the server
1. Since it is written in TypeScript, run npm run build or use tsc -w to build and get the dist.
2. After that you can use the different scripts mentioned inside package.json file to start the servuer
   in different environments.

## Resources or Env Variables
The following are the envs that you need to include inside .env file which will be created in your project main directory.

NODE_ENV=local
DB_REMOTE=mongodb+srv://neba:ZH7BsX8qTiIMZmOk@mirac0.5elg4.mongodb.net/mereb
API_KEY=1dc5708c029eeff5c35c82b6686b4c0ffebc2e61ea2e7632538eab3adaa8329a

## API Key
You need to provide the API on the each request header as the following.
x-api-key:API_KEY

## API Documentation
You can use the link below for the API documentation.
https://documenter.getpostman.com/view/28967087/2sAY4vghmJ
