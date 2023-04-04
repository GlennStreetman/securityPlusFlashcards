import { describe, it, expect  } from 'vitest';
import {checkAnswer} from './checkAnswer'
import { layer7Protocols } from '../data/protocol'

let testdata1 = layer7Protocols[0] //{phase: 1, l7: "FTP" , portList: [ 20,21 ], l4: "TCP"}
let testdata2 = layer7Protocols[1] //{phase: 1, l7: "SSH/SCP/SFTP" , portList: [22], l4: "TCP/UDP"}


describe('checkAnswer 1', () => {
    it('returns true', () => {
        expect(checkAnswer(testdata1, layer7Protocols[0].l4, [20,21 ])).toBe(true);
    });
});

describe('checkAnswer 1', () => {
    it('returns false', () => {
        expect(checkAnswer(testdata2, layer7Protocols[0].l4, [20,21 ])).toBe(false);
    });
});

