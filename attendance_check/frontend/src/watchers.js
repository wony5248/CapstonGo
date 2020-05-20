import { mainReloader, rendererReloader } from 'electron-hot-reload';
import { app } from 'electron';
import path from 'path';
 
const mainFile = path.join(app.getAppPath(), 'dist', 'main.js');
const rendererFile = path.join(app.getAppPath(), 'dist', 'renderer.js');
 
mainReloader(mainFile, undefined, (error, path) => {
  console.log("It is a main's process hook!");
});
 
rendererReloader(rendererFile, undefined, (error, path) => {
  console.log("It is a renderer's process hook!");
});