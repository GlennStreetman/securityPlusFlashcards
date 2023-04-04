import { describe, it, expect  } from 'vitest';
import { returnNewTrackingObj } from "./returnNewTrackingObj";

describe('Update Phase 1 with correct answer', () => {
    let reps = {}

    it('Add phase 1, 1 true answer', () => {
        let phase = 1
        let answer = true
        let newObj = returnNewTrackingObj(reps, phase, answer)
        expect(reps).not.to.equal(newObj)
        expect(newObj[phase].correct).to.equal(1)
        expect(newObj[phase].attempts).to.equal(1)
        reps = newObj
    });
    
    it('Add 1 incorrect answer to phase 1', () => {
        let phase = 1
        let answer = false
        let newObj = returnNewTrackingObj(reps, phase, answer)
        console.log('newObj', newObj)
        expect(reps).not.to.equal(newObj)
        expect(newObj[phase].correct).to.equal(1)
        expect(newObj[phase].attempts).to.equal(2)
        reps = newObj
    });

    it('Add phase 2, phase 1 persists.', () => {
        let phase = 2
        let answer = true
        let newObj = returnNewTrackingObj(reps, phase, answer)
        console.log('newObj', newObj)
        expect(reps).not.to.equal(newObj)
        expect(newObj[1].correct).to.equal(1)
        expect(newObj[1].attempts).to.equal(2)
        expect(reps).not.to.equal(newObj)
        expect(newObj[phase].correct).to.equal(1)
        expect(newObj[phase].attempts).to.equal(1)
        reps = newObj
    });
});

