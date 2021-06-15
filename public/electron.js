const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const { electron } = require("process");
const url = require("url");

const template = [
  {
    label: "File",
    submenu: [
      {
        label: "Weather",
        click: () => {
          shell.openExternal("https://www.bbc.co.uk/weather");
        },
      },
    ],
  },
  {
    label: "View",
    submenu: [
      {
        role: "reload",
        accelerator: "CmdOrCtrl+Y",
      },
      {
        type: "separator",
      },
      {
        role: "togglefullscreen",
      },
    ],
  },
  {
    label: "Learn more",
    submenu: [
      {
        label: "GitHub",
        click: () => {
          shell.openExternal("https://github.com/pruthvz");
        },
      },
      {
        label: "Code Repo",
        click: () => {
          shell.openExternal("https://github.com/pruthvz/project-atlas");
        },
      },
    ],
  },
];
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1050,
    height: 600,
    title: "test",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      enableRemoteModule: true,
    },
    resizable: false,
    frame: false,
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
