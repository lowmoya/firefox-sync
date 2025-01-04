browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action != "MySyncEstablish")
		return;
	browser.tabs.sendMessage(sender.tab.id, { action: "MySyncAcknowledged" });

});

// Only connect to the server when there is at least one content loaded
