// chatContainer.js
import { LightningElement, track } from 'lwc';

export default class ChatContainer extends LightningElement {
    @track showChat = false;

    vfPageUrl = '/apex/LilyBotVF'; // replace with actual VF page name

    handleOpenChat() {
        this.showChat = true;
   // const currentUserName = USER_NAME;
   // const vfFrame = this.template.querySelector('iframe');
   // vfFrame.contentWindow.postMessage({
   //     type: 'setUserContext',
   //     name: currentUserName
    //}, '*');
    };

    handleCloseChat() {
        const iframe = this.template.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
            // Ensure message is sent before hiding iframe
            iframe.contentWindow.postMessage('endChat', '*');
            console.log('Sent endChat message to VF page');
        } else {
            console.error('VF iframe not found or not loaded');
        }

        // Delay hiding slightly so message can be processed
        setTimeout(() => {
            this.showChat = false;
        }, 1000);
    }
}