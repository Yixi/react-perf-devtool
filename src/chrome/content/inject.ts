import {MESSAGE_TYPE} from "../../app/constant";
let Perf = (window as any)['reactPerfDevtool'];

console.log('Pef.start');
Perf.start();

setTimeout(() => {
    console.log('perf.stop');
    Perf.stop();
    window.postMessage({
        type: MESSAGE_TYPE.FROM_PAGE,
        payload: Perf.getLastMeasurements()
    }, "*");

}, 10 * 1000);