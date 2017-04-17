import {MESSAGE, MESSAGE_TYPE} from "../../app/constant";

let Perf = (window as any)['reactPerfDevtool'];

if (!Perf) {
    window.postMessage({
        type: MESSAGE_TYPE.FROM_PAGE,
        payload: {
            message: MESSAGE.NON_PERF
        }
    }, "*");

} else {

    window.postMessage({
        type: MESSAGE_TYPE.FROM_PAGE,
        payload: {
            message: MESSAGE.DETECTED_PERF
        }
    }, '*')

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

}