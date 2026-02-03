# Chatbot Widget

A lightweight **AI Chatbot UI widget** that can be easily embedded into any website via a `<script>` tag.  
This project provides a **bubble chat** at the bottom-right corner

---

## Features

- Floating chat bubble, fixed at bottom-right corner
- Expandable chat panel with message list
- Easy to embed on any website via **CDN**
- Fully customizable via init options

---

## Demo

You can load this script locally in any HTML page for testing:

**Using buble chat**
```html
<script type="module">
  import { init as MiPoBubleChat } from "https://cdn.jsdelivr.net/gh/SonNguyen214/Chatbot-cdn@main/dist/chatbot-0.1.7.js";

  MiPoBubleChat({
    u_id: " user id",
    token: "user token",
  });
</script>
```

**Using popup chat**
```html
<script type="module">
  import { initPopup as MiPoPopupChatBot } from "https://cdn.jsdelivr.net/gh/SonNguyen214/Chatbot-cdn@main/dist/chatbot-0.1.7.js";

  MiPoPopupChatBot({
    u_id: " user id",
    token: "user token",
    autoShowDelay: 5000 
  });
</script>
```

**Init Options**

You can configure your chatbot widget by passing an options object:

```ts
MiPoBubleChat({
  botName: "MiPoBot",
  greeting: "Hello 🖐",
  botDescription: "Welcome to Mipo",
  width: 450,
  height: 600,
  token: "chatbot-plugin-123",
  u_id: "abcd",
  theme: "light",
  primaryColor: "#ffc600",
});
``` 

## 📌 Options Reference

***🔐 User Authentication (Required)***
| Property | Type     | Required | Description                |
| -------- | -------- | -------- | -------------------------- |
| `token`  | `string` | ✅        | User token after login     |
| `u_id`   | `string` | ✅        | Unique user ID after login |


***🤖 Bot Information***
| Property         | Type     | Description                                                    |
| ---------------- | -------- | -------------------------------------------------------------- |
| `botName`        | `string` | Bot display name shown in the chat header                      |
| `greeting`       | `string` | Initial greeting message when the chat opens (supports emojis) |
| `botDescription` | `string` | Short description displayed under the bot name                 |

***📐 Chat Window Size***
| Property | Type     | Default | Description                  |
| -------- | -------- | ------- | ---------------------------- |
| `width`  | `number` | `400`   | Chat window width in pixels  |
| `height` | `number` | `600`   | Chat window height in pixels |

***🎨 Theme & Appearance***
| Property       | Type                | Description                                   |
| -------------- | ------------------- | --------------------------------------------- |
| `theme`        | `'light' \| 'dark'` | Chat theme mode                               |
| `primaryColor` | `string`            | Primary color of the chat UI (e.g. `#ffc600`) |
| `fontFamily`   | `string`            | Font family used in the chat window           |

***🧑‍🚀 Avatar & Icons***
| Property    | Type     | Description                             |
| ----------- | -------- | --------------------------------------- |
| `fabIcon`   | `string` | Icon for the floating chat bubble (FAB) |
| `botAvatar` | `string` | Bot avatar image URL                    |

***🎛️ Custom Styles (CSS-in-JS)***
| Property          | Type     | Description                                  |
| ----------------- | -------- | -------------------------------------------- |
| `headerStyle`     | `object` | Custom styles for the chat header            |
| `chatWindowStyle` | `object` | Custom styles for the chat content area      |
| `bubbleStyle`     | `object` | Custom styles for the floating bubble button |

***⌨️ Footer & Input Styling***
```js
footerStyle: {
  inputStyle: {}, // Chat input CSS styles
  iconStyle: {},  // Send button icon styles
}
```
| Property                 | Type     | Description                  |
| ------------------------ | -------- | ---------------------------- |
| `footerStyle`            | `object` | Footer customization options |
| `footerStyle.inputStyle` | `object` | Input field styles           |
| `footerStyle.iconStyle`  | `object` | Send button styles           |

***⏱️ Behavior Settings***
| Property        | Type     | Default | Description                                  |
| --------------- | -------- | ------- | -------------------------------------------- |
| `autoShowDelay` | `number` | `0`     | Automatically open chat after X milliseconds |

Example (for using chatbot modal)
```js
autoShowDelay: 5000 // Opens chat after 5 seconds
```

## Development

**1.** Clone the repo

```bash
git clone https://gitlab.vnpost.vn/chatbot/chatbot.plugin.git
cd chatbot
```

**2.** Install dependencies and build widget

```bash
npm install && npm run build
```

**3.** The output bundle is located in:

```bash
dist/chatbot-0.1.7.js
```