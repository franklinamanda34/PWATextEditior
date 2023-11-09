const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
return {
mode: 'development',
entry: {
main: './src/js/index.js',
install: './src/js/install.js'
},
output: {
filename: '[name].bundle.js',
path: path.resolve(__dirname, 'dist'),
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
filename: 'index.html',
}),
//outsourced code. mention in readme
new WebpackPwaManifest({
name: 'Your PWA Name',
short_name: 'Short Name',
description: 'Your PWA Description',
background_color: '#ffffff',
theme_color: '#333333',
start_url: '/',
icons: [
{src: path.resolve('src/assets/icon.png'),
sizes: [96, 128, 192, 256, 384, 512],
},
],
}),
new InjectManifest({
swSrc: './src/service-worker.js', // The path to your service worker script
}),
],



    module: {
      rules: [
        
      ],
    },
  };
};
