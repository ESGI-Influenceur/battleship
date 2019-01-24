import { CONST } from './constants.js';

export function checkTargetPlayer(targetPlayer) {
  switch (targetPlayer) {
    case CONST.HUMAN_PLAYER:
      return 'human-player';
    case CONST.AI_PLAYER:
      return 'computer-player';
    default:
      console.log("There was an error trying to find the correct player's grid");
      break;
  }
}