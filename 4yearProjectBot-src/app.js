// LOAD ENV VARS
require('dotenv-extended').load({path: '.env'});

var restify = require('restify');
var builder = require('botbuilder');
var azure = require('botbuilder-azure'); 

// LOCAL MODULES
var luisActions = require('./luis-actions');
var weatherAction = require('./actions/weather');

// LOCAL VARS
var actions = [weatherAction];

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    openIdMetadata: process.env.BotOpenIdMetadata 
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());


// Make sure you add code to validate these fields
var luisAppId = process.env.LuisAppId;
var luisAPIKey = process.env.LuisAPIKey;
var luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';

const luisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey;

// init LUIS recognizer with LUIS model URL
var luisRecognizer = new builder.LuisRecognizer(luisModelUrl);

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

/*
// Table storage
var tableName = "BotData"; // You define
var storageName = "pleasehelpmeb9a8"; // Obtain from Azure Portal
var storageKey = "GJlLGE7aHKv1SrCKmi0h48bm28cZCCMUvNdKm+CtBCcDmo+E0YJywJ6OKJT1WLdbvt6JH2m70PhYYbeXvKS0MA=="; // Obtain from Azure Portal

var azureTableClient = new azure.AzureTableClient(tableName, storageName, storageKey);

var tableStorage = new azure.AzureBotStorage({gzipData: false}, azureTableClient);

var bot = new builder.UniversalBot(connector, function (session) {
     // ... Bot code ...


     // capture session user information
     session.userData = {"userId": session.message.user.id, "jobTitle": "Senior Developer"};

     // capture conversation information  
     //session.conversationData[timestamp.toISOString().replace(/:/g,"-")] = session.message.text;
	
     // save data
     session.save();
})
.set('storage', tableStorage);
*/

var bot = new builder.UniversalBot(connector, {
    storage: new builder.MemoryBotStorage()
});

		// default reply handler
		var defaultReplyHandler = function (session) {
			session.send(`Sorry, I did not understand ${session.message.text}`);
			session.endConversation('You can request the current weather forecast for CITY_NAME by typing: "what is the weather in Dublin?"');
		};

		// bind LUIS recognizer to intent dialog
		var intentDialog = bot.dialog('/', new builder.IntentDialog({recognizers: [luisRecognizer]}).onDefault(defaultReplyHandler));

		// bind LUIS actions to bot dialog
		luisActions.bindToBotDialog(bot, intentDialog, luisModelUrl, actions, defaultReplyHandler, onContextCreationHandler);
		
		function onContextCreationHandler(action, actionModel, next, session) {
			if (action.intentName === 'GetWeather') {
				if (!actionModel.parameters.Checkin) {
					actionModel.parameters.Checkin = new Date();
				}

				if (!actionModel.parameters.Checkout) {
					actionModel.parameters.Checkout = new Date();
					actionModel
						.parameters
						.Checkout
						.setDate(actionModel.parameters.Checkout.getDate() + 1);
				}
			}
			next();
		}

