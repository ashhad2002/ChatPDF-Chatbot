# Introduction

This Chatbot is a WordPress plugin. Meaning it's designed specifically to use WordPress, and won't work otherwise. To use it, install it as a ZIP file, and then go to the settings page for the plugin, which is linked through the plugin settings page, and also under the settings tab in the admin panel sidebar.

The Chatbot does not display in the editor, only on the preview actual viewable page on the front end. Either preview the page or publish the page and view it from there in order to see the actual chatbot.

You will also need to create an account for [ChatPDF](https://www.chatpdf.com/). Where you will then be able to get the required keys for the bot to work.

Built using PHP, React, and SCSS

# Usage

Zip of the contents of this repo and upload it to WordPress, like you would any other WordPress plugin. You can download a zip file directly from GitHub.

In the settings page, you need to provide the API key, as well as the end of the URL of the PDF. The ChatPDF API key is given to you in the format of SEC_XXXX, and you can paste this verbatim into the API key field.

For the PDF key field, you must paste the part after the last slash when you have a PDF selected. The API documentation on the official instructs you to add a sha_ prefix to it, but the plugin will take care of that for you. Don't add it.

# Development

You will need to run WordPress locally to develop. XAMPP is pretty good for this. I'd recommend reading up on local plugin development if you're interested, there are many great resources online.
