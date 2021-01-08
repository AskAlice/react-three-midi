import React, {useState, useEffect, useRef} from 'react';
import {useFrame} from 'react-three-fiber';
import { Html } from 'drei';
import MidiFile from 'midifile';
import MidiEvents from 'midievents';
import  drums from './drums.mid';
import tesselated from './tesselated.mp3';

function objectArrayToKeyPairs(obj)
{
    const result = {};
    Object.keys(obj).forEach((k) => {
    if (typeof obj[k] === "object" && obj[k] !== null){
      if(!Array.isArray(obj[k]))
        result[k] = obj[k];
        else
          result[k] = obj[k].reduce((o, item) => ({...o, [Number(item.playTime)]: item}) ,{});
        result[k] =  objectArrayToKeyPairs(result[k]);
    }
    else {
          result[k] = obj[k];
      }
    })
    return result;
}


function getBuffer( url, success, error ) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function( e ) {
        if ( xhr.readyState == 4 ) {
            if ( xhr.status == 200 ) {
                return success( e.currentTarget.response );
            }
            if ( error ) {
                return error( `${xhr.status  } ${  xhr.statusText}` );
            }
            throw `${xhr.status  } ${  xhr.statusText}`;
        }
    };
    xhr.open( 'GET', url, true );
    xhr.responseType = 'arraybuffer';
    xhr.send( null );
}

function checkForMidiAction(midi,elapsedMs,type,subtype,note,threshold=100){
    const midiEvents = midi.getEvents();
    if(typeof note !== undefined)
    return midiEvents.filter(event => event.type === type && event.playTime <= elapsedMs && event.playTime >= elapsedMs-(threshold) && event.subtype === subtype && event.param1 === note);
    else
    return midiEvents.filter(event => event.playTime <= elapsedMs && event.playTime >= elapsedMs-(threshold) && event.subtype === subtype && event.type === type );
}

function useMidiAction({type,subtype,note},callback,fallback) {
    const midi = window.currentMidi;
    const midiEvents = midi?.getEvents() || [];
    const aud = window.currentAudio;
    const startTime = window.audioStartTime;
    const events = useRef([]);
    const prevTime = useRef(0);
    const prevEvents = useRef();
    useFrame((state,delta)=>{
        const elapsedMs = (aud?.currentTime*1000)+300;
        // console.log(audio?.currentTime*1000,Date.now()-startTime, elapsedMs, elapsedMs-audio?.currentTime*1000)
        // console.log(elapsedMs);
        prevEvents.current = events?.current;
        if(midiEvents.length){
            events.current = objectArrayToKeyPairs(checkForMidiAction(midi,elapsedMs,type,subtype, note,(elapsedMs-prevTime.current)));
            let called = false;
            if(Object.keys(events?.current).length){
                Object.keys(events.current).forEach((i)=>{
                    const event = events.current[i];
                    const prev = prevEvents.current[i];
                    if(typeof prev === 'undefined')
                    {
                        // console.log("noteOff", elapsedMs, event.param1, event)
                        called = true;
                    }
                })
                if(called)
                callback({elapsedMs,delta:(elapsedMs-prevTime.current)});
            }
            if(!called && typeof fallback === 'function')
                fallback({elapsedMs,delta:(elapsedMs-prevTime.current)});
        }
        prevTime.current = elapsedMs;
    });
    return null;
}
const Midi = () => {
    const [midi,setMidi] = useState();
    const aud = React.createRef();
    const start = useRef();
    const prevTime = useRef(0);
    const events = useRef();
    const prevEvents = useRef();
    useEffect(()=>{
    const startTime = start?.current;
      getBuffer(drums,(b)=>{
        const file = new MidiFile(b);
        console.log(file);
        const desiredBPM = 174;
        const ticksPerBeat = file.header.getTicksPerBeat(); // 96 is default (aka 120bpm)
        const defaultBPM = 120;
        file.header.setTicksPerBeat((ticksPerBeat*desiredBPM)/defaultBPM); // 139.2 if 174 is bpm
        setMidi(file);
        window.currentMidi = file;
      },()=>{})
    },[]);
    useEffect(()=>{
            window.currentAudio = new Audio(tesselated);
            aud.current = window.currentAudio;
            window.audioAnalyzerData = {};
            window.audioAnalyzerData.audioCtx = new window.AudioContext();
            window.audioAnalyzerData.analyzer = window.audioAnalyzerData.audioCtx.createAnalyser();
            window.audioAnalyzerData.analyzer.fftSize = 2048;
            window.audioAnalyzerData.bufferLength = window.audioAnalyzerData.analyzer.frequencyBinCount;
            window.audioAnalyzerData.dataArray = new Uint8Array(window.audioAnalyzerData.bufferLength);
            window.audioAnalyzerData.analyzer.getByteTimeDomainData(window.audioAnalyzerData.dataArray);
            window.audioAnalyzerData.source = window.audioAnalyzerData.audioCtx.createMediaElementSource(aud?.current); 
            window.audioAnalyzerData.source.connect(window.audioAnalyzerData.analyzer);
            window.audioAnalyzerData.analyzer.connect(window.audioAnalyzerData.audioCtx.destination);
            aud.current.play();
            window.audioStartTime = Date.now();
            return () =>{
                aud.current.pause();
            }
    },[])
    return (<></>);
}

export default Midi;
export {useMidiAction};