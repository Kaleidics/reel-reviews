//Used in ASYNC actions to cause a delay and a more synchronous complete of async actions 
//when multiple are triggered. Ideally, it prevents "popping in" of different components
//as they complete at different times

export default function sleeper(ms) {
    return function (x) {
        return new Promise(resolve => {
            setTimeout(() => resolve(x), ms)
        });
    };
}