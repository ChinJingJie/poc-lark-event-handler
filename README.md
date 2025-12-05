# poc-lark-event-handler
A proof-of-concept Node.js server for handling Lark events, including event registration and message reception using the Lark SDK. The project is for research purposes only and not production-ready.

### Prerequisites
- Node.js (v20.18.1 or higher)
- NPM (v10.8.2 or higher)
- Ngrok (registered account for public URL forwarding)

### How to Setup and Run
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Replace sensitive information in `server.js`:
   - `encryptKey` (if applicable)
   - `verificationToken` (mandatory)
     <img width="1284" height="690" alt="image" src="https://github.com/user-attachments/assets/46f854c8-27e0-451c-b231-9502734df8f5" />
4. Start the server locally:
   ```bash
   node server.js
   ```
5. Open another terminal and start port forwarding using Ngrok:
   ```bash
   ngrok http 3000
   ```
   - You will get a public URL like `https://022460fdf2c8.ngrok-free.app`.
   - Unified event handling for Lark events endpoint is `/lark/events`.
6. Subscribe your custom app to the public URL with the correct endpoint:
   <img width="1489" height="694" alt="image" src="https://github.com/user-attachments/assets/abe46188-419e-4a5b-a9b1-5a8be36f342e" />
   - Add the message receive and recall events that are registered.
   - Publish a new custom app version.
7. Test the setup:
   - Send a message directly to the bot in Lark or send a message to a group where the bot is added.
   - The message event is captured, and event data is logged in the terminal running the server.
8. Test message recall:
   - Recall a message sent earlier, and the recall event data is tracked.
