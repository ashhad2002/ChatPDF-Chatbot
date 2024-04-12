# Introduction

This Chatbot is a WordPress plugin. Meaning it's designed specifically to use WordPress, and won't work otherwise. To use it, install as a ZIP file, and then go to the settings page for the plugin, which is linked through the plugin settings page, and also under the settings tab in the admin panel sidebar.

The Chatbot does not display in the editor, only on the preview actual viewable page on the frontend. Either preview the page, or publish the page and view it from there in order to see the actual chatbot.

You will also need to create an account for [ChatPDF](https://www.chatpdf.com/). Where you will then be able to get required keys for the bot to work.

# Usage

In the settings page, you need to provide the API key, as well as the end of the URL of the PDF. The ChatPDF API key is given to you in the format of SEC_XXXX, and you can paste this verbatim into the API key field.

For the PDF key field, you must paste the part after the last slash, when you have a pdf selected. The API documentation on the official instructs you to add a sha_ prefix to it, but the plugin will take care of that for you. Don't add it.