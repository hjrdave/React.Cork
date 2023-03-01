/** 
 * Web Worker hook generated by ChatGBT with some tweaks by me 
 * */

import { useState, useEffect, useRef } from 'react';

interface WorkerData {
    data: any;
}

interface WorkerFunction {
    (): void;
}

const useWorker = (workerFn: WorkerFunction): [WorkerData | null, (data: any) => void] => {
    const workerRef = useRef<Worker | null>(null);
    const [workerData, setWorkerData] = useState<WorkerData | null>(null);

    useEffect(() => {
        if (!workerFn) {
            return;
        }

        const worker = new Worker(URL.createObjectURL(new Blob([`(${workerFn})()`])));
        workerRef.current = worker;

        worker.onmessage = event => {
            setWorkerData(event.data);
        };

        return () => {
            if (workerRef.current) {
                workerRef.current.terminate();
            }
        };
    }, [workerFn]);

    const postMessageToWorker = useRef((data: any) => {
        workerRef.current!.postMessage(data);
    }).current;

    return [workerData, postMessageToWorker];
};

export default useWorker;




// Documentation
// The useWebWorker hook is a simple and convenient way to create and manage a Web Worker in your React component using TypeScript.The hook takes a single argument, workerFunction, which is a JavaScript function that will be executed in the Web Worker.The hook returns an array containing two values:

// workerData: The latest data sent by the Web Worker using the postMessage method.The type of this value is WorkerData | null.
//     postMessageToWorker: A function that can be used to send data to the Web Worker.This function takes a single argument of type any.
// The hook uses the useState hook to manage the state of the data sent by the Web Worker, and the useEffect hook to create and manage the Web Worker.The Web Worker is created using the Blob and URL APIs to create a URL that points to the worker function. The hook also uses the useRef hook to store a reference to the postMessage function, which can be used to send data to the Web Worker.


// import React, { useEffect } from 'react';
// import { useWebWorker } from './useWebWorker';

// function MyComponent() {
//     const [workerData, postMessageToWorker] = useWebWorker(() => {
//         self.onmessage = event => {
//             // Do some processing with the data sent from the main thread
//             const processedData = processData(event.data);
//             self.postMessage(processedData);
//         };
//     });

//     useEffect(() => {
//         postMessageToWorker({ data: 'Hello from main thread!' });
//     }, []);

//     return <div>{ workerData?.data } < /div>;
// }