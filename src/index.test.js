/* eslint-disable no-unused-vars */
import { expect } from 'chai';
import validateBattlefield from './index';

describe('validateBattlefield', () => {
  describe('Some simple test', () => {
    describe('Valid board', () => {
      it('should return "true"', () => {
        const board = [
          [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
          [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        expect(validateBattlefield(board)).to.be.equal(true);
      });
    });
    describe('The ship cannot overlap or be in contact with any other ship', () => {
      it('should not be in contact with other ship by edge', () => {
        const board = [
          [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
          [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        expect(validateBattlefield(board)).to.be.equal(false);
      });
      it('should not be in contact with other ship by corner', () => {
        const board = [
          [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
          [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        expect(validateBattlefield(board)).to.be.equal(false);
      });
      it('should not overlap other ship"', () => {
        const board = [
          [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
          [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
          [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
          [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        expect(validateBattlefield(board)).to.be.equal(false);
      });
    });
    describe('Missing ships are not allowed', () => {
      it('should return "false"', () => {
        const board = [
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        expect(validateBattlefield(board)).to.be.equal(false);
      });
    });
    describe('Additional ships are not allowed', () => {
      it('should return "false"', () => {
        const board = [
          [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
          [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        ];
        expect(validateBattlefield(board)).to.be.equal(false);
      });
    });
  });
});
