import {MESSAGE, MESSAGE_TYPE} from "../../app/constant";

let Perf = (window as any)['reactPerfDevtool'];

const sendToContentScript = (payload: {message: string, data?: object}) => {
    window.postMessage({
        type: MESSAGE_TYPE.FROM_PAGE,
        payload
    }, '*');
};

if (!Perf) {
    sendToContentScript({message: MESSAGE.NON_PERF});
} else {
    sendToContentScript({message: MESSAGE.DETECTED_PERF});
}

//     console.log('Pef.start');
//     Perf.start();
//
//     setTimeout(() => {
//         console.log('perf.stop');
//         Perf.stop();
//         window.postMessage({
//             type: MESSAGE_TYPE.FROM_PAGE,
//             payload: Perf.getLastMeasurements()
//         }, "*");
//
//     }, 10 * 1000);

window.addEventListener('message', event => {
   if (event.data.type && event.data.type === MESSAGE_TYPE.FROM_CONTENT_SCRIPT) {
       switch (event.data.payload.message) {
           case MESSAGE.SEND_START_COMMAND:
               console.log('perf.start');
               Perf.start();
               break;
           case MESSAGE.SEND_STOP_COMMAND:
               console.log('perf.stop');
               Perf.stop();
               sendToContentScript({
                   message: MESSAGE.SEND_PERF_DATA,
                   data: Perf.getLastMeasurements()
               });
               break;
       }
   }
});