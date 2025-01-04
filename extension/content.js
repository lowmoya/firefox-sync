browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.action) {
	case "MySyncAcknowledged":
		console.log("CONTENT SYNC ACKNOWLEDGED");
		break;
	case "PopupOpened":
		console.log("POP UP OPENED");
		break;
	}
});
browser.runtime.sendMessage({action: "MySyncEstablish"});
