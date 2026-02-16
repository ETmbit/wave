/*
File:      github.com/ETmbit/wave.ts
Copyright: ETmbit, 2026

License:
This file is part of the ETmbit extensions for MakeCode for micro:bit.
It is free software and you may distribute it under the terms of the
GNU General Public License (version 3 or later) as published by the
Free Software Foundation. The full license text you find at
https://www.gnu.org/licenses.

Disclaimer:
ETmbit extensions are distributed without any warranty.

Dependencies:
ETmbit/general
*/

//% color="#319BC4" icon="\uf017"
//% block="Wave"
//% block.loc.nl="Wave"
namespace Wave {

    let DELAY = 500

    //% subcategory="Wave"
    //% block="turn off the wave"
    //% block.loc.nl="zet de wave uit"
    export function waveOff() {
        ETwaveDelay = 0;
    }

    //% subcategory="Wave"
    //% block="turn on the wave"
    //% block.loc.nl="zet de wave aan"
    export function waveOn() {
        ETwaveDelay = DELAY;
    }

    //% subcategory="Wave"
    //% block="wave after %sec seconds"
    //% block.loc.nl="wave na %sec seconden"
    export function setWave(sec: number) {
        DELAY = sec * 1000
    }
}
